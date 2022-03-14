import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionWhereInput } from "../inputs/PermissionWhereInput";

@TypeGraphQL.InputType("PermissionRelationFilter", {
  isAbstract: true
})
export class PermissionRelationFilter {
  @TypeGraphQL.Field(_type => PermissionWhereInput, {
    nullable: true
  })
  is?: PermissionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PermissionWhereInput, {
    nullable: true
  })
  isNot?: PermissionWhereInput | undefined;
}
