import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PermissionSetMaxAggregate", {
  isAbstract: true
})
export class PermissionSetMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resourceId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  permissionId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isallowed!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy!: string | null;
}
