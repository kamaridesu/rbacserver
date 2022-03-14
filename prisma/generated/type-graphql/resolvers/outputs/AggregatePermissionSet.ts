import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCountAggregate } from "../outputs/PermissionSetCountAggregate";
import { PermissionSetMaxAggregate } from "../outputs/PermissionSetMaxAggregate";
import { PermissionSetMinAggregate } from "../outputs/PermissionSetMinAggregate";

@TypeGraphQL.ObjectType("AggregatePermissionSet", {
  isAbstract: true
})
export class AggregatePermissionSet {
  @TypeGraphQL.Field(_type => PermissionSetCountAggregate, {
    nullable: true
  })
  _count!: PermissionSetCountAggregate | null;

  @TypeGraphQL.Field(_type => PermissionSetMinAggregate, {
    nullable: true
  })
  _min!: PermissionSetMinAggregate | null;

  @TypeGraphQL.Field(_type => PermissionSetMaxAggregate, {
    nullable: true
  })
  _max!: PermissionSetMaxAggregate | null;
}
