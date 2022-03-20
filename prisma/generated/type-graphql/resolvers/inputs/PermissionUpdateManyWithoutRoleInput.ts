import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateManyRoleInputEnvelope } from "../inputs/PermissionCreateManyRoleInputEnvelope";
import { PermissionCreateOrConnectWithoutRoleInput } from "../inputs/PermissionCreateOrConnectWithoutRoleInput";
import { PermissionCreateWithoutRoleInput } from "../inputs/PermissionCreateWithoutRoleInput";
import { PermissionScalarWhereInput } from "../inputs/PermissionScalarWhereInput";
import { PermissionUpdateManyWithWhereWithoutRoleInput } from "../inputs/PermissionUpdateManyWithWhereWithoutRoleInput";
import { PermissionUpdateWithWhereUniqueWithoutRoleInput } from "../inputs/PermissionUpdateWithWhereUniqueWithoutRoleInput";
import { PermissionUpsertWithWhereUniqueWithoutRoleInput } from "../inputs/PermissionUpsertWithWhereUniqueWithoutRoleInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionUpdateManyWithoutRoleInput", {
  isAbstract: true
})
export class PermissionUpdateManyWithoutRoleInput {
  @TypeGraphQL.Field(_type => [PermissionCreateWithoutRoleInput], {
    nullable: true
  })
  create?: PermissionCreateWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionCreateOrConnectWithoutRoleInput], {
    nullable: true
  })
  connectOrCreate?: PermissionCreateOrConnectWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionUpsertWithWhereUniqueWithoutRoleInput], {
    nullable: true
  })
  upsert?: PermissionUpsertWithWhereUniqueWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionCreateManyRoleInputEnvelope, {
    nullable: true
  })
  createMany?: PermissionCreateManyRoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  set?: PermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  delete?: PermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  connect?: PermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionUpdateWithWhereUniqueWithoutRoleInput], {
    nullable: true
  })
  update?: PermissionUpdateWithWhereUniqueWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionUpdateManyWithWhereWithoutRoleInput], {
    nullable: true
  })
  updateMany?: PermissionUpdateManyWithWhereWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PermissionScalarWhereInput[] | undefined;
}
