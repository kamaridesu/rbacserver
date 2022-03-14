import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePermissionSetArgs } from "./args/AggregatePermissionSetArgs";
import { PermissionSet } from "../../../models/PermissionSet";
import { AggregatePermissionSet } from "../../outputs/AggregatePermissionSet";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PermissionSet)
export class AggregatePermissionSetResolver {
  @TypeGraphQL.Query(_returns => AggregatePermissionSet, {
    nullable: false
  })
  async aggregatePermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePermissionSetArgs): Promise<AggregatePermissionSet> {
    return getPrismaFromContext(ctx).permissionSet.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
