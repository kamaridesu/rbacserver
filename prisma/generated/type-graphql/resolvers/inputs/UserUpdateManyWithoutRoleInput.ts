import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyRoleInputEnvelope } from "../inputs/UserCreateManyRoleInputEnvelope";
import { UserCreateOrConnectWithoutRoleInput } from "../inputs/UserCreateOrConnectWithoutRoleInput";
import { UserCreateWithoutRoleInput } from "../inputs/UserCreateWithoutRoleInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutRoleInput } from "../inputs/UserUpdateManyWithWhereWithoutRoleInput";
import { UserUpdateWithWhereUniqueWithoutRoleInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRoleInput";
import { UserUpsertWithWhereUniqueWithoutRoleInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutRoleInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutRoleInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRoleInput], {
    nullable: true
  })
  create?: UserCreateWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRoleInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRoleInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyRoleInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyRoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRoleInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutRoleInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
