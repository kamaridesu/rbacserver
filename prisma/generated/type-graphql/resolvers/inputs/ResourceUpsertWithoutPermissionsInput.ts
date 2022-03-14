import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceCreateWithoutPermissionsInput } from "../inputs/ResourceCreateWithoutPermissionsInput";
import { ResourceUpdateWithoutPermissionsInput } from "../inputs/ResourceUpdateWithoutPermissionsInput";

@TypeGraphQL.InputType("ResourceUpsertWithoutPermissionsInput", {
  isAbstract: true
})
export class ResourceUpsertWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => ResourceUpdateWithoutPermissionsInput, {
    nullable: false
  })
  update!: ResourceUpdateWithoutPermissionsInput;

  @TypeGraphQL.Field(_type => ResourceCreateWithoutPermissionsInput, {
    nullable: false
  })
  create!: ResourceCreateWithoutPermissionsInput;
}
