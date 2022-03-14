import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetListRelationFilter } from "../inputs/PermissionSetListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ResourceWhereInput", {
  isAbstract: true
})
export class ResourceWhereInput {
  @TypeGraphQL.Field(_type => [ResourceWhereInput], {
    nullable: true
  })
  AND?: ResourceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResourceWhereInput], {
    nullable: true
  })
  OR?: ResourceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResourceWhereInput], {
    nullable: true
  })
  NOT?: ResourceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PermissionSetListRelationFilter, {
    nullable: true
  })
  permissions?: PermissionSetListRelationFilter | undefined;
}
