import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateManyResourceInputEnvelope } from "../inputs/PermissionSetCreateManyResourceInputEnvelope";
import { PermissionSetCreateOrConnectWithoutResourceInput } from "../inputs/PermissionSetCreateOrConnectWithoutResourceInput";
import { PermissionSetCreateWithoutResourceInput } from "../inputs/PermissionSetCreateWithoutResourceInput";
import { PermissionSetWhereUniqueInput } from "../inputs/PermissionSetWhereUniqueInput";

@TypeGraphQL.InputType("PermissionSetCreateNestedManyWithoutResourceInput", {
  isAbstract: true
})
export class PermissionSetCreateNestedManyWithoutResourceInput {
  @TypeGraphQL.Field(_type => [PermissionSetCreateWithoutResourceInput], {
    nullable: true
  })
  create?: PermissionSetCreateWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetCreateOrConnectWithoutResourceInput], {
    nullable: true
  })
  connectOrCreate?: PermissionSetCreateOrConnectWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionSetCreateManyResourceInputEnvelope, {
    nullable: true
  })
  createMany?: PermissionSetCreateManyResourceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetWhereUniqueInput], {
    nullable: true
  })
  connect?: PermissionSetWhereUniqueInput[] | undefined;
}
