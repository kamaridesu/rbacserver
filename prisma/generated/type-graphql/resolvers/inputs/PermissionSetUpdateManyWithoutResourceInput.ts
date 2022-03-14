import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateManyResourceInputEnvelope } from "../inputs/PermissionSetCreateManyResourceInputEnvelope";
import { PermissionSetCreateOrConnectWithoutResourceInput } from "../inputs/PermissionSetCreateOrConnectWithoutResourceInput";
import { PermissionSetCreateWithoutResourceInput } from "../inputs/PermissionSetCreateWithoutResourceInput";
import { PermissionSetScalarWhereInput } from "../inputs/PermissionSetScalarWhereInput";
import { PermissionSetUpdateManyWithWhereWithoutResourceInput } from "../inputs/PermissionSetUpdateManyWithWhereWithoutResourceInput";
import { PermissionSetUpdateWithWhereUniqueWithoutResourceInput } from "../inputs/PermissionSetUpdateWithWhereUniqueWithoutResourceInput";
import { PermissionSetUpsertWithWhereUniqueWithoutResourceInput } from "../inputs/PermissionSetUpsertWithWhereUniqueWithoutResourceInput";
import { PermissionSetWhereUniqueInput } from "../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.InputType("PermissionSetUpdateManyWithoutResourceInput", {
  isAbstract: true
})
export class PermissionSetUpdateManyWithoutResourceInput {
  @TypeGraphQL.Field(_type => [PermissionSetCreateWithoutResourceInput], {
    nullable: true
  })
  create?: PermissionSetCreateWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetCreateOrConnectWithoutResourceInput], {
    nullable: true
  })
  connectOrCreate?: PermissionSetCreateOrConnectWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetUpsertWithWhereUniqueWithoutResourceInput], {
    nullable: true
  })
  upsert?: PermissionSetUpsertWithWhereUniqueWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionSetCreateManyResourceInputEnvelope, {
    nullable: true
  })
  createMany?: PermissionSetCreateManyResourceInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PermissionSetUpdateWithWhereUniqueWithoutResourceInput], {
    nullable: true
  })
  update?: PermissionSetUpdateWithWhereUniqueWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetUpdateManyWithWhereWithoutResourceInput], {
    nullable: true
  })
  updateMany?: PermissionSetUpdateManyWithWhereWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PermissionSetScalarWhereInput[] | undefined;
}
