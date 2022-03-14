import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateResourceArgs } from "./args/AggregateResourceArgs";
import { Resource } from "../../../models/Resource";
import { AggregateResource } from "../../outputs/AggregateResource";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Resource)
export class AggregateResourceResolver {
  @TypeGraphQL.Query(_returns => AggregateResource, {
    nullable: false
  })
  async aggregateResource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateResourceArgs): Promise<AggregateResource> {
    return getPrismaFromContext(ctx).resource.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
