import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPermissionSetArgs } from "./args/GroupByPermissionSetArgs";
import { PermissionSet } from "../../../models/PermissionSet";
import { PermissionSetGroupBy } from "../../outputs/PermissionSetGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PermissionSet)
export class GroupByPermissionSetResolver {
  @TypeGraphQL.Query(_returns => [PermissionSetGroupBy], {
    nullable: false
  })
  async groupByPermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPermissionSetArgs): Promise<PermissionSetGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
