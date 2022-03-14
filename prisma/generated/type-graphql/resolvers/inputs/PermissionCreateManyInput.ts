import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PermissionCreateManyInput", {
  isAbstract: true
})
export class PermissionCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
