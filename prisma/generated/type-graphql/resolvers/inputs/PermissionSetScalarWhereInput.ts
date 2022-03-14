import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PermissionSetScalarWhereInput", {
  isAbstract: true
})
export class PermissionSetScalarWhereInput {
  @TypeGraphQL.Field(_type => [PermissionSetScalarWhereInput], {
    nullable: true
  })
  AND?: PermissionSetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetScalarWhereInput], {
    nullable: true
  })
  OR?: PermissionSetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetScalarWhereInput], {
    nullable: true
  })
  NOT?: PermissionSetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  resourceId?: StringFilter | undefined;

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
