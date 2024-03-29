import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("RoleMinAggregate", {
  isAbstract: true
})
export class RoleMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;
}
