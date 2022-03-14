import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceCountOrderByAggregateInput } from "../inputs/ResourceCountOrderByAggregateInput";
import { ResourceMaxOrderByAggregateInput } from "../inputs/ResourceMaxOrderByAggregateInput";
import { ResourceMinOrderByAggregateInput } from "../inputs/ResourceMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ResourceOrderByWithAggregationInput", {
  isAbstract: true
})
export class ResourceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ResourceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ResourceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ResourceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ResourceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ResourceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ResourceMinOrderByAggregateInput | undefined;
}
