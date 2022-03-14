import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateWithoutPermissionInput } from "../inputs/PermissionSetCreateWithoutPermissionInput";
import { PermissionSetWhereUniqueInput } from "../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.InputType("PermissionSetCreateOrConnectWithoutPermissionInput", {
  isAbstract: true
})
export class PermissionSetCreateOrConnectWithoutPermissionInput {
  @TypeGraphQL.Field(_type => PermissionSetWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionSetWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionSetCreateWithoutPermissionInput, {
    nullable: false
  })
  create!: PermissionSetCreateWithoutPermissionInput;
}
