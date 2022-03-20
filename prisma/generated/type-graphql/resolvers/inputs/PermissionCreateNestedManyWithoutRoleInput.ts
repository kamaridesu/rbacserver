import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateManyRoleInputEnvelope } from "../inputs/PermissionCreateManyRoleInputEnvelope";
import { PermissionCreateOrConnectWithoutRoleInput } from "../inputs/PermissionCreateOrConnectWithoutRoleInput";
import { PermissionCreateWithoutRoleInput } from "../inputs/PermissionCreateWithoutRoleInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionCreateNestedManyWithoutRoleInput", {
  isAbstract: true
})
export class PermissionCreateNestedManyWithoutRoleInput {
  @TypeGraphQL.Field(_type => [PermissionCreateWithoutRoleInput], {
    nullable: true
  })
  create?: PermissionCreateWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionCreateOrConnectWithoutRoleInput], {
    nullable: true
  })
  connectOrCreate?: PermissionCreateOrConnectWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionCreateManyRoleInputEnvelope, {
    nullable: true
  })
  createMany?: PermissionCreateManyRoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  connect?: PermissionWhereUniqueInput[] | undefined;
}
