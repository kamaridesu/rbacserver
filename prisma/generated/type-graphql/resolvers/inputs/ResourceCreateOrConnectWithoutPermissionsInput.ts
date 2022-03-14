import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceCreateWithoutPermissionsInput } from "../inputs/ResourceCreateWithoutPermissionsInput";
import { ResourceWhereUniqueInput } from "../inputs/ResourceWhereUniqueInput";

@TypeGraphQL.InputType("ResourceCreateOrConnectWithoutPermissionsInput", {
  isAbstract: true
})
export class ResourceCreateOrConnectWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => ResourceWhereUniqueInput, {
    nullable: false
  })
  where!: ResourceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResourceCreateWithoutPermissionsInput, {
    nullable: false
  })
  create!: ResourceCreateWithoutPermissionsInput;
}
