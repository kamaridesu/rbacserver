import * as TypeGraphQL from "type-graphql";
import { Permission } from "../../../models/Permission";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import { RolePermissionsArgs } from "./args/RolePermissionsArgs";
import { RoleUsersArgs } from "./args/RoleUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class RoleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Permission], {
    nullable: false
  })
  async permissions(@TypeGraphQL.Root() role: Role, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RolePermissionsArgs): Promise<Permission[]> {
    return getPrismaFromContext(ctx).role.findUnique({
      where: {
        name: role.name,
      },
    }).permissions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() role: Role, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RoleUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).role.findUnique({
      where: {
        name: role.name,
      },
    }).users(args);
  }
}
