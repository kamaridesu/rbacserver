import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateNestedManyWithoutPermissionInput } from "../inputs/PermissionSetCreateNestedManyWithoutPermissionInput";

@TypeGraphQL.InputType("PermissionCreateInput", {
  isAbstract: true
})
export class PermissionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PermissionSetCreateNestedManyWithoutPermissionInput, {
    nullable: true
  })
  resources?: PermissionSetCreateNestedManyWithoutPermissionInput | undefined;
}
