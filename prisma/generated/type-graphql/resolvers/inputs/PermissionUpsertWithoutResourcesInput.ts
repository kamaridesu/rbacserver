import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutResourcesInput } from "../inputs/PermissionCreateWithoutResourcesInput";
import { PermissionUpdateWithoutResourcesInput } from "../inputs/PermissionUpdateWithoutResourcesInput";

@TypeGraphQL.InputType("PermissionUpsertWithoutResourcesInput", {
  isAbstract: true
})
export class PermissionUpsertWithoutResourcesInput {
  @TypeGraphQL.Field(_type => PermissionUpdateWithoutResourcesInput, {
    nullable: false
  })
  update!: PermissionUpdateWithoutResourcesInput;

  @TypeGraphQL.Field(_type => PermissionCreateWithoutResourcesInput, {
    nullable: false
  })
  create!: PermissionCreateWithoutResourcesInput;
}
