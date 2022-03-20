import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceOrderByWithRelationInput } from "../inputs/ResourceOrderByWithRelationInput";
import { RoleOrderByWithRelationInput } from "../inputs/RoleOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PermissionOrderByWithRelationInput", {
  isAbstract: true
})
export class PermissionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RoleOrderByWithRelationInput, {
    nullable: true
  })
  role?: RoleOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  roleId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ResourceOrderByWithRelationInput, {
    nullable: true
  })
  resource?: ResourceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resourceId?: "asc" | "desc" | undefined;
}
