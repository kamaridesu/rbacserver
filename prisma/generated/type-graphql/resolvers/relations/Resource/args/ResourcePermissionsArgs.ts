import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionSetOrderByWithRelationInput } from "../../../inputs/PermissionSetOrderByWithRelationInput";
import { PermissionSetWhereInput } from "../../../inputs/PermissionSetWhereInput";
import { PermissionSetWhereUniqueInput } from "../../../inputs/PermissionSetWhereUniqueInput";
import { PermissionSetScalarFieldEnum } from "../../../../enums/PermissionSetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ResourcePermissionsArgs {
  @TypeGraphQL.Field(_type => PermissionSetWhereInput, {
    nullable: true
  })
  where?: PermissionSetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PermissionSetOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionSetWhereUniqueInput, {
    nullable: true
  })
  cursor?: PermissionSetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"resourceId" | "permissionId" | "isallowed" | "createdAt" | "createdBy"> | undefined;
}
