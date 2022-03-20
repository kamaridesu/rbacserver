import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { Role } from "../models/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  posts?: Post[];

  role?: Role | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  roleId?: string | null;

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
