import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionSetUpdateInput } from "../../../inputs/PermissionSetUpdateInput";
import { PermissionSetWhereUniqueInput } from "../../../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePermissionSetArgs {
  @TypeGraphQL.Field(_type => PermissionSetUpdateInput, {
    nullable: false
  })
  data!: PermissionSetUpdateInput;

  @TypeGraphQL.Field(_type => PermissionSetWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionSetWhereUniqueInput;
}
