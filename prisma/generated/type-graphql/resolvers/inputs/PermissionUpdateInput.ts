import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceUpdateOneWithoutPermissionsInput } from "../inputs/ResourceUpdateOneWithoutPermissionsInput";
import { RoleUpdateOneWithoutPermissionsInput } from "../inputs/RoleUpdateOneWithoutPermissionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PermissionUpdateInput", {
  isAbstract: true
})
export class PermissionUpdateInput {
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

  @TypeGraphQL.Field(_type => ResourceUpdateOneWithoutPermissionsInput, {
    nullable: true
  })
  resource?: ResourceUpdateOneWithoutPermissionsInput | undefined;
}
