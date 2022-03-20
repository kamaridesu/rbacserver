import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateManyResourceInput } from "../inputs/PermissionCreateManyResourceInput";

@TypeGraphQL.InputType("PermissionCreateManyResourceInputEnvelope", {
  isAbstract: true
})
export class PermissionCreateManyResourceInputEnvelope {
  @TypeGraphQL.Field(_type => [PermissionCreateManyResourceInput], {
    nullable: false
  })
  data!: PermissionCreateManyResourceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
