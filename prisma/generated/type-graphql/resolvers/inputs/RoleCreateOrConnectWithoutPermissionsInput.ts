import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutPermissionsInput } from "../inputs/RoleCreateWithoutPermissionsInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType("RoleCreateOrConnectWithoutPermissionsInput", {
  isAbstract: true
})
export class RoleCreateOrConnectWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: false
  })
  where!: RoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoleCreateWithoutPermissionsInput, {
    nullable: false
  })
  create!: RoleCreateWithoutPermissionsInput;
}
