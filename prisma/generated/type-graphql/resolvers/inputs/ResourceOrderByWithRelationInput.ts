import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionOrderByRelationAggregateInput } from "../inputs/PermissionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ResourceOrderByWithRelationInput", {
  isAbstract: true
})
export class ResourceOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PermissionOrderByRelationAggregateInput, {
    nullable: true
  })
  permissions?: PermissionOrderByRelationAggregateInput | undefined;
}
