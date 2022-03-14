import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionOrderByWithRelationInput } from "../inputs/PermissionOrderByWithRelationInput";
import { ResourceOrderByWithRelationInput } from "../inputs/ResourceOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PermissionSetOrderByWithRelationInput", {
  isAbstract: true
})
export class PermissionSetOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => ResourceOrderByWithRelationInput, {
    nullable: true
  })
  resource?: ResourceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resourceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PermissionOrderByWithRelationInput, {
    nullable: true
  })
  permission?: PermissionOrderByWithRelationInput | undefined;

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
}
