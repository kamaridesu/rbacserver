import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateManyPermissionInputEnvelope } from "../inputs/PermissionSetCreateManyPermissionInputEnvelope";
import { PermissionSetCreateOrConnectWithoutPermissionInput } from "../inputs/PermissionSetCreateOrConnectWithoutPermissionInput";
import { PermissionSetCreateWithoutPermissionInput } from "../inputs/PermissionSetCreateWithoutPermissionInput";
import { PermissionSetWhereUniqueInput } from "../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.InputType("PermissionSetCreateNestedManyWithoutPermissionInput", {
  isAbstract: true
})
export class PermissionSetCreateNestedManyWithoutPermissionInput {
  @TypeGraphQL.Field(_type => [PermissionSetCreateWithoutPermissionInput], {
    nullable: true
  })
  create?: PermissionSetCreateWithoutPermissionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetCreateOrConnectWithoutPermissionInput], {
    nullable: true
  })
  connectOrCreate?: PermissionSetCreateOrConnectWithoutPermissionInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionSetCreateManyPermissionInputEnvelope, {
    nullable: true
  })
  createMany?: PermissionSetCreateManyPermissionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetWhereUniqueInput], {
    nullable: true
  })
  connect?: PermissionSetWhereUniqueInput[] | undefined;
}
