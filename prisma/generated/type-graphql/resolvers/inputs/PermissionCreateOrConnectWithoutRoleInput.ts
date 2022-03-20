import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutRoleInput } from "../inputs/PermissionCreateWithoutRoleInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionCreateOrConnectWithoutRoleInput", {
  isAbstract: true
})
export class PermissionCreateOrConnectWithoutRoleInput {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionCreateWithoutRoleInput, {
    nullable: false
  })
  create!: PermissionCreateWithoutRoleInput;
}
