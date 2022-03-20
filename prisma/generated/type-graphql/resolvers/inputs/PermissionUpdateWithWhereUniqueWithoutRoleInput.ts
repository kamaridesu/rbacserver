import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionUpdateWithoutRoleInput } from "../inputs/PermissionUpdateWithoutRoleInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionUpdateWithWhereUniqueWithoutRoleInput", {
  isAbstract: true
})
export class PermissionUpdateWithWhereUniqueWithoutRoleInput {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionUpdateWithoutRoleInput, {
    nullable: false
  })
  data!: PermissionUpdateWithoutRoleInput;
}
