import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionSetCountAggregate } from "../outputs/PermissionSetCountAggregate";
import { PermissionSetMaxAggregate } from "../outputs/PermissionSetMaxAggregate";
import { PermissionSetMinAggregate } from "../outputs/PermissionSetMinAggregate";

@TypeGraphQL.ObjectType("PermissionSetGroupBy", {
  isAbstract: true
})
export class PermissionSetGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  resourceId!: string;

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
