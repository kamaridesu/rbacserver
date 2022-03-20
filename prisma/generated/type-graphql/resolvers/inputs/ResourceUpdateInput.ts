import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionUpdateManyWithoutResourceInput } from "../inputs/PermissionUpdateManyWithoutResourceInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ResourceUpdateInput", {
  isAbstract: true
})
export class ResourceUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PermissionUpdateManyWithoutResourceInput, {
    nullable: true
  })
  permissions?: PermissionUpdateManyWithoutResourceInput | undefined;
}
