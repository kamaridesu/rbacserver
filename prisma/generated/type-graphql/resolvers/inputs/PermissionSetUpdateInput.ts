import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PermissionUpdateOneRequiredWithoutResourcesInput } from "../inputs/PermissionUpdateOneRequiredWithoutResourcesInput";
import { ResourceUpdateOneRequiredWithoutPermissionsInput } from "../inputs/ResourceUpdateOneRequiredWithoutPermissionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PermissionSetUpdateInput", {
  isAbstract: true
})
export class PermissionSetUpdateInput {
  @TypeGraphQL.Field(_type => ResourceUpdateOneRequiredWithoutPermissionsInput, {
    nullable: true
  })
  resource?: ResourceUpdateOneRequiredWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => PermissionUpdateOneRequiredWithoutResourcesInput, {
    nullable: true
  })
  permission?: PermissionUpdateOneRequiredWithoutResourcesInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isallowed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  createdBy?: StringFieldUpdateOperationsInput | undefined;
}