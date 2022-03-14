import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetWhereInput } from "../inputs/PermissionSetWhereInput";

@TypeGraphQL.InputType("PermissionSetListRelationFilter", {
  isAbstract: true
})
export class PermissionSetListRelationFilter {
  @TypeGraphQL.Field(_type => PermissionSetWhereInput, {
    nullable: true
  })
  every?: PermissionSetWhereInput | undefined;

  @TypeGraphQL.Field(_type => PermissionSetWhereInput, {
    nullable: true
  })
  some?: PermissionSetWhereInput | undefined;

  @TypeGraphQL.Field(_type => PermissionSetWhereInput, {
    nullable: true
  })
  none?: PermissionSetWhereInput | undefined;
}
