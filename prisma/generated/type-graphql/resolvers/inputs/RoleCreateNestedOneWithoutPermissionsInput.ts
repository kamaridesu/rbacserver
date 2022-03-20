import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateOrConnectWithoutPermissionsInput } from "../inputs/RoleCreateOrConnectWithoutPermissionsInput";
import { RoleCreateWithoutPermissionsInput } from "../inputs/RoleCreateWithoutPermissionsInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType("RoleCreateNestedOneWithoutPermissionsInput", {
  isAbstract: true
})
export class RoleCreateNestedOneWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => RoleCreateWithoutPermissionsInput, {
    nullable: true
  })
  create?: RoleCreateWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => RoleCreateOrConnectWithoutPermissionsInput, {
    nullable: true
  })
  connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: true
  })
  connect?: RoleWhereUniqueInput | undefined;
}
