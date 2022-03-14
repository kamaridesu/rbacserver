import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePermissionSetArgs } from "./args/AggregatePermissionSetArgs";
import { CreateManyPermissionSetArgs } from "./args/CreateManyPermissionSetArgs";
import { CreatePermissionSetArgs } from "./args/CreatePermissionSetArgs";
import { DeleteManyPermissionSetArgs } from "./args/DeleteManyPermissionSetArgs";
import { DeletePermissionSetArgs } from "./args/DeletePermissionSetArgs";
import { FindFirstPermissionSetArgs } from "./args/FindFirstPermissionSetArgs";
import { FindManyPermissionSetArgs } from "./args/FindManyPermissionSetArgs";
import { FindUniquePermissionSetArgs } from "./args/FindUniquePermissionSetArgs";
import { GroupByPermissionSetArgs } from "./args/GroupByPermissionSetArgs";
import { UpdateManyPermissionSetArgs } from "./args/UpdateManyPermissionSetArgs";
import { UpdatePermissionSetArgs } from "./args/UpdatePermissionSetArgs";
import { UpsertPermissionSetArgs } from "./args/UpsertPermissionSetArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PermissionSet } from "../../../models/PermissionSet";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePermissionSet } from "../../outputs/AggregatePermissionSet";
import { PermissionSetGroupBy } from "../../outputs/PermissionSetGroupBy";

@TypeGraphQL.Resolver(_of => PermissionSet)
export class PermissionSetCrudResolver {
  @TypeGraphQL.Query(_returns => PermissionSet, {
    nullable: true
  })
  async permissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePermissionSetArgs): Promise<PermissionSet | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PermissionSet, {
    nullable: true
  })
  async findFirstPermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPermissionSetArgs): Promise<PermissionSet | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PermissionSet], {
    nullable: false
  })
  async permissionSets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPermissionSetArgs): Promise<PermissionSet[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PermissionSet, {
    nullable: false
  })
  async createPermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreatePermissionSetArgs): Promise<PermissionSet> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPermissionSetArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => PermissionSet, {
    nullable: true
  })
  async updatePermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdatePermissionSetArgs): Promise<PermissionSet | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPermissionSetArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPermissionSetArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => AggregatePermissionSet, {
    nullable: false
  })
  async aggregatePermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePermissionSetArgs): Promise<AggregatePermissionSet> {
    return getPrismaFromContext(ctx).permissionSet.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [PermissionSetGroupBy], {
    nullable: false
  })
  async groupByPermissionSet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPermissionSetArgs): Promise<PermissionSetGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).permissionSet.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
