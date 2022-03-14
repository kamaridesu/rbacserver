import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateNestedManyWithoutResourceInput } from "../inputs/PermissionSetCreateNestedManyWithoutResourceInput";

@TypeGraphQL.InputType("ResourceCreateInput", {
  isAbstract: true
})
export class ResourceCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PermissionSetCreateNestedManyWithoutResourceInput, {
    nullable: true
  })
  permissions?: PermissionSetCreateNestedManyWithoutResourceInput | undefined;
}
