import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateWithoutResourceInput } from "../inputs/PermissionSetCreateWithoutResourceInput";
import { PermissionSetUpdateWithoutResourceInput } from "../inputs/PermissionSetUpdateWithoutResourceInput";
import { PermissionSetWhereUniqueInput } from "../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.InputType("PermissionSetUpsertWithWhereUniqueWithoutResourceInput", {
  isAbstract: true
})
export class PermissionSetUpsertWithWhereUniqueWithoutResourceInput {
  @TypeGraphQL.Field(_type => PermissionSetWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionSetWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionSetUpdateWithoutResourceInput, {
    nullable: false
  })
  update!: PermissionSetUpdateWithoutResourceInput;

  @TypeGraphQL.Field(_type => PermissionSetCreateWithoutResourceInput, {
    nullable: false
  })
  create!: PermissionSetCreateWithoutResourceInput;
}
