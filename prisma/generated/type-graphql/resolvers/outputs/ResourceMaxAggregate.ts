import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ResourceMaxAggregate", {
  isAbstract: true
})
export class ResourceMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;
}
