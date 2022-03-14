import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PermissionMaxAggregate", {
  isAbstract: true
})
export class PermissionMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;
}
