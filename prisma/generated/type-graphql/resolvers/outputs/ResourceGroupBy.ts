import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceCountAggregate } from "../outputs/ResourceCountAggregate";
import { ResourceMaxAggregate } from "../outputs/ResourceMaxAggregate";
import { ResourceMinAggregate } from "../outputs/ResourceMinAggregate";

@TypeGraphQL.ObjectType("ResourceGroupBy", {
  isAbstract: true
})
export class ResourceGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ResourceCountAggregate, {
    nullable: true
  })
  _count!: ResourceCountAggregate | null;

  @TypeGraphQL.Field(_type => ResourceMinAggregate, {
    nullable: true
  })
  _min!: ResourceMinAggregate | null;

  @TypeGraphQL.Field(_type => ResourceMaxAggregate, {
    nullable: true
  })
  _max!: ResourceMaxAggregate | null;
}
