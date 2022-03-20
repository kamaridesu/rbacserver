import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateNestedManyWithoutRoleInput } from "../inputs/PermissionCreateNestedManyWithoutRoleInput";

@TypeGraphQL.InputType("RoleCreateWithoutUsersInput", {
  isAbstract: true
})
export class RoleCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PermissionCreateNestedManyWithoutRoleInput, {
    nullable: true
  })
  permissions?: PermissionCreateNestedManyWithoutRoleInput | undefined;
}
