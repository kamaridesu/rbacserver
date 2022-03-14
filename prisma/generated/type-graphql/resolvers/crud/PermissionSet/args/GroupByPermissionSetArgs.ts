import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionSetOrderByWithAggregationInput } from "../../../inputs/PermissionSetOrderByWithAggregationInput";
import { PermissionSetScalarWhereWithAggregatesInput } from "../../../inputs/PermissionSetScalarWhereWithAggregatesInput";
import { PermissionSetWhereInput } from "../../../inputs/PermissionSetWhereInput";
import { PermissionSetScalarFieldEnum } from "../../../../enums/PermissionSetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPermissionSetArgs {
  @TypeGraphQL.Field(_type => PermissionSetWhereInput, {
    nullable: true
  })
  where?: PermissionSetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PermissionSetOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionSetScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"resourceId" | "permissionId" | "isallowed" | "createdAt" | "createdBy">;

  @TypeGraphQL.Field(_type => PermissionSetScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PermissionSetScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
