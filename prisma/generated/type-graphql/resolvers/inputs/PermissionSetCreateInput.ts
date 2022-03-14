import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateNestedOneWithoutResourcesInput } from "../inputs/PermissionCreateNestedOneWithoutResourcesInput";
import { ResourceCreateNestedOneWithoutPermissionsInput } from "../inputs/ResourceCreateNestedOneWithoutPermissionsInput";

@TypeGraphQL.InputType("PermissionSetCreateInput", {
  isAbstract: true
})
export class PermissionSetCreateInput {
  @TypeGraphQL.Field(_type => ResourceCreateNestedOneWithoutPermissionsInput, {
    nullable: false
  })
  resource!: ResourceCreateNestedOneWithoutPermissionsInput;

  @TypeGraphQL.Field(_type => PermissionCreateNestedOneWithoutResourcesInput, {
    nullable: false
  })
  permission!: PermissionCreateNestedOneWithoutResourcesInput;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isallowed!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;
}
