import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ResourceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ResourceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ResourceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ResourceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResourceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ResourceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResourceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ResourceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
