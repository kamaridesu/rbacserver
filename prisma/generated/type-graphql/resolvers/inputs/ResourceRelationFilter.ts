import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceWhereInput } from "../inputs/ResourceWhereInput";

@TypeGraphQL.InputType("ResourceRelationFilter", {
  isAbstract: true
})
export class ResourceRelationFilter {
  @TypeGraphQL.Field(_type => ResourceWhereInput, {
    nullable: true
  })
  is?: ResourceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ResourceWhereInput, {
    nullable: true
  })
  isNot?: ResourceWhereInput | undefined;
}
