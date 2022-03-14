import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateManyPermissionInputEnvelope } from "../inputs/PermissionSetCreateManyPermissionInputEnvelope";
import { PermissionSetCreateOrConnectWithoutPermissionInput } from "../inputs/PermissionSetCreateOrConnectWithoutPermissionInput";
import { PermissionSetCreateWithoutPermissionInput } from "../inputs/PermissionSetCreateWithoutPermissionInput";
import { PermissionSetScalarWhereInput } from "../inputs/PermissionSetScalarWhereInput";
import { PermissionSetUpdateManyWithWhereWithoutPermissionInput } from "../inputs/PermissionSetUpdateManyWithWhereWithoutPermissionInput";
import { PermissionSetUpdateWithWhereUniqueWithoutPermissionInput } from "../inputs/PermissionSetUpdateWithWhereUniqueWithoutPermissionInput";
import { PermissionSetUpsertWithWhereUniqueWithoutPermissionInput } from "../inputs/PermissionSetUpsertWithWhereUniqueWithoutPermissionInput";
import { PermissionSetWhereUniqueInput } from "../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.InputType("PermissionSetUpdateManyWithoutPermissionInput", {
  isAbstract: true
})
export class PermissionSetUpdateManyWithoutPermissionInput {
  @TypeGraphQL.Field(_type => [PermissionSetCreateWithoutPermissionInput], {
    nullable: true
  })
  create?: PermissionSetCreateWithoutPermissionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetCreateOrConnectWithoutPermissionInput], {
    nullable: true
  })
  connectOrCreate?: PermissionSetCreateOrConnectWithoutPermissionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetUpsertWithWhereUniqueWithoutPermissionInput], {
    nullable: true
  })
  upsert?: PermissionSetUpsertWithWhereUniqueWithoutPermissionInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionSetCreateManyPermissionInputEnvelope, {
    nullable: true
  })
  createMany?: PermissionSetCreateManyPermissionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetWhereUniqueInput], {
    nullable: true
  })
  set?: PermissionSetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PermissionSetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetWhereUniqueInput], {
    nullable: true
  })
  delete?: PermissionSetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetWhereUniqueInput], {
    nullable: true
  })
  connect?: PermissionSetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetUpdateWithWhereUniqueWithoutPermissionInput], {
    nullable: true
  })
  update?: PermissionSetUpdateWithWhereUniqueWithoutPermissionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetUpdateManyWithWhereWithoutPermissionInput], {
    nullable: true
  })
  updateMany?: PermissionSetUpdateManyWithWhereWithoutPermissionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PermissionSetScalarWhereInput[] | undefined;
}
