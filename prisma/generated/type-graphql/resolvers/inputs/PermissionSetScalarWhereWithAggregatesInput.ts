import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PermissionSetScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PermissionSetScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PermissionSetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PermissionSetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PermissionSetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PermissionSetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  resourceId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  permissionId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isallowed?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  createdBy?: StringWithAggregatesFilter | undefined;
}
