import * as TypeGraphQL from "type-graphql";

export enum PermissionSetScalarFieldEnum {
  resourceId = "resourceId",
  permissionId = "permissionId",
  isallowed = "isallowed",
  createdAt = "createdAt",
  createdBy = "createdBy"
}
TypeGraphQL.registerEnumType(PermissionSetScalarFieldEnum, {
  name: "PermissionSetScalarFieldEnum",
  description: undefined,
});
