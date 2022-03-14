import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PermissionSetCreateManyInput", {
  isAbstract: true
})
export class PermissionSetCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  resourceId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  permissionId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isallowed!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;
}
