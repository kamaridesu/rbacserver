import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionSetCreateManyInput } from "../../../inputs/PermissionSetCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPermissionSetArgs {
  @TypeGraphQL.Field(_type => [PermissionSetCreateManyInput], {
    nullable: false
  })
  data!: PermissionSetCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
