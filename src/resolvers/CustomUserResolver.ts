import { User } from "../../prisma/generated/type-graphql";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver(() => String)
export class CustomUserResolver {
  @Query(() => String, { nullable: true })
  async me(@Ctx() { prisma, req }: any): Promise<string> {
    return "hi";
  }
}
