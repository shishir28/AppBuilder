// http://www.blackbeltcoder.com/Articles/strings/a-javascript-formatter

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Monad.AB.Common.Utility.Formatter
{
	/// <summary>
	/// Enumeration of available token types.
	/// </summary>
	internal enum TokenTypes
	{
		Unknown,
		OpenBrace,
		CloseBrace,
		OpenParen,
		CloseParen,
		OpenBracket,
		CloseBracket,
		Symbol,
		String,
		Number,
		RegEx,
		SemiColon,
		Comma,
		Colon,
		Dot,
		QuestionMark,
		BinaryOperator,
		UnaryPrefix,
		UnarySuffix,
		LineComment,
		InlineComment,
	}

	/// <summary>
	/// State flags for the current indent block.
	/// </summary>
	[Flags]
	internal enum IndentFlags
	{
		None = 0,
		NoBraces = 1,
		DoBlock = 2,
		CaseBlock = 4,
		BracketBlock = 8,
	}

	/// <summary>
	/// State flags for the current line.
	/// </summary>
	[Flags]
	internal enum LineFlags
	{
		None = 0,
		BlockKeyword = 1,
		DoKeyword = 2,
		EndDoBlock = 4,
		CaseKeyword = 8,
		JsonColon = 16,
		QuestionMark = 32,
	}

	/// <summary>
	/// Contains information for a single input token.
	/// </summary>
	internal class Token
	{
		public string Value { get; set; }
		public TokenTypes Type { get; set; }
		public string PreviousValue { get; set; }
		public TokenTypes PreviousType { get; set; }
	}

	/// <summary>
	/// Class to track script indents.
	/// </summary>
	internal class Indents
	{
		/// <summary>
		/// String used to represent a single tab.
		/// </summary>
		public static string Tab = "    ";

		protected Stack<IndentFlags> _indents = new Stack<IndentFlags>();
		protected IndentFlags _lastIndent = IndentFlags.None;

		/// <summary>
		/// Gets the most recently removed indent
		/// </summary>
		public IndentFlags LastIndent
		{
			get { return _lastIndent; }
		}

		/// <summary>
		/// Gets or sets the most recently added indent.
		/// </summary>
		public IndentFlags Current
		{
			get
			{
				if (_indents.Count > 0)
					return _indents.Peek();
				return IndentFlags.None;
			}
			set
			{
				if (_indents.Count > 0)
				{
					_indents.Pop();
					_indents.Push(value);
				}
			}
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="flags"></param>
		public void Indent(IndentFlags flags)
		{
			_indents.Push(flags);
		}

		/// <summary>
		/// Removes and returns the most recently added tab.
		/// </summary>
		public IndentFlags Unindent()
		{
			if (_indents.Count > 0)
				_lastIndent = _indents.Pop();
			else
				_lastIndent = IndentFlags.None;
			return _lastIndent;
		}

		/// <summary>
		/// Current indent depth.
		/// </summary>
		public int Count { get { return _indents.Count; } }

		/// <summary>
		/// Returns a string representing the current indentation whitespace.
		/// </summary>
		public override string ToString()
		{
			StringBuilder builder = new StringBuilder(Tab.Length * _indents.Count);
			for (int i = 0; i < _indents.Count; i++)
				builder.Append(Tab);
			return builder.ToString();
		}

		/// <summary>
		/// Strips the trailing indent from the given StringBuilder.
		/// </summary>
		public void StripTrailingIndent(StringBuilder builder)
		{
			int len = Tab.Length;
			if (len <= builder.Length)
				builder.Remove(builder.Length - Tab.Length, Tab.Length);
		}

		/// <summary>
		/// Strips all trialing indents from the given StringBuilder.
		/// </summary>
		public void StripIndents(StringBuilder builder)
		{
			int len = (Tab.Length * _indents.Count);
			if (len <= builder.Length)
				builder.Remove(builder.Length - len, len);
		}
	}

	/// <summary>
	/// Class to format JavaScript.
	/// </summary>
	public class JavaScriptFormatter
	{
		/// <summary>
		/// Gets/sets if opening braces are moved to a new line.
		/// </summary>
		public bool OpenBraceOnNewLine { get; set; }

		/// <summary>
		/// Gets/sets if line comments are moved to a new line.
		/// </summary>
		public bool NewLineBeforeLineComment { get; set; }

		/// <summary>
		/// Gets/sets if inline comments are moved to a new line.
		/// </summary>
		public bool NewLineBeforeInlineComment { get; set; }

		/// <summary>
		/// Gets/sets if a new line follows inline comments.
		/// </summary>
		public bool NewLineAfterInlineComment { get; set; }

		// Keywords that cause indent
		// Note: case and default have special handling
		protected static string[] _blockKeywords = {
			"catch", "do", "finally", "for", "if", "switch", "try", "while", "with"
		};

		public JavaScriptFormatter()
		{
			OpenBraceOnNewLine = false;
			NewLineBeforeLineComment = true;
			NewLineBeforeInlineComment = true;
			NewLineAfterInlineComment = true;
		}

		private StringBuilder _builder;
		private int _parenCount = 0;			// Line parentheses depth
		private int _bracketCount = 0;			// Line bracket depth
		private LineFlags _lineFlags = LineFlags.None;	// Line flags
		private LineFlags _nextLineFlags = LineFlags.None;
		private Indents _indents = new Indents();

		/// <summary>
		/// Formats the given JavaScript string.
		/// </summary>
		/// <param name="javascript">JavaScript script to format</param>
		/// <returns>The formatted string</returns>
		public string Format(string javascript)
		{
			_builder = new StringBuilder(javascript.Length);
			_indents = new Indents();
			_parenCount = 0;
			_bracketCount = 0;
			_lineFlags = LineFlags.None;
			_nextLineFlags = LineFlags.None;

			Tokenizer tokenizer = new Tokenizer(javascript);
			bool endLine = false;		// Cause new line
			bool isLineStart = true;	// Current token is first on line
			Token peek = null;

			// Process each token in input string
			while (tokenizer.GetToken())
			{
				// Get current token
				Token token = tokenizer.Token;

				// Test for new line
				if (_builder.Length > 0)
				{
					isLineStart = endLine;
					if (endLine)
					{
						NewLine();
						endLine = false;
					}
				}

				// Process this token
				switch (token.Type)
				{
					case TokenTypes.OpenBrace:
						if (!isLineStart)
						{
							if (OpenBraceOnNewLine && _builder.Length > 0)
							{
								// Put open brace on new line
								NewLine();
							}
							else
							{
								// Put open brace on same line
								if (token.PreviousType != TokenTypes.OpenParen &&
									token.PreviousType != TokenTypes.OpenBracket)
									_builder.Append(' ');
							}
						}

						// Write token
						_builder.Append(token.Value);

						// Start new indent block
						peek = tokenizer.PeekToken();
						if (peek.Type == TokenTypes.CloseBrace)
						{
							// Special handling for "{}"
							tokenizer.GetToken();
							_builder.Append(tokenizer.Token.Value);
							peek = tokenizer.PeekToken();
							if (peek.Type != TokenTypes.SemiColon &&
								peek.Type != TokenTypes.Comma)
							{
								// Unindent if in conditional block without braces
								while (_indents.Current.HasFlag(IndentFlags.NoBraces))
									_indents.Unindent();
								endLine = true;
							}
							else if (peek.Type == TokenTypes.Comma)
							{
								// Normally, we insert a new line after
								// a closing brace and comma but not here
								tokenizer.GetToken();
								_builder.Append(tokenizer.Token.Value);
							}
						}
						else
						{
							// Increase indentation
							IndentFlags flags = IndentFlags.None;
							if (_lineFlags.HasFlag(LineFlags.DoKeyword))
								flags |= IndentFlags.DoBlock;
							else if (_lineFlags.HasFlag(LineFlags.CaseKeyword))
								flags |= IndentFlags.CaseBlock;

							_indents.Indent(flags);
							endLine = true;
						}
						break;

					case TokenTypes.CloseBrace:
						// End indent block
						if (_indents.Current.HasFlag(IndentFlags.CaseBlock))
						{
							// Extra unindent if in case/default block
							_indents.Unindent();
							if (isLineStart)
								_indents.StripTrailingIndent(_builder);
						}

						// Unindent if in conditional block without braces
						while (_indents.Current.HasFlag(IndentFlags.NoBraces))
							_indents.Unindent();

						// Regular unindent
						_indents.Unindent();
						if (isLineStart)
							_indents.StripTrailingIndent(_builder);
						else
							NewLine();
						_builder.Append(token.Value);

						// Don't unindent without braces for catch/finally
						peek = tokenizer.PeekToken();
						if (peek.Value != "catch" &&
							peek.Value != "finally" &&
							peek.Value != ":")
						{
							// Unindent if in conditional block without braces
							while (_indents.Current.HasFlag(IndentFlags.NoBraces))
								_indents.Unindent();
						}

						if (_indents.LastIndent.HasFlag(IndentFlags.DoBlock))
							_lineFlags |= LineFlags.EndDoBlock;

						// Insert new line after code block
						if (peek.Type != TokenTypes.SemiColon &&
							peek.Type != TokenTypes.CloseParen &&
							peek.Type != TokenTypes.CloseBracket &&
							peek.Type != TokenTypes.Comma &&
							peek.Type != TokenTypes.OpenParen &&
							peek.Type != TokenTypes.Colon &&
							!_lineFlags.HasFlag(LineFlags.EndDoBlock))
						{
							endLine = true;
						}
						break;

					case TokenTypes.OpenParen:
						if (!isLineStart &&
							token.PreviousType != TokenTypes.OpenParen &&
							token.PreviousType != TokenTypes.UnaryPrefix &&
							token.PreviousType != TokenTypes.CloseBracket &&
							token.PreviousType != TokenTypes.CloseParen &&
							token.PreviousType != TokenTypes.CloseBrace &&
							(token.PreviousType != TokenTypes.Symbol ||
							(_lineFlags.HasFlag(LineFlags.BlockKeyword) &&
							_parenCount == 0)))
							_builder.Append(' ');
						_builder.Append(token.Value);
						_parenCount++;
						break;

					case TokenTypes.CloseParen:
						// Append closing parenthesis
						_builder.Append(token.Value);
						_parenCount = Math.Max(_parenCount - 1, 0);

						// Test for indent block start without braces
						if (_parenCount == 0 &&
							_lineFlags.HasFlag(LineFlags.BlockKeyword))
						{
							// Examine next token
							peek = tokenizer.PeekToken();
							if (peek.Type != TokenTypes.OpenBrace)
							{
								// Single line indent with no conditions or braces
								_indents.Indent(IndentFlags.NoBraces);
								endLine = true;
							}
						}
						break;

					case TokenTypes.OpenBracket:
						if (!isLineStart &&
							token.PreviousType != TokenTypes.Symbol &&
							token.PreviousType != TokenTypes.OpenParen &&
							token.PreviousType != TokenTypes.CloseParen &&
							token.PreviousType != TokenTypes.CloseBracket)
							_builder.Append(' ');

						// Special handling for JSON syntax?
						peek = tokenizer.PeekToken();
						if (_lineFlags.HasFlag(LineFlags.JsonColon) &&
							peek.Type != TokenTypes.CloseBracket &&
							peek.Type == TokenTypes.OpenBrace &&
							_parenCount == 0)
						{
							if (OpenBraceOnNewLine)
								NewLine();
							_indents.Indent(IndentFlags.BracketBlock);
							endLine = true;
						}
						_builder.Append(token.Value);
						_bracketCount++;
						break;

					case TokenTypes.CloseBracket:
						_bracketCount = Math.Max(_bracketCount - 1, 0);
						if (_indents.Current.HasFlag(IndentFlags.BracketBlock))
						{
							_indents.Unindent();
							if (isLineStart)
							{
								_indents.StripTrailingIndent(_builder);
								_builder.Append(token.Value);
							}
							else
							{
								NewLine();
								_builder.Append(token.Value);
							}
						}
						else _builder.Append(token.Value);
						break;

					case TokenTypes.Symbol:

						bool blockKeyword = _blockKeywords.Contains(token.Value);

						// Special handling for else without if
						if (token.Value == "else" &&
							tokenizer.PeekToken().Value != "if")
							blockKeyword = true;

						// Special handling for switch..case..default
						if (_indents.Current.HasFlag(IndentFlags.CaseBlock) &&
							(token.Value == "case" ||
							token.Value == "default"))
						{
							_indents.StripTrailingIndent(_builder);
							_indents.Unindent();
						}

						if (_parenCount == 0 && blockKeyword)
						{
							// Keyword that starts an indented block
							if (!isLineStart)
								_builder.Append(' ');
							// Append this symbol
							_builder.Append(token.Value);

							if (!_lineFlags.HasFlag(LineFlags.EndDoBlock) ||
								token.Value != "while")
							{
								// Test for special-case blocks
								if (token.Value == "do")
									_lineFlags |= LineFlags.DoKeyword;
								// Examine next token
								peek = tokenizer.PeekToken();
								if (peek.Type == TokenTypes.OpenBrace ||
									peek.Type == TokenTypes.OpenParen)
								{
									// Handle indentation at ')' or '{'
									_lineFlags |= LineFlags.BlockKeyword;
								}
								else
								{
									// Single line indent with no conditions or braces
									IndentFlags flags = IndentFlags.NoBraces;
									if (_lineFlags.HasFlag(LineFlags.DoKeyword))
										flags |= IndentFlags.DoBlock;

									_indents.Indent(flags);
									endLine = true;
								}
							}
						}
						else
						{
							// All other symbols
							if (!isLineStart &&
								token.PreviousType != TokenTypes.OpenParen &&
								token.PreviousType != TokenTypes.OpenBracket &&
								token.PreviousType != TokenTypes.UnaryPrefix &&
								token.PreviousType != TokenTypes.Dot)
								_builder.Append(' ');

							// Flag line for case block
							if (token.Value == "case" || token.Value == "default")
								_lineFlags |= LineFlags.CaseKeyword;

							_builder.Append(token.Value);
						}
						break;

					case TokenTypes.String:
					case TokenTypes.Number:
					case TokenTypes.RegEx:
						// Emit constant
						if (!isLineStart &&
							token.PreviousType != TokenTypes.OpenParen &&
							token.PreviousType != TokenTypes.OpenBracket &&
							token.PreviousType != TokenTypes.UnaryPrefix)
							_builder.Append(' ');
						_builder.Append(token.Value);
						break;

					case TokenTypes.SemiColon:
						_builder.Append(token.Value);
						if (_parenCount == 0)
						{
							// Unindent if in conditional block without braces
							while (_indents.Current.HasFlag(IndentFlags.NoBraces))
								_indents.Unindent();
							if (_indents.LastIndent.HasFlag(IndentFlags.DoBlock))
								_nextLineFlags |= LineFlags.EndDoBlock;

							// Determine if end of single-line indent block
							peek = tokenizer.PeekToken();
							if (peek.Type == TokenTypes.LineComment ||
								peek.Type == TokenTypes.InlineComment)
							{
								bool newLine;
								if (peek.Type == TokenTypes.LineComment)
									newLine = NewLineBeforeLineComment;
								else
									newLine = NewLineBeforeInlineComment;

								tokenizer.GetToken();
								if (newLine)
									NewLine();
								else
									_builder.Append(' ');
								_builder.Append(tokenizer.Token.Value);
							}

							endLine = true;
						}
						break;

					case TokenTypes.Comma:
						_builder.Append(token.Value);
						// Append newline if it looks like JSON syntax
						if (token.PreviousType == TokenTypes.CloseBrace ||
							(_lineFlags.HasFlag(LineFlags.JsonColon) &&
							_parenCount == 0 &&
							_bracketCount == 0 &&
							_indents.Count > 0))
							endLine = true;
						break;

					case TokenTypes.Colon:
						if (!_lineFlags.HasFlag(LineFlags.CaseKeyword))
						{
							// Standard colon handling
							if (!isLineStart &&
								(_lineFlags.HasFlag(LineFlags.QuestionMark) ||
								token.PreviousType == TokenTypes.CloseBrace))
								_builder.Append(' ');
							_builder.Append(token.Value);
							// May be JSON syntax
							if (!_lineFlags.HasFlag(LineFlags.QuestionMark))
								_lineFlags |= LineFlags.JsonColon;
						}
						else
						{
							// Special handling for case and default
							_builder.Append(token.Value);
							_indents.Indent(IndentFlags.CaseBlock);
							endLine = true;
						}
						break;

					case TokenTypes.QuestionMark:
						_lineFlags |= LineFlags.QuestionMark;
						if (!isLineStart)
							_builder.Append(' ');
						_builder.Append(token.Value);
						break;

					case TokenTypes.BinaryOperator:
					case TokenTypes.UnaryPrefix:
						if (!isLineStart &&
							token.PreviousType != TokenTypes.OpenParen &&
							token.PreviousType != TokenTypes.OpenBracket &&
							token.PreviousType != TokenTypes.UnaryPrefix)
							_builder.Append(' ');
						_builder.Append(token.Value);
						break;

					case TokenTypes.LineComment:
						// Separate line comment from previous token
						if (!isLineStart)
						{
							if (NewLineBeforeLineComment)
								NewLine();				// Separate with new line
							else
								_builder.Append(' ');	// Separate with space
						}
						// Append comment
						_builder.Append(token.Value);
						// Line comment always followed by new line
						endLine = true;
						break;

					case TokenTypes.InlineComment:
						// Separate line comment from previous token
						if (!isLineStart)
						{
							if (NewLineBeforeInlineComment)
								NewLine();				// Separate with new line
							else
								_builder.Append(' ');	// Separate with space
						}
						// Append comment
						_builder.Append(token.Value);
						// New line after comment
						if (NewLineAfterInlineComment)
							endLine = true;
						break;

					default:
						_builder.Append(token.Value);
						break;
				}
			}

			_builder.AppendLine();

			return _builder.ToString();
		}

		/// <summary>
		/// Emits a new line to the output string.
		/// </summary>
		protected void NewLine()
		{
			_builder.AppendLine();
			_builder.Append(_indents.ToString());

			_bracketCount = _parenCount = 0;
			_lineFlags = _nextLineFlags;
			_nextLineFlags = LineFlags.None;
		}
	}

	/// <summary>
	/// Parses JavaScript into a sequence of tokens.
	/// </summary>
	internal class Tokenizer : TextParser
	{
		protected static string _firstSymbolChars = "$_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		protected static string _symbolChars = "$_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		protected static string _octalChars = "01234567";
		protected static string _hexadecimalChars = "0123456789abcdefABCDEF";
		protected static string _decimalChars = "0123456789.eE";
		protected static string _operatorChars = "+-*/%=!<>&|?:~{}()[].;,^";
		protected static string[] _multiCharOperators = {
			// Note: Longer operators must come first to avoid partial match with shorter operator
			">>>=", "===", "!==", ">>>", "<<=", ">>=",
			"==", "!=", "<=", ">=", "+=", "-=", "*=", "/=", "%=", "&&", "||",
			"++", "--", "^=", "~=", "|=", "&=", "<<", ">>"
		};

		private struct NamedOperator
		{
			public char Operator;
			public TokenTypes Type;
		}

		private static NamedOperator[] _named = {
			new NamedOperator() { Operator = '{', Type = TokenTypes.OpenBrace },
			new NamedOperator() { Operator = '}', Type = TokenTypes.CloseBrace },
			new NamedOperator() { Operator = '(', Type = TokenTypes.OpenParen },
			new NamedOperator() { Operator = ')', Type = TokenTypes.CloseParen },
			new NamedOperator() { Operator = '[', Type = TokenTypes.OpenBracket },
			new NamedOperator() { Operator = ']', Type = TokenTypes.CloseBracket },
			new NamedOperator() { Operator = ':', Type = TokenTypes.Colon },
			new NamedOperator() { Operator = '.', Type = TokenTypes.Dot },
			new NamedOperator() { Operator = ';', Type = TokenTypes.SemiColon },
			new NamedOperator() { Operator = ',', Type = TokenTypes.Comma },
			new NamedOperator() { Operator = '?', Type = TokenTypes.QuestionMark },
		};

		internal Token Token { get; private set; }
		internal Token PendingToken { get; private set; }

		// Construction
		public Tokenizer(string script)
			: base(script)
		{
			Token = null;
			PendingToken = null;
		}

		/// <summary>
		/// Ungets the current token so that it will become the current token
		/// after the next call to GetToken().
		/// </summary>
		public void UngetToken()
		{
			PendingToken = Token;
		}

		public Token PeekToken()
		{
			Token token;
			if (GetToken())
			{
				token = Token;
				UngetToken();
			}
			else
			{
				token = new Token();
				token.Value = String.Empty;
			}
			return token;
		}

		/// <summary>
		/// Parses the next token from the input string. Returns false
		/// when no more tokens are available.
		/// </summary>
		public bool GetToken()
		{
			// Return pending token, if any
			if (PendingToken != null)
			{
				Token = PendingToken;
				PendingToken = null;
				return true;
			}

			// Ignore whitespace
			MovePastWhitespace();

			// Test for end of input
			if (EndOfText)
				return false;

			// Create new token
			Token token = new Token();
			if (Token != null)
			{
				token.PreviousValue = Token.Value;
				token.PreviousType = Token.Type;
			}

			// Parse token
			int start = Position;
			if (_firstSymbolChars.Contains(Peek()))
			{
				// Symbol (keywords, etc.
				token.Type = TokenTypes.Symbol;
				MoveAhead();
				while (_symbolChars.Contains(Peek()))
					MoveAhead();
			}
			else if (Peek() == '/' && Peek(1) == '/')
			{
				// Line comment
				token.Type = TokenTypes.LineComment;
				MoveToEndOfLine();
			}
			else if (Peek() == '/' && Peek(1) == '*')
			{
				// Inline comment
				token.Type = TokenTypes.InlineComment;
				MoveTo("*/");
				MoveAhead(2);
			}
			else if (Peek() == '\'' || Peek() == '"')
			{
				// String or character constant
				token.Type = TokenTypes.String;
				char quote = Peek();
				MoveAhead();
				while (!EndOfText)
				{
					if (Peek() == quote)
					{
						MoveAhead();
						break;
					}
					else if (Peek() == '\\' &&
						(Peek(1) == '\\' ||
						Peek(1) == quote))
						MoveAhead(2);
					else
						MoveAhead();
				}
			}
			else if (Char.IsDigit(Peek()) || (Peek() == '.' && Char.IsDigit(Peek(1))))
			{
				// Numeric constant
				token.Type = TokenTypes.Number;
				string charset = _decimalChars;
				if (Peek() == '0')
				{
					if (Char.IsDigit(Peek(1)))
						charset = _octalChars;
					else if (Char.ToLower(Peek(1)) == 'x')
					{
						charset = _hexadecimalChars;
						MoveAhead(2);
					}
				}

				bool hasDecimal = false;
				bool hasExponential = false;
				while (charset.Contains(Peek()))
				{
					if (Peek() == '.')
					{
						// Ensure no more than one decimal point
						if (hasDecimal)
							break;
						hasDecimal = true;
					}
					else if (Char.ToLower(Peek()) == 'e' && charset == _decimalChars)
					{
						// Ensure no more than one exponential notation
						if (hasExponential)
							break;
						hasExponential = true;
						// Skip exponential notation sign
						if (Peek(1) == '+' || Peek(1) == '-')
							MoveAhead();
					}
					MoveAhead();
				}
			}
			else if (Peek() == '/' &&
				token.PreviousType != TokenTypes.CloseParen &&
				token.PreviousType != TokenTypes.CloseBracket &&
				(token.PreviousType != TokenTypes.Symbol ||
				token.PreviousValue == "return" ||
				token.PreviousValue == "yield") &&
				token.PreviousType != TokenTypes.String &&
				token.PreviousType != TokenTypes.Number &&
				token.PreviousType != TokenTypes.RegEx &&
				token.PreviousType != TokenTypes.Dot &&
				token.PreviousType != TokenTypes.UnarySuffix)
			{
				// Regular expression constant
				token.Type = TokenTypes.RegEx;
				MoveAhead();

				// Scan regular expression
				bool bInCaptureGroup = false;
				while (!EndOfText && (Peek() != '/' || bInCaptureGroup) &&
					Peek() != '\r' && Peek() != '\n')
				{
					if (Peek() == '[')
					{
						bInCaptureGroup = true;
					}
					else if (Peek() == ']')
					{
						bInCaptureGroup = false;
					}
					else
					{
						// Skip over escaped characters with special meaning
						var c = Peek(1);
						if (Peek() == '\\' && (c == '\\' || c == '/' || c == ']' || c == '['))
							MoveAhead();
					}
					MoveAhead();
				}

				// Scan regular expression flags
				if (Peek() == '/')
				{
					MoveAhead();
					while (Char.IsLetter(Peek()))
						MoveAhead();
				}
			}
			else if (_operatorChars.Contains(Peek()))
			{
				// Operator
				NamedOperator specialized = _named.FirstOrDefault(s => s.Operator == Peek());
				if (specialized.Operator != '\0')
				{
					// Matches a specialized operator
					token.Type = specialized.Type;
					MoveAhead();
				}
				else
				{
					// Parse multi-character operator
					string op = _multiCharOperators.FirstOrDefault(s => MatchesCurrent(s));
					if (op != null)
						MoveAhead(op.Length);
					else
					{
						op = Peek().ToString();
						MoveAhead();
					}
					// Determine operator type
					if (op == "~" || op == "!")
					{
						token.Type = TokenTypes.UnaryPrefix;
					}
					else if (op == "++" || op == "--")
					{
						if (token.PreviousType == TokenTypes.Symbol ||
							token.PreviousType == TokenTypes.CloseParen ||
							token.PreviousType == TokenTypes.CloseBracket)
							token.Type = TokenTypes.UnarySuffix;
						else
							token.Type = TokenTypes.UnaryPrefix;
					}
					else if (op == "+" || op == "-")
					{
						if (token.PreviousType == TokenTypes.Symbol ||
							token.PreviousType == TokenTypes.Number ||
							token.PreviousType == TokenTypes.String ||
							token.PreviousType == TokenTypes.RegEx ||
							token.PreviousType == TokenTypes.CloseParen ||
							token.PreviousType == TokenTypes.CloseBracket)
							token.Type = TokenTypes.BinaryOperator;
						else
							token.Type = TokenTypes.UnaryPrefix;
					}
					else token.Type = TokenTypes.BinaryOperator;
				}
			}
			else
			{
				// Unknown token type
				token.Type = TokenTypes.Unknown;
				MoveAhead();
			}

			// Extract token value
			token.Value = Extract(start, Position);

			// Update current token and indicate success
			Token = token;
			return true;
		}

		/// <summary>
		/// Determines if the given string matches characters at the
		/// current position.
		/// </summary>
		/// <param name="s">String to test</param>
		protected bool MatchesCurrent(string s)
		{
			for (int i = 0; i < s.Length; i++)
			{
				if (Peek(i) != s[i])
					return false;
			}
			return true;
		}
	}
}
