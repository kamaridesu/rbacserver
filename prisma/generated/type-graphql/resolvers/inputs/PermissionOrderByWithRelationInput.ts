import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetOrderByRelationAggregateInput } from "../inputs/PermissionSetOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PermissionOrderByWithRelationInput", {
  isAbstract: true
})
export class PermissionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PermissionSetOrderByRelationAggregateInput, {
    nullable: true
  })
  resources?: PermissionSetOrderByRelationAggregateInput | undefined;
}
