import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutRoleInput } from "../inputs/PermissionCreateWithoutRoleInput";
import { PermissionUpdateWithoutRoleInput } from "../inputs/PermissionUpdateWithoutRoleInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionUpsertWithWhereUniqueWithoutRoleInput", {
  isAbstract: true
})
export class PermissionUpsertWithWhereUniqueWithoutRoleInput {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionUpdateWithoutRoleInput, {
    nullable: false
  })
  update!: PermissionUpdateWithoutRoleInput;

  @TypeGraphQL.Field(_type => PermissionCreateWithoutRoleInput, {
    nullable: false
  })
  create!: PermissionCreateWithoutRoleInput;
}
