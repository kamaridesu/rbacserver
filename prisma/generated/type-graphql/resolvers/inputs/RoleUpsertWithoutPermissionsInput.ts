import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutPermissionsInput } from "../inputs/RoleCreateWithoutPermissionsInput";
import { RoleUpdateWithoutPermissionsInput } from "../inputs/RoleUpdateWithoutPermissionsInput";

@TypeGraphQL.InputType("RoleUpsertWithoutPermissionsInput", {
  isAbstract: true
})
export class RoleUpsertWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => RoleUpdateWithoutPermissionsInput, {
    nullable: false
  })
  update!: RoleUpdateWithoutPermissionsInput;

  @TypeGraphQL.Field(_type => RoleCreateWithoutPermissionsInput, {
    nullable: false
  })
  create!: RoleCreateWithoutPermissionsInput;
}
