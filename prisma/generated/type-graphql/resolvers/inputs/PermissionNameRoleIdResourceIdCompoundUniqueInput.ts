import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PermissionNameRoleIdResourceIdCompoundUniqueInput", {
  isAbstract: true
})
export class PermissionNameRoleIdResourceIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  roleId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  resourceId!: string;
}
