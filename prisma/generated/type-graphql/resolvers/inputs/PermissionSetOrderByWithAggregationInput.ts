import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCountOrderByAggregateInput } from "../inputs/PermissionSetCountOrderByAggregateInput";
import { PermissionSetMaxOrderByAggregateInput } from "../inputs/PermissionSetMaxOrderByAggregateInput";
import { PermissionSetMinOrderByAggregateInput } from "../inputs/PermissionSetMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PermissionSetOrderByWithAggregationInput", {
  isAbstract: true
})
export class PermissionSetOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resourceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  permissionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isallowed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdBy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PermissionSetCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PermissionSetCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionSetMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PermissionSetMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionSetMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PermissionSetMinOrderByAggregateInput | undefined;
}
