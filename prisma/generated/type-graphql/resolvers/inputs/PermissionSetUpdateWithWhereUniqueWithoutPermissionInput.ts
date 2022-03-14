import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetUpdateWithoutPermissionInput } from "../inputs/PermissionSetUpdateWithoutPermissionInput";
import { PermissionSetWhereUniqueInput } from "../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.InputType("PermissionSetUpdateWithWhereUniqueWithoutPermissionInput", {
  isAbstract: true
})
export class PermissionSetUpdateWithWhereUniqueWithoutPermissionInput {
  @TypeGraphQL.Field(_type => PermissionSetWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionSetWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionSetUpdateWithoutPermissionInput, {
    nullable: false
  })
  data!: PermissionSetUpdateWithoutPermissionInput;
}
