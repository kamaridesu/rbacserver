import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Permission } from "../models/Permission";
import { ResourceCount } from "../resolvers/outputs/ResourceCount";

@TypeGraphQL.ObjectType("Resource", {
  isAbstract: true
})
export class Resource {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  permissions?: Permission[];

  @TypeGraphQL.Field(_type => ResourceCount, {
    nullable: true
  })
  _count?: ResourceCount | null;
}
