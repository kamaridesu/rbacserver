import * as TypeGraphQL from "type-graphql";
import { Permission } from "../../../models/Permission";
import { PermissionSet } from "../../../models/PermissionSet";
import { Resource } from "../../../models/Resource";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PermissionSet)
export class PermissionSetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Resource, {
    nullable: false
  })
  async resource(@TypeGraphQL.Root() permissionSet: PermissionSet, @TypeGraphQL.Ctx() ctx: any): Promise<Resource> {
    return getPrismaFromContext(ctx).permissionSet.findUnique({
      where: {
        resourceId_permissionId: {
          resourceId: permissionSet.resourceId,
          permissionId: permissionSet.permissionId,
        },
      },
    }).resource({});
  }

  @TypeGraphQL.FieldResolver(_type => Permission, {
    nullable: false
  })
  async permission(@TypeGraphQL.Root() permissionSet: PermissionSet, @TypeGraphQL.Ctx() ctx: any): Promise<Permission> {
    return getPrismaFromContext(ctx).permissionSet.findUnique({
      where: {
        resourceId_permissionId: {
          resourceId: permissionSet.resourceId,
          permissionId: permissionSet.permissionId,
        },
      },
    }).permission({});
  }
}
