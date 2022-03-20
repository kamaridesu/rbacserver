import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResourceCreateNestedOneWithoutPermissionsInput } from "../inputs/ResourceCreateNestedOneWithoutPermissionsInput";
import { RoleCreateNestedOneWithoutPermissionsInput } from "../inputs/RoleCreateNestedOneWithoutPermissionsInput";

@TypeGraphQL.InputType("PermissionCreateInput", {
  isAbstract: true
})
export class PermissionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => RoleCreateNestedOneWithoutPermissionsInput, {
    nullable: true
  })
  role?: RoleCreateNestedOneWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ResourceCreateNestedOneWithoutPermissionsInput, {
    nullable: true
  })
  resource?: ResourceCreateNestedOneWithoutPermissionsInput | undefined;
}
