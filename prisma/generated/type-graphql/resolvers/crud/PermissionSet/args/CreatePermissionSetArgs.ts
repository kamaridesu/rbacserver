import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionSetCreateInput } from "../../../inputs/PermissionSetCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePermissionSetArgs {
  @TypeGraphQL.Field(_type => PermissionSetCreateInput, {
    nullable: false
  })
  data!: PermissionSetCreateInput;
}
