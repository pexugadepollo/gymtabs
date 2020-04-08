// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  ejercicio: (where?: EjercicioWhereInput) => Promise<boolean>;
  propsUnicas: (where?: PropsUnicasWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  ejercicio: (where: EjercicioWhereUniqueInput) => EjercicioNullablePromise;
  ejercicios: (args?: {
    where?: EjercicioWhereInput;
    orderBy?: EjercicioOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Ejercicio>;
  ejerciciosConnection: (args?: {
    where?: EjercicioWhereInput;
    orderBy?: EjercicioOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => EjercicioConnectionPromise;
  propsUnicas: (
    where: PropsUnicasWhereUniqueInput
  ) => PropsUnicasNullablePromise;
  propsUnicases: (args?: {
    where?: PropsUnicasWhereInput;
    orderBy?: PropsUnicasOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<PropsUnicas>;
  propsUnicasesConnection: (args?: {
    where?: PropsUnicasWhereInput;
    orderBy?: PropsUnicasOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PropsUnicasConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEjercicio: (data: EjercicioCreateInput) => EjercicioPromise;
  updateEjercicio: (args: {
    data: EjercicioUpdateInput;
    where: EjercicioWhereUniqueInput;
  }) => EjercicioPromise;
  updateManyEjercicios: (args: {
    data: EjercicioUpdateManyMutationInput;
    where?: EjercicioWhereInput;
  }) => BatchPayloadPromise;
  upsertEjercicio: (args: {
    where: EjercicioWhereUniqueInput;
    create: EjercicioCreateInput;
    update: EjercicioUpdateInput;
  }) => EjercicioPromise;
  deleteEjercicio: (where: EjercicioWhereUniqueInput) => EjercicioPromise;
  deleteManyEjercicios: (where?: EjercicioWhereInput) => BatchPayloadPromise;
  createPropsUnicas: (data: PropsUnicasCreateInput) => PropsUnicasPromise;
  updatePropsUnicas: (args: {
    data: PropsUnicasUpdateInput;
    where: PropsUnicasWhereUniqueInput;
  }) => PropsUnicasPromise;
  updateManyPropsUnicases: (args: {
    data: PropsUnicasUpdateManyMutationInput;
    where?: PropsUnicasWhereInput;
  }) => BatchPayloadPromise;
  upsertPropsUnicas: (args: {
    where: PropsUnicasWhereUniqueInput;
    create: PropsUnicasCreateInput;
    update: PropsUnicasUpdateInput;
  }) => PropsUnicasPromise;
  deletePropsUnicas: (where: PropsUnicasWhereUniqueInput) => PropsUnicasPromise;
  deleteManyPropsUnicases: (
    where?: PropsUnicasWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  ejercicio: (
    where?: EjercicioSubscriptionWhereInput
  ) => EjercicioSubscriptionPayloadSubscription;
  propsUnicas: (
    where?: PropsUnicasSubscriptionWhereInput
  ) => PropsUnicasSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EjercicioOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "nombre_ASC"
  | "nombre_DESC"
  | "descripcion_ASC"
  | "descripcion_DESC"
  | "musculo_ASC"
  | "musculo_DESC"
  | "imagen_ASC"
  | "imagen_DESC"
  | "video_ASC"
  | "video_DESC";

export type PropsUnicasOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "repeticiones_ASC"
  | "repeticiones_DESC"
  | "series_ASC"
  | "series_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "username_ASC"
  | "username_DESC"
  | "password_ASC"
  | "password_DESC"
  | "nombre_ASC"
  | "nombre_DESC"
  | "apellidos_ASC"
  | "apellidos_DESC"
  | "email_ASC"
  | "email_DESC"
  | "peso_ASC"
  | "peso_DESC"
  | "altura_ASC"
  | "altura_DESC"
  | "rol_ASC"
  | "rol_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type EjercicioWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface EjercicioWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  nombre?: Maybe<String>;
  nombre_not?: Maybe<String>;
  nombre_in?: Maybe<String[] | String>;
  nombre_not_in?: Maybe<String[] | String>;
  nombre_lt?: Maybe<String>;
  nombre_lte?: Maybe<String>;
  nombre_gt?: Maybe<String>;
  nombre_gte?: Maybe<String>;
  nombre_contains?: Maybe<String>;
  nombre_not_contains?: Maybe<String>;
  nombre_starts_with?: Maybe<String>;
  nombre_not_starts_with?: Maybe<String>;
  nombre_ends_with?: Maybe<String>;
  nombre_not_ends_with?: Maybe<String>;
  descripcion?: Maybe<String>;
  descripcion_not?: Maybe<String>;
  descripcion_in?: Maybe<String[] | String>;
  descripcion_not_in?: Maybe<String[] | String>;
  descripcion_lt?: Maybe<String>;
  descripcion_lte?: Maybe<String>;
  descripcion_gt?: Maybe<String>;
  descripcion_gte?: Maybe<String>;
  descripcion_contains?: Maybe<String>;
  descripcion_not_contains?: Maybe<String>;
  descripcion_starts_with?: Maybe<String>;
  descripcion_not_starts_with?: Maybe<String>;
  descripcion_ends_with?: Maybe<String>;
  descripcion_not_ends_with?: Maybe<String>;
  musculo?: Maybe<String>;
  musculo_not?: Maybe<String>;
  musculo_in?: Maybe<String[] | String>;
  musculo_not_in?: Maybe<String[] | String>;
  musculo_lt?: Maybe<String>;
  musculo_lte?: Maybe<String>;
  musculo_gt?: Maybe<String>;
  musculo_gte?: Maybe<String>;
  musculo_contains?: Maybe<String>;
  musculo_not_contains?: Maybe<String>;
  musculo_starts_with?: Maybe<String>;
  musculo_not_starts_with?: Maybe<String>;
  musculo_ends_with?: Maybe<String>;
  musculo_not_ends_with?: Maybe<String>;
  imagen?: Maybe<String>;
  imagen_not?: Maybe<String>;
  imagen_in?: Maybe<String[] | String>;
  imagen_not_in?: Maybe<String[] | String>;
  imagen_lt?: Maybe<String>;
  imagen_lte?: Maybe<String>;
  imagen_gt?: Maybe<String>;
  imagen_gte?: Maybe<String>;
  imagen_contains?: Maybe<String>;
  imagen_not_contains?: Maybe<String>;
  imagen_starts_with?: Maybe<String>;
  imagen_not_starts_with?: Maybe<String>;
  imagen_ends_with?: Maybe<String>;
  imagen_not_ends_with?: Maybe<String>;
  video?: Maybe<String>;
  video_not?: Maybe<String>;
  video_in?: Maybe<String[] | String>;
  video_not_in?: Maybe<String[] | String>;
  video_lt?: Maybe<String>;
  video_lte?: Maybe<String>;
  video_gt?: Maybe<String>;
  video_gte?: Maybe<String>;
  video_contains?: Maybe<String>;
  video_not_contains?: Maybe<String>;
  video_starts_with?: Maybe<String>;
  video_not_starts_with?: Maybe<String>;
  video_ends_with?: Maybe<String>;
  video_not_ends_with?: Maybe<String>;
  AND?: Maybe<EjercicioWhereInput[] | EjercicioWhereInput>;
  OR?: Maybe<EjercicioWhereInput[] | EjercicioWhereInput>;
  NOT?: Maybe<EjercicioWhereInput[] | EjercicioWhereInput>;
}

export type PropsUnicasWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PropsUnicasWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  ejercicio?: Maybe<EjercicioWhereInput>;
  user?: Maybe<UserWhereInput>;
  repeticiones?: Maybe<String>;
  repeticiones_not?: Maybe<String>;
  repeticiones_in?: Maybe<String[] | String>;
  repeticiones_not_in?: Maybe<String[] | String>;
  repeticiones_lt?: Maybe<String>;
  repeticiones_lte?: Maybe<String>;
  repeticiones_gt?: Maybe<String>;
  repeticiones_gte?: Maybe<String>;
  repeticiones_contains?: Maybe<String>;
  repeticiones_not_contains?: Maybe<String>;
  repeticiones_starts_with?: Maybe<String>;
  repeticiones_not_starts_with?: Maybe<String>;
  repeticiones_ends_with?: Maybe<String>;
  repeticiones_not_ends_with?: Maybe<String>;
  series?: Maybe<Int>;
  series_not?: Maybe<Int>;
  series_in?: Maybe<Int[] | Int>;
  series_not_in?: Maybe<Int[] | Int>;
  series_lt?: Maybe<Int>;
  series_lte?: Maybe<Int>;
  series_gt?: Maybe<Int>;
  series_gte?: Maybe<Int>;
  AND?: Maybe<PropsUnicasWhereInput[] | PropsUnicasWhereInput>;
  OR?: Maybe<PropsUnicasWhereInput[] | PropsUnicasWhereInput>;
  NOT?: Maybe<PropsUnicasWhereInput[] | PropsUnicasWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  username?: Maybe<String>;
  username_not?: Maybe<String>;
  username_in?: Maybe<String[] | String>;
  username_not_in?: Maybe<String[] | String>;
  username_lt?: Maybe<String>;
  username_lte?: Maybe<String>;
  username_gt?: Maybe<String>;
  username_gte?: Maybe<String>;
  username_contains?: Maybe<String>;
  username_not_contains?: Maybe<String>;
  username_starts_with?: Maybe<String>;
  username_not_starts_with?: Maybe<String>;
  username_ends_with?: Maybe<String>;
  username_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  nombre?: Maybe<String>;
  nombre_not?: Maybe<String>;
  nombre_in?: Maybe<String[] | String>;
  nombre_not_in?: Maybe<String[] | String>;
  nombre_lt?: Maybe<String>;
  nombre_lte?: Maybe<String>;
  nombre_gt?: Maybe<String>;
  nombre_gte?: Maybe<String>;
  nombre_contains?: Maybe<String>;
  nombre_not_contains?: Maybe<String>;
  nombre_starts_with?: Maybe<String>;
  nombre_not_starts_with?: Maybe<String>;
  nombre_ends_with?: Maybe<String>;
  nombre_not_ends_with?: Maybe<String>;
  apellidos?: Maybe<String>;
  apellidos_not?: Maybe<String>;
  apellidos_in?: Maybe<String[] | String>;
  apellidos_not_in?: Maybe<String[] | String>;
  apellidos_lt?: Maybe<String>;
  apellidos_lte?: Maybe<String>;
  apellidos_gt?: Maybe<String>;
  apellidos_gte?: Maybe<String>;
  apellidos_contains?: Maybe<String>;
  apellidos_not_contains?: Maybe<String>;
  apellidos_starts_with?: Maybe<String>;
  apellidos_not_starts_with?: Maybe<String>;
  apellidos_ends_with?: Maybe<String>;
  apellidos_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  peso?: Maybe<Float>;
  peso_not?: Maybe<Float>;
  peso_in?: Maybe<Float[] | Float>;
  peso_not_in?: Maybe<Float[] | Float>;
  peso_lt?: Maybe<Float>;
  peso_lte?: Maybe<Float>;
  peso_gt?: Maybe<Float>;
  peso_gte?: Maybe<Float>;
  altura?: Maybe<Int>;
  altura_not?: Maybe<Int>;
  altura_in?: Maybe<Int[] | Int>;
  altura_not_in?: Maybe<Int[] | Int>;
  altura_lt?: Maybe<Int>;
  altura_lte?: Maybe<Int>;
  altura_gt?: Maybe<Int>;
  altura_gte?: Maybe<Int>;
  rol?: Maybe<String>;
  rol_not?: Maybe<String>;
  rol_in?: Maybe<String[] | String>;
  rol_not_in?: Maybe<String[] | String>;
  rol_lt?: Maybe<String>;
  rol_lte?: Maybe<String>;
  rol_gt?: Maybe<String>;
  rol_gte?: Maybe<String>;
  rol_contains?: Maybe<String>;
  rol_not_contains?: Maybe<String>;
  rol_starts_with?: Maybe<String>;
  rol_not_starts_with?: Maybe<String>;
  rol_ends_with?: Maybe<String>;
  rol_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  username?: Maybe<String>;
}>;

export interface EjercicioCreateInput {
  id?: Maybe<ID_Input>;
  nombre: String;
  descripcion: String;
  musculo: String;
  imagen: String;
  video: String;
}

export interface EjercicioUpdateInput {
  nombre?: Maybe<String>;
  descripcion?: Maybe<String>;
  musculo?: Maybe<String>;
  imagen?: Maybe<String>;
  video?: Maybe<String>;
}

export interface EjercicioUpdateManyMutationInput {
  nombre?: Maybe<String>;
  descripcion?: Maybe<String>;
  musculo?: Maybe<String>;
  imagen?: Maybe<String>;
  video?: Maybe<String>;
}

export interface PropsUnicasCreateInput {
  id?: Maybe<ID_Input>;
  ejercicio: EjercicioCreateOneInput;
  user: UserCreateOneInput;
  repeticiones: String;
  series: Int;
}

export interface EjercicioCreateOneInput {
  create?: Maybe<EjercicioCreateInput>;
  connect?: Maybe<EjercicioWhereUniqueInput>;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  username: String;
  password: String;
  nombre: String;
  apellidos: String;
  email: String;
  peso: Float;
  altura: Int;
  rol: String;
  tabla?: Maybe<UserCreatetablaInput>;
}

export interface UserCreatetablaInput {
  set?: Maybe<String[] | String>;
}

export interface PropsUnicasUpdateInput {
  ejercicio?: Maybe<EjercicioUpdateOneRequiredInput>;
  user?: Maybe<UserUpdateOneRequiredInput>;
  repeticiones?: Maybe<String>;
  series?: Maybe<Int>;
}

export interface EjercicioUpdateOneRequiredInput {
  create?: Maybe<EjercicioCreateInput>;
  update?: Maybe<EjercicioUpdateDataInput>;
  upsert?: Maybe<EjercicioUpsertNestedInput>;
  connect?: Maybe<EjercicioWhereUniqueInput>;
}

export interface EjercicioUpdateDataInput {
  nombre?: Maybe<String>;
  descripcion?: Maybe<String>;
  musculo?: Maybe<String>;
  imagen?: Maybe<String>;
  video?: Maybe<String>;
}

export interface EjercicioUpsertNestedInput {
  update: EjercicioUpdateDataInput;
  create: EjercicioCreateInput;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateDataInput {
  username?: Maybe<String>;
  password?: Maybe<String>;
  nombre?: Maybe<String>;
  apellidos?: Maybe<String>;
  email?: Maybe<String>;
  peso?: Maybe<Float>;
  altura?: Maybe<Int>;
  rol?: Maybe<String>;
  tabla?: Maybe<UserUpdatetablaInput>;
}

export interface UserUpdatetablaInput {
  set?: Maybe<String[] | String>;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface PropsUnicasUpdateManyMutationInput {
  repeticiones?: Maybe<String>;
  series?: Maybe<Int>;
}

export interface UserUpdateInput {
  username?: Maybe<String>;
  password?: Maybe<String>;
  nombre?: Maybe<String>;
  apellidos?: Maybe<String>;
  email?: Maybe<String>;
  peso?: Maybe<Float>;
  altura?: Maybe<Int>;
  rol?: Maybe<String>;
  tabla?: Maybe<UserUpdatetablaInput>;
}

export interface UserUpdateManyMutationInput {
  username?: Maybe<String>;
  password?: Maybe<String>;
  nombre?: Maybe<String>;
  apellidos?: Maybe<String>;
  email?: Maybe<String>;
  peso?: Maybe<Float>;
  altura?: Maybe<Int>;
  rol?: Maybe<String>;
  tabla?: Maybe<UserUpdatetablaInput>;
}

export interface EjercicioSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<EjercicioWhereInput>;
  AND?: Maybe<
    EjercicioSubscriptionWhereInput[] | EjercicioSubscriptionWhereInput
  >;
  OR?: Maybe<
    EjercicioSubscriptionWhereInput[] | EjercicioSubscriptionWhereInput
  >;
  NOT?: Maybe<
    EjercicioSubscriptionWhereInput[] | EjercicioSubscriptionWhereInput
  >;
}

export interface PropsUnicasSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PropsUnicasWhereInput>;
  AND?: Maybe<
    PropsUnicasSubscriptionWhereInput[] | PropsUnicasSubscriptionWhereInput
  >;
  OR?: Maybe<
    PropsUnicasSubscriptionWhereInput[] | PropsUnicasSubscriptionWhereInput
  >;
  NOT?: Maybe<
    PropsUnicasSubscriptionWhereInput[] | PropsUnicasSubscriptionWhereInput
  >;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Ejercicio {
  id: ID_Output;
  nombre: String;
  descripcion: String;
  musculo: String;
  imagen: String;
  video: String;
}

export interface EjercicioPromise extends Promise<Ejercicio>, Fragmentable {
  id: () => Promise<ID_Output>;
  nombre: () => Promise<String>;
  descripcion: () => Promise<String>;
  musculo: () => Promise<String>;
  imagen: () => Promise<String>;
  video: () => Promise<String>;
}

export interface EjercicioSubscription
  extends Promise<AsyncIterator<Ejercicio>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nombre: () => Promise<AsyncIterator<String>>;
  descripcion: () => Promise<AsyncIterator<String>>;
  musculo: () => Promise<AsyncIterator<String>>;
  imagen: () => Promise<AsyncIterator<String>>;
  video: () => Promise<AsyncIterator<String>>;
}

export interface EjercicioNullablePromise
  extends Promise<Ejercicio | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  nombre: () => Promise<String>;
  descripcion: () => Promise<String>;
  musculo: () => Promise<String>;
  imagen: () => Promise<String>;
  video: () => Promise<String>;
}

export interface EjercicioConnection {
  pageInfo: PageInfo;
  edges: EjercicioEdge[];
}

export interface EjercicioConnectionPromise
  extends Promise<EjercicioConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EjercicioEdge>>() => T;
  aggregate: <T = AggregateEjercicioPromise>() => T;
}

export interface EjercicioConnectionSubscription
  extends Promise<AsyncIterator<EjercicioConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EjercicioEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEjercicioSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface EjercicioEdge {
  node: Ejercicio;
  cursor: String;
}

export interface EjercicioEdgePromise
  extends Promise<EjercicioEdge>,
    Fragmentable {
  node: <T = EjercicioPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EjercicioEdgeSubscription
  extends Promise<AsyncIterator<EjercicioEdge>>,
    Fragmentable {
  node: <T = EjercicioSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateEjercicio {
  count: Int;
}

export interface AggregateEjercicioPromise
  extends Promise<AggregateEjercicio>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEjercicioSubscription
  extends Promise<AsyncIterator<AggregateEjercicio>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PropsUnicas {
  id: ID_Output;
  repeticiones: String;
  series: Int;
}

export interface PropsUnicasPromise extends Promise<PropsUnicas>, Fragmentable {
  id: () => Promise<ID_Output>;
  ejercicio: <T = EjercicioPromise>() => T;
  user: <T = UserPromise>() => T;
  repeticiones: () => Promise<String>;
  series: () => Promise<Int>;
}

export interface PropsUnicasSubscription
  extends Promise<AsyncIterator<PropsUnicas>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  ejercicio: <T = EjercicioSubscription>() => T;
  user: <T = UserSubscription>() => T;
  repeticiones: () => Promise<AsyncIterator<String>>;
  series: () => Promise<AsyncIterator<Int>>;
}

export interface PropsUnicasNullablePromise
  extends Promise<PropsUnicas | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  ejercicio: <T = EjercicioPromise>() => T;
  user: <T = UserPromise>() => T;
  repeticiones: () => Promise<String>;
  series: () => Promise<Int>;
}

export interface User {
  id: ID_Output;
  username: String;
  password: String;
  nombre: String;
  apellidos: String;
  email: String;
  peso: Float;
  altura: Int;
  rol: String;
  tabla: String[];
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  password: () => Promise<String>;
  nombre: () => Promise<String>;
  apellidos: () => Promise<String>;
  email: () => Promise<String>;
  peso: () => Promise<Float>;
  altura: () => Promise<Int>;
  rol: () => Promise<String>;
  tabla: () => Promise<String[]>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  nombre: () => Promise<AsyncIterator<String>>;
  apellidos: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  peso: () => Promise<AsyncIterator<Float>>;
  altura: () => Promise<AsyncIterator<Int>>;
  rol: () => Promise<AsyncIterator<String>>;
  tabla: () => Promise<AsyncIterator<String[]>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  password: () => Promise<String>;
  nombre: () => Promise<String>;
  apellidos: () => Promise<String>;
  email: () => Promise<String>;
  peso: () => Promise<Float>;
  altura: () => Promise<Int>;
  rol: () => Promise<String>;
  tabla: () => Promise<String[]>;
}

export interface PropsUnicasConnection {
  pageInfo: PageInfo;
  edges: PropsUnicasEdge[];
}

export interface PropsUnicasConnectionPromise
  extends Promise<PropsUnicasConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PropsUnicasEdge>>() => T;
  aggregate: <T = AggregatePropsUnicasPromise>() => T;
}

export interface PropsUnicasConnectionSubscription
  extends Promise<AsyncIterator<PropsUnicasConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PropsUnicasEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePropsUnicasSubscription>() => T;
}

export interface PropsUnicasEdge {
  node: PropsUnicas;
  cursor: String;
}

export interface PropsUnicasEdgePromise
  extends Promise<PropsUnicasEdge>,
    Fragmentable {
  node: <T = PropsUnicasPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PropsUnicasEdgeSubscription
  extends Promise<AsyncIterator<PropsUnicasEdge>>,
    Fragmentable {
  node: <T = PropsUnicasSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePropsUnicas {
  count: Int;
}

export interface AggregatePropsUnicasPromise
  extends Promise<AggregatePropsUnicas>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePropsUnicasSubscription
  extends Promise<AsyncIterator<AggregatePropsUnicas>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface EjercicioSubscriptionPayload {
  mutation: MutationType;
  node: Ejercicio;
  updatedFields: String[];
  previousValues: EjercicioPreviousValues;
}

export interface EjercicioSubscriptionPayloadPromise
  extends Promise<EjercicioSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EjercicioPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EjercicioPreviousValuesPromise>() => T;
}

export interface EjercicioSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EjercicioSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EjercicioSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EjercicioPreviousValuesSubscription>() => T;
}

export interface EjercicioPreviousValues {
  id: ID_Output;
  nombre: String;
  descripcion: String;
  musculo: String;
  imagen: String;
  video: String;
}

export interface EjercicioPreviousValuesPromise
  extends Promise<EjercicioPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  nombre: () => Promise<String>;
  descripcion: () => Promise<String>;
  musculo: () => Promise<String>;
  imagen: () => Promise<String>;
  video: () => Promise<String>;
}

export interface EjercicioPreviousValuesSubscription
  extends Promise<AsyncIterator<EjercicioPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nombre: () => Promise<AsyncIterator<String>>;
  descripcion: () => Promise<AsyncIterator<String>>;
  musculo: () => Promise<AsyncIterator<String>>;
  imagen: () => Promise<AsyncIterator<String>>;
  video: () => Promise<AsyncIterator<String>>;
}

export interface PropsUnicasSubscriptionPayload {
  mutation: MutationType;
  node: PropsUnicas;
  updatedFields: String[];
  previousValues: PropsUnicasPreviousValues;
}

export interface PropsUnicasSubscriptionPayloadPromise
  extends Promise<PropsUnicasSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PropsUnicasPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PropsUnicasPreviousValuesPromise>() => T;
}

export interface PropsUnicasSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PropsUnicasSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PropsUnicasSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PropsUnicasPreviousValuesSubscription>() => T;
}

