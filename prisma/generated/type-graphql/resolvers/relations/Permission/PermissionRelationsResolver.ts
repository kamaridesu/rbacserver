import * as TypeGraphQL from "type-graphql";
import { Permission } from "../../../models/Permission";
import { PermissionSet } from "../../../models/PermissionSet";
import { PermissionResourcesArgs } from "./args/PermissionResourcesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Permission)
export class PermissionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PermissionSet], {
    nullable: false
  })
  async resources(@TypeGraphQL.Root() permission: Permission, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PermissionResourcesArgs): Promise<PermissionSet[]> {
    return getPrismaFromContext(ctx).permission.findUnique({
      where: {
        name: permission.name,
      },
    }).resources(args);
  }
}
