import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionSetCreateInput } from "../../../inputs/PermissionSetCreateInput";
import { PermissionSetUpdateInput } from "../../../inputs/PermissionSetUpdateInput";
import { PermissionSetWhereUniqueInput } from "../../../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPermissionSetArgs {
  @TypeGraphQL.Field(_type => PermissionSetWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionSetWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionSetCreateInput, {
    nullable: false
  })
  create!: PermissionSetCreateInput;

  @TypeGraphQL.Field(_type => PermissionSetUpdateInput, {
    nullable: false
  })
  update!: PermissionSetUpdateInput;
}
