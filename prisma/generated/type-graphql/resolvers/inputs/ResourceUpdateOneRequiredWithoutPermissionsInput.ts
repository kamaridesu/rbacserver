import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceCreateOrConnectWithoutPermissionsInput } from "../inputs/ResourceCreateOrConnectWithoutPermissionsInput";
import { ResourceCreateWithoutPermissionsInput } from "../inputs/ResourceCreateWithoutPermissionsInput";
import { ResourceUpdateWithoutPermissionsInput } from "../inputs/ResourceUpdateWithoutPermissionsInput";
import { ResourceUpsertWithoutPermissionsInput } from "../inputs/ResourceUpsertWithoutPermissionsInput";
import { ResourceWhereUniqueInput } from "../inputs/ResourceWhereUniqueInput";

@TypeGraphQL.InputType("ResourceUpdateOneRequiredWithoutPermissionsInput", {
  isAbstract: true
})
export class ResourceUpdateOneRequiredWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => ResourceCreateWithoutPermissionsInput, {
    nullable: true
  })
  create?: ResourceCreateWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ResourceCreateOrConnectWithoutPermissionsInput, {
    nullable: true
  })
  connectOrCreate?: ResourceCreateOrConnectWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ResourceUpsertWithoutPermissionsInput, {
    nullable: true
  })
  upsert?: ResourceUpsertWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ResourceWhereUniqueInput, {
    nullable: true
  })
  connect?: ResourceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ResourceUpdateWithoutPermissionsInput, {
    nullable: true
  })
  update?: ResourceUpdateWithoutPermissionsInput | undefined;
}
