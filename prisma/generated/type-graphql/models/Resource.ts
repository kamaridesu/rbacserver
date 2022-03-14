import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PermissionSet } from "../models/PermissionSet";
import { ResourceCount } from "../resolvers/outputs/ResourceCount";

@TypeGraphQL.ObjectType("Resource", {
  isAbstract: true
})
export class Resource {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  permissions?: PermissionSet[];

  @TypeGraphQL.Field(_type => ResourceCount, {
    nullable: true
  })
  _count?: ResourceCount | null;
}
