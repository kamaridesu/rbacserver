import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateManyRoleInput } from "../inputs/PermissionCreateManyRoleInput";

@TypeGraphQL.InputType("PermissionCreateManyRoleInputEnvelope", {
  isAbstract: true
})
export class PermissionCreateManyRoleInputEnvelope {
  @TypeGraphQL.Field(_type => [PermissionCreateManyRoleInput], {
    nullable: false
  })
  data!: PermissionCreateManyRoleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
