import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetScalarWhereInput } from "../inputs/PermissionSetScalarWhereInput";
import { PermissionSetUpdateManyMutationInput } from "../inputs/PermissionSetUpdateManyMutationInput";

@TypeGraphQL.InputType("PermissionSetUpdateManyWithWhereWithoutResourceInput", {
  isAbstract: true
})
export class PermissionSetUpdateManyWithWhereWithoutResourceInput {
  @TypeGraphQL.Field(_type => PermissionSetScalarWhereInput, {
    nullable: false
  })
  where!: PermissionSetScalarWhereInput;

  @TypeGraphQL.Field(_type => PermissionSetUpdateManyMutationInput, {
    nullable: false
  })
  data!: PermissionSetUpdateManyMutationInput;
}
