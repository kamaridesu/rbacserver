import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleUpdateOneWithoutPermissionsInput } from "../inputs/RoleUpdateOneWithoutPermissionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PermissionUpdateWithoutResourceInput", {
  isAbstract: true
})
export class PermissionUpdateWithoutResourceInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RoleUpdateOneWithoutPermissionsInput, {
    nullable: true
  })
  role?: RoleUpdateOneWithoutPermissionsInput | undefined;
}
