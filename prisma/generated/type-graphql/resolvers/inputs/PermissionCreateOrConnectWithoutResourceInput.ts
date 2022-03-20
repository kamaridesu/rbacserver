import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutResourceInput } from "../inputs/PermissionCreateWithoutResourceInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionCreateOrConnectWithoutResourceInput", {
  isAbstract: true
})
export class PermissionCreateOrConnectWithoutResourceInput {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionCreateWithoutResourceInput, {
    nullable: false
  })
  create!: PermissionCreateWithoutResourceInput;
}
