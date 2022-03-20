import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionUpdateManyWithoutRoleInput } from "../inputs/PermissionUpdateManyWithoutRoleInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RoleUpdateWithoutUsersInput", {
  isAbstract: true
})
export class RoleUpdateWithoutUsersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PermissionUpdateManyWithoutRoleInput, {
    nullable: true
  })
  permissions?: PermissionUpdateManyWithoutRoleInput | undefined;
}
