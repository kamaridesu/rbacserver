import * as TypeGraphQL from "type-graphql";
import { PermissionSet } from "../../../models/PermissionSet";
import { Resource } from "../../../models/Resource";
import { ResourcePermissionsArgs } from "./args/ResourcePermissionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Resource)
export class ResourceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PermissionSet], {
    nullable: false
  })
  async permissions(@TypeGraphQL.Root() resource: Resource, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ResourcePermissionsArgs): Promise<PermissionSet[]> {
    return getPrismaFromContext(ctx).resource.findUnique({
      where: {
        name: resource.name,
      },
    }).permissions(args);
  }
}
