import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Role: crudResolvers.RoleCrudResolver,
  Resource: crudResolvers.ResourceCrudResolver,
  Permission: crudResolvers.PermissionCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver
  },
  Role: {
    role: actionResolvers.FindUniqueRoleResolver,
    findFirstRole: actionResolvers.FindFirstRoleResolver,
    roles: actionResolvers.FindManyRoleResolver,
    createRole: actionResolvers.CreateRoleResolver,
    createManyRole: actionResolvers.CreateManyRoleResolver,
    deleteRole: actionResolvers.DeleteRoleResolver,
    updateRole: actionResolvers.UpdateRoleResolver,
    deleteManyRole: actionResolvers.DeleteManyRoleResolver,
    updateManyRole: actionResolvers.UpdateManyRoleResolver,
    upsertRole: actionResolvers.UpsertRoleResolver,
    aggregateRole: actionResolvers.AggregateRoleResolver,
    groupByRole: actionResolvers.GroupByRoleResolver
  },
  Resource: {
    resource: actionResolvers.FindUniqueResourceResolver,
    findFirstResource: actionResolvers.FindFirstResourceResolver,
    resources: actionResolvers.FindManyResourceResolver,
    createResource: actionResolvers.CreateResourceResolver,
    createManyResource: actionResolvers.CreateManyResourceResolver,
    deleteResource: actionResolvers.DeleteResourceResolver,
    updateResource: actionResolvers.UpdateResourceResolver,
    deleteManyResource: actionResolvers.DeleteManyResourceResolver,
    updateManyResource: actionResolvers.UpdateManyResourceResolver,
    upsertResource: actionResolvers.UpsertResourceResolver,
    aggregateResource: actionResolvers.AggregateResourceResolver,
    groupByResource: actionResolvers.GroupByResourceResolver
  },
  Permission: {
    permission: actionResolvers.FindUniquePermissionResolver,
    findFirstPermission: actionResolvers.FindFirstPermissionResolver,
    permissions: actionResolvers.FindManyPermissionResolver,
    createPermission: actionResolvers.CreatePermissionResolver,
    createManyPermission: actionResolvers.CreateManyPermissionResolver,
    deletePermission: actionResolvers.DeletePermissionResolver,
    updatePermission: actionResolvers.UpdatePermissionResolver,
    deleteManyPermission: actionResolvers.DeleteManyPermissionResolver,
    updateManyPermission: actionResolvers.UpdateManyPermissionResolver,
    upsertPermission: actionResolvers.UpsertPermissionResolver,
    aggregatePermission: actionResolvers.AggregatePermissionResolver,
    groupByPermission: actionResolvers.GroupByPermissionResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  Role: ["role", "findFirstRole", "roles", "createRole", "createManyRole", "deleteRole", "updateRole", "deleteManyRole", "updateManyRole", "upsertRole", "aggregateRole", "groupByRole"],
  Resource: ["resource", "findFirstResource", "resources", "createResource", "createManyResource", "deleteResource", "updateResource", "deleteManyResource", "updateManyResource", "upsertResource", "aggregateResource", "groupByResource"],
  Permission: ["permission", "findFirstPermission", "permissions", "createPermission", "createManyPermission", "deletePermission", "updatePermission", "deleteManyPermission", "updateManyPermission", "upsertPermission", "aggregatePermission", "groupByPermission"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  DeletePostArgs: ["where"],
  UpdatePostArgs: ["data", "where"],
  DeleteManyPostArgs: ["where"],
  UpdateManyPostArgs: ["data", "where"],
  UpsertPostArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueRoleArgs: ["where"],
  FindFirstRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRoleArgs: ["data"],
  CreateManyRoleArgs: ["data", "skipDuplicates"],
  DeleteRoleArgs: ["where"],
  UpdateRoleArgs: ["data", "where"],
  DeleteManyRoleArgs: ["where"],
  UpdateManyRoleArgs: ["data", "where"],
  UpsertRoleArgs: ["where", "create", "update"],
  AggregateRoleArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRoleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueResourceArgs: ["where"],
  FindFirstResourceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyResourceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateResourceArgs: ["data"],
  CreateManyResourceArgs: ["data", "skipDuplicates"],
  DeleteResourceArgs: ["where"],
  UpdateResourceArgs: ["data", "where"],
  DeleteManyResourceArgs: ["where"],
  UpdateManyResourceArgs: ["data", "where"],
  UpsertResourceArgs: ["where", "create", "update"],
  AggregateResourceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByResourceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePermissionArgs: ["where"],
  FindFirstPermissionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPermissionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePermissionArgs: ["data"],
  CreateManyPermissionArgs: ["data", "skipDuplicates"],
  DeletePermissionArgs: ["where"],
  UpdatePermissionArgs: ["data", "where"],
  DeleteManyPermissionArgs: ["where"],
  UpdateManyPermissionArgs: ["data", "where"],
  UpsertPermissionArgs: ["where", "create", "update"],
  AggregatePermissionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPermissionArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Role: relationResolvers.RoleRelationsResolver,
  Resource: relationResolvers.ResourceRelationsResolver,
  Permission: relationResolvers.PermissionRelationsResolver
};
const relationResolversInfo = {
  User: ["posts", "role"],
  Post: ["author"],
  Role: ["permissions", "users"],
  Resource: ["permissions"],
  Permission: ["role", "resource"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "name", "roleId"],
  Post: ["id", "name", "authorId"],
  Role: ["name"],
  Resource: ["name"],
  Permission: ["id", "name", "roleId", "resourceId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "roleId", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["id", "name", "authorId", "_count", "_min", "_max"],
  AggregateRole: ["_count", "_min", "_max"],
  RoleGroupBy: ["name", "_count", "_min", "_max"],
  AggregateResource: ["_count", "_min", "_max"],
  ResourceGroupBy: ["name", "_count", "_min", "_max"],
  AggregatePermission: ["_count", "_min", "_max"],
  PermissionGroupBy: ["id", "name", "roleId", "resourceId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["posts"],
  UserCountAggregate: ["id", "name", "roleId", "_all"],
  UserMinAggregate: ["id", "name", "roleId"],
  UserMaxAggregate: ["id", "name", "roleId"],
  PostCountAggregate: ["id", "name", "authorId", "_all"],
  PostMinAggregate: ["id", "name", "authorId"],
  PostMaxAggregate: ["id", "name", "authorId"],
  RoleCount: ["permissions", "users"],
  RoleCountAggregate: ["name", "_all"],
  RoleMinAggregate: ["name"],
  RoleMaxAggregate: ["name"],
  ResourceCount: ["permissions"],
  ResourceCountAggregate: ["name", "_all"],
  ResourceMinAggregate: ["name"],
  ResourceMaxAggregate: ["name"],
  PermissionCountAggregate: ["id", "name", "roleId", "resourceId", "_all"],
  PermissionMinAggregate: ["id", "name", "roleId", "resourceId"],
  PermissionMaxAggregate: ["id", "name", "roleId", "resourceId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "posts", "role", "roleId"],
  UserOrderByWithRelationInput: ["id", "name", "posts", "role", "roleId"],
  UserWhereUniqueInput: ["id", "name"],
  UserOrderByWithAggregationInput: ["id", "name", "roleId", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "roleId"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "name", "author", "authorId"],
  PostOrderByWithRelationInput: ["id", "name", "author", "authorId"],
  PostWhereUniqueInput: ["id", "name"],
  PostOrderByWithAggregationInput: ["id", "name", "authorId", "_count", "_max", "_min"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "authorId"],
  RoleWhereInput: ["AND", "OR", "NOT", "name", "permissions", "users"],
  RoleOrderByWithRelationInput: ["name", "permissions", "users"],
  RoleWhereUniqueInput: ["name"],
  RoleOrderByWithAggregationInput: ["name", "_count", "_max", "_min"],
  RoleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "name"],
  ResourceWhereInput: ["AND", "OR", "NOT", "name", "permissions"],
  ResourceOrderByWithRelationInput: ["name", "permissions"],
  ResourceWhereUniqueInput: ["name"],
  ResourceOrderByWithAggregationInput: ["name", "_count", "_max", "_min"],
  ResourceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "name"],
  PermissionWhereInput: ["AND", "OR", "NOT", "id", "name", "role", "roleId", "resource", "resourceId"],
  PermissionOrderByWithRelationInput: ["id", "name", "role", "roleId", "resource", "resourceId"],
  PermissionWhereUniqueInput: ["id", "name_roleId_resourceId"],
  PermissionOrderByWithAggregationInput: ["id", "name", "roleId", "resourceId", "_count", "_max", "_min"],
  PermissionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "roleId", "resourceId"],
  UserCreateInput: ["id", "name", "posts", "role"],
  UserUpdateInput: ["id", "name", "posts", "role"],
  UserCreateManyInput: ["id", "name", "roleId"],
  UserUpdateManyMutationInput: ["id", "name"],
  PostCreateInput: ["id", "name", "author"],
  PostUpdateInput: ["id", "name", "author"],
  PostCreateManyInput: ["id", "name", "authorId"],
  PostUpdateManyMutationInput: ["id", "name"],
  RoleCreateInput: ["name", "permissions", "users"],
  RoleUpdateInput: ["name", "permissions", "users"],
  RoleCreateManyInput: ["name"],
  RoleUpdateManyMutationInput: ["name"],
  ResourceCreateInput: ["name", "permissions"],
  ResourceUpdateInput: ["name", "permissions"],
  ResourceCreateManyInput: ["name"],
  ResourceUpdateManyMutationInput: ["name"],
  PermissionCreateInput: ["id", "name", "role", "resource"],
  PermissionUpdateInput: ["id", "name", "role", "resource"],
  PermissionCreateManyInput: ["id", "name", "roleId", "resourceId"],
  PermissionUpdateManyMutationInput: ["id", "name"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  RoleRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  PostOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "roleId"],
  UserMaxOrderByAggregateInput: ["id", "name", "roleId"],
  UserMinOrderByAggregateInput: ["id", "name", "roleId"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  PostCountOrderByAggregateInput: ["id", "name", "authorId"],
  PostMaxOrderByAggregateInput: ["id", "name", "authorId"],
  PostMinOrderByAggregateInput: ["id", "name", "authorId"],
  PermissionListRelationFilter: ["every", "some", "none"],
  UserListRelationFilter: ["every", "some", "none"],
  PermissionOrderByRelationAggregateInput: ["_count"],
  UserOrderByRelationAggregateInput: ["_count"],
  RoleCountOrderByAggregateInput: ["name"],
  RoleMaxOrderByAggregateInput: ["name"],
  RoleMinOrderByAggregateInput: ["name"],
  ResourceCountOrderByAggregateInput: ["name"],
  ResourceMaxOrderByAggregateInput: ["name"],
  ResourceMinOrderByAggregateInput: ["name"],
  ResourceRelationFilter: ["is", "isNot"],
  PermissionNameRoleIdResourceIdCompoundUniqueInput: ["name", "roleId", "resourceId"],
  PermissionCountOrderByAggregateInput: ["id", "name", "roleId", "resourceId"],
  PermissionMaxOrderByAggregateInput: ["id", "name", "roleId", "resourceId"],
  PermissionMinOrderByAggregateInput: ["id", "name", "roleId", "resourceId"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  RoleCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RoleUpdateOneWithoutUsersInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PermissionCreateNestedManyWithoutRoleInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedManyWithoutRoleInput: ["create", "connectOrCreate", "createMany", "connect"],
  PermissionUpdateManyWithoutRoleInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutRoleInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PermissionCreateNestedManyWithoutResourceInput: ["create", "connectOrCreate", "createMany", "connect"],
  PermissionUpdateManyWithoutResourceInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RoleCreateNestedOneWithoutPermissionsInput: ["create", "connectOrCreate", "connect"],
  ResourceCreateNestedOneWithoutPermissionsInput: ["create", "connectOrCreate", "connect"],
  RoleUpdateOneWithoutPermissionsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ResourceUpdateOneWithoutPermissionsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PostCreateWithoutAuthorInput: ["id", "name"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  RoleCreateWithoutUsersInput: ["name", "permissions"],
  RoleCreateOrConnectWithoutUsersInput: ["where", "create"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "authorId"],
  RoleUpsertWithoutUsersInput: ["update", "create"],
  RoleUpdateWithoutUsersInput: ["name", "permissions"],
  UserCreateWithoutPostsInput: ["id", "name", "role"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["id", "name", "role"],
  PermissionCreateWithoutRoleInput: ["id", "name", "resource"],
  PermissionCreateOrConnectWithoutRoleInput: ["where", "create"],
  PermissionCreateManyRoleInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutRoleInput: ["id", "name", "posts"],
  UserCreateOrConnectWithoutRoleInput: ["where", "create"],
  UserCreateManyRoleInputEnvelope: ["data", "skipDuplicates"],
  PermissionUpsertWithWhereUniqueWithoutRoleInput: ["where", "update", "create"],
  PermissionUpdateWithWhereUniqueWithoutRoleInput: ["where", "data"],
  PermissionUpdateManyWithWhereWithoutRoleInput: ["where", "data"],
  PermissionScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "roleId", "resourceId"],
  UserUpsertWithWhereUniqueWithoutRoleInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutRoleInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutRoleInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "roleId"],
  PermissionCreateWithoutResourceInput: ["id", "name", "role"],
  PermissionCreateOrConnectWithoutResourceInput: ["where", "create"],
  PermissionCreateManyResourceInputEnvelope: ["data", "skipDuplicates"],
  PermissionUpsertWithWhereUniqueWithoutResourceInput: ["where", "update", "create"],
  PermissionUpdateWithWhereUniqueWithoutResourceInput: ["where", "data"],
  PermissionUpdateManyWithWhereWithoutResourceInput: ["where", "data"],
  RoleCreateWithoutPermissionsInput: ["name", "users"],
  RoleCreateOrConnectWithoutPermissionsInput: ["where", "create"],
  ResourceCreateWithoutPermissionsInput: ["name"],
  ResourceCreateOrConnectWithoutPermissionsInput: ["where", "create"],
  RoleUpsertWithoutPermissionsInput: ["update", "create"],
  RoleUpdateWithoutPermissionsInput: ["name", "users"],
  ResourceUpsertWithoutPermissionsInput: ["update", "create"],
  ResourceUpdateWithoutPermissionsInput: ["name"],
  PostCreateManyAuthorInput: ["id", "name"],
  PostUpdateWithoutAuthorInput: ["id", "name"],
  PermissionCreateManyRoleInput: ["id", "name", "resourceId"],
  UserCreateManyRoleInput: ["id", "name"],
  PermissionUpdateWithoutRoleInput: ["id", "name", "resource"],
  UserUpdateWithoutRoleInput: ["id", "name", "posts"],
  PermissionCreateManyResourceInput: ["id", "name", "roleId"],
  PermissionUpdateWithoutResourceInput: ["id", "name", "role"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

