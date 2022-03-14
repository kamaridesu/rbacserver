import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniquePermissionSetArgs } from "./args/FindUniquePermissionSetArgs";
import { PermissionSet } from "../../../models/PermissionSet";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PermissionSet)
export class FindUniquePermissionSetResolver {
  @TypeGraphQL.Query(_returns => PermissionSet, {
    nullable: true
  })
  async permissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePermissionSetArgs): Promise<PermissionSet | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
