import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceUpdateOneWithoutPermissionsInput } from "../inputs/ResourceUpdateOneWithoutPermissionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PermissionUpdateWithoutRoleInput", {
  isAbstract: true
})
export class PermissionUpdateWithoutRoleInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ResourceUpdateOneWithoutPermissionsInput, {
    nullable: true
  })
  resource?: ResourceUpdateOneWithoutPermissionsInput | undefined;
}
