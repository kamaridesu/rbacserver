import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutRoleInput } from "../inputs/UserCreateNestedManyWithoutRoleInput";

@TypeGraphQL.InputType("RoleCreateWithoutPermissionsInput", {
  isAbstract: true
})
export class RoleCreateWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRoleInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutRoleInput | undefined;
}
