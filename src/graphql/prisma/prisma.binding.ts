import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    bps: <T = Array<Bp | null>>(args: { where?: BpWhereInput | null, orderBy?: BpOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orders: <T = Array<Order | null>>(args: { where?: OrderWhereInput | null, orderBy?: OrderOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    items: <T = Array<Item | null>>(args: { where?: ItemWhereInput | null, orderBy?: ItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    prices: <T = Array<Price | null>>(args: { where?: PriceWhereInput | null, orderBy?: PriceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bp: <T = Bp | null>(args: { where: BpWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    order: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    item: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    price: <T = Price | null>(args: { where: PriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    bpsConnection: <T = BpConnection>(args: { where?: BpWhereInput | null, orderBy?: BpOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ordersConnection: <T = OrderConnection>(args: { where?: OrderWhereInput | null, orderBy?: OrderOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemsConnection: <T = ItemConnection>(args: { where?: ItemWhereInput | null, orderBy?: ItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pricesConnection: <T = PriceConnection>(args: { where?: PriceWhereInput | null, orderBy?: PriceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createBp: <T = Bp>(args: { data: BpCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrder: <T = Order>(args: { data: OrderCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItem: <T = Item>(args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPrice: <T = Price>(args: { data: PriceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBp: <T = Bp | null>(args: { data: BpUpdateInput, where: BpWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateOrder: <T = Order | null>(args: { data: OrderUpdateInput, where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateItem: <T = Item | null>(args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePrice: <T = Price | null>(args: { data: PriceUpdateInput, where: PriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBp: <T = Bp | null>(args: { where: BpWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteOrder: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteItem: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePrice: <T = Price | null>(args: { where: PriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertBp: <T = Bp>(args: { where: BpWhereUniqueInput, create: BpCreateInput, update: BpUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrder: <T = Order>(args: { where: OrderWhereUniqueInput, create: OrderCreateInput, update: OrderUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItem: <T = Item>(args: { where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPrice: <T = Price>(args: { where: PriceWhereUniqueInput, create: PriceCreateInput, update: PriceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBps: <T = BatchPayload>(args: { data: BpUpdateManyMutationInput, where?: BpWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrders: <T = BatchPayload>(args: { data: OrderUpdateManyMutationInput, where?: OrderWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItems: <T = BatchPayload>(args: { data: ItemUpdateManyMutationInput, where?: ItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPrices: <T = BatchPayload>(args: { data: PriceUpdateManyMutationInput, where?: PriceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBps: <T = BatchPayload>(args: { where?: BpWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrders: <T = BatchPayload>(args: { where?: OrderWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItems: <T = BatchPayload>(args: { where?: ItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPrices: <T = BatchPayload>(args: { where?: PriceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    bp: <T = BpSubscriptionPayload | null>(args: { where?: BpSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    order: <T = OrderSubscriptionPayload | null>(args: { where?: OrderSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    item: <T = ItemSubscriptionPayload | null>(args: { where?: ItemSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    price: <T = PriceSubscriptionPayload | null>(args: { where?: PriceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Bp: (where?: BpWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Order: (where?: OrderWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
  Price: (where?: PriceWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateBp {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregatePrice {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Bp {
  uid: ID!
  name1: String!
  name2: String
  lastName1: String
  lastName2: String
  phone: String
  email: String
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  customerOf(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: String
  updatedBy: String
}

"""A connection to a list of items."""
type BpConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BpEdge]!
  aggregate: AggregateBp!
}

input BpCreateInput {
  uid: ID
  name1: String!
  name2: String
  lastName1: String
  lastName2: String
  phone: String
  email: String
  createdBy: String
  updatedBy: String
  orders: OrderCreateManyWithoutIssuedToInput
  customerOf: UserCreateManyWithoutCustomersInput
}

input BpCreateManyWithoutCustomerOfInput {
  create: [BpCreateWithoutCustomerOfInput!]
  connect: [BpWhereUniqueInput!]
}

input BpCreateOneWithoutOrdersInput {
  create: BpCreateWithoutOrdersInput
  connect: BpWhereUniqueInput
}

input BpCreateWithoutCustomerOfInput {
  uid: ID
  name1: String!
  name2: String
  lastName1: String
  lastName2: String
  phone: String
  email: String
  createdBy: String
  updatedBy: String
  orders: OrderCreateManyWithoutIssuedToInput
}

input BpCreateWithoutOrdersInput {
  uid: ID
  name1: String!
  name2: String
  lastName1: String
  lastName2: String
  phone: String
  email: String
  createdBy: String
  updatedBy: String
  customerOf: UserCreateManyWithoutCustomersInput
}

"""An edge in a connection."""
type BpEdge {
  """The item at the end of the edge."""
  node: Bp!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BpOrderByInput {
  uid_ASC
  uid_DESC
  name1_ASC
  name1_DESC
  name2_ASC
  name2_DESC
  lastName1_ASC
  lastName1_DESC
  lastName2_ASC
  lastName2_DESC
  phone_ASC
  phone_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdBy_ASC
  createdBy_DESC
  updatedBy_ASC
  updatedBy_DESC
}

type BpPreviousValues {
  uid: ID!
  name1: String!
  name2: String
  lastName1: String
  lastName2: String
  phone: String
  email: String
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: String
  updatedBy: String
}

input BpScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BpScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpScalarWhereInput!]
  uid: ID

  """All values that are not equal to given value."""
  uid_not: ID

  """All values that are contained in given list."""
  uid_in: [ID!]

  """All values that are not contained in given list."""
  uid_not_in: [ID!]

  """All values less than the given value."""
  uid_lt: ID

  """All values less than or equal the given value."""
  uid_lte: ID

  """All values greater than the given value."""
  uid_gt: ID

  """All values greater than or equal the given value."""
  uid_gte: ID

  """All values containing the given string."""
  uid_contains: ID

  """All values not containing the given string."""
  uid_not_contains: ID

  """All values starting with the given string."""
  uid_starts_with: ID

  """All values not starting with the given string."""
  uid_not_starts_with: ID

  """All values ending with the given string."""
  uid_ends_with: ID

  """All values not ending with the given string."""
  uid_not_ends_with: ID
  name1: String

  """All values that are not equal to given value."""
  name1_not: String

  """All values that are contained in given list."""
  name1_in: [String!]

  """All values that are not contained in given list."""
  name1_not_in: [String!]

  """All values less than the given value."""
  name1_lt: String

  """All values less than or equal the given value."""
  name1_lte: String

  """All values greater than the given value."""
  name1_gt: String

  """All values greater than or equal the given value."""
  name1_gte: String

  """All values containing the given string."""
  name1_contains: String

  """All values not containing the given string."""
  name1_not_contains: String

  """All values starting with the given string."""
  name1_starts_with: String

  """All values not starting with the given string."""
  name1_not_starts_with: String

  """All values ending with the given string."""
  name1_ends_with: String

  """All values not ending with the given string."""
  name1_not_ends_with: String
  name2: String

  """All values that are not equal to given value."""
  name2_not: String

  """All values that are contained in given list."""
  name2_in: [String!]

  """All values that are not contained in given list."""
  name2_not_in: [String!]

  """All values less than the given value."""
  name2_lt: String

  """All values less than or equal the given value."""
  name2_lte: String

  """All values greater than the given value."""
  name2_gt: String

  """All values greater than or equal the given value."""
  name2_gte: String

  """All values containing the given string."""
  name2_contains: String

  """All values not containing the given string."""
  name2_not_contains: String

  """All values starting with the given string."""
  name2_starts_with: String

  """All values not starting with the given string."""
  name2_not_starts_with: String

  """All values ending with the given string."""
  name2_ends_with: String

  """All values not ending with the given string."""
  name2_not_ends_with: String
  lastName1: String

  """All values that are not equal to given value."""
  lastName1_not: String

  """All values that are contained in given list."""
  lastName1_in: [String!]

  """All values that are not contained in given list."""
  lastName1_not_in: [String!]

  """All values less than the given value."""
  lastName1_lt: String

  """All values less than or equal the given value."""
  lastName1_lte: String

  """All values greater than the given value."""
  lastName1_gt: String

  """All values greater than or equal the given value."""
  lastName1_gte: String

  """All values containing the given string."""
  lastName1_contains: String

  """All values not containing the given string."""
  lastName1_not_contains: String

  """All values starting with the given string."""
  lastName1_starts_with: String

  """All values not starting with the given string."""
  lastName1_not_starts_with: String

  """All values ending with the given string."""
  lastName1_ends_with: String

  """All values not ending with the given string."""
  lastName1_not_ends_with: String
  lastName2: String

  """All values that are not equal to given value."""
  lastName2_not: String

  """All values that are contained in given list."""
  lastName2_in: [String!]

  """All values that are not contained in given list."""
  lastName2_not_in: [String!]

  """All values less than the given value."""
  lastName2_lt: String

  """All values less than or equal the given value."""
  lastName2_lte: String

  """All values greater than the given value."""
  lastName2_gt: String

  """All values greater than or equal the given value."""
  lastName2_gte: String

  """All values containing the given string."""
  lastName2_contains: String

  """All values not containing the given string."""
  lastName2_not_contains: String

  """All values starting with the given string."""
  lastName2_starts_with: String

  """All values not starting with the given string."""
  lastName2_not_starts_with: String

  """All values ending with the given string."""
  lastName2_ends_with: String

  """All values not ending with the given string."""
  lastName2_not_ends_with: String
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdBy: String

  """All values that are not equal to given value."""
  createdBy_not: String

  """All values that are contained in given list."""
  createdBy_in: [String!]

  """All values that are not contained in given list."""
  createdBy_not_in: [String!]

  """All values less than the given value."""
  createdBy_lt: String

  """All values less than or equal the given value."""
  createdBy_lte: String

  """All values greater than the given value."""
  createdBy_gt: String

  """All values greater than or equal the given value."""
  createdBy_gte: String

  """All values containing the given string."""
  createdBy_contains: String

  """All values not containing the given string."""
  createdBy_not_contains: String

  """All values starting with the given string."""
  createdBy_starts_with: String

  """All values not starting with the given string."""
  createdBy_not_starts_with: String

  """All values ending with the given string."""
  createdBy_ends_with: String

  """All values not ending with the given string."""
  createdBy_not_ends_with: String
  updatedBy: String

  """All values that are not equal to given value."""
  updatedBy_not: String

  """All values that are contained in given list."""
  updatedBy_in: [String!]

  """All values that are not contained in given list."""
  updatedBy_not_in: [String!]

  """All values less than the given value."""
  updatedBy_lt: String

  """All values less than or equal the given value."""
  updatedBy_lte: String

  """All values greater than the given value."""
  updatedBy_gt: String

  """All values greater than or equal the given value."""
  updatedBy_gte: String

  """All values containing the given string."""
  updatedBy_contains: String

  """All values not containing the given string."""
  updatedBy_not_contains: String

  """All values starting with the given string."""
  updatedBy_starts_with: String

  """All values not starting with the given string."""
  updatedBy_not_starts_with: String

  """All values ending with the given string."""
  updatedBy_ends_with: String

  """All values not ending with the given string."""
  updatedBy_not_ends_with: String
}

type BpSubscriptionPayload {
  mutation: MutationType!
  node: Bp
  updatedFields: [String!]
  previousValues: BpPreviousValues
}

input BpSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BpSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BpWhereInput
}

input BpUpdateInput {
  name1: String
  name2: String
  lastName1: String
  lastName2: String
  phone: String
  email: String
  createdBy: String
  updatedBy: String
  orders: OrderUpdateManyWithoutIssuedToInput
  customerOf: UserUpdateManyWithoutCustomersInput
}

input BpUpdateManyDataInput {
  name1: String
  name2: String
  lastName1: String
  lastName2: String
  phone: String
  email: String
  createdBy: String
  updatedBy: String
}

input BpUpdateManyMutationInput {
  name1: String
  name2: String
  lastName1: String
  lastName2: String
  phone: String
  email: String
  createdBy: String
  updatedBy: String
}

input BpUpdateManyWithoutCustomerOfInput {
  create: [BpCreateWithoutCustomerOfInput!]
  connect: [BpWhereUniqueInput!]
  set: [BpWhereUniqueInput!]
  disconnect: [BpWhereUniqueInput!]
  delete: [BpWhereUniqueInput!]
  update: [BpUpdateWithWhereUniqueWithoutCustomerOfInput!]
  updateMany: [BpUpdateManyWithWhereNestedInput!]
  deleteMany: [BpScalarWhereInput!]
  upsert: [BpUpsertWithWhereUniqueWithoutCustomerOfInput!]
}

input BpUpdateManyWithWhereNestedInput {
  where: BpScalarWhereInput!
  data: BpUpdateManyDataInput!
}

input BpUpdateOneRequiredWithoutOrdersInput {
  create: BpCreateWithoutOrdersInput
  connect: BpWhereUniqueInput
  update: BpUpdateWithoutOrdersDataInput
  upsert: BpUpsertWithoutOrdersInput
}

input BpUpdateWithoutCustomerOfDataInput {
  name1: String
  name2: String
  lastName1: String
  lastName2: String
  phone: String
  email: String
  createdBy: String
  updatedBy: String
  orders: OrderUpdateManyWithoutIssuedToInput
}

input BpUpdateWithoutOrdersDataInput {
  name1: String
  name2: String
  lastName1: String
  lastName2: String
  phone: String
  email: String
  createdBy: String
  updatedBy: String
  customerOf: UserUpdateManyWithoutCustomersInput
}

input BpUpdateWithWhereUniqueWithoutCustomerOfInput {
  where: BpWhereUniqueInput!
  data: BpUpdateWithoutCustomerOfDataInput!
}

input BpUpsertWithoutOrdersInput {
  update: BpUpdateWithoutOrdersDataInput!
  create: BpCreateWithoutOrdersInput!
}

input BpUpsertWithWhereUniqueWithoutCustomerOfInput {
  where: BpWhereUniqueInput!
  update: BpUpdateWithoutCustomerOfDataInput!
  create: BpCreateWithoutCustomerOfInput!
}

input BpWhereInput {
  """Logical AND on all given filters."""
  AND: [BpWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpWhereInput!]
  uid: ID

  """All values that are not equal to given value."""
  uid_not: ID

  """All values that are contained in given list."""
  uid_in: [ID!]

  """All values that are not contained in given list."""
  uid_not_in: [ID!]

  """All values less than the given value."""
  uid_lt: ID

  """All values less than or equal the given value."""
  uid_lte: ID

  """All values greater than the given value."""
  uid_gt: ID

  """All values greater than or equal the given value."""
  uid_gte: ID

  """All values containing the given string."""
  uid_contains: ID

  """All values not containing the given string."""
  uid_not_contains: ID

  """All values starting with the given string."""
  uid_starts_with: ID

  """All values not starting with the given string."""
  uid_not_starts_with: ID

  """All values ending with the given string."""
  uid_ends_with: ID

  """All values not ending with the given string."""
  uid_not_ends_with: ID
  name1: String

  """All values that are not equal to given value."""
  name1_not: String

  """All values that are contained in given list."""
  name1_in: [String!]

  """All values that are not contained in given list."""
  name1_not_in: [String!]

  """All values less than the given value."""
  name1_lt: String

  """All values less than or equal the given value."""
  name1_lte: String

  """All values greater than the given value."""
  name1_gt: String

  """All values greater than or equal the given value."""
  name1_gte: String

  """All values containing the given string."""
  name1_contains: String

  """All values not containing the given string."""
  name1_not_contains: String

  """All values starting with the given string."""
  name1_starts_with: String

  """All values not starting with the given string."""
  name1_not_starts_with: String

  """All values ending with the given string."""
  name1_ends_with: String

  """All values not ending with the given string."""
  name1_not_ends_with: String
  name2: String

  """All values that are not equal to given value."""
  name2_not: String

  """All values that are contained in given list."""
  name2_in: [String!]

  """All values that are not contained in given list."""
  name2_not_in: [String!]

  """All values less than the given value."""
  name2_lt: String

  """All values less than or equal the given value."""
  name2_lte: String

  """All values greater than the given value."""
  name2_gt: String

  """All values greater than or equal the given value."""
  name2_gte: String

  """All values containing the given string."""
  name2_contains: String

  """All values not containing the given string."""
  name2_not_contains: String

  """All values starting with the given string."""
  name2_starts_with: String

  """All values not starting with the given string."""
  name2_not_starts_with: String

  """All values ending with the given string."""
  name2_ends_with: String

  """All values not ending with the given string."""
  name2_not_ends_with: String
  lastName1: String

  """All values that are not equal to given value."""
  lastName1_not: String

  """All values that are contained in given list."""
  lastName1_in: [String!]

  """All values that are not contained in given list."""
  lastName1_not_in: [String!]

  """All values less than the given value."""
  lastName1_lt: String

  """All values less than or equal the given value."""
  lastName1_lte: String

  """All values greater than the given value."""
  lastName1_gt: String

  """All values greater than or equal the given value."""
  lastName1_gte: String

  """All values containing the given string."""
  lastName1_contains: String

  """All values not containing the given string."""
  lastName1_not_contains: String

  """All values starting with the given string."""
  lastName1_starts_with: String

  """All values not starting with the given string."""
  lastName1_not_starts_with: String

  """All values ending with the given string."""
  lastName1_ends_with: String

  """All values not ending with the given string."""
  lastName1_not_ends_with: String
  lastName2: String

  """All values that are not equal to given value."""
  lastName2_not: String

  """All values that are contained in given list."""
  lastName2_in: [String!]

  """All values that are not contained in given list."""
  lastName2_not_in: [String!]

  """All values less than the given value."""
  lastName2_lt: String

  """All values less than or equal the given value."""
  lastName2_lte: String

  """All values greater than the given value."""
  lastName2_gt: String

  """All values greater than or equal the given value."""
  lastName2_gte: String

  """All values containing the given string."""
  lastName2_contains: String

  """All values not containing the given string."""
  lastName2_not_contains: String

  """All values starting with the given string."""
  lastName2_starts_with: String

  """All values not starting with the given string."""
  lastName2_not_starts_with: String

  """All values ending with the given string."""
  lastName2_ends_with: String

  """All values not ending with the given string."""
  lastName2_not_ends_with: String
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdBy: String

  """All values that are not equal to given value."""
  createdBy_not: String

  """All values that are contained in given list."""
  createdBy_in: [String!]

  """All values that are not contained in given list."""
  createdBy_not_in: [String!]

  """All values less than the given value."""
  createdBy_lt: String

  """All values less than or equal the given value."""
  createdBy_lte: String

  """All values greater than the given value."""
  createdBy_gt: String

  """All values greater than or equal the given value."""
  createdBy_gte: String

  """All values containing the given string."""
  createdBy_contains: String

  """All values not containing the given string."""
  createdBy_not_contains: String

  """All values starting with the given string."""
  createdBy_starts_with: String

  """All values not starting with the given string."""
  createdBy_not_starts_with: String

  """All values ending with the given string."""
  createdBy_ends_with: String

  """All values not ending with the given string."""
  createdBy_not_ends_with: String
  updatedBy: String

  """All values that are not equal to given value."""
  updatedBy_not: String

  """All values that are contained in given list."""
  updatedBy_in: [String!]

  """All values that are not contained in given list."""
  updatedBy_not_in: [String!]

  """All values less than the given value."""
  updatedBy_lt: String

  """All values less than or equal the given value."""
  updatedBy_lte: String

  """All values greater than the given value."""
  updatedBy_gt: String

  """All values greater than or equal the given value."""
  updatedBy_gte: String

  """All values containing the given string."""
  updatedBy_contains: String

  """All values not containing the given string."""
  updatedBy_not_contains: String

  """All values starting with the given string."""
  updatedBy_starts_with: String

  """All values not starting with the given string."""
  updatedBy_not_starts_with: String

  """All values ending with the given string."""
  updatedBy_ends_with: String

  """All values not ending with the given string."""
  updatedBy_not_ends_with: String
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  customerOf_every: UserWhereInput
  customerOf_some: UserWhereInput
  customerOf_none: UserWhereInput
}

input BpWhereUniqueInput {
  uid: ID
  email: String
}

enum Currency {
  MXN
}

scalar DateTime

type Item {
  uid: ID!
  code: String
  quantity: Float
  description: String
  provider: String
  order: Order!
  pricing(where: PriceWhereInput, orderBy: PriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Price!]
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: String!
  updatedBy: String
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  uid: ID
  code: String
  quantity: Float
  description: String
  provider: String
  createdBy: String!
  updatedBy: String
  order: OrderCreateOneWithoutItemsInput!
  pricing: PriceCreateManyWithoutItemInput
}

input ItemCreateManyWithoutOrderInput {
  create: [ItemCreateWithoutOrderInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateOneWithoutPricingInput {
  create: ItemCreateWithoutPricingInput
  connect: ItemWhereUniqueInput
}

input ItemCreateWithoutOrderInput {
  uid: ID
  code: String
  quantity: Float
  description: String
  provider: String
  createdBy: String!
  updatedBy: String
  pricing: PriceCreateManyWithoutItemInput
}

input ItemCreateWithoutPricingInput {
  uid: ID
  code: String
  quantity: Float
  description: String
  provider: String
  createdBy: String!
  updatedBy: String
  order: OrderCreateOneWithoutItemsInput!
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  uid_ASC
  uid_DESC
  code_ASC
  code_DESC
  quantity_ASC
  quantity_DESC
  description_ASC
  description_DESC
  provider_ASC
  provider_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdBy_ASC
  createdBy_DESC
  updatedBy_ASC
  updatedBy_DESC
}

type ItemPreviousValues {
  uid: ID!
  code: String
  quantity: Float
  description: String
  provider: String
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: String!
  updatedBy: String
}

input ItemScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemScalarWhereInput!]
  uid: ID

  """All values that are not equal to given value."""
  uid_not: ID

  """All values that are contained in given list."""
  uid_in: [ID!]

  """All values that are not contained in given list."""
  uid_not_in: [ID!]

  """All values less than the given value."""
  uid_lt: ID

  """All values less than or equal the given value."""
  uid_lte: ID

  """All values greater than the given value."""
  uid_gt: ID

  """All values greater than or equal the given value."""
  uid_gte: ID

  """All values containing the given string."""
  uid_contains: ID

  """All values not containing the given string."""
  uid_not_contains: ID

  """All values starting with the given string."""
  uid_starts_with: ID

  """All values not starting with the given string."""
  uid_not_starts_with: ID

  """All values ending with the given string."""
  uid_ends_with: ID

  """All values not ending with the given string."""
  uid_not_ends_with: ID
  code: String

  """All values that are not equal to given value."""
  code_not: String

  """All values that are contained in given list."""
  code_in: [String!]

  """All values that are not contained in given list."""
  code_not_in: [String!]

  """All values less than the given value."""
  code_lt: String

  """All values less than or equal the given value."""
  code_lte: String

  """All values greater than the given value."""
  code_gt: String

  """All values greater than or equal the given value."""
  code_gte: String

  """All values containing the given string."""
  code_contains: String

  """All values not containing the given string."""
  code_not_contains: String

  """All values starting with the given string."""
  code_starts_with: String

  """All values not starting with the given string."""
  code_not_starts_with: String

  """All values ending with the given string."""
  code_ends_with: String

  """All values not ending with the given string."""
  code_not_ends_with: String
  quantity: Float

  """All values that are not equal to given value."""
  quantity_not: Float

  """All values that are contained in given list."""
  quantity_in: [Float!]

  """All values that are not contained in given list."""
  quantity_not_in: [Float!]

  """All values less than the given value."""
  quantity_lt: Float

  """All values less than or equal the given value."""
  quantity_lte: Float

  """All values greater than the given value."""
  quantity_gt: Float

  """All values greater than or equal the given value."""
  quantity_gte: Float
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  provider: String

  """All values that are not equal to given value."""
  provider_not: String

  """All values that are contained in given list."""
  provider_in: [String!]

  """All values that are not contained in given list."""
  provider_not_in: [String!]

  """All values less than the given value."""
  provider_lt: String

  """All values less than or equal the given value."""
  provider_lte: String

  """All values greater than the given value."""
  provider_gt: String

  """All values greater than or equal the given value."""
  provider_gte: String

  """All values containing the given string."""
  provider_contains: String

  """All values not containing the given string."""
  provider_not_contains: String

  """All values starting with the given string."""
  provider_starts_with: String

  """All values not starting with the given string."""
  provider_not_starts_with: String

  """All values ending with the given string."""
  provider_ends_with: String

  """All values not ending with the given string."""
  provider_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdBy: String

  """All values that are not equal to given value."""
  createdBy_not: String

  """All values that are contained in given list."""
  createdBy_in: [String!]

  """All values that are not contained in given list."""
  createdBy_not_in: [String!]

  """All values less than the given value."""
  createdBy_lt: String

  """All values less than or equal the given value."""
  createdBy_lte: String

  """All values greater than the given value."""
  createdBy_gt: String

  """All values greater than or equal the given value."""
  createdBy_gte: String

  """All values containing the given string."""
  createdBy_contains: String

  """All values not containing the given string."""
  createdBy_not_contains: String

  """All values starting with the given string."""
  createdBy_starts_with: String

  """All values not starting with the given string."""
  createdBy_not_starts_with: String

  """All values ending with the given string."""
  createdBy_ends_with: String

  """All values not ending with the given string."""
  createdBy_not_ends_with: String
  updatedBy: String

  """All values that are not equal to given value."""
  updatedBy_not: String

  """All values that are contained in given list."""
  updatedBy_in: [String!]

  """All values that are not contained in given list."""
  updatedBy_not_in: [String!]

  """All values less than the given value."""
  updatedBy_lt: String

  """All values less than or equal the given value."""
  updatedBy_lte: String

  """All values greater than the given value."""
  updatedBy_gt: String

  """All values greater than or equal the given value."""
  updatedBy_gte: String

  """All values containing the given string."""
  updatedBy_contains: String

  """All values not containing the given string."""
  updatedBy_not_contains: String

  """All values starting with the given string."""
  updatedBy_starts_with: String

  """All values not starting with the given string."""
  updatedBy_not_starts_with: String

  """All values ending with the given string."""
  updatedBy_ends_with: String

  """All values not ending with the given string."""
  updatedBy_not_ends_with: String
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

input ItemUpdateInput {
  code: String
  quantity: Float
  description: String
  provider: String
  createdBy: String
  updatedBy: String
  order: OrderUpdateOneRequiredWithoutItemsInput
  pricing: PriceUpdateManyWithoutItemInput
}

input ItemUpdateManyDataInput {
  code: String
  quantity: Float
  description: String
  provider: String
  createdBy: String
  updatedBy: String
}

input ItemUpdateManyMutationInput {
  code: String
  quantity: Float
  description: String
  provider: String
  createdBy: String
  updatedBy: String
}

input ItemUpdateManyWithoutOrderInput {
  create: [ItemCreateWithoutOrderInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutOrderInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
  deleteMany: [ItemScalarWhereInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutOrderInput!]
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemUpdateOneRequiredWithoutPricingInput {
  create: ItemCreateWithoutPricingInput
  connect: ItemWhereUniqueInput
  update: ItemUpdateWithoutPricingDataInput
  upsert: ItemUpsertWithoutPricingInput
}

input ItemUpdateWithoutOrderDataInput {
  code: String
  quantity: Float
  description: String
  provider: String
  createdBy: String
  updatedBy: String
  pricing: PriceUpdateManyWithoutItemInput
}

input ItemUpdateWithoutPricingDataInput {
  code: String
  quantity: Float
  description: String
  provider: String
  createdBy: String
  updatedBy: String
  order: OrderUpdateOneRequiredWithoutItemsInput
}

input ItemUpdateWithWhereUniqueWithoutOrderInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutOrderDataInput!
}

input ItemUpsertWithoutPricingInput {
  update: ItemUpdateWithoutPricingDataInput!
  create: ItemCreateWithoutPricingInput!
}

input ItemUpsertWithWhereUniqueWithoutOrderInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutOrderDataInput!
  create: ItemCreateWithoutOrderInput!
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemWhereInput!]
  uid: ID

  """All values that are not equal to given value."""
  uid_not: ID

  """All values that are contained in given list."""
  uid_in: [ID!]

  """All values that are not contained in given list."""
  uid_not_in: [ID!]

  """All values less than the given value."""
  uid_lt: ID

  """All values less than or equal the given value."""
  uid_lte: ID

  """All values greater than the given value."""
  uid_gt: ID

  """All values greater than or equal the given value."""
  uid_gte: ID

  """All values containing the given string."""
  uid_contains: ID

  """All values not containing the given string."""
  uid_not_contains: ID

  """All values starting with the given string."""
  uid_starts_with: ID

  """All values not starting with the given string."""
  uid_not_starts_with: ID

  """All values ending with the given string."""
  uid_ends_with: ID

  """All values not ending with the given string."""
  uid_not_ends_with: ID
  code: String

  """All values that are not equal to given value."""
  code_not: String

  """All values that are contained in given list."""
  code_in: [String!]

  """All values that are not contained in given list."""
  code_not_in: [String!]

  """All values less than the given value."""
  code_lt: String

  """All values less than or equal the given value."""
  code_lte: String

  """All values greater than the given value."""
  code_gt: String

  """All values greater than or equal the given value."""
  code_gte: String

  """All values containing the given string."""
  code_contains: String

  """All values not containing the given string."""
  code_not_contains: String

  """All values starting with the given string."""
  code_starts_with: String

  """All values not starting with the given string."""
  code_not_starts_with: String

  """All values ending with the given string."""
  code_ends_with: String

  """All values not ending with the given string."""
  code_not_ends_with: String
  quantity: Float

  """All values that are not equal to given value."""
  quantity_not: Float

  """All values that are contained in given list."""
  quantity_in: [Float!]

  """All values that are not contained in given list."""
  quantity_not_in: [Float!]

  """All values less than the given value."""
  quantity_lt: Float

  """All values less than or equal the given value."""
  quantity_lte: Float

  """All values greater than the given value."""
  quantity_gt: Float

  """All values greater than or equal the given value."""
  quantity_gte: Float
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  provider: String

  """All values that are not equal to given value."""
  provider_not: String

  """All values that are contained in given list."""
  provider_in: [String!]

  """All values that are not contained in given list."""
  provider_not_in: [String!]

  """All values less than the given value."""
  provider_lt: String

  """All values less than or equal the given value."""
  provider_lte: String

  """All values greater than the given value."""
  provider_gt: String

  """All values greater than or equal the given value."""
  provider_gte: String

  """All values containing the given string."""
  provider_contains: String

  """All values not containing the given string."""
  provider_not_contains: String

  """All values starting with the given string."""
  provider_starts_with: String

  """All values not starting with the given string."""
  provider_not_starts_with: String

  """All values ending with the given string."""
  provider_ends_with: String

  """All values not ending with the given string."""
  provider_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdBy: String

  """All values that are not equal to given value."""
  createdBy_not: String

  """All values that are contained in given list."""
  createdBy_in: [String!]

  """All values that are not contained in given list."""
  createdBy_not_in: [String!]

  """All values less than the given value."""
  createdBy_lt: String

  """All values less than or equal the given value."""
  createdBy_lte: String

  """All values greater than the given value."""
  createdBy_gt: String

  """All values greater than or equal the given value."""
  createdBy_gte: String

  """All values containing the given string."""
  createdBy_contains: String

  """All values not containing the given string."""
  createdBy_not_contains: String

  """All values starting with the given string."""
  createdBy_starts_with: String

  """All values not starting with the given string."""
  createdBy_not_starts_with: String

  """All values ending with the given string."""
  createdBy_ends_with: String

  """All values not ending with the given string."""
  createdBy_not_ends_with: String
  updatedBy: String

  """All values that are not equal to given value."""
  updatedBy_not: String

  """All values that are contained in given list."""
  updatedBy_in: [String!]

  """All values that are not contained in given list."""
  updatedBy_not_in: [String!]

  """All values less than the given value."""
  updatedBy_lt: String

  """All values less than or equal the given value."""
  updatedBy_lte: String

  """All values greater than the given value."""
  updatedBy_gt: String

  """All values greater than or equal the given value."""
  updatedBy_gte: String

  """All values containing the given string."""
  updatedBy_contains: String

  """All values not containing the given string."""
  updatedBy_not_contains: String

  """All values starting with the given string."""
  updatedBy_starts_with: String

  """All values not starting with the given string."""
  updatedBy_not_starts_with: String

  """All values ending with the given string."""
  updatedBy_ends_with: String

  """All values not ending with the given string."""
  updatedBy_not_ends_with: String
  order: OrderWhereInput
  pricing_every: PriceWhereInput
  pricing_some: PriceWhereInput
  pricing_none: PriceWhereInput
}

input ItemWhereUniqueInput {
  uid: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createBp(data: BpCreateInput!): Bp!
  createUser(data: UserCreateInput!): User!
  createOrder(data: OrderCreateInput!): Order!
  createItem(data: ItemCreateInput!): Item!
  createPrice(data: PriceCreateInput!): Price!
  updateBp(data: BpUpdateInput!, where: BpWhereUniqueInput!): Bp
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updatePrice(data: PriceUpdateInput!, where: PriceWhereUniqueInput!): Price
  deleteBp(where: BpWhereUniqueInput!): Bp
  deleteUser(where: UserWhereUniqueInput!): User
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteItem(where: ItemWhereUniqueInput!): Item
  deletePrice(where: PriceWhereUniqueInput!): Price
  upsertBp(where: BpWhereUniqueInput!, create: BpCreateInput!, update: BpUpdateInput!): Bp!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  upsertPrice(where: PriceWhereUniqueInput!, create: PriceCreateInput!, update: PriceUpdateInput!): Price!
  updateManyBps(data: BpUpdateManyMutationInput!, where: BpWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  updateManyPrices(data: PriceUpdateManyMutationInput!, where: PriceWhereInput): BatchPayload!
  deleteManyBps(where: BpWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  deleteManyPrices(where: PriceWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Order {
  uid: ID!
  name: String!
  stage: OrderStage
  issuedTo: Bp!
  assignedTo: User!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: String
  updatedBy: String
}

"""A connection to a list of items."""
type OrderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  uid: ID
  name: String!
  stage: OrderStage
  createdBy: String
  updatedBy: String
  issuedTo: BpCreateOneWithoutOrdersInput!
  assignedTo: UserCreateOneWithoutOrdersInput!
  items: ItemCreateManyWithoutOrderInput
}

input OrderCreateManyWithoutAssignedToInput {
  create: [OrderCreateWithoutAssignedToInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateManyWithoutIssuedToInput {
  create: [OrderCreateWithoutIssuedToInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateOneWithoutItemsInput {
  create: OrderCreateWithoutItemsInput
  connect: OrderWhereUniqueInput
}

input OrderCreateWithoutAssignedToInput {
  uid: ID
  name: String!
  stage: OrderStage
  createdBy: String
  updatedBy: String
  issuedTo: BpCreateOneWithoutOrdersInput!
  items: ItemCreateManyWithoutOrderInput
}

input OrderCreateWithoutIssuedToInput {
  uid: ID
  name: String!
  stage: OrderStage
  createdBy: String
  updatedBy: String
  assignedTo: UserCreateOneWithoutOrdersInput!
  items: ItemCreateManyWithoutOrderInput
}

input OrderCreateWithoutItemsInput {
  uid: ID
  name: String!
  stage: OrderStage
  createdBy: String
  updatedBy: String
  issuedTo: BpCreateOneWithoutOrdersInput!
  assignedTo: UserCreateOneWithoutOrdersInput!
}

"""An edge in a connection."""
type OrderEdge {
  """The item at the end of the edge."""
  node: Order!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderOrderByInput {
  uid_ASC
  uid_DESC
  name_ASC
  name_DESC
  stage_ASC
  stage_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdBy_ASC
  createdBy_DESC
  updatedBy_ASC
  updatedBy_DESC
}

type OrderPreviousValues {
  uid: ID!
  name: String!
  stage: OrderStage
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: String
  updatedBy: String
}

input OrderScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderScalarWhereInput!]
  uid: ID

  """All values that are not equal to given value."""
  uid_not: ID

  """All values that are contained in given list."""
  uid_in: [ID!]

  """All values that are not contained in given list."""
  uid_not_in: [ID!]

  """All values less than the given value."""
  uid_lt: ID

  """All values less than or equal the given value."""
  uid_lte: ID

  """All values greater than the given value."""
  uid_gt: ID

  """All values greater than or equal the given value."""
  uid_gte: ID

  """All values containing the given string."""
  uid_contains: ID

  """All values not containing the given string."""
  uid_not_contains: ID

  """All values starting with the given string."""
  uid_starts_with: ID

  """All values not starting with the given string."""
  uid_not_starts_with: ID

  """All values ending with the given string."""
  uid_ends_with: ID

  """All values not ending with the given string."""
  uid_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  stage: OrderStage

  """All values that are not equal to given value."""
  stage_not: OrderStage

  """All values that are contained in given list."""
  stage_in: [OrderStage!]

  """All values that are not contained in given list."""
  stage_not_in: [OrderStage!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdBy: String

  """All values that are not equal to given value."""
  createdBy_not: String

  """All values that are contained in given list."""
  createdBy_in: [String!]

  """All values that are not contained in given list."""
  createdBy_not_in: [String!]

  """All values less than the given value."""
  createdBy_lt: String

  """All values less than or equal the given value."""
  createdBy_lte: String

  """All values greater than the given value."""
  createdBy_gt: String

  """All values greater than or equal the given value."""
  createdBy_gte: String

  """All values containing the given string."""
  createdBy_contains: String

  """All values not containing the given string."""
  createdBy_not_contains: String

  """All values starting with the given string."""
  createdBy_starts_with: String

  """All values not starting with the given string."""
  createdBy_not_starts_with: String

  """All values ending with the given string."""
  createdBy_ends_with: String

  """All values not ending with the given string."""
  createdBy_not_ends_with: String
  updatedBy: String

  """All values that are not equal to given value."""
  updatedBy_not: String

  """All values that are contained in given list."""
  updatedBy_in: [String!]

  """All values that are not contained in given list."""
  updatedBy_not_in: [String!]

  """All values less than the given value."""
  updatedBy_lt: String

  """All values less than or equal the given value."""
  updatedBy_lte: String

  """All values greater than the given value."""
  updatedBy_gt: String

  """All values greater than or equal the given value."""
  updatedBy_gte: String

  """All values containing the given string."""
  updatedBy_contains: String

  """All values not containing the given string."""
  updatedBy_not_contains: String

  """All values starting with the given string."""
  updatedBy_starts_with: String

  """All values not starting with the given string."""
  updatedBy_not_starts_with: String

  """All values ending with the given string."""
  updatedBy_ends_with: String

  """All values not ending with the given string."""
  updatedBy_not_ends_with: String
}

enum OrderStage {
  OPEN
  WON
  CLOSED
  IN_PROCESS
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
}

input OrderUpdateInput {
  name: String
  stage: OrderStage
  createdBy: String
  updatedBy: String
  issuedTo: BpUpdateOneRequiredWithoutOrdersInput
  assignedTo: UserUpdateOneRequiredWithoutOrdersInput
  items: ItemUpdateManyWithoutOrderInput
}

input OrderUpdateManyDataInput {
  name: String
  stage: OrderStage
  createdBy: String
  updatedBy: String
}

input OrderUpdateManyMutationInput {
  name: String
  stage: OrderStage
  createdBy: String
  updatedBy: String
}

input OrderUpdateManyWithoutAssignedToInput {
  create: [OrderCreateWithoutAssignedToInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  delete: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutAssignedToInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
  deleteMany: [OrderScalarWhereInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutAssignedToInput!]
}

input OrderUpdateManyWithoutIssuedToInput {
  create: [OrderCreateWithoutIssuedToInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  delete: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutIssuedToInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
  deleteMany: [OrderScalarWhereInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutIssuedToInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateOneRequiredWithoutItemsInput {
  create: OrderCreateWithoutItemsInput
  connect: OrderWhereUniqueInput
  update: OrderUpdateWithoutItemsDataInput
  upsert: OrderUpsertWithoutItemsInput
}

input OrderUpdateWithoutAssignedToDataInput {
  name: String
  stage: OrderStage
  createdBy: String
  updatedBy: String
  issuedTo: BpUpdateOneRequiredWithoutOrdersInput
  items: ItemUpdateManyWithoutOrderInput
}

input OrderUpdateWithoutIssuedToDataInput {
  name: String
  stage: OrderStage
  createdBy: String
  updatedBy: String
  assignedTo: UserUpdateOneRequiredWithoutOrdersInput
  items: ItemUpdateManyWithoutOrderInput
}

input OrderUpdateWithoutItemsDataInput {
  name: String
  stage: OrderStage
  createdBy: String
  updatedBy: String
  issuedTo: BpUpdateOneRequiredWithoutOrdersInput
  assignedTo: UserUpdateOneRequiredWithoutOrdersInput
}

input OrderUpdateWithWhereUniqueWithoutAssignedToInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutAssignedToDataInput!
}

input OrderUpdateWithWhereUniqueWithoutIssuedToInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutIssuedToDataInput!
}

input OrderUpsertWithoutItemsInput {
  update: OrderUpdateWithoutItemsDataInput!
  create: OrderCreateWithoutItemsInput!
}

input OrderUpsertWithWhereUniqueWithoutAssignedToInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutAssignedToDataInput!
  create: OrderCreateWithoutAssignedToInput!
}

input OrderUpsertWithWhereUniqueWithoutIssuedToInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutIssuedToDataInput!
  create: OrderCreateWithoutIssuedToInput!
}

input OrderWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderWhereInput!]
  uid: ID

  """All values that are not equal to given value."""
  uid_not: ID

  """All values that are contained in given list."""
  uid_in: [ID!]

  """All values that are not contained in given list."""
  uid_not_in: [ID!]

  """All values less than the given value."""
  uid_lt: ID

  """All values less than or equal the given value."""
  uid_lte: ID

  """All values greater than the given value."""
  uid_gt: ID

  """All values greater than or equal the given value."""
  uid_gte: ID

  """All values containing the given string."""
  uid_contains: ID

  """All values not containing the given string."""
  uid_not_contains: ID

  """All values starting with the given string."""
  uid_starts_with: ID

  """All values not starting with the given string."""
  uid_not_starts_with: ID

  """All values ending with the given string."""
  uid_ends_with: ID

  """All values not ending with the given string."""
  uid_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  stage: OrderStage

  """All values that are not equal to given value."""
  stage_not: OrderStage

  """All values that are contained in given list."""
  stage_in: [OrderStage!]

  """All values that are not contained in given list."""
  stage_not_in: [OrderStage!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdBy: String

  """All values that are not equal to given value."""
  createdBy_not: String

  """All values that are contained in given list."""
  createdBy_in: [String!]

  """All values that are not contained in given list."""
  createdBy_not_in: [String!]

  """All values less than the given value."""
  createdBy_lt: String

  """All values less than or equal the given value."""
  createdBy_lte: String

  """All values greater than the given value."""
  createdBy_gt: String

  """All values greater than or equal the given value."""
  createdBy_gte: String

  """All values containing the given string."""
  createdBy_contains: String

  """All values not containing the given string."""
  createdBy_not_contains: String

  """All values starting with the given string."""
  createdBy_starts_with: String

  """All values not starting with the given string."""
  createdBy_not_starts_with: String

  """All values ending with the given string."""
  createdBy_ends_with: String

  """All values not ending with the given string."""
  createdBy_not_ends_with: String
  updatedBy: String

  """All values that are not equal to given value."""
  updatedBy_not: String

  """All values that are contained in given list."""
  updatedBy_in: [String!]

  """All values that are not contained in given list."""
  updatedBy_not_in: [String!]

  """All values less than the given value."""
  updatedBy_lt: String

  """All values less than or equal the given value."""
  updatedBy_lte: String

  """All values greater than the given value."""
  updatedBy_gt: String

  """All values greater than or equal the given value."""
  updatedBy_gte: String

  """All values containing the given string."""
  updatedBy_contains: String

  """All values not containing the given string."""
  updatedBy_not_contains: String

  """All values starting with the given string."""
  updatedBy_starts_with: String

  """All values not starting with the given string."""
  updatedBy_not_starts_with: String

  """All values ending with the given string."""
  updatedBy_ends_with: String

  """All values not ending with the given string."""
  updatedBy_not_ends_with: String
  issuedTo: BpWhereInput
  assignedTo: UserWhereInput
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
}

input OrderWhereUniqueInput {
  uid: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Price {
  uid: ID!
  type: PriceType
  amount: Float!
  currency: Currency!
  item: Item!
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: String!
  updatedBy: String
}

"""A connection to a list of items."""
type PriceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PriceEdge]!
  aggregate: AggregatePrice!
}

input PriceCreateInput {
  uid: ID
  type: PriceType
  amount: Float!
  currency: Currency!
  createdBy: String!
  updatedBy: String
  item: ItemCreateOneWithoutPricingInput!
}

input PriceCreateManyWithoutItemInput {
  create: [PriceCreateWithoutItemInput!]
  connect: [PriceWhereUniqueInput!]
}

input PriceCreateWithoutItemInput {
  uid: ID
  type: PriceType
  amount: Float!
  currency: Currency!
  createdBy: String!
  updatedBy: String
}

"""An edge in a connection."""
type PriceEdge {
  """The item at the end of the edge."""
  node: Price!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PriceOrderByInput {
  uid_ASC
  uid_DESC
  type_ASC
  type_DESC
  amount_ASC
  amount_DESC
  currency_ASC
  currency_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdBy_ASC
  createdBy_DESC
  updatedBy_ASC
  updatedBy_DESC
}

type PricePreviousValues {
  uid: ID!
  type: PriceType
  amount: Float!
  currency: Currency!
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: String!
  updatedBy: String
}

input PriceScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PriceScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PriceScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PriceScalarWhereInput!]
  uid: ID

  """All values that are not equal to given value."""
  uid_not: ID

  """All values that are contained in given list."""
  uid_in: [ID!]

  """All values that are not contained in given list."""
  uid_not_in: [ID!]

  """All values less than the given value."""
  uid_lt: ID

  """All values less than or equal the given value."""
  uid_lte: ID

  """All values greater than the given value."""
  uid_gt: ID

  """All values greater than or equal the given value."""
  uid_gte: ID

  """All values containing the given string."""
  uid_contains: ID

  """All values not containing the given string."""
  uid_not_contains: ID

  """All values starting with the given string."""
  uid_starts_with: ID

  """All values not starting with the given string."""
  uid_not_starts_with: ID

  """All values ending with the given string."""
  uid_ends_with: ID

  """All values not ending with the given string."""
  uid_not_ends_with: ID
  type: PriceType

  """All values that are not equal to given value."""
  type_not: PriceType

  """All values that are contained in given list."""
  type_in: [PriceType!]

  """All values that are not contained in given list."""
  type_not_in: [PriceType!]
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
  currency: Currency

  """All values that are not equal to given value."""
  currency_not: Currency

  """All values that are contained in given list."""
  currency_in: [Currency!]

  """All values that are not contained in given list."""
  currency_not_in: [Currency!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdBy: String

  """All values that are not equal to given value."""
  createdBy_not: String

  """All values that are contained in given list."""
  createdBy_in: [String!]

  """All values that are not contained in given list."""
  createdBy_not_in: [String!]

  """All values less than the given value."""
  createdBy_lt: String

  """All values less than or equal the given value."""
  createdBy_lte: String

  """All values greater than the given value."""
  createdBy_gt: String

  """All values greater than or equal the given value."""
  createdBy_gte: String

  """All values containing the given string."""
  createdBy_contains: String

  """All values not containing the given string."""
  createdBy_not_contains: String

  """All values starting with the given string."""
  createdBy_starts_with: String

  """All values not starting with the given string."""
  createdBy_not_starts_with: String

  """All values ending with the given string."""
  createdBy_ends_with: String

  """All values not ending with the given string."""
  createdBy_not_ends_with: String
  updatedBy: String

  """All values that are not equal to given value."""
  updatedBy_not: String

  """All values that are contained in given list."""
  updatedBy_in: [String!]

  """All values that are not contained in given list."""
  updatedBy_not_in: [String!]

  """All values less than the given value."""
  updatedBy_lt: String

  """All values less than or equal the given value."""
  updatedBy_lte: String

  """All values greater than the given value."""
  updatedBy_gt: String

  """All values greater than or equal the given value."""
  updatedBy_gte: String

  """All values containing the given string."""
  updatedBy_contains: String

  """All values not containing the given string."""
  updatedBy_not_contains: String

  """All values starting with the given string."""
  updatedBy_starts_with: String

  """All values not starting with the given string."""
  updatedBy_not_starts_with: String

  """All values ending with the given string."""
  updatedBy_ends_with: String

  """All values not ending with the given string."""
  updatedBy_not_ends_with: String
}

type PriceSubscriptionPayload {
  mutation: MutationType!
  node: Price
  updatedFields: [String!]
  previousValues: PricePreviousValues
}

input PriceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PriceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PriceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PriceSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PriceWhereInput
}

enum PriceType {
  GENERAL
}

input PriceUpdateInput {
  type: PriceType
  amount: Float
  currency: Currency
  createdBy: String
  updatedBy: String
  item: ItemUpdateOneRequiredWithoutPricingInput
}

input PriceUpdateManyDataInput {
  type: PriceType
  amount: Float
  currency: Currency
  createdBy: String
  updatedBy: String
}

input PriceUpdateManyMutationInput {
  type: PriceType
  amount: Float
  currency: Currency
  createdBy: String
  updatedBy: String
}

input PriceUpdateManyWithoutItemInput {
  create: [PriceCreateWithoutItemInput!]
  connect: [PriceWhereUniqueInput!]
  set: [PriceWhereUniqueInput!]
  disconnect: [PriceWhereUniqueInput!]
  delete: [PriceWhereUniqueInput!]
  update: [PriceUpdateWithWhereUniqueWithoutItemInput!]
  updateMany: [PriceUpdateManyWithWhereNestedInput!]
  deleteMany: [PriceScalarWhereInput!]
  upsert: [PriceUpsertWithWhereUniqueWithoutItemInput!]
}

input PriceUpdateManyWithWhereNestedInput {
  where: PriceScalarWhereInput!
  data: PriceUpdateManyDataInput!
}

input PriceUpdateWithoutItemDataInput {
  type: PriceType
  amount: Float
  currency: Currency
  createdBy: String
  updatedBy: String
}

input PriceUpdateWithWhereUniqueWithoutItemInput {
  where: PriceWhereUniqueInput!
  data: PriceUpdateWithoutItemDataInput!
}

input PriceUpsertWithWhereUniqueWithoutItemInput {
  where: PriceWhereUniqueInput!
  update: PriceUpdateWithoutItemDataInput!
  create: PriceCreateWithoutItemInput!
}

input PriceWhereInput {
  """Logical AND on all given filters."""
  AND: [PriceWhereInput!]

  """Logical OR on all given filters."""
  OR: [PriceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PriceWhereInput!]
  uid: ID

  """All values that are not equal to given value."""
  uid_not: ID

  """All values that are contained in given list."""
  uid_in: [ID!]

  """All values that are not contained in given list."""
  uid_not_in: [ID!]

  """All values less than the given value."""
  uid_lt: ID

  """All values less than or equal the given value."""
  uid_lte: ID

  """All values greater than the given value."""
  uid_gt: ID

  """All values greater than or equal the given value."""
  uid_gte: ID

  """All values containing the given string."""
  uid_contains: ID

  """All values not containing the given string."""
  uid_not_contains: ID

  """All values starting with the given string."""
  uid_starts_with: ID

  """All values not starting with the given string."""
  uid_not_starts_with: ID

  """All values ending with the given string."""
  uid_ends_with: ID

  """All values not ending with the given string."""
  uid_not_ends_with: ID
  type: PriceType

  """All values that are not equal to given value."""
  type_not: PriceType

  """All values that are contained in given list."""
  type_in: [PriceType!]

  """All values that are not contained in given list."""
  type_not_in: [PriceType!]
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
  currency: Currency

  """All values that are not equal to given value."""
  currency_not: Currency

  """All values that are contained in given list."""
  currency_in: [Currency!]

  """All values that are not contained in given list."""
  currency_not_in: [Currency!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdBy: String

  """All values that are not equal to given value."""
  createdBy_not: String

  """All values that are contained in given list."""
  createdBy_in: [String!]

  """All values that are not contained in given list."""
  createdBy_not_in: [String!]

  """All values less than the given value."""
  createdBy_lt: String

  """All values less than or equal the given value."""
  createdBy_lte: String

  """All values greater than the given value."""
  createdBy_gt: String

  """All values greater than or equal the given value."""
  createdBy_gte: String

  """All values containing the given string."""
  createdBy_contains: String

  """All values not containing the given string."""
  createdBy_not_contains: String

  """All values starting with the given string."""
  createdBy_starts_with: String

  """All values not starting with the given string."""
  createdBy_not_starts_with: String

  """All values ending with the given string."""
  createdBy_ends_with: String

  """All values not ending with the given string."""
  createdBy_not_ends_with: String
  updatedBy: String

  """All values that are not equal to given value."""
  updatedBy_not: String

  """All values that are contained in given list."""
  updatedBy_in: [String!]

  """All values that are not contained in given list."""
  updatedBy_not_in: [String!]

  """All values less than the given value."""
  updatedBy_lt: String

  """All values less than or equal the given value."""
  updatedBy_lte: String

  """All values greater than the given value."""
  updatedBy_gt: String

  """All values greater than or equal the given value."""
  updatedBy_gte: String

  """All values containing the given string."""
  updatedBy_contains: String

  """All values not containing the given string."""
  updatedBy_not_contains: String

  """All values starting with the given string."""
  updatedBy_starts_with: String

  """All values not starting with the given string."""
  updatedBy_not_starts_with: String

  """All values ending with the given string."""
  updatedBy_ends_with: String

  """All values not ending with the given string."""
  updatedBy_not_ends_with: String
  item: ItemWhereInput
}

input PriceWhereUniqueInput {
  uid: ID
}

type Query {
  bps(where: BpWhereInput, orderBy: BpOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bp]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  prices(where: PriceWhereInput, orderBy: PriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Price]!
  bp(where: BpWhereUniqueInput!): Bp
  user(where: UserWhereUniqueInput!): User
  order(where: OrderWhereUniqueInput!): Order
  item(where: ItemWhereUniqueInput!): Item
  price(where: PriceWhereUniqueInput!): Price
  bpsConnection(where: BpWhereInput, orderBy: BpOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  pricesConnection(where: PriceWhereInput, orderBy: PriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PriceConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  bp(where: BpSubscriptionWhereInput): BpSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  price(where: PriceSubscriptionWhereInput): PriceSubscriptionPayload
}

type User {
  uid: ID!
  extUid: String
  role: String
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  customers(where: BpWhereInput, orderBy: BpOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bp!]
  createdAt: DateTime
  updatedAt: DateTime
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  uid: ID
  extUid: String
  role: String
  orders: OrderCreateManyWithoutAssignedToInput
  customers: BpCreateManyWithoutCustomerOfInput
}

input UserCreateManyWithoutCustomersInput {
  create: [UserCreateWithoutCustomersInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCustomersInput {
  uid: ID
  extUid: String
  role: String
  orders: OrderCreateManyWithoutAssignedToInput
}

input UserCreateWithoutOrdersInput {
  uid: ID
  extUid: String
  role: String
  customers: BpCreateManyWithoutCustomerOfInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  uid_ASC
  uid_DESC
  extUid_ASC
  extUid_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  uid: ID!
  extUid: String
  role: String
  createdAt: DateTime
  updatedAt: DateTime
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
  uid: ID

  """All values that are not equal to given value."""
  uid_not: ID

  """All values that are contained in given list."""
  uid_in: [ID!]

  """All values that are not contained in given list."""
  uid_not_in: [ID!]

  """All values less than the given value."""
  uid_lt: ID

  """All values less than or equal the given value."""
  uid_lte: ID

  """All values greater than the given value."""
  uid_gt: ID

  """All values greater than or equal the given value."""
  uid_gte: ID

  """All values containing the given string."""
  uid_contains: ID

  """All values not containing the given string."""
  uid_not_contains: ID

  """All values starting with the given string."""
  uid_starts_with: ID

  """All values not starting with the given string."""
  uid_not_starts_with: ID

  """All values ending with the given string."""
  uid_ends_with: ID

  """All values not ending with the given string."""
  uid_not_ends_with: ID
  extUid: String

  """All values that are not equal to given value."""
  extUid_not: String

  """All values that are contained in given list."""
  extUid_in: [String!]

  """All values that are not contained in given list."""
  extUid_not_in: [String!]

  """All values less than the given value."""
  extUid_lt: String

  """All values less than or equal the given value."""
  extUid_lte: String

  """All values greater than the given value."""
  extUid_gt: String

  """All values greater than or equal the given value."""
  extUid_gte: String

  """All values containing the given string."""
  extUid_contains: String

  """All values not containing the given string."""
  extUid_not_contains: String

  """All values starting with the given string."""
  extUid_starts_with: String

  """All values not starting with the given string."""
  extUid_not_starts_with: String

  """All values ending with the given string."""
  extUid_ends_with: String

  """All values not ending with the given string."""
  extUid_not_ends_with: String
  role: String

  """All values that are not equal to given value."""
  role_not: String

  """All values that are contained in given list."""
  role_in: [String!]

  """All values that are not contained in given list."""
  role_not_in: [String!]

  """All values less than the given value."""
  role_lt: String

  """All values less than or equal the given value."""
  role_lte: String

  """All values greater than the given value."""
  role_gt: String

  """All values greater than or equal the given value."""
  role_gte: String

  """All values containing the given string."""
  role_contains: String

  """All values not containing the given string."""
  role_not_contains: String

  """All values starting with the given string."""
  role_starts_with: String

  """All values not starting with the given string."""
  role_not_starts_with: String

  """All values ending with the given string."""
  role_ends_with: String

  """All values not ending with the given string."""
  role_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  extUid: String
  role: String
  orders: OrderUpdateManyWithoutAssignedToInput
  customers: BpUpdateManyWithoutCustomerOfInput
}

input UserUpdateManyDataInput {
  extUid: String
  role: String
}

input UserUpdateManyMutationInput {
  extUid: String
  role: String
}

input UserUpdateManyWithoutCustomersInput {
  create: [UserCreateWithoutCustomersInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCustomersInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCustomersInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutOrdersDataInput
  upsert: UserUpsertWithoutOrdersInput
}

input UserUpdateWithoutCustomersDataInput {
  extUid: String
  role: String
  orders: OrderUpdateManyWithoutAssignedToInput
}

input UserUpdateWithoutOrdersDataInput {
  extUid: String
  role: String
  customers: BpUpdateManyWithoutCustomerOfInput
}

input UserUpdateWithWhereUniqueWithoutCustomersInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCustomersDataInput!
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
}

input UserUpsertWithWhereUniqueWithoutCustomersInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCustomersDataInput!
  create: UserCreateWithoutCustomersInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  uid: ID

  """All values that are not equal to given value."""
  uid_not: ID

  """All values that are contained in given list."""
  uid_in: [ID!]

  """All values that are not contained in given list."""
  uid_not_in: [ID!]

  """All values less than the given value."""
  uid_lt: ID

  """All values less than or equal the given value."""
  uid_lte: ID

  """All values greater than the given value."""
  uid_gt: ID

  """All values greater than or equal the given value."""
  uid_gte: ID

  """All values containing the given string."""
  uid_contains: ID

  """All values not containing the given string."""
  uid_not_contains: ID

  """All values starting with the given string."""
  uid_starts_with: ID

  """All values not starting with the given string."""
  uid_not_starts_with: ID

  """All values ending with the given string."""
  uid_ends_with: ID

  """All values not ending with the given string."""
  uid_not_ends_with: ID
  extUid: String

  """All values that are not equal to given value."""
  extUid_not: String

  """All values that are contained in given list."""
  extUid_in: [String!]

  """All values that are not contained in given list."""
  extUid_not_in: [String!]

  """All values less than the given value."""
  extUid_lt: String

  """All values less than or equal the given value."""
  extUid_lte: String

  """All values greater than the given value."""
  extUid_gt: String

  """All values greater than or equal the given value."""
  extUid_gte: String

  """All values containing the given string."""
  extUid_contains: String

  """All values not containing the given string."""
  extUid_not_contains: String

  """All values starting with the given string."""
  extUid_starts_with: String

  """All values not starting with the given string."""
  extUid_not_starts_with: String

  """All values ending with the given string."""
  extUid_ends_with: String

  """All values not ending with the given string."""
  extUid_not_ends_with: String
  role: String

  """All values that are not equal to given value."""
  role_not: String

  """All values that are contained in given list."""
  role_in: [String!]

  """All values that are not contained in given list."""
  role_not_in: [String!]

  """All values less than the given value."""
  role_lt: String

  """All values less than or equal the given value."""
  role_lte: String

  """All values greater than the given value."""
  role_gt: String

  """All values greater than or equal the given value."""
  role_gte: String

  """All values containing the given string."""
  role_contains: String

  """All values not containing the given string."""
  role_not_contains: String

  """All values starting with the given string."""
  role_starts_with: String

  """All values not starting with the given string."""
  role_not_starts_with: String

  """All values ending with the given string."""
  role_ends_with: String

  """All values not ending with the given string."""
  role_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  customers_every: BpWhereInput
  customers_some: BpWhereInput
  customers_none: BpWhereInput
}

input UserWhereUniqueInput {
  uid: ID
  extUid: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type BpOrderByInput =   'uid_ASC' |
  'uid_DESC' |
  'name1_ASC' |
  'name1_DESC' |
  'name2_ASC' |
  'name2_DESC' |
  'lastName1_ASC' |
  'lastName1_DESC' |
  'lastName2_ASC' |
  'lastName2_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'email_ASC' |
  'email_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdBy_ASC' |
  'createdBy_DESC' |
  'updatedBy_ASC' |
  'updatedBy_DESC'

export type Currency =   'MXN'

export type ItemOrderByInput =   'uid_ASC' |
  'uid_DESC' |
  'code_ASC' |
  'code_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'description_ASC' |
  'description_DESC' |
  'provider_ASC' |
  'provider_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdBy_ASC' |
  'createdBy_DESC' |
  'updatedBy_ASC' |
  'updatedBy_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type OrderOrderByInput =   'uid_ASC' |
  'uid_DESC' |
  'name_ASC' |
  'name_DESC' |
  'stage_ASC' |
  'stage_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdBy_ASC' |
  'createdBy_DESC' |
  'updatedBy_ASC' |
  'updatedBy_DESC'

export type OrderStage =   'OPEN' |
  'WON' |
  'CLOSED' |
  'IN_PROCESS'

export type PriceOrderByInput =   'uid_ASC' |
  'uid_DESC' |
  'type_ASC' |
  'type_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'currency_ASC' |
  'currency_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdBy_ASC' |
  'createdBy_DESC' |
  'updatedBy_ASC' |
  'updatedBy_DESC'

export type PriceType =   'GENERAL'

export type UserOrderByInput =   'uid_ASC' |
  'uid_DESC' |
  'extUid_ASC' |
  'extUid_DESC' |
  'role_ASC' |
  'role_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface BpCreateInput {
  uid?: ID_Input | null
  name1: String
  name2?: String | null
  lastName1?: String | null
  lastName2?: String | null
  phone?: String | null
  email?: String | null
  createdBy?: String | null
  updatedBy?: String | null
  orders?: OrderCreateManyWithoutIssuedToInput | null
  customerOf?: UserCreateManyWithoutCustomersInput | null
}

export interface BpCreateManyWithoutCustomerOfInput {
  create?: BpCreateWithoutCustomerOfInput[] | BpCreateWithoutCustomerOfInput | null
  connect?: BpWhereUniqueInput[] | BpWhereUniqueInput | null
}

export interface BpCreateOneWithoutOrdersInput {
  create?: BpCreateWithoutOrdersInput | null
  connect?: BpWhereUniqueInput | null
}

export interface BpCreateWithoutCustomerOfInput {
  uid?: ID_Input | null
  name1: String
  name2?: String | null
  lastName1?: String | null
  lastName2?: String | null
  phone?: String | null
  email?: String | null
  createdBy?: String | null
  updatedBy?: String | null
  orders?: OrderCreateManyWithoutIssuedToInput | null
}

export interface BpCreateWithoutOrdersInput {
  uid?: ID_Input | null
  name1: String
  name2?: String | null
  lastName1?: String | null
  lastName2?: String | null
  phone?: String | null
  email?: String | null
  createdBy?: String | null
  updatedBy?: String | null
  customerOf?: UserCreateManyWithoutCustomersInput | null
}

export interface BpScalarWhereInput {
  AND?: BpScalarWhereInput[] | BpScalarWhereInput | null
  OR?: BpScalarWhereInput[] | BpScalarWhereInput | null
  NOT?: BpScalarWhereInput[] | BpScalarWhereInput | null
  uid?: ID_Input | null
  uid_not?: ID_Input | null
  uid_in?: ID_Output[] | ID_Output | null
  uid_not_in?: ID_Output[] | ID_Output | null
  uid_lt?: ID_Input | null
  uid_lte?: ID_Input | null
  uid_gt?: ID_Input | null
  uid_gte?: ID_Input | null
  uid_contains?: ID_Input | null
  uid_not_contains?: ID_Input | null
  uid_starts_with?: ID_Input | null
  uid_not_starts_with?: ID_Input | null
  uid_ends_with?: ID_Input | null
  uid_not_ends_with?: ID_Input | null
  name1?: String | null
  name1_not?: String | null
  name1_in?: String[] | String | null
  name1_not_in?: String[] | String | null
  name1_lt?: String | null
  name1_lte?: String | null
  name1_gt?: String | null
  name1_gte?: String | null
  name1_contains?: String | null
  name1_not_contains?: String | null
  name1_starts_with?: String | null
  name1_not_starts_with?: String | null
  name1_ends_with?: String | null
  name1_not_ends_with?: String | null
  name2?: String | null
  name2_not?: String | null
  name2_in?: String[] | String | null
  name2_not_in?: String[] | String | null
  name2_lt?: String | null
  name2_lte?: String | null
  name2_gt?: String | null
  name2_gte?: String | null
  name2_contains?: String | null
  name2_not_contains?: String | null
  name2_starts_with?: String | null
  name2_not_starts_with?: String | null
  name2_ends_with?: String | null
  name2_not_ends_with?: String | null
  lastName1?: String | null
  lastName1_not?: String | null
  lastName1_in?: String[] | String | null
  lastName1_not_in?: String[] | String | null
  lastName1_lt?: String | null
  lastName1_lte?: String | null
  lastName1_gt?: String | null
  lastName1_gte?: String | null
  lastName1_contains?: String | null
  lastName1_not_contains?: String | null
  lastName1_starts_with?: String | null
  lastName1_not_starts_with?: String | null
  lastName1_ends_with?: String | null
  lastName1_not_ends_with?: String | null
  lastName2?: String | null
  lastName2_not?: String | null
  lastName2_in?: String[] | String | null
  lastName2_not_in?: String[] | String | null
  lastName2_lt?: String | null
  lastName2_lte?: String | null
  lastName2_gt?: String | null
  lastName2_gte?: String | null
  lastName2_contains?: String | null
  lastName2_not_contains?: String | null
  lastName2_starts_with?: String | null
  lastName2_not_starts_with?: String | null
  lastName2_ends_with?: String | null
  lastName2_not_ends_with?: String | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: String[] | String | null
  phone_not_in?: String[] | String | null
  phone_lt?: String | null
  phone_lte?: String | null
  phone_gt?: String | null
  phone_gte?: String | null
  phone_contains?: String | null
  phone_not_contains?: String | null
  phone_starts_with?: String | null
  phone_not_starts_with?: String | null
  phone_ends_with?: String | null
  phone_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdBy?: String | null
  createdBy_not?: String | null
  createdBy_in?: String[] | String | null
  createdBy_not_in?: String[] | String | null
  createdBy_lt?: String | null
  createdBy_lte?: String | null
  createdBy_gt?: String | null
  createdBy_gte?: String | null
  createdBy_contains?: String | null
  createdBy_not_contains?: String | null
  createdBy_starts_with?: String | null
  createdBy_not_starts_with?: String | null
  createdBy_ends_with?: String | null
  createdBy_not_ends_with?: String | null
  updatedBy?: String | null
  updatedBy_not?: String | null
  updatedBy_in?: String[] | String | null
  updatedBy_not_in?: String[] | String | null
  updatedBy_lt?: String | null
  updatedBy_lte?: String | null
  updatedBy_gt?: String | null
  updatedBy_gte?: String | null
  updatedBy_contains?: String | null
  updatedBy_not_contains?: String | null
  updatedBy_starts_with?: String | null
  updatedBy_not_starts_with?: String | null
  updatedBy_ends_with?: String | null
  updatedBy_not_ends_with?: String | null
}

export interface BpSubscriptionWhereInput {
  AND?: BpSubscriptionWhereInput[] | BpSubscriptionWhereInput | null
  OR?: BpSubscriptionWhereInput[] | BpSubscriptionWhereInput | null
  NOT?: BpSubscriptionWhereInput[] | BpSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BpWhereInput | null
}

export interface BpUpdateInput {
  name1?: String | null
  name2?: String | null
  lastName1?: String | null
  lastName2?: String | null
  phone?: String | null
  email?: String | null
  createdBy?: String | null
  updatedBy?: String | null
  orders?: OrderUpdateManyWithoutIssuedToInput | null
  customerOf?: UserUpdateManyWithoutCustomersInput | null
}

export interface BpUpdateManyDataInput {
  name1?: String | null
  name2?: String | null
  lastName1?: String | null
  lastName2?: String | null
  phone?: String | null
  email?: String | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface BpUpdateManyMutationInput {
  name1?: String | null
  name2?: String | null
  lastName1?: String | null
  lastName2?: String | null
  phone?: String | null
  email?: String | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface BpUpdateManyWithoutCustomerOfInput {
  create?: BpCreateWithoutCustomerOfInput[] | BpCreateWithoutCustomerOfInput | null
  connect?: BpWhereUniqueInput[] | BpWhereUniqueInput | null
  set?: BpWhereUniqueInput[] | BpWhereUniqueInput | null
  disconnect?: BpWhereUniqueInput[] | BpWhereUniqueInput | null
  delete?: BpWhereUniqueInput[] | BpWhereUniqueInput | null
  update?: BpUpdateWithWhereUniqueWithoutCustomerOfInput[] | BpUpdateWithWhereUniqueWithoutCustomerOfInput | null
  updateMany?: BpUpdateManyWithWhereNestedInput[] | BpUpdateManyWithWhereNestedInput | null
  deleteMany?: BpScalarWhereInput[] | BpScalarWhereInput | null
  upsert?: BpUpsertWithWhereUniqueWithoutCustomerOfInput[] | BpUpsertWithWhereUniqueWithoutCustomerOfInput | null
}

export interface BpUpdateManyWithWhereNestedInput {
  where: BpScalarWhereInput
  data: BpUpdateManyDataInput
}

export interface BpUpdateOneRequiredWithoutOrdersInput {
  create?: BpCreateWithoutOrdersInput | null
  connect?: BpWhereUniqueInput | null
  update?: BpUpdateWithoutOrdersDataInput | null
  upsert?: BpUpsertWithoutOrdersInput | null
}

export interface BpUpdateWithoutCustomerOfDataInput {
  name1?: String | null
  name2?: String | null
  lastName1?: String | null
  lastName2?: String | null
  phone?: String | null
  email?: String | null
  createdBy?: String | null
  updatedBy?: String | null
  orders?: OrderUpdateManyWithoutIssuedToInput | null
}

export interface BpUpdateWithoutOrdersDataInput {
  name1?: String | null
  name2?: String | null
  lastName1?: String | null
  lastName2?: String | null
  phone?: String | null
  email?: String | null
  createdBy?: String | null
  updatedBy?: String | null
  customerOf?: UserUpdateManyWithoutCustomersInput | null
}

export interface BpUpdateWithWhereUniqueWithoutCustomerOfInput {
  where: BpWhereUniqueInput
  data: BpUpdateWithoutCustomerOfDataInput
}

export interface BpUpsertWithoutOrdersInput {
  update: BpUpdateWithoutOrdersDataInput
  create: BpCreateWithoutOrdersInput
}

export interface BpUpsertWithWhereUniqueWithoutCustomerOfInput {
  where: BpWhereUniqueInput
  update: BpUpdateWithoutCustomerOfDataInput
  create: BpCreateWithoutCustomerOfInput
}

export interface BpWhereInput {
  AND?: BpWhereInput[] | BpWhereInput | null
  OR?: BpWhereInput[] | BpWhereInput | null
  NOT?: BpWhereInput[] | BpWhereInput | null
  uid?: ID_Input | null
  uid_not?: ID_Input | null
  uid_in?: ID_Output[] | ID_Output | null
  uid_not_in?: ID_Output[] | ID_Output | null
  uid_lt?: ID_Input | null
  uid_lte?: ID_Input | null
  uid_gt?: ID_Input | null
  uid_gte?: ID_Input | null
  uid_contains?: ID_Input | null
  uid_not_contains?: ID_Input | null
  uid_starts_with?: ID_Input | null
  uid_not_starts_with?: ID_Input | null
  uid_ends_with?: ID_Input | null
  uid_not_ends_with?: ID_Input | null
  name1?: String | null
  name1_not?: String | null
  name1_in?: String[] | String | null
  name1_not_in?: String[] | String | null
  name1_lt?: String | null
  name1_lte?: String | null
  name1_gt?: String | null
  name1_gte?: String | null
  name1_contains?: String | null
  name1_not_contains?: String | null
  name1_starts_with?: String | null
  name1_not_starts_with?: String | null
  name1_ends_with?: String | null
  name1_not_ends_with?: String | null
  name2?: String | null
  name2_not?: String | null
  name2_in?: String[] | String | null
  name2_not_in?: String[] | String | null
  name2_lt?: String | null
  name2_lte?: String | null
  name2_gt?: String | null
  name2_gte?: String | null
  name2_contains?: String | null
  name2_not_contains?: String | null
  name2_starts_with?: String | null
  name2_not_starts_with?: String | null
  name2_ends_with?: String | null
  name2_not_ends_with?: String | null
  lastName1?: String | null
  lastName1_not?: String | null
  lastName1_in?: String[] | String | null
  lastName1_not_in?: String[] | String | null
  lastName1_lt?: String | null
  lastName1_lte?: String | null
  lastName1_gt?: String | null
  lastName1_gte?: String | null
  lastName1_contains?: String | null
  lastName1_not_contains?: String | null
  lastName1_starts_with?: String | null
  lastName1_not_starts_with?: String | null
  lastName1_ends_with?: String | null
  lastName1_not_ends_with?: String | null
  lastName2?: String | null
  lastName2_not?: String | null
  lastName2_in?: String[] | String | null
  lastName2_not_in?: String[] | String | null
  lastName2_lt?: String | null
  lastName2_lte?: String | null
  lastName2_gt?: String | null
  lastName2_gte?: String | null
  lastName2_contains?: String | null
  lastName2_not_contains?: String | null
  lastName2_starts_with?: String | null
  lastName2_not_starts_with?: String | null
  lastName2_ends_with?: String | null
  lastName2_not_ends_with?: String | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: String[] | String | null
  phone_not_in?: String[] | String | null
  phone_lt?: String | null
  phone_lte?: String | null
  phone_gt?: String | null
  phone_gte?: String | null
  phone_contains?: String | null
  phone_not_contains?: String | null
  phone_starts_with?: String | null
  phone_not_starts_with?: String | null
  phone_ends_with?: String | null
  phone_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdBy?: String | null
  createdBy_not?: String | null
  createdBy_in?: String[] | String | null
  createdBy_not_in?: String[] | String | null
  createdBy_lt?: String | null
  createdBy_lte?: String | null
  createdBy_gt?: String | null
  createdBy_gte?: String | null
  createdBy_contains?: String | null
  createdBy_not_contains?: String | null
  createdBy_starts_with?: String | null
  createdBy_not_starts_with?: String | null
  createdBy_ends_with?: String | null
  createdBy_not_ends_with?: String | null
  updatedBy?: String | null
  updatedBy_not?: String | null
  updatedBy_in?: String[] | String | null
  updatedBy_not_in?: String[] | String | null
  updatedBy_lt?: String | null
  updatedBy_lte?: String | null
  updatedBy_gt?: String | null
  updatedBy_gte?: String | null
  updatedBy_contains?: String | null
  updatedBy_not_contains?: String | null
  updatedBy_starts_with?: String | null
  updatedBy_not_starts_with?: String | null
  updatedBy_ends_with?: String | null
  updatedBy_not_ends_with?: String | null
  orders_every?: OrderWhereInput | null
  orders_some?: OrderWhereInput | null
  orders_none?: OrderWhereInput | null
  customerOf_every?: UserWhereInput | null
  customerOf_some?: UserWhereInput | null
  customerOf_none?: UserWhereInput | null
}

export interface BpWhereUniqueInput {
  uid?: ID_Input | null
  email?: String | null
}

export interface ItemCreateInput {
  uid?: ID_Input | null
  code?: String | null
  quantity?: Float | null
  description?: String | null
  provider?: String | null
  createdBy: String
  updatedBy?: String | null
  order: OrderCreateOneWithoutItemsInput
  pricing?: PriceCreateManyWithoutItemInput | null
}

export interface ItemCreateManyWithoutOrderInput {
  create?: ItemCreateWithoutOrderInput[] | ItemCreateWithoutOrderInput | null
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput | null
}

export interface ItemCreateOneWithoutPricingInput {
  create?: ItemCreateWithoutPricingInput | null
  connect?: ItemWhereUniqueInput | null
}

export interface ItemCreateWithoutOrderInput {
  uid?: ID_Input | null
  code?: String | null
  quantity?: Float | null
  description?: String | null
  provider?: String | null
  createdBy: String
  updatedBy?: String | null
  pricing?: PriceCreateManyWithoutItemInput | null
}

export interface ItemCreateWithoutPricingInput {
  uid?: ID_Input | null
  code?: String | null
  quantity?: Float | null
  description?: String | null
  provider?: String | null
  createdBy: String
  updatedBy?: String | null
  order: OrderCreateOneWithoutItemsInput
}

export interface ItemScalarWhereInput {
  AND?: ItemScalarWhereInput[] | ItemScalarWhereInput | null
  OR?: ItemScalarWhereInput[] | ItemScalarWhereInput | null
  NOT?: ItemScalarWhereInput[] | ItemScalarWhereInput | null
  uid?: ID_Input | null
  uid_not?: ID_Input | null
  uid_in?: ID_Output[] | ID_Output | null
  uid_not_in?: ID_Output[] | ID_Output | null
  uid_lt?: ID_Input | null
  uid_lte?: ID_Input | null
  uid_gt?: ID_Input | null
  uid_gte?: ID_Input | null
  uid_contains?: ID_Input | null
  uid_not_contains?: ID_Input | null
  uid_starts_with?: ID_Input | null
  uid_not_starts_with?: ID_Input | null
  uid_ends_with?: ID_Input | null
  uid_not_ends_with?: ID_Input | null
  code?: String | null
  code_not?: String | null
  code_in?: String[] | String | null
  code_not_in?: String[] | String | null
  code_lt?: String | null
  code_lte?: String | null
  code_gt?: String | null
  code_gte?: String | null
  code_contains?: String | null
  code_not_contains?: String | null
  code_starts_with?: String | null
  code_not_starts_with?: String | null
  code_ends_with?: String | null
  code_not_ends_with?: String | null
  quantity?: Float | null
  quantity_not?: Float | null
  quantity_in?: Float[] | Float | null
  quantity_not_in?: Float[] | Float | null
  quantity_lt?: Float | null
  quantity_lte?: Float | null
  quantity_gt?: Float | null
  quantity_gte?: Float | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  provider?: String | null
  provider_not?: String | null
  provider_in?: String[] | String | null
  provider_not_in?: String[] | String | null
  provider_lt?: String | null
  provider_lte?: String | null
  provider_gt?: String | null
  provider_gte?: String | null
  provider_contains?: String | null
  provider_not_contains?: String | null
  provider_starts_with?: String | null
  provider_not_starts_with?: String | null
  provider_ends_with?: String | null
  provider_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdBy?: String | null
  createdBy_not?: String | null
  createdBy_in?: String[] | String | null
  createdBy_not_in?: String[] | String | null
  createdBy_lt?: String | null
  createdBy_lte?: String | null
  createdBy_gt?: String | null
  createdBy_gte?: String | null
  createdBy_contains?: String | null
  createdBy_not_contains?: String | null
  createdBy_starts_with?: String | null
  createdBy_not_starts_with?: String | null
  createdBy_ends_with?: String | null
  createdBy_not_ends_with?: String | null
  updatedBy?: String | null
  updatedBy_not?: String | null
  updatedBy_in?: String[] | String | null
  updatedBy_not_in?: String[] | String | null
  updatedBy_lt?: String | null
  updatedBy_lte?: String | null
  updatedBy_gt?: String | null
  updatedBy_gte?: String | null
  updatedBy_contains?: String | null
  updatedBy_not_contains?: String | null
  updatedBy_starts_with?: String | null
  updatedBy_not_starts_with?: String | null
  updatedBy_ends_with?: String | null
  updatedBy_not_ends_with?: String | null
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ItemWhereInput | null
}

export interface ItemUpdateInput {
  code?: String | null
  quantity?: Float | null
  description?: String | null
  provider?: String | null
  createdBy?: String | null
  updatedBy?: String | null
  order?: OrderUpdateOneRequiredWithoutItemsInput | null
  pricing?: PriceUpdateManyWithoutItemInput | null
}

export interface ItemUpdateManyDataInput {
  code?: String | null
  quantity?: Float | null
  description?: String | null
  provider?: String | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface ItemUpdateManyMutationInput {
  code?: String | null
  quantity?: Float | null
  description?: String | null
  provider?: String | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface ItemUpdateManyWithoutOrderInput {
  create?: ItemCreateWithoutOrderInput[] | ItemCreateWithoutOrderInput | null
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput | null
  set?: ItemWhereUniqueInput[] | ItemWhereUniqueInput | null
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput | null
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput | null
  update?: ItemUpdateWithWhereUniqueWithoutOrderInput[] | ItemUpdateWithWhereUniqueWithoutOrderInput | null
  updateMany?: ItemUpdateManyWithWhereNestedInput[] | ItemUpdateManyWithWhereNestedInput | null
  deleteMany?: ItemScalarWhereInput[] | ItemScalarWhereInput | null
  upsert?: ItemUpsertWithWhereUniqueWithoutOrderInput[] | ItemUpsertWithWhereUniqueWithoutOrderInput | null
}

export interface ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput
  data: ItemUpdateManyDataInput
}

export interface ItemUpdateOneRequiredWithoutPricingInput {
  create?: ItemCreateWithoutPricingInput | null
  connect?: ItemWhereUniqueInput | null
  update?: ItemUpdateWithoutPricingDataInput | null
  upsert?: ItemUpsertWithoutPricingInput | null
}

export interface ItemUpdateWithoutOrderDataInput {
  code?: String | null
  quantity?: Float | null
  description?: String | null
  provider?: String | null
  createdBy?: String | null
  updatedBy?: String | null
  pricing?: PriceUpdateManyWithoutItemInput | null
}

export interface ItemUpdateWithoutPricingDataInput {
  code?: String | null
  quantity?: Float | null
  description?: String | null
  provider?: String | null
  createdBy?: String | null
  updatedBy?: String | null
  order?: OrderUpdateOneRequiredWithoutItemsInput | null
}

export interface ItemUpdateWithWhereUniqueWithoutOrderInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutOrderDataInput
}

export interface ItemUpsertWithoutPricingInput {
  update: ItemUpdateWithoutPricingDataInput
  create: ItemCreateWithoutPricingInput
}

export interface ItemUpsertWithWhereUniqueWithoutOrderInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutOrderDataInput
  create: ItemCreateWithoutOrderInput
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput | null
  OR?: ItemWhereInput[] | ItemWhereInput | null
  NOT?: ItemWhereInput[] | ItemWhereInput | null
  uid?: ID_Input | null
  uid_not?: ID_Input | null
  uid_in?: ID_Output[] | ID_Output | null
  uid_not_in?: ID_Output[] | ID_Output | null
  uid_lt?: ID_Input | null
  uid_lte?: ID_Input | null
  uid_gt?: ID_Input | null
  uid_gte?: ID_Input | null
  uid_contains?: ID_Input | null
  uid_not_contains?: ID_Input | null
  uid_starts_with?: ID_Input | null
  uid_not_starts_with?: ID_Input | null
  uid_ends_with?: ID_Input | null
  uid_not_ends_with?: ID_Input | null
  code?: String | null
  code_not?: String | null
  code_in?: String[] | String | null
  code_not_in?: String[] | String | null
  code_lt?: String | null
  code_lte?: String | null
  code_gt?: String | null
  code_gte?: String | null
  code_contains?: String | null
  code_not_contains?: String | null
  code_starts_with?: String | null
  code_not_starts_with?: String | null
  code_ends_with?: String | null
  code_not_ends_with?: String | null
  quantity?: Float | null
  quantity_not?: Float | null
  quantity_in?: Float[] | Float | null
  quantity_not_in?: Float[] | Float | null
  quantity_lt?: Float | null
  quantity_lte?: Float | null
  quantity_gt?: Float | null
  quantity_gte?: Float | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  provider?: String | null
  provider_not?: String | null
  provider_in?: String[] | String | null
  provider_not_in?: String[] | String | null
  provider_lt?: String | null
  provider_lte?: String | null
  provider_gt?: String | null
  provider_gte?: String | null
  provider_contains?: String | null
  provider_not_contains?: String | null
  provider_starts_with?: String | null
  provider_not_starts_with?: String | null
  provider_ends_with?: String | null
  provider_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdBy?: String | null
  createdBy_not?: String | null
  createdBy_in?: String[] | String | null
  createdBy_not_in?: String[] | String | null
  createdBy_lt?: String | null
  createdBy_lte?: String | null
  createdBy_gt?: String | null
  createdBy_gte?: String | null
  createdBy_contains?: String | null
  createdBy_not_contains?: String | null
  createdBy_starts_with?: String | null
  createdBy_not_starts_with?: String | null
  createdBy_ends_with?: String | null
  createdBy_not_ends_with?: String | null
  updatedBy?: String | null
  updatedBy_not?: String | null
  updatedBy_in?: String[] | String | null
  updatedBy_not_in?: String[] | String | null
  updatedBy_lt?: String | null
  updatedBy_lte?: String | null
  updatedBy_gt?: String | null
  updatedBy_gte?: String | null
  updatedBy_contains?: String | null
  updatedBy_not_contains?: String | null
  updatedBy_starts_with?: String | null
  updatedBy_not_starts_with?: String | null
  updatedBy_ends_with?: String | null
  updatedBy_not_ends_with?: String | null
  order?: OrderWhereInput | null
  pricing_every?: PriceWhereInput | null
  pricing_some?: PriceWhereInput | null
  pricing_none?: PriceWhereInput | null
}

export interface ItemWhereUniqueInput {
  uid?: ID_Input | null
}

export interface OrderCreateInput {
  uid?: ID_Input | null
  name: String
  stage?: OrderStage | null
  createdBy?: String | null
  updatedBy?: String | null
  issuedTo: BpCreateOneWithoutOrdersInput
  assignedTo: UserCreateOneWithoutOrdersInput
  items?: ItemCreateManyWithoutOrderInput | null
}

export interface OrderCreateManyWithoutAssignedToInput {
  create?: OrderCreateWithoutAssignedToInput[] | OrderCreateWithoutAssignedToInput | null
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
}

export interface OrderCreateManyWithoutIssuedToInput {
  create?: OrderCreateWithoutIssuedToInput[] | OrderCreateWithoutIssuedToInput | null
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
}

export interface OrderCreateOneWithoutItemsInput {
  create?: OrderCreateWithoutItemsInput | null
  connect?: OrderWhereUniqueInput | null
}

export interface OrderCreateWithoutAssignedToInput {
  uid?: ID_Input | null
  name: String
  stage?: OrderStage | null
  createdBy?: String | null
  updatedBy?: String | null
  issuedTo: BpCreateOneWithoutOrdersInput
  items?: ItemCreateManyWithoutOrderInput | null
}

export interface OrderCreateWithoutIssuedToInput {
  uid?: ID_Input | null
  name: String
  stage?: OrderStage | null
  createdBy?: String | null
  updatedBy?: String | null
  assignedTo: UserCreateOneWithoutOrdersInput
  items?: ItemCreateManyWithoutOrderInput | null
}

export interface OrderCreateWithoutItemsInput {
  uid?: ID_Input | null
  name: String
  stage?: OrderStage | null
  createdBy?: String | null
  updatedBy?: String | null
  issuedTo: BpCreateOneWithoutOrdersInput
  assignedTo: UserCreateOneWithoutOrdersInput
}

export interface OrderScalarWhereInput {
  AND?: OrderScalarWhereInput[] | OrderScalarWhereInput | null
  OR?: OrderScalarWhereInput[] | OrderScalarWhereInput | null
  NOT?: OrderScalarWhereInput[] | OrderScalarWhereInput | null
  uid?: ID_Input | null
  uid_not?: ID_Input | null
  uid_in?: ID_Output[] | ID_Output | null
  uid_not_in?: ID_Output[] | ID_Output | null
  uid_lt?: ID_Input | null
  uid_lte?: ID_Input | null
  uid_gt?: ID_Input | null
  uid_gte?: ID_Input | null
  uid_contains?: ID_Input | null
  uid_not_contains?: ID_Input | null
  uid_starts_with?: ID_Input | null
  uid_not_starts_with?: ID_Input | null
  uid_ends_with?: ID_Input | null
  uid_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  stage?: OrderStage | null
  stage_not?: OrderStage | null
  stage_in?: OrderStage[] | OrderStage | null
  stage_not_in?: OrderStage[] | OrderStage | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdBy?: String | null
  createdBy_not?: String | null
  createdBy_in?: String[] | String | null
  createdBy_not_in?: String[] | String | null
  createdBy_lt?: String | null
  createdBy_lte?: String | null
  createdBy_gt?: String | null
  createdBy_gte?: String | null
  createdBy_contains?: String | null
  createdBy_not_contains?: String | null
  createdBy_starts_with?: String | null
  createdBy_not_starts_with?: String | null
  createdBy_ends_with?: String | null
  createdBy_not_ends_with?: String | null
  updatedBy?: String | null
  updatedBy_not?: String | null
  updatedBy_in?: String[] | String | null
  updatedBy_not_in?: String[] | String | null
  updatedBy_lt?: String | null
  updatedBy_lte?: String | null
  updatedBy_gt?: String | null
  updatedBy_gte?: String | null
  updatedBy_contains?: String | null
  updatedBy_not_contains?: String | null
  updatedBy_starts_with?: String | null
  updatedBy_not_starts_with?: String | null
  updatedBy_ends_with?: String | null
  updatedBy_not_ends_with?: String | null
}

export interface OrderSubscriptionWhereInput {
  AND?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput | null
  OR?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput | null
  NOT?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: OrderWhereInput | null
}

export interface OrderUpdateInput {
  name?: String | null
  stage?: OrderStage | null
  createdBy?: String | null
  updatedBy?: String | null
  issuedTo?: BpUpdateOneRequiredWithoutOrdersInput | null
  assignedTo?: UserUpdateOneRequiredWithoutOrdersInput | null
  items?: ItemUpdateManyWithoutOrderInput | null
}

export interface OrderUpdateManyDataInput {
  name?: String | null
  stage?: OrderStage | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface OrderUpdateManyMutationInput {
  name?: String | null
  stage?: OrderStage | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface OrderUpdateManyWithoutAssignedToInput {
  create?: OrderCreateWithoutAssignedToInput[] | OrderCreateWithoutAssignedToInput | null
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  set?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  disconnect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  delete?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  update?: OrderUpdateWithWhereUniqueWithoutAssignedToInput[] | OrderUpdateWithWhereUniqueWithoutAssignedToInput | null
  updateMany?: OrderUpdateManyWithWhereNestedInput[] | OrderUpdateManyWithWhereNestedInput | null
  deleteMany?: OrderScalarWhereInput[] | OrderScalarWhereInput | null
  upsert?: OrderUpsertWithWhereUniqueWithoutAssignedToInput[] | OrderUpsertWithWhereUniqueWithoutAssignedToInput | null
}

export interface OrderUpdateManyWithoutIssuedToInput {
  create?: OrderCreateWithoutIssuedToInput[] | OrderCreateWithoutIssuedToInput | null
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  set?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  disconnect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  delete?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  update?: OrderUpdateWithWhereUniqueWithoutIssuedToInput[] | OrderUpdateWithWhereUniqueWithoutIssuedToInput | null
  updateMany?: OrderUpdateManyWithWhereNestedInput[] | OrderUpdateManyWithWhereNestedInput | null
  deleteMany?: OrderScalarWhereInput[] | OrderScalarWhereInput | null
  upsert?: OrderUpsertWithWhereUniqueWithoutIssuedToInput[] | OrderUpsertWithWhereUniqueWithoutIssuedToInput | null
}

export interface OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput
  data: OrderUpdateManyDataInput
}

export interface OrderUpdateOneRequiredWithoutItemsInput {
  create?: OrderCreateWithoutItemsInput | null
  connect?: OrderWhereUniqueInput | null
  update?: OrderUpdateWithoutItemsDataInput | null
  upsert?: OrderUpsertWithoutItemsInput | null
}

export interface OrderUpdateWithoutAssignedToDataInput {
  name?: String | null
  stage?: OrderStage | null
  createdBy?: String | null
  updatedBy?: String | null
  issuedTo?: BpUpdateOneRequiredWithoutOrdersInput | null
  items?: ItemUpdateManyWithoutOrderInput | null
}

export interface OrderUpdateWithoutIssuedToDataInput {
  name?: String | null
  stage?: OrderStage | null
  createdBy?: String | null
  updatedBy?: String | null
  assignedTo?: UserUpdateOneRequiredWithoutOrdersInput | null
  items?: ItemUpdateManyWithoutOrderInput | null
}

export interface OrderUpdateWithoutItemsDataInput {
  name?: String | null
  stage?: OrderStage | null
  createdBy?: String | null
  updatedBy?: String | null
  issuedTo?: BpUpdateOneRequiredWithoutOrdersInput | null
  assignedTo?: UserUpdateOneRequiredWithoutOrdersInput | null
}

export interface OrderUpdateWithWhereUniqueWithoutAssignedToInput {
  where: OrderWhereUniqueInput
  data: OrderUpdateWithoutAssignedToDataInput
}

export interface OrderUpdateWithWhereUniqueWithoutIssuedToInput {
  where: OrderWhereUniqueInput
  data: OrderUpdateWithoutIssuedToDataInput
}

export interface OrderUpsertWithoutItemsInput {
  update: OrderUpdateWithoutItemsDataInput
  create: OrderCreateWithoutItemsInput
}

export interface OrderUpsertWithWhereUniqueWithoutAssignedToInput {
  where: OrderWhereUniqueInput
  update: OrderUpdateWithoutAssignedToDataInput
  create: OrderCreateWithoutAssignedToInput
}

export interface OrderUpsertWithWhereUniqueWithoutIssuedToInput {
  where: OrderWhereUniqueInput
  update: OrderUpdateWithoutIssuedToDataInput
  create: OrderCreateWithoutIssuedToInput
}

export interface OrderWhereInput {
  AND?: OrderWhereInput[] | OrderWhereInput | null
  OR?: OrderWhereInput[] | OrderWhereInput | null
  NOT?: OrderWhereInput[] | OrderWhereInput | null
  uid?: ID_Input | null
  uid_not?: ID_Input | null
  uid_in?: ID_Output[] | ID_Output | null
  uid_not_in?: ID_Output[] | ID_Output | null
  uid_lt?: ID_Input | null
  uid_lte?: ID_Input | null
  uid_gt?: ID_Input | null
  uid_gte?: ID_Input | null
  uid_contains?: ID_Input | null
  uid_not_contains?: ID_Input | null
  uid_starts_with?: ID_Input | null
  uid_not_starts_with?: ID_Input | null
  uid_ends_with?: ID_Input | null
  uid_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  stage?: OrderStage | null
  stage_not?: OrderStage | null
  stage_in?: OrderStage[] | OrderStage | null
  stage_not_in?: OrderStage[] | OrderStage | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdBy?: String | null
  createdBy_not?: String | null
  createdBy_in?: String[] | String | null
  createdBy_not_in?: String[] | String | null
  createdBy_lt?: String | null
  createdBy_lte?: String | null
  createdBy_gt?: String | null
  createdBy_gte?: String | null
  createdBy_contains?: String | null
  createdBy_not_contains?: String | null
  createdBy_starts_with?: String | null
  createdBy_not_starts_with?: String | null
  createdBy_ends_with?: String | null
  createdBy_not_ends_with?: String | null
  updatedBy?: String | null
  updatedBy_not?: String | null
  updatedBy_in?: String[] | String | null
  updatedBy_not_in?: String[] | String | null
  updatedBy_lt?: String | null
  updatedBy_lte?: String | null
  updatedBy_gt?: String | null
  updatedBy_gte?: String | null
  updatedBy_contains?: String | null
  updatedBy_not_contains?: String | null
  updatedBy_starts_with?: String | null
  updatedBy_not_starts_with?: String | null
  updatedBy_ends_with?: String | null
  updatedBy_not_ends_with?: String | null
  issuedTo?: BpWhereInput | null
  assignedTo?: UserWhereInput | null
  items_every?: ItemWhereInput | null
  items_some?: ItemWhereInput | null
  items_none?: ItemWhereInput | null
}

export interface OrderWhereUniqueInput {
  uid?: ID_Input | null
}

export interface PriceCreateInput {
  uid?: ID_Input | null
  type?: PriceType | null
  amount: Float
  currency: Currency
  createdBy: String
  updatedBy?: String | null
  item: ItemCreateOneWithoutPricingInput
}

export interface PriceCreateManyWithoutItemInput {
  create?: PriceCreateWithoutItemInput[] | PriceCreateWithoutItemInput | null
  connect?: PriceWhereUniqueInput[] | PriceWhereUniqueInput | null
}

export interface PriceCreateWithoutItemInput {
  uid?: ID_Input | null
  type?: PriceType | null
  amount: Float
  currency: Currency
  createdBy: String
  updatedBy?: String | null
}

export interface PriceScalarWhereInput {
  AND?: PriceScalarWhereInput[] | PriceScalarWhereInput | null
  OR?: PriceScalarWhereInput[] | PriceScalarWhereInput | null
  NOT?: PriceScalarWhereInput[] | PriceScalarWhereInput | null
  uid?: ID_Input | null
  uid_not?: ID_Input | null
  uid_in?: ID_Output[] | ID_Output | null
  uid_not_in?: ID_Output[] | ID_Output | null
  uid_lt?: ID_Input | null
  uid_lte?: ID_Input | null
  uid_gt?: ID_Input | null
  uid_gte?: ID_Input | null
  uid_contains?: ID_Input | null
  uid_not_contains?: ID_Input | null
  uid_starts_with?: ID_Input | null
  uid_not_starts_with?: ID_Input | null
  uid_ends_with?: ID_Input | null
  uid_not_ends_with?: ID_Input | null
  type?: PriceType | null
  type_not?: PriceType | null
  type_in?: PriceType[] | PriceType | null
  type_not_in?: PriceType[] | PriceType | null
  amount?: Float | null
  amount_not?: Float | null
  amount_in?: Float[] | Float | null
  amount_not_in?: Float[] | Float | null
  amount_lt?: Float | null
  amount_lte?: Float | null
  amount_gt?: Float | null
  amount_gte?: Float | null
  currency?: Currency | null
  currency_not?: Currency | null
  currency_in?: Currency[] | Currency | null
  currency_not_in?: Currency[] | Currency | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdBy?: String | null
  createdBy_not?: String | null
  createdBy_in?: String[] | String | null
  createdBy_not_in?: String[] | String | null
  createdBy_lt?: String | null
  createdBy_lte?: String | null
  createdBy_gt?: String | null
  createdBy_gte?: String | null
  createdBy_contains?: String | null
  createdBy_not_contains?: String | null
  createdBy_starts_with?: String | null
  createdBy_not_starts_with?: String | null
  createdBy_ends_with?: String | null
  createdBy_not_ends_with?: String | null
  updatedBy?: String | null
  updatedBy_not?: String | null
  updatedBy_in?: String[] | String | null
  updatedBy_not_in?: String[] | String | null
  updatedBy_lt?: String | null
  updatedBy_lte?: String | null
  updatedBy_gt?: String | null
  updatedBy_gte?: String | null
  updatedBy_contains?: String | null
  updatedBy_not_contains?: String | null
  updatedBy_starts_with?: String | null
  updatedBy_not_starts_with?: String | null
  updatedBy_ends_with?: String | null
  updatedBy_not_ends_with?: String | null
}

export interface PriceSubscriptionWhereInput {
  AND?: PriceSubscriptionWhereInput[] | PriceSubscriptionWhereInput | null
  OR?: PriceSubscriptionWhereInput[] | PriceSubscriptionWhereInput | null
  NOT?: PriceSubscriptionWhereInput[] | PriceSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PriceWhereInput | null
}

export interface PriceUpdateInput {
  type?: PriceType | null
  amount?: Float | null
  currency?: Currency | null
  createdBy?: String | null
  updatedBy?: String | null
  item?: ItemUpdateOneRequiredWithoutPricingInput | null
}

export interface PriceUpdateManyDataInput {
  type?: PriceType | null
  amount?: Float | null
  currency?: Currency | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface PriceUpdateManyMutationInput {
  type?: PriceType | null
  amount?: Float | null
  currency?: Currency | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface PriceUpdateManyWithoutItemInput {
  create?: PriceCreateWithoutItemInput[] | PriceCreateWithoutItemInput | null
  connect?: PriceWhereUniqueInput[] | PriceWhereUniqueInput | null
  set?: PriceWhereUniqueInput[] | PriceWhereUniqueInput | null
  disconnect?: PriceWhereUniqueInput[] | PriceWhereUniqueInput | null
  delete?: PriceWhereUniqueInput[] | PriceWhereUniqueInput | null
  update?: PriceUpdateWithWhereUniqueWithoutItemInput[] | PriceUpdateWithWhereUniqueWithoutItemInput | null
  updateMany?: PriceUpdateManyWithWhereNestedInput[] | PriceUpdateManyWithWhereNestedInput | null
  deleteMany?: PriceScalarWhereInput[] | PriceScalarWhereInput | null
  upsert?: PriceUpsertWithWhereUniqueWithoutItemInput[] | PriceUpsertWithWhereUniqueWithoutItemInput | null
}

export interface PriceUpdateManyWithWhereNestedInput {
  where: PriceScalarWhereInput
  data: PriceUpdateManyDataInput
}

export interface PriceUpdateWithoutItemDataInput {
  type?: PriceType | null
  amount?: Float | null
  currency?: Currency | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface PriceUpdateWithWhereUniqueWithoutItemInput {
  where: PriceWhereUniqueInput
  data: PriceUpdateWithoutItemDataInput
}

export interface PriceUpsertWithWhereUniqueWithoutItemInput {
  where: PriceWhereUniqueInput
  update: PriceUpdateWithoutItemDataInput
  create: PriceCreateWithoutItemInput
}

export interface PriceWhereInput {
  AND?: PriceWhereInput[] | PriceWhereInput | null
  OR?: PriceWhereInput[] | PriceWhereInput | null
  NOT?: PriceWhereInput[] | PriceWhereInput | null
  uid?: ID_Input | null
  uid_not?: ID_Input | null
  uid_in?: ID_Output[] | ID_Output | null
  uid_not_in?: ID_Output[] | ID_Output | null
  uid_lt?: ID_Input | null
  uid_lte?: ID_Input | null
  uid_gt?: ID_Input | null
  uid_gte?: ID_Input | null
  uid_contains?: ID_Input | null
  uid_not_contains?: ID_Input | null
  uid_starts_with?: ID_Input | null
  uid_not_starts_with?: ID_Input | null
  uid_ends_with?: ID_Input | null
  uid_not_ends_with?: ID_Input | null
  type?: PriceType | null
  type_not?: PriceType | null
  type_in?: PriceType[] | PriceType | null
  type_not_in?: PriceType[] | PriceType | null
  amount?: Float | null
  amount_not?: Float | null
  amount_in?: Float[] | Float | null
  amount_not_in?: Float[] | Float | null
  amount_lt?: Float | null
  amount_lte?: Float | null
  amount_gt?: Float | null
  amount_gte?: Float | null
  currency?: Currency | null
  currency_not?: Currency | null
  currency_in?: Currency[] | Currency | null
  currency_not_in?: Currency[] | Currency | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdBy?: String | null
  createdBy_not?: String | null
  createdBy_in?: String[] | String | null
  createdBy_not_in?: String[] | String | null
  createdBy_lt?: String | null
  createdBy_lte?: String | null
  createdBy_gt?: String | null
  createdBy_gte?: String | null
  createdBy_contains?: String | null
  createdBy_not_contains?: String | null
  createdBy_starts_with?: String | null
  createdBy_not_starts_with?: String | null
  createdBy_ends_with?: String | null
  createdBy_not_ends_with?: String | null
  updatedBy?: String | null
  updatedBy_not?: String | null
  updatedBy_in?: String[] | String | null
  updatedBy_not_in?: String[] | String | null
  updatedBy_lt?: String | null
  updatedBy_lte?: String | null
  updatedBy_gt?: String | null
  updatedBy_gte?: String | null
  updatedBy_contains?: String | null
  updatedBy_not_contains?: String | null
  updatedBy_starts_with?: String | null
  updatedBy_not_starts_with?: String | null
  updatedBy_ends_with?: String | null
  updatedBy_not_ends_with?: String | null
  item?: ItemWhereInput | null
}

export interface PriceWhereUniqueInput {
  uid?: ID_Input | null
}

export interface UserCreateInput {
  uid?: ID_Input | null
  extUid?: String | null
  role?: String | null
  orders?: OrderCreateManyWithoutAssignedToInput | null
  customers?: BpCreateManyWithoutCustomerOfInput | null
}

export interface UserCreateManyWithoutCustomersInput {
  create?: UserCreateWithoutCustomersInput[] | UserCreateWithoutCustomersInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutOrdersInput {
  create?: UserCreateWithoutOrdersInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutCustomersInput {
  uid?: ID_Input | null
  extUid?: String | null
  role?: String | null
  orders?: OrderCreateManyWithoutAssignedToInput | null
}

export interface UserCreateWithoutOrdersInput {
  uid?: ID_Input | null
  extUid?: String | null
  role?: String | null
  customers?: BpCreateManyWithoutCustomerOfInput | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
  uid?: ID_Input | null
  uid_not?: ID_Input | null
  uid_in?: ID_Output[] | ID_Output | null
  uid_not_in?: ID_Output[] | ID_Output | null
  uid_lt?: ID_Input | null
  uid_lte?: ID_Input | null
  uid_gt?: ID_Input | null
  uid_gte?: ID_Input | null
  uid_contains?: ID_Input | null
  uid_not_contains?: ID_Input | null
  uid_starts_with?: ID_Input | null
  uid_not_starts_with?: ID_Input | null
  uid_ends_with?: ID_Input | null
  uid_not_ends_with?: ID_Input | null
  extUid?: String | null
  extUid_not?: String | null
  extUid_in?: String[] | String | null
  extUid_not_in?: String[] | String | null
  extUid_lt?: String | null
  extUid_lte?: String | null
  extUid_gt?: String | null
  extUid_gte?: String | null
  extUid_contains?: String | null
  extUid_not_contains?: String | null
  extUid_starts_with?: String | null
  extUid_not_starts_with?: String | null
  extUid_ends_with?: String | null
  extUid_not_ends_with?: String | null
  role?: String | null
  role_not?: String | null
  role_in?: String[] | String | null
  role_not_in?: String[] | String | null
  role_lt?: String | null
  role_lte?: String | null
  role_gt?: String | null
  role_gte?: String | null
  role_contains?: String | null
  role_not_contains?: String | null
  role_starts_with?: String | null
  role_not_starts_with?: String | null
  role_ends_with?: String | null
  role_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  extUid?: String | null
  role?: String | null
  orders?: OrderUpdateManyWithoutAssignedToInput | null
  customers?: BpUpdateManyWithoutCustomerOfInput | null
}

export interface UserUpdateManyDataInput {
  extUid?: String | null
  role?: String | null
}

export interface UserUpdateManyMutationInput {
  extUid?: String | null
  role?: String | null
}

export interface UserUpdateManyWithoutCustomersInput {
  create?: UserCreateWithoutCustomersInput[] | UserCreateWithoutCustomersInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutCustomersInput[] | UserUpdateWithWhereUniqueWithoutCustomersInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutCustomersInput[] | UserUpsertWithWhereUniqueWithoutCustomersInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredWithoutOrdersInput {
  create?: UserCreateWithoutOrdersInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutOrdersDataInput | null
  upsert?: UserUpsertWithoutOrdersInput | null
}

export interface UserUpdateWithoutCustomersDataInput {
  extUid?: String | null
  role?: String | null
  orders?: OrderUpdateManyWithoutAssignedToInput | null
}

export interface UserUpdateWithoutOrdersDataInput {
  extUid?: String | null
  role?: String | null
  customers?: BpUpdateManyWithoutCustomerOfInput | null
}

export interface UserUpdateWithWhereUniqueWithoutCustomersInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutCustomersDataInput
}

export interface UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput
  create: UserCreateWithoutOrdersInput
}

export interface UserUpsertWithWhereUniqueWithoutCustomersInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutCustomersDataInput
  create: UserCreateWithoutCustomersInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  uid?: ID_Input | null
  uid_not?: ID_Input | null
  uid_in?: ID_Output[] | ID_Output | null
  uid_not_in?: ID_Output[] | ID_Output | null
  uid_lt?: ID_Input | null
  uid_lte?: ID_Input | null
  uid_gt?: ID_Input | null
  uid_gte?: ID_Input | null
  uid_contains?: ID_Input | null
  uid_not_contains?: ID_Input | null
  uid_starts_with?: ID_Input | null
  uid_not_starts_with?: ID_Input | null
  uid_ends_with?: ID_Input | null
  uid_not_ends_with?: ID_Input | null
  extUid?: String | null
  extUid_not?: String | null
  extUid_in?: String[] | String | null
  extUid_not_in?: String[] | String | null
  extUid_lt?: String | null
  extUid_lte?: String | null
  extUid_gt?: String | null
  extUid_gte?: String | null
  extUid_contains?: String | null
  extUid_not_contains?: String | null
  extUid_starts_with?: String | null
  extUid_not_starts_with?: String | null
  extUid_ends_with?: String | null
  extUid_not_ends_with?: String | null
  role?: String | null
  role_not?: String | null
  role_in?: String[] | String | null
  role_not_in?: String[] | String | null
  role_lt?: String | null
  role_lte?: String | null
  role_gt?: String | null
  role_gte?: String | null
  role_contains?: String | null
  role_not_contains?: String | null
  role_starts_with?: String | null
  role_not_starts_with?: String | null
  role_ends_with?: String | null
  role_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  orders_every?: OrderWhereInput | null
  orders_some?: OrderWhereInput | null
  orders_none?: OrderWhereInput | null
  customers_every?: BpWhereInput | null
  customers_some?: BpWhereInput | null
  customers_none?: BpWhereInput | null
}

export interface UserWhereUniqueInput {
  uid?: ID_Input | null
  extUid?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateBp {
  count: Int
}

export interface AggregateItem {
  count: Int
}

export interface AggregateOrder {
  count: Int
}

export interface AggregatePrice {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Bp {
  uid: ID_Output
  name1: String
  name2?: String | null
  lastName1?: String | null
  lastName2?: String | null
  phone?: String | null
  email?: String | null
  orders?: Array<Order> | null
  customerOf?: Array<User> | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  createdBy?: String | null
  updatedBy?: String | null
}

/*
 * A connection to a list of items.

 */
export interface BpConnection {
  pageInfo: PageInfo
  edges: Array<BpEdge | null>
  aggregate: AggregateBp
}

/*
 * An edge in a connection.

 */
export interface BpEdge {
  node: Bp
  cursor: String
}

export interface BpPreviousValues {
  uid: ID_Output
  name1: String
  name2?: String | null
  lastName1?: String | null
  lastName2?: String | null
  phone?: String | null
  email?: String | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface BpSubscriptionPayload {
  mutation: MutationType
  node?: Bp | null
  updatedFields?: Array<String> | null
  previousValues?: BpPreviousValues | null
}

export interface Item {
  uid: ID_Output
  code?: String | null
  quantity?: Float | null
  description?: String | null
  provider?: String | null
  order: Order
  pricing?: Array<Price> | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  createdBy: String
  updatedBy?: String | null
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: Array<ItemEdge | null>
  aggregate: AggregateItem
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

export interface ItemPreviousValues {
  uid: ID_Output
  code?: String | null
  quantity?: Float | null
  description?: String | null
  provider?: String | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  createdBy: String
  updatedBy?: String | null
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item | null
  updatedFields?: Array<String> | null
  previousValues?: ItemPreviousValues | null
}

export interface Order {
  uid: ID_Output
  name: String
  stage?: OrderStage | null
  issuedTo: Bp
  assignedTo: User
  items?: Array<Item> | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  createdBy?: String | null
  updatedBy?: String | null
}

/*
 * A connection to a list of items.

 */
export interface OrderConnection {
  pageInfo: PageInfo
  edges: Array<OrderEdge | null>
  aggregate: AggregateOrder
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node: Order
  cursor: String
}

export interface OrderPreviousValues {
  uid: ID_Output
  name: String
  stage?: OrderStage | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  createdBy?: String | null
  updatedBy?: String | null
}

export interface OrderSubscriptionPayload {
  mutation: MutationType
  node?: Order | null
  updatedFields?: Array<String> | null
  previousValues?: OrderPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Price {
  uid: ID_Output
  type?: PriceType | null
  amount: Float
  currency: Currency
  item: Item
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  createdBy: String
  updatedBy?: String | null
}

/*
 * A connection to a list of items.

 */
export interface PriceConnection {
  pageInfo: PageInfo
  edges: Array<PriceEdge | null>
  aggregate: AggregatePrice
}

/*
 * An edge in a connection.

 */
export interface PriceEdge {
  node: Price
  cursor: String
}

export interface PricePreviousValues {
  uid: ID_Output
  type?: PriceType | null
  amount: Float
  currency: Currency
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  createdBy: String
  updatedBy?: String | null
}

export interface PriceSubscriptionPayload {
  mutation: MutationType
  node?: Price | null
  updatedFields?: Array<String> | null
  previousValues?: PricePreviousValues | null
}

export interface User {
  uid: ID_Output
  extUid?: String | null
  role?: String | null
  orders?: Array<Order> | null
  customers?: Array<Bp> | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  uid: ID_Output
  extUid?: String | null
  role?: String | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string