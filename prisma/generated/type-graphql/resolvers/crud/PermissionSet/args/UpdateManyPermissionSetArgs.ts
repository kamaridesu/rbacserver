import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionSetUpdateManyMutationInput } from "../../../inputs/PermissionSetUpdateManyMutationInput";
import { PermissionSetWhereInput } from "../../../inputs/PermissionSetWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPermissionSetArgs {
  @TypeGraphQL.Field(_type => PermissionSetUpdateManyMutationInput, {
    nullable: false
  })
  data!: PermissionSetUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PermissionSetWhereInput, {
    nullable: true
  })
  where?: PermissionSetWhereInput | undefined;
}
