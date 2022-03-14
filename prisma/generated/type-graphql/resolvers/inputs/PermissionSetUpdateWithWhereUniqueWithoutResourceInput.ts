import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetUpdateWithoutResourceInput } from "../inputs/PermissionSetUpdateWithoutResourceInput";
import { PermissionSetWhereUniqueInput } from "../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.InputType("PermissionSetUpdateWithWhereUniqueWithoutResourceInput", {
  isAbstract: true
})
export class PermissionSetUpdateWithWhereUniqueWithoutResourceInput {
  @TypeGraphQL.Field(_type => PermissionSetWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionSetWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionSetUpdateWithoutResourceInput, {
    nullable: false
  })
  data!: PermissionSetUpdateWithoutResourceInput;
}
