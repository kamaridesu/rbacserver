import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionNameRoleIdResourceIdCompoundUniqueInput } from "../inputs/PermissionNameRoleIdResourceIdCompoundUniqueInput";

@TypeGraphQL.InputType("PermissionWhereUniqueInput", {
  isAbstract: true
})
export class PermissionWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => PermissionNameRoleIdResourceIdCompoundUniqueInput, {
    nullable: true
  })
  name_roleId_resourceId?: PermissionNameRoleIdResourceIdCompoundUniqueInput | undefined;
}
