import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetListRelationFilter } from "../inputs/PermissionSetListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PermissionWhereInput", {
  isAbstract: true
})
export class PermissionWhereInput {
  @TypeGraphQL.Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  AND?: PermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  OR?: PermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  NOT?: PermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PermissionSetListRelationFilter, {
    nullable: true
  })
  resources?: PermissionSetListRelationFilter | undefined;
}