export interface PropsUnicasPreviousValues {
  id: ID_Output;
  repeticiones: String;
  series: Int;
}

export interface PropsUnicasPreviousValuesPromise
  extends Promise<PropsUnicasPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  repeticiones: () => Promise<String>;
  series: () => Promise<Int>;
}

export interface PropsUnicasPreviousValuesSubscription
  extends Promise<AsyncIterator<PropsUnicasPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  repeticiones: () => Promise<AsyncIterator<String>>;
  series: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  username: String;
  password: String;
  nombre: String;
  apellidos: String;
  email: String;
  peso: Float;
  altura: Int;
  rol: String;
  tabla: String[];
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  password: () => Promise<String>;
  nombre: () => Promise<String>;
  apellidos: () => Promise<String>;
  email: () => Promise<String>;
  peso: () => Promise<Float>;
  altura: () => Promise<Int>;
  rol: () => Promise<String>;
  tabla: () => Promise<String[]>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  nombre: () => Promise<AsyncIterator<String>>;
  apellidos: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  peso: () => Promise<AsyncIterator<Float>>;
  altura: () => Promise<AsyncIterator<Int>>;
  rol: () => Promise<AsyncIterator<String>>;
  tabla: () => Promise<AsyncIterator<String[]>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Ejercicio",
    embedded: false
  },
  {
    name: "PropsUnicas",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;