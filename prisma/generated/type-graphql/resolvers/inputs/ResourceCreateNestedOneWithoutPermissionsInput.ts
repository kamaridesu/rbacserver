import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceCreateOrConnectWithoutPermissionsInput } from "../inputs/ResourceCreateOrConnectWithoutPermissionsInput";
import { ResourceCreateWithoutPermissionsInput } from "../inputs/ResourceCreateWithoutPermissionsInput";
import { ResourceWhereUniqueInput } from "../inputs/ResourceWhereUniqueInput";

@TypeGraphQL.InputType("ResourceCreateNestedOneWithoutPermissionsInput", {
  isAbstract: true
})
export class ResourceCreateNestedOneWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => ResourceCreateWithoutPermissionsInput, {
    nullable: true
  })
  create?: ResourceCreateWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ResourceCreateOrConnectWithoutPermissionsInput, {
    nullable: true
  })
  connectOrCreate?: ResourceCreateOrConnectWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ResourceWhereUniqueInput, {
    nullable: true
  })
  connect?: ResourceWhereUniqueInput | undefined;
}
