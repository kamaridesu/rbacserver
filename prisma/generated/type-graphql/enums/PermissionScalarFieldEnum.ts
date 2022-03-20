import * as TypeGraphQL from "type-graphql";

export enum PermissionScalarFieldEnum {
  id = "id",
  name = "name",
  roleId = "roleId",
  resourceId = "resourceId"
}
TypeGraphQL.registerEnumType(PermissionScalarFieldEnum, {
  name: "PermissionScalarFieldEnum",
  description: undefined,
});
