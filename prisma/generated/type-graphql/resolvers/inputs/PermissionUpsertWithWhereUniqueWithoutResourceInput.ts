import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutResourceInput } from "../inputs/PermissionCreateWithoutResourceInput";
import { PermissionUpdateWithoutResourceInput } from "../inputs/PermissionUpdateWithoutResourceInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionUpsertWithWhereUniqueWithoutResourceInput", {
  isAbstract: true
})
export class PermissionUpsertWithWhereUniqueWithoutResourceInput {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionUpdateWithoutResourceInput, {
    nullable: false
  })
  update!: PermissionUpdateWithoutResourceInput;

  @TypeGraphQL.Field(_type => PermissionCreateWithoutResourceInput, {
    nullable: false
  })
  create!: PermissionCreateWithoutResourceInput;
}
