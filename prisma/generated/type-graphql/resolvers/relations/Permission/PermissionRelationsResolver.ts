import * as TypeGraphQL from "type-graphql";
import { Permission } from "../../../models/Permission";
import { Resource } from "../../../models/Resource";
import { Role } from "../../../models/Role";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Permission)
export class PermissionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Role, {
    nullable: true
  })
  async role(@TypeGraphQL.Root() permission: Permission, @TypeGraphQL.Ctx() ctx: any): Promise<Role | null> {
    return getPrismaFromContext(ctx).permission.findUnique({
      where: {
        id: permission.id,
      },
    }).role({});
  }

  @TypeGraphQL.FieldResolver(_type => Resource, {
    nullable: true
  })
  async resource(@TypeGraphQL.Root() permission: Permission, @TypeGraphQL.Ctx() ctx: any): Promise<Resource | null> {
    return getPrismaFromContext(ctx).permission.findUnique({
      where: {
        id: permission.id,
      },
    }).resource({});
  }
}
