import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutRoleInput } from "../inputs/UserUpdateManyWithoutRoleInput";

@TypeGraphQL.InputType("RoleUpdateWithoutPermissionsInput", {
  isAbstract: true
})
export class RoleUpdateWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutRoleInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutRoleInput | undefined;
}
