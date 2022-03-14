import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateWithoutPermissionInput } from "../inputs/PermissionSetCreateWithoutPermissionInput";
import { PermissionSetUpdateWithoutPermissionInput } from "../inputs/PermissionSetUpdateWithoutPermissionInput";
import { PermissionSetWhereUniqueInput } from "../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.InputType("PermissionSetUpsertWithWhereUniqueWithoutPermissionInput", {
  isAbstract: true
})
export class PermissionSetUpsertWithWhereUniqueWithoutPermissionInput {
  @TypeGraphQL.Field(_type => PermissionSetWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionSetWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionSetUpdateWithoutPermissionInput, {
    nullable: false
  })
  update!: PermissionSetUpdateWithoutPermissionInput;

  @TypeGraphQL.Field(_type => PermissionSetCreateWithoutPermissionInput, {
    nullable: false
  })
  create!: PermissionSetCreateWithoutPermissionInput;
}
