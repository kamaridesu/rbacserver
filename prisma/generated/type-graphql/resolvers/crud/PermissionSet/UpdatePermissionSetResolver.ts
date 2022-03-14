import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdatePermissionSetArgs } from "./args/UpdatePermissionSetArgs";
import { PermissionSet } from "../../../models/PermissionSet";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PermissionSet)
export class UpdatePermissionSetResolver {
  @TypeGraphQL.Mutation(_returns => PermissionSet, {
    nullable: true
  })
  async updatePermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdatePermissionSetArgs): Promise<PermissionSet | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
