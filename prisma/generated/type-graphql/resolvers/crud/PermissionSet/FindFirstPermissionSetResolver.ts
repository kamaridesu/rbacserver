import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstPermissionSetArgs } from "./args/FindFirstPermissionSetArgs";
import { PermissionSet } from "../../../models/PermissionSet";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PermissionSet)
export class FindFirstPermissionSetResolver {
  @TypeGraphQL.Query(_returns => PermissionSet, {
    nullable: true
  })
  async findFirstPermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPermissionSetArgs): Promise<PermissionSet | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
