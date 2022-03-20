import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionUpdateWithoutResourceInput } from "../inputs/PermissionUpdateWithoutResourceInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionUpdateWithWhereUniqueWithoutResourceInput", {
  isAbstract: true
})
export class PermissionUpdateWithWhereUniqueWithoutResourceInput {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionUpdateWithoutResourceInput, {
    nullable: false
  })
  data!: PermissionUpdateWithoutResourceInput;
}
