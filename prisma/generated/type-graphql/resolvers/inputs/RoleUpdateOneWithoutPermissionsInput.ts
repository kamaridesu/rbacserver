import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateOrConnectWithoutPermissionsInput } from "../inputs/RoleCreateOrConnectWithoutPermissionsInput";
import { RoleCreateWithoutPermissionsInput } from "../inputs/RoleCreateWithoutPermissionsInput";
import { RoleUpdateWithoutPermissionsInput } from "../inputs/RoleUpdateWithoutPermissionsInput";
import { RoleUpsertWithoutPermissionsInput } from "../inputs/RoleUpsertWithoutPermissionsInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType("RoleUpdateOneWithoutPermissionsInput", {
  isAbstract: true
})
export class RoleUpdateOneWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => RoleCreateWithoutPermissionsInput, {
    nullable: true
  })
  create?: RoleCreateWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => RoleCreateOrConnectWithoutPermissionsInput, {
    nullable: true
  })
  connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => RoleUpsertWithoutPermissionsInput, {
    nullable: true
  })
  upsert?: RoleUpsertWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: true
  })
  connect?: RoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RoleUpdateWithoutPermissionsInput, {
    nullable: true
  })
  update?: RoleUpdateWithoutPermissionsInput | undefined;
}
