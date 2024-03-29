import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionOrderByWithRelationInput } from "../../../inputs/PermissionOrderByWithRelationInput";
import { PermissionWhereInput } from "../../../inputs/PermissionWhereInput";
import { PermissionWhereUniqueInput } from "../../../inputs/PermissionWhereUniqueInput";
import { PermissionScalarFieldEnum } from "../../../../enums/PermissionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPermissionArgs {
  @TypeGraphQL.Field(_type => PermissionWhereInput, {
    nullable: true
  })
  where?: PermissionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PermissionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PermissionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: true
  })
  cursor?: PermissionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "roleId" | "resourceId"> | undefined;
}
