import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionSetWhereUniqueInput } from "../../../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePermissionSetArgs {
  @TypeGraphQL.Field(_type => PermissionSetWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionSetWhereUniqueInput;
}
