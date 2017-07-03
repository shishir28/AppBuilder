using AutoMapper;
using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Entities.Dto;
using Monad.AB.Domain.Entities.Identity;
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

                cfg.CreateMap<FormFieldView, FormFieldViewViewModel>();
                cfg.CreateMap<FormFieldViewViewModel, FormFieldView>();

                cfg.CreateMap<FieldType, FieldTypeViewModel>();
                cfg.CreateMap<FieldTypeViewModel, FieldType>();

                cfg.CreateMap<FormViewType, FormViewTypeModel>();
                cfg.CreateMap<FormViewTypeModel, FormViewType>();

                cfg.CreateMap<FormFieldView, FormFieldViewViewModel>();
                cfg.CreateMap<FormFieldViewViewModel, FormFieldView>();

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

                cfg.CreateMap<Form, EditFormViewModel>()
               .ForMember(dest => dest.FormName, src => src.MapFrom(s => s.Name))
               .ForMember(dest => dest.FormTitle, src => src.MapFrom(s => s.Title))
               .ForMember(dest => dest.FormDescription, src => src.MapFrom(s => s.Description));

                cfg.CreateMap<Role, RoleViewModel>()
               .ForMember(dest => dest.RoleId, src => src.MapFrom(s => s.Id));

                cfg.CreateMap<RoleViewModel, Role>()
              .ForMember(dest => dest.Id, src => src.MapFrom(s => s.RoleId));
                cfg.CreateMap<Role, AddRoleViewModel>();
                cfg.CreateMap<AddRoleViewModel, Role>();

                cfg.CreateMap<RoleRightRequest, RoleRightsViewModel>()
              .ForMember(dest => dest.IsAdd, src => src.MapFrom(s => s.IsAdd == 1))
              .ForMember(dest => dest.IsDelete, src => src.MapFrom(s => s.IsDelete == 1))
              .ForMember(dest => dest.IsEdit, src => src.MapFrom(s => s.IsEdit == 1))
              .ForMember(dest => dest.IsView, src => src.MapFrom(s => s.IsView == 1))
              .ForMember(dest => dest.IsList, src => src.MapFrom(s => s.IsList == 1));

                cfg.CreateMap<RoleRightsViewModel, RoleRightRequest>()
              .ForMember(dest => dest.IsAdd, src => src.MapFrom(s => s.IsAdd ? 1 : 0))
              .ForMember(dest => dest.IsDelete, src => src.MapFrom(s => s.IsDelete ? 1 : 0))
              .ForMember(dest => dest.IsEdit, src => src.MapFrom(s => s.IsEdit ? 1 : 0))
              .ForMember(dest => dest.IsView, src => src.MapFrom(s => s.IsView ? 1 : 0))
              .ForMember(dest => dest.IsList, src => src.MapFrom(s => s.IsList ? 1 : 0));

                MapAggregatedUserDtoAndUserViewModel(cfg);
            });
        }

        private static void MapAggregatedUserDtoAndUserViewModel(IMapperConfigurationExpression cfg)
        {

             cfg.CreateMap<User, AddUserViewModel>();
             cfg.CreateMap<AddUserViewModel, User>();
             cfg.CreateMap<UserProfile, AddUserViewModel>();
             cfg.CreateMap<AddUserViewModel, UserProfile>();


            cfg.CreateMap<AggregatedUserDto, UserViewModel>();
            cfg.CreateMap<UserViewModel, AggregatedUserDto>();

            cfg.CreateMap<AggregatedUserDto, AddUserViewModel>();
            cfg.CreateMap<AddUserViewModel, AggregatedUserDto>();

            // .ForMember(dest => dest.Roles, src => src.MapFrom(s => s.Roles));
            // .ForMember(dest => dest.Roles, src => src.MapFrom(s => s.Roles)); 
        }

    }
}
