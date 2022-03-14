import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateOrConnectWithoutResourcesInput } from "../inputs/PermissionCreateOrConnectWithoutResourcesInput";
import { PermissionCreateWithoutResourcesInput } from "../inputs/PermissionCreateWithoutResourcesInput";
import { PermissionUpdateWithoutResourcesInput } from "../inputs/PermissionUpdateWithoutResourcesInput";
import { PermissionUpsertWithoutResourcesInput } from "../inputs/PermissionUpsertWithoutResourcesInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionUpdateOneRequiredWithoutResourcesInput", {
  isAbstract: true
})
export class PermissionUpdateOneRequiredWithoutResourcesInput {
  @TypeGraphQL.Field(_type => PermissionCreateWithoutResourcesInput, {
    nullable: true
  })
  create?: PermissionCreateWithoutResourcesInput | undefined;

  @TypeGraphQL.Field(_type => PermissionCreateOrConnectWithoutResourcesInput, {
    nullable: true
  })
  connectOrCreate?: PermissionCreateOrConnectWithoutResourcesInput | undefined;

  @TypeGraphQL.Field(_type => PermissionUpsertWithoutResourcesInput, {
    nullable: true
  })
  upsert?: PermissionUpsertWithoutResourcesInput | undefined;

  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: true
  })
  connect?: PermissionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PermissionUpdateWithoutResourcesInput, {
    nullable: true
  })
  update?: PermissionUpdateWithoutResourcesInput | undefined;
}
