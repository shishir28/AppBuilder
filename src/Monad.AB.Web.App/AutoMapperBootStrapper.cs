using AutoMapper;
using Monad.AB.Domain.Entities;
using Monad.AB.Web.App.Models;

namespace Monad.AB.Web.App
{
    public class AutoMapperBootStrapper
    {
        public static void Bootstrap()
        {

            ConfigurePageMappings();
        }

        private static void ConfigurePageMappings()
        {
            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Project, ProjectViewModel>();
                cfg.CreateMap<ProjectViewModel, Project>();
                cfg.CreateMap<Project, ProjecEditModel>();
                cfg.CreateMap<ProjecEditModel, Project>();
                cfg.CreateMap<Project, ProjectBuildModel>();
                cfg.CreateMap<ProjectBuildModel, Project>();

                cfg.CreateMap<FormField, FormFieldViewModel>();
                cfg.CreateMap<FormFieldViewModel, FormField>();
                cfg.CreateMap<FormField, EditFormFieldsViewModel>();
                cfg.CreateMap<EditFormFieldsViewModel, FormField>();
                cfg.CreateMap<FormField, DeleteFormFieldsViewModel>();
                cfg.CreateMap<DeleteFormFieldsViewModel, FormField>();

                cfg.CreateMap<FormFieldView, EditFormFieldsViewViewModel>();
                cfg.CreateMap<EditFormFieldsViewViewModel, FormFieldView>();

                cfg.CreateMap<Form, FormViewModel>()
                  .ForMember(dest => dest.FormName, src => src.MapFrom(s => s.Name))
                .ForMember(dest => dest.FormTitle, src => src.MapFrom(s => s.Title))
                .ForMember(dest => dest.FormDescription, src => src.MapFrom(s => s.Description));

                cfg.CreateMap<FormViewModel, Form>()
                 .ForMember(dest => dest.Name, src => src.MapFrom(s => s.FormName))
               .ForMember(dest => dest.Title, src => src.MapFrom(s => s.FormTitle))
               .ForMember(dest => dest.Description, src => src.MapFrom(s => s.FormDescription));


                cfg.CreateMap<Form, EditFormViewModel>()
                 .ForMember(dest => dest.FormName, src => src.MapFrom(s => s.Name))
                 .ForMember(dest => dest.FormTitle, src => src.MapFrom(s => s.Title))
                 .ForMember(dest => dest.FormDescription, src => src.MapFrom(s => s.Description));

                cfg.CreateMap<EditFormViewModel, Form>()
                  .ForMember(dest => dest.Name, src => src.MapFrom(s => s.FormName))
               .ForMember(dest => dest.Title, src => src.MapFrom(s => s.FormTitle))
               .ForMember(dest => dest.Description, src => src.MapFrom(s => s.FormDescription));
            });
        }
    }
}
