import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetResourceIdPermissionIdCompoundUniqueInput } from "../inputs/PermissionSetResourceIdPermissionIdCompoundUniqueInput";

@TypeGraphQL.InputType("PermissionSetWhereUniqueInput", {
  isAbstract: true
})
export class PermissionSetWhereUniqueInput {
  @TypeGraphQL.Field(_type => PermissionSetResourceIdPermissionIdCompoundUniqueInput, {
    nullable: true
  })
  resourceId_permissionId?: PermissionSetResourceIdPermissionIdCompoundUniqueInput | undefined;
}
