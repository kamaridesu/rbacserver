import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PermissionSetResourceIdPermissionIdCompoundUniqueInput", {
  isAbstract: true
})
export class PermissionSetResourceIdPermissionIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  resourceId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  permissionId!: string;
}
