import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateManyResourceInputEnvelope } from "../inputs/PermissionCreateManyResourceInputEnvelope";
import { PermissionCreateOrConnectWithoutResourceInput } from "../inputs/PermissionCreateOrConnectWithoutResourceInput";
import { PermissionCreateWithoutResourceInput } from "../inputs/PermissionCreateWithoutResourceInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionCreateNestedManyWithoutResourceInput", {
  isAbstract: true
})
export class PermissionCreateNestedManyWithoutResourceInput {
  @TypeGraphQL.Field(_type => [PermissionCreateWithoutResourceInput], {
    nullable: true
  })
  create?: PermissionCreateWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionCreateOrConnectWithoutResourceInput], {
    nullable: true
  })
  connectOrCreate?: PermissionCreateOrConnectWithoutResourceInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionCreateManyResourceInputEnvelope, {
    nullable: true
  })
  createMany?: PermissionCreateManyResourceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  connect?: PermissionWhereUniqueInput[] | undefined;
}
