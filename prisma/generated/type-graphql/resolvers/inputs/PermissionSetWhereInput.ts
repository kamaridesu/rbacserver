import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PermissionRelationFilter } from "../inputs/PermissionRelationFilter";
import { ResourceRelationFilter } from "../inputs/ResourceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PermissionSetWhereInput", {
  isAbstract: true
})
export class PermissionSetWhereInput {
  @TypeGraphQL.Field(_type => [PermissionSetWhereInput], {
    nullable: true
  })
  AND?: PermissionSetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetWhereInput], {
    nullable: true
  })
  OR?: PermissionSetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetWhereInput], {
    nullable: true
  })
  NOT?: PermissionSetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => ResourceRelationFilter, {
    nullable: true
  })
  resource?: ResourceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  resourceId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PermissionRelationFilter, {
    nullable: true
  })
  permission?: PermissionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  permissionId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isallowed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  createdBy?: StringFilter | undefined;
}
