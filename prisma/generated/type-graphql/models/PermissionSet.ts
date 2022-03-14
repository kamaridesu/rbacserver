import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Permission } from "../models/Permission";
import { Resource } from "../models/Resource";

@TypeGraphQL.ObjectType("PermissionSet", {
  isAbstract: true
})
export class PermissionSet {
  resource?: Resource;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  resourceId!: string;

  permission?: Permission;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  permissionId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isallowed!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;
}
