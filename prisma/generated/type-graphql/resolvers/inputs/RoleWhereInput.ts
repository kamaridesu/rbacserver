import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionListRelationFilter } from "../inputs/PermissionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("RoleWhereInput", {
  isAbstract: true
})
export class RoleWhereInput {
  @TypeGraphQL.Field(_type => [RoleWhereInput], {
    nullable: true
  })
  AND?: RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereInput], {
    nullable: true
  })
  OR?: RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereInput], {
    nullable: true
  })
  NOT?: RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PermissionListRelationFilter, {
    nullable: true
  })
  permissions?: PermissionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;
}
