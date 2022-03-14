import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PermissionSet } from "../models/PermissionSet";
import { PermissionCount } from "../resolvers/outputs/PermissionCount";

@TypeGraphQL.ObjectType("Permission", {
  isAbstract: true
})
export class Permission {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  resources?: PermissionSet[];

  @TypeGraphQL.Field(_type => PermissionCount, {
    nullable: true
  })
  _count?: PermissionCount | null;
}
