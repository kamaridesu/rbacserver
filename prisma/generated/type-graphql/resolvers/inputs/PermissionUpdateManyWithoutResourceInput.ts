import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateManyResourceInputEnvelope } from "../inputs/PermissionCreateManyResourceInputEnvelope";
import { PermissionCreateOrConnectWithoutResourceInput } from "../inputs/PermissionCreateOrConnectWithoutResourceInput";
import { PermissionCreateWithoutResourceInput } from "../inputs/PermissionCreateWithoutResourceInput";
import { PermissionScalarWhereInput } from "../inputs/PermissionScalarWhereInput";
import { PermissionUpdateManyWithWhereWithoutResourceInput } from "../inputs/PermissionUpdateManyWithWhereWithoutResourceInput";
import { PermissionUpdateWithWhereUniqueWithoutResourceInput } from "../inputs/PermissionUpdateWithWhereUniqueWithoutResourceInput";
import { PermissionUpsertWithWhereUniqueWithoutResourceInput } from "../inputs/PermissionUpsertWithWhereUniqueWithoutResourceInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionUpdateManyWithoutResourceInput", {
  isAbstract: true
})
export class PermissionUpdateManyWithoutResourceInput {
  @TypeGraphQL.Field(_type => [PermissionCreateWithoutResourceInput], {
    nullable: true
  })
  create?: PermissionCreateWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionCreateOrConnectWithoutResourceInput], {
    nullable: true
  })
  connectOrCreate?: PermissionCreateOrConnectWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionUpsertWithWhereUniqueWithoutResourceInput], {
    nullable: true
  })
  upsert?: PermissionUpsertWithWhereUniqueWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionCreateManyResourceInputEnvelope, {
    nullable: true
  })
  createMany?: PermissionCreateManyResourceInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PermissionUpdateWithWhereUniqueWithoutResourceInput], {
    nullable: true
  })
  update?: PermissionUpdateWithWhereUniqueWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionUpdateManyWithWhereWithoutResourceInput], {
    nullable: true
  })
  updateMany?: PermissionUpdateManyWithWhereWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PermissionScalarWhereInput[] | undefined;
}
