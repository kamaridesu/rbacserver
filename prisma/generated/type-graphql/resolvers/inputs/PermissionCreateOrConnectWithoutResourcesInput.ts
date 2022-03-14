import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutResourcesInput } from "../inputs/PermissionCreateWithoutResourcesInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionCreateOrConnectWithoutResourcesInput", {
  isAbstract: true
})
export class PermissionCreateOrConnectWithoutResourcesInput {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionCreateWithoutResourcesInput, {
    nullable: false
  })
  create!: PermissionCreateWithoutResourcesInput;
}
