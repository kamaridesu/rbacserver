import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ResourceMinAggregate", {
  isAbstract: true
})
export class ResourceMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;
}
