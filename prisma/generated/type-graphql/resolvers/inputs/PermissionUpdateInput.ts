import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetUpdateManyWithoutPermissionInput } from "../inputs/PermissionSetUpdateManyWithoutPermissionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PermissionUpdateInput", {
  isAbstract: true
})
export class PermissionUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PermissionSetUpdateManyWithoutPermissionInput, {
    nullable: true
  })
  resources?: PermissionSetUpdateManyWithoutPermissionInput | undefined;
}
