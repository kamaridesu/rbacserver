import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionSetWhereInput } from "../../../inputs/PermissionSetWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPermissionSetArgs {
  @TypeGraphQL.Field(_type => PermissionSetWhereInput, {
    nullable: true
  })
  where?: PermissionSetWhereInput | undefined;
}
