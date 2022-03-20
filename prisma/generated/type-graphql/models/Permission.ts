import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Resource } from "../models/Resource";
import { Role } from "../models/Role";

@TypeGraphQL.ObjectType("Permission", {
  isAbstract: true
})
export class Permission {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  role?: Role | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  roleId?: string | null;

  resource?: Resource | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resourceId?: string | null;
}
