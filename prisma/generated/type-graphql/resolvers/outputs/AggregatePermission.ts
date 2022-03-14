import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCountAggregate } from "../outputs/PermissionCountAggregate";
import { PermissionMaxAggregate } from "../outputs/PermissionMaxAggregate";
import { PermissionMinAggregate } from "../outputs/PermissionMinAggregate";

@TypeGraphQL.ObjectType("AggregatePermission", {
  isAbstract: true
})
export class AggregatePermission {
  @TypeGraphQL.Field(_type => PermissionCountAggregate, {
    nullable: true
  })
  _count!: PermissionCountAggregate | null;

  @TypeGraphQL.Field(_type => PermissionMinAggregate, {
    nullable: true
  })
  _min!: PermissionMinAggregate | null;

  @TypeGraphQL.Field(_type => PermissionMaxAggregate, {
    nullable: true
  })
  _max!: PermissionMaxAggregate | null;
}
