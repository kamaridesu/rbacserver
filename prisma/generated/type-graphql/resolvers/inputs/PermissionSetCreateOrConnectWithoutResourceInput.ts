import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateWithoutResourceInput } from "../inputs/PermissionSetCreateWithoutResourceInput";
import { PermissionSetWhereUniqueInput } from "../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.InputType("PermissionSetCreateOrConnectWithoutResourceInput", {
  isAbstract: true
})
export class PermissionSetCreateOrConnectWithoutResourceInput {
  @TypeGraphQL.Field(_type => PermissionSetWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionSetWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionSetCreateWithoutResourceInput, {
    nullable: false
  })
  create!: PermissionSetCreateWithoutResourceInput;
}
