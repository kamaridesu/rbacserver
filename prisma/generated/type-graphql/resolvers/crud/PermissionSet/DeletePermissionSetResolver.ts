import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeletePermissionSetArgs } from "./args/DeletePermissionSetArgs";
import { PermissionSet } from "../../../models/PermissionSet";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PermissionSet)
export class DeletePermissionSetResolver {
  @TypeGraphQL.Mutation(_returns => PermissionSet, {
    nullable: true
  })
  async deletePermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePermissionSetArgs): Promise<PermissionSet | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
