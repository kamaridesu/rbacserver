import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCreateManyResourceInput } from "../inputs/PermissionSetCreateManyResourceInput";

@TypeGraphQL.InputType("PermissionSetCreateManyResourceInputEnvelope", {
  isAbstract: true
})
export class PermissionSetCreateManyResourceInputEnvelope {
  @TypeGraphQL.Field(_type => [PermissionSetCreateManyResourceInput], {
    nullable: false
  })
  data!: PermissionSetCreateManyResourceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
