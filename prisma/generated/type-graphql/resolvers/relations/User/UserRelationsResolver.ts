import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => Role, {
    nullable: true
  })
  async role(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Role | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).role({});
  }
}
