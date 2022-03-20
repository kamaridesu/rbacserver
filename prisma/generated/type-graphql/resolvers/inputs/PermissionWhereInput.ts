import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceRelationFilter } from "../inputs/ResourceRelationFilter";
import { RoleRelationFilter } from "../inputs/RoleRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PermissionWhereInput", {
  isAbstract: true
})
export class PermissionWhereInput {
  @TypeGraphQL.Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  AND?: PermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  OR?: PermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  NOT?: PermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => RoleRelationFilter, {
    nullable: true
  })
  role?: RoleRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  roleId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ResourceRelationFilter, {
    nullable: true
  })
  resource?: ResourceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  resourceId?: StringNullableFilter | undefined;
}
