import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertPermissionSetArgs } from "./args/UpsertPermissionSetArgs";
import { PermissionSet } from "../../../models/PermissionSet";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PermissionSet)
export class UpsertPermissionSetResolver {
  @TypeGraphQL.Mutation(_returns => PermissionSet, {
    nullable: false
  })
  async upsertPermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertPermissionSetArgs): Promise<PermissionSet> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
