import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateNestedManyWithoutRoleInput } from "../inputs/PermissionCreateNestedManyWithoutRoleInput";
import { UserCreateNestedManyWithoutRoleInput } from "../inputs/UserCreateNestedManyWithoutRoleInput";

@TypeGraphQL.InputType("RoleCreateInput", {
  isAbstract: true
})
export class RoleCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PermissionCreateNestedManyWithoutRoleInput, {
    nullable: true
  })
  permissions?: PermissionCreateNestedManyWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRoleInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutRoleInput | undefined;
}
