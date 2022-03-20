import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PermissionScalarWhereInput", {
  isAbstract: true
})
export class PermissionScalarWhereInput {
  @TypeGraphQL.Field(_type => [PermissionScalarWhereInput], {
    nullable: true
  })
  AND?: PermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereInput], {
    nullable: true
  })
  OR?: PermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereInput], {
    nullable: true
  })
  NOT?: PermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  roleId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  resourceId?: StringNullableFilter | undefined;
}
