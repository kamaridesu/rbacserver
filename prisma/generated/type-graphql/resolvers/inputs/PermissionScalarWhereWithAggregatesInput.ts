import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PermissionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PermissionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  roleId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  resourceId?: StringNullableWithAggregatesFilter | undefined;
}
