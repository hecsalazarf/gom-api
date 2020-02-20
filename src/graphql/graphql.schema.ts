
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* eslint-disable */
export enum BpOrderByInput {
    uid_ASC = "uid_ASC",
    uid_DESC = "uid_DESC",
    extUid_ASC = "extUid_ASC",
    extUid_DESC = "extUid_DESC",
    name1_ASC = "name1_ASC",
    name1_DESC = "name1_DESC",
    name2_ASC = "name2_ASC",
    name2_DESC = "name2_DESC",
    lastName1_ASC = "lastName1_ASC",
    lastName1_DESC = "lastName1_DESC",
    lastName2_ASC = "lastName2_ASC",
    lastName2_DESC = "lastName2_DESC",
    phone_ASC = "phone_ASC",
    phone_DESC = "phone_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    createdBy_ASC = "createdBy_ASC",
    createdBy_DESC = "createdBy_DESC",
    updatedBy_ASC = "updatedBy_ASC",
    updatedBy_DESC = "updatedBy_DESC"
}

export enum Currency {
    MXN = "MXN"
}

export enum ItemOrderByInput {
    uid_ASC = "uid_ASC",
    uid_DESC = "uid_DESC",
    code_ASC = "code_ASC",
    code_DESC = "code_DESC",
    quantity_ASC = "quantity_ASC",
    quantity_DESC = "quantity_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC",
    provider_ASC = "provider_ASC",
    provider_DESC = "provider_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    createdBy_ASC = "createdBy_ASC",
    createdBy_DESC = "createdBy_DESC",
    updatedBy_ASC = "updatedBy_ASC",
    updatedBy_DESC = "updatedBy_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum OrderOrderByInput {
    uid_ASC = "uid_ASC",
    uid_DESC = "uid_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    stage_ASC = "stage_ASC",
    stage_DESC = "stage_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    createdBy_ASC = "createdBy_ASC",
    createdBy_DESC = "createdBy_DESC",
    updatedBy_ASC = "updatedBy_ASC",
    updatedBy_DESC = "updatedBy_DESC"
}

export enum OrderStage {
    OPEN = "OPEN",
    WON = "WON",
    CLOSED = "CLOSED",
    IN_PROCESS = "IN_PROCESS"
}

export enum PriceOrderByInput {
    uid_ASC = "uid_ASC",
    uid_DESC = "uid_DESC",
    type_ASC = "type_ASC",
    type_DESC = "type_DESC",
    amount_ASC = "amount_ASC",
    amount_DESC = "amount_DESC",
    currency_ASC = "currency_ASC",
    currency_DESC = "currency_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    createdBy_ASC = "createdBy_ASC",
    createdBy_DESC = "createdBy_DESC",
    updatedBy_ASC = "updatedBy_ASC",
    updatedBy_DESC = "updatedBy_DESC"
}

export enum PriceType {
    GENERAL = "GENERAL"
}

export enum PromotionOrderByInput {
    uid_ASC = "uid_ASC",
    uid_DESC = "uid_DESC",
    code_ASC = "code_ASC",
    code_DESC = "code_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    start_ASC = "start_ASC",
    start_DESC = "start_DESC",
    end_ASC = "end_ASC",
    end_DESC = "end_DESC",
    category_ASC = "category_ASC",
    category_DESC = "category_DESC",
    content_ASC = "content_ASC",
    content_DESC = "content_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    createdBy_ASC = "createdBy_ASC",
    createdBy_DESC = "createdBy_DESC",
    updatedBy_ASC = "updatedBy_ASC",
    updatedBy_DESC = "updatedBy_DESC"
}

export enum PublicationOrderByInput {
    uid_ASC = "uid_ASC",
    uid_DESC = "uid_DESC",
    type_ASC = "type_ASC",
    type_DESC = "type_DESC",
    status_ASC = "status_ASC",
    status_DESC = "status_DESC",
    delay_ASC = "delay_ASC",
    delay_DESC = "delay_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    createdBy_ASC = "createdBy_ASC",
    createdBy_DESC = "createdBy_DESC",
    updatedBy_ASC = "updatedBy_ASC",
    updatedBy_DESC = "updatedBy_DESC"
}

export enum PublicationStatus {
    DELIVERED = "DELIVERED",
    WAITING = "WAITING",
    FAILED = "FAILED"
}

export enum PublicationType {
    NOTIFICATION = "NOTIFICATION"
}

export enum UserOrderByInput {
    uid_ASC = "uid_ASC",
    uid_DESC = "uid_DESC",
    extUid_ASC = "extUid_ASC",
    extUid_DESC = "extUid_DESC",
    business_ASC = "business_ASC",
    business_DESC = "business_DESC",
    role_ASC = "role_ASC",
    role_DESC = "role_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export class BpCreateInput {
    uid?: string;
    extUid?: string;
    name1: string;
    name2?: string;
    lastName1?: string;
    lastName2?: string;
    phone?: string;
    email?: string;
    createdBy?: string;
    updatedBy?: string;
    orders?: OrderCreateManyWithoutIssuedToInput;
    customerOf?: UserCreateManyWithoutCustomersInput;
}

export class BpCreateManyWithoutCustomerOfInput {
    create?: BpCreateWithoutCustomerOfInput[];
    connect?: BpWhereUniqueInput[];
}

export class BpCreateOneWithoutOrdersInput {
    create?: BpCreateWithoutOrdersInput;
    connect?: BpWhereUniqueInput;
}

export class BpCreateWithoutCustomerOfInput {
    uid?: string;
    extUid?: string;
    name1: string;
    name2?: string;
    lastName1?: string;
    lastName2?: string;
    phone?: string;
    email?: string;
    createdBy?: string;
    updatedBy?: string;
    orders?: OrderCreateManyWithoutIssuedToInput;
}

export class BpCreateWithoutOrdersInput {
    uid?: string;
    extUid?: string;
    name1: string;
    name2?: string;
    lastName1?: string;
    lastName2?: string;
    phone?: string;
    email?: string;
    createdBy?: string;
    updatedBy?: string;
    customerOf?: UserCreateManyWithoutCustomersInput;
}

export class BpScalarWhereInput {
    AND?: BpScalarWhereInput[];
    OR?: BpScalarWhereInput[];
    NOT?: BpScalarWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    extUid?: string;
    extUid_not?: string;
    extUid_in?: string[];
    extUid_not_in?: string[];
    extUid_lt?: string;
    extUid_lte?: string;
    extUid_gt?: string;
    extUid_gte?: string;
    extUid_contains?: string;
    extUid_not_contains?: string;
    extUid_starts_with?: string;
    extUid_not_starts_with?: string;
    extUid_ends_with?: string;
    extUid_not_ends_with?: string;
    name1?: string;
    name1_not?: string;
    name1_in?: string[];
    name1_not_in?: string[];
    name1_lt?: string;
    name1_lte?: string;
    name1_gt?: string;
    name1_gte?: string;
    name1_contains?: string;
    name1_not_contains?: string;
    name1_starts_with?: string;
    name1_not_starts_with?: string;
    name1_ends_with?: string;
    name1_not_ends_with?: string;
    name2?: string;
    name2_not?: string;
    name2_in?: string[];
    name2_not_in?: string[];
    name2_lt?: string;
    name2_lte?: string;
    name2_gt?: string;
    name2_gte?: string;
    name2_contains?: string;
    name2_not_contains?: string;
    name2_starts_with?: string;
    name2_not_starts_with?: string;
    name2_ends_with?: string;
    name2_not_ends_with?: string;
    lastName1?: string;
    lastName1_not?: string;
    lastName1_in?: string[];
    lastName1_not_in?: string[];
    lastName1_lt?: string;
    lastName1_lte?: string;
    lastName1_gt?: string;
    lastName1_gte?: string;
    lastName1_contains?: string;
    lastName1_not_contains?: string;
    lastName1_starts_with?: string;
    lastName1_not_starts_with?: string;
    lastName1_ends_with?: string;
    lastName1_not_ends_with?: string;
    lastName2?: string;
    lastName2_not?: string;
    lastName2_in?: string[];
    lastName2_not_in?: string[];
    lastName2_lt?: string;
    lastName2_lte?: string;
    lastName2_gt?: string;
    lastName2_gte?: string;
    lastName2_contains?: string;
    lastName2_not_contains?: string;
    lastName2_starts_with?: string;
    lastName2_not_starts_with?: string;
    lastName2_ends_with?: string;
    lastName2_not_ends_with?: string;
    phone?: string;
    phone_not?: string;
    phone_in?: string[];
    phone_not_in?: string[];
    phone_lt?: string;
    phone_lte?: string;
    phone_gt?: string;
    phone_gte?: string;
    phone_contains?: string;
    phone_not_contains?: string;
    phone_starts_with?: string;
    phone_not_starts_with?: string;
    phone_ends_with?: string;
    phone_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in?: string[];
    email_not_in?: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
}

export class BpSubscriptionWhereInput {
    AND?: BpSubscriptionWhereInput[];
    OR?: BpSubscriptionWhereInput[];
    NOT?: BpSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: BpWhereInput;
}

export class BpUpdateInput {
    extUid?: string;
    name1?: string;
    name2?: string;
    lastName1?: string;
    lastName2?: string;
    phone?: string;
    email?: string;
    createdBy?: string;
    updatedBy?: string;
    orders?: OrderUpdateManyWithoutIssuedToInput;
    customerOf?: UserUpdateManyWithoutCustomersInput;
}

export class BpUpdateManyDataInput {
    extUid?: string;
    name1?: string;
    name2?: string;
    lastName1?: string;
    lastName2?: string;
    phone?: string;
    email?: string;
    createdBy?: string;
    updatedBy?: string;
}

export class BpUpdateManyMutationInput {
    extUid?: string;
    name1?: string;
    name2?: string;
    lastName1?: string;
    lastName2?: string;
    phone?: string;
    email?: string;
    createdBy?: string;
    updatedBy?: string;
}

export class BpUpdateManyWithoutCustomerOfInput {
    create?: BpCreateWithoutCustomerOfInput[];
    connect?: BpWhereUniqueInput[];
    set?: BpWhereUniqueInput[];
    disconnect?: BpWhereUniqueInput[];
    delete?: BpWhereUniqueInput[];
    update?: BpUpdateWithWhereUniqueWithoutCustomerOfInput[];
    updateMany?: BpUpdateManyWithWhereNestedInput[];
    deleteMany?: BpScalarWhereInput[];
    upsert?: BpUpsertWithWhereUniqueWithoutCustomerOfInput[];
}

export class BpUpdateManyWithWhereNestedInput {
    where: BpScalarWhereInput;
    data: BpUpdateManyDataInput;
}

export class BpUpdateOneRequiredWithoutOrdersInput {
    create?: BpCreateWithoutOrdersInput;
    connect?: BpWhereUniqueInput;
    update?: BpUpdateWithoutOrdersDataInput;
    upsert?: BpUpsertWithoutOrdersInput;
}

export class BpUpdateWithoutCustomerOfDataInput {
    extUid?: string;
    name1?: string;
    name2?: string;
    lastName1?: string;
    lastName2?: string;
    phone?: string;
    email?: string;
    createdBy?: string;
    updatedBy?: string;
    orders?: OrderUpdateManyWithoutIssuedToInput;
}

export class BpUpdateWithoutOrdersDataInput {
    extUid?: string;
    name1?: string;
    name2?: string;
    lastName1?: string;
    lastName2?: string;
    phone?: string;
    email?: string;
    createdBy?: string;
    updatedBy?: string;
    customerOf?: UserUpdateManyWithoutCustomersInput;
}

export class BpUpdateWithWhereUniqueWithoutCustomerOfInput {
    where: BpWhereUniqueInput;
    data: BpUpdateWithoutCustomerOfDataInput;
}

export class BpUpsertWithoutOrdersInput {
    update: BpUpdateWithoutOrdersDataInput;
    create: BpCreateWithoutOrdersInput;
}

export class BpUpsertWithWhereUniqueWithoutCustomerOfInput {
    where: BpWhereUniqueInput;
    update: BpUpdateWithoutCustomerOfDataInput;
    create: BpCreateWithoutCustomerOfInput;
}

export class BpWhereInput {
    AND?: BpWhereInput[];
    OR?: BpWhereInput[];
    NOT?: BpWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    extUid?: string;
    extUid_not?: string;
    extUid_in?: string[];
    extUid_not_in?: string[];
    extUid_lt?: string;
    extUid_lte?: string;
    extUid_gt?: string;
    extUid_gte?: string;
    extUid_contains?: string;
    extUid_not_contains?: string;
    extUid_starts_with?: string;
    extUid_not_starts_with?: string;
    extUid_ends_with?: string;
    extUid_not_ends_with?: string;
    name1?: string;
    name1_not?: string;
    name1_in?: string[];
    name1_not_in?: string[];
    name1_lt?: string;
    name1_lte?: string;
    name1_gt?: string;
    name1_gte?: string;
    name1_contains?: string;
    name1_not_contains?: string;
    name1_starts_with?: string;
    name1_not_starts_with?: string;
    name1_ends_with?: string;
    name1_not_ends_with?: string;
    name2?: string;
    name2_not?: string;
    name2_in?: string[];
    name2_not_in?: string[];
    name2_lt?: string;
    name2_lte?: string;
    name2_gt?: string;
    name2_gte?: string;
    name2_contains?: string;
    name2_not_contains?: string;
    name2_starts_with?: string;
    name2_not_starts_with?: string;
    name2_ends_with?: string;
    name2_not_ends_with?: string;
    lastName1?: string;
    lastName1_not?: string;
    lastName1_in?: string[];
    lastName1_not_in?: string[];
    lastName1_lt?: string;
    lastName1_lte?: string;
    lastName1_gt?: string;
    lastName1_gte?: string;
    lastName1_contains?: string;
    lastName1_not_contains?: string;
    lastName1_starts_with?: string;
    lastName1_not_starts_with?: string;
    lastName1_ends_with?: string;
    lastName1_not_ends_with?: string;
    lastName2?: string;
    lastName2_not?: string;
    lastName2_in?: string[];
    lastName2_not_in?: string[];
    lastName2_lt?: string;
    lastName2_lte?: string;
    lastName2_gt?: string;
    lastName2_gte?: string;
    lastName2_contains?: string;
    lastName2_not_contains?: string;
    lastName2_starts_with?: string;
    lastName2_not_starts_with?: string;
    lastName2_ends_with?: string;
    lastName2_not_ends_with?: string;
    phone?: string;
    phone_not?: string;
    phone_in?: string[];
    phone_not_in?: string[];
    phone_lt?: string;
    phone_lte?: string;
    phone_gt?: string;
    phone_gte?: string;
    phone_contains?: string;
    phone_not_contains?: string;
    phone_starts_with?: string;
    phone_not_starts_with?: string;
    phone_ends_with?: string;
    phone_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in?: string[];
    email_not_in?: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
    orders_every?: OrderWhereInput;
    orders_some?: OrderWhereInput;
    orders_none?: OrderWhereInput;
    customerOf_every?: UserWhereInput;
    customerOf_some?: UserWhereInput;
    customerOf_none?: UserWhereInput;
}

export class BpWhereUniqueInput {
    uid?: string;
    extUid?: string;
}

export class ItemCreateInput {
    uid?: string;
    code?: string;
    quantity?: number;
    description?: string;
    provider?: string;
    createdBy?: string;
    updatedBy?: string;
    order: OrderCreateOneWithoutItemsInput;
    pricing?: PriceCreateManyWithoutItemInput;
}

export class ItemCreateManyWithoutOrderInput {
    create?: ItemCreateWithoutOrderInput[];
    connect?: ItemWhereUniqueInput[];
}

export class ItemCreateOneWithoutPricingInput {
    create?: ItemCreateWithoutPricingInput;
    connect?: ItemWhereUniqueInput;
}

export class ItemCreateWithoutOrderInput {
    uid?: string;
    code?: string;
    quantity?: number;
    description?: string;
    provider?: string;
    createdBy?: string;
    updatedBy?: string;
    pricing?: PriceCreateManyWithoutItemInput;
}

export class ItemCreateWithoutPricingInput {
    uid?: string;
    code?: string;
    quantity?: number;
    description?: string;
    provider?: string;
    createdBy?: string;
    updatedBy?: string;
    order: OrderCreateOneWithoutItemsInput;
}

export class ItemScalarWhereInput {
    AND?: ItemScalarWhereInput[];
    OR?: ItemScalarWhereInput[];
    NOT?: ItemScalarWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    code?: string;
    code_not?: string;
    code_in?: string[];
    code_not_in?: string[];
    code_lt?: string;
    code_lte?: string;
    code_gt?: string;
    code_gte?: string;
    code_contains?: string;
    code_not_contains?: string;
    code_starts_with?: string;
    code_not_starts_with?: string;
    code_ends_with?: string;
    code_not_ends_with?: string;
    quantity?: number;
    quantity_not?: number;
    quantity_in?: number[];
    quantity_not_in?: number[];
    quantity_lt?: number;
    quantity_lte?: number;
    quantity_gt?: number;
    quantity_gte?: number;
    description?: string;
    description_not?: string;
    description_in?: string[];
    description_not_in?: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
    provider?: string;
    provider_not?: string;
    provider_in?: string[];
    provider_not_in?: string[];
    provider_lt?: string;
    provider_lte?: string;
    provider_gt?: string;
    provider_gte?: string;
    provider_contains?: string;
    provider_not_contains?: string;
    provider_starts_with?: string;
    provider_not_starts_with?: string;
    provider_ends_with?: string;
    provider_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
}

export class ItemSubscriptionWhereInput {
    AND?: ItemSubscriptionWhereInput[];
    OR?: ItemSubscriptionWhereInput[];
    NOT?: ItemSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: ItemWhereInput;
}

export class ItemUpdateInput {
    code?: string;
    quantity?: number;
    description?: string;
    provider?: string;
    createdBy?: string;
    updatedBy?: string;
    order?: OrderUpdateOneRequiredWithoutItemsInput;
    pricing?: PriceUpdateManyWithoutItemInput;
}

export class ItemUpdateManyDataInput {
    code?: string;
    quantity?: number;
    description?: string;
    provider?: string;
    createdBy?: string;
    updatedBy?: string;
}

export class ItemUpdateManyMutationInput {
    code?: string;
    quantity?: number;
    description?: string;
    provider?: string;
    createdBy?: string;
    updatedBy?: string;
}

export class ItemUpdateManyWithoutOrderInput {
    create?: ItemCreateWithoutOrderInput[];
    connect?: ItemWhereUniqueInput[];
    set?: ItemWhereUniqueInput[];
    disconnect?: ItemWhereUniqueInput[];
    delete?: ItemWhereUniqueInput[];
    update?: ItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: ItemUpdateManyWithWhereNestedInput[];
    deleteMany?: ItemScalarWhereInput[];
    upsert?: ItemUpsertWithWhereUniqueWithoutOrderInput[];
}

export class ItemUpdateManyWithWhereNestedInput {
    where: ItemScalarWhereInput;
    data: ItemUpdateManyDataInput;
}

export class ItemUpdateOneRequiredWithoutPricingInput {
    create?: ItemCreateWithoutPricingInput;
    connect?: ItemWhereUniqueInput;
    update?: ItemUpdateWithoutPricingDataInput;
    upsert?: ItemUpsertWithoutPricingInput;
}

export class ItemUpdateWithoutOrderDataInput {
    code?: string;
    quantity?: number;
    description?: string;
    provider?: string;
    createdBy?: string;
    updatedBy?: string;
    pricing?: PriceUpdateManyWithoutItemInput;
}

export class ItemUpdateWithoutPricingDataInput {
    code?: string;
    quantity?: number;
    description?: string;
    provider?: string;
    createdBy?: string;
    updatedBy?: string;
    order?: OrderUpdateOneRequiredWithoutItemsInput;
}

export class ItemUpdateWithWhereUniqueWithoutOrderInput {
    where: ItemWhereUniqueInput;
    data: ItemUpdateWithoutOrderDataInput;
}

export class ItemUpsertWithoutPricingInput {
    update: ItemUpdateWithoutPricingDataInput;
    create: ItemCreateWithoutPricingInput;
}

export class ItemUpsertWithWhereUniqueWithoutOrderInput {
    where: ItemWhereUniqueInput;
    update: ItemUpdateWithoutOrderDataInput;
    create: ItemCreateWithoutOrderInput;
}

export class ItemWhereInput {
    AND?: ItemWhereInput[];
    OR?: ItemWhereInput[];
    NOT?: ItemWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    code?: string;
    code_not?: string;
    code_in?: string[];
    code_not_in?: string[];
    code_lt?: string;
    code_lte?: string;
    code_gt?: string;
    code_gte?: string;
    code_contains?: string;
    code_not_contains?: string;
    code_starts_with?: string;
    code_not_starts_with?: string;
    code_ends_with?: string;
    code_not_ends_with?: string;
    quantity?: number;
    quantity_not?: number;
    quantity_in?: number[];
    quantity_not_in?: number[];
    quantity_lt?: number;
    quantity_lte?: number;
    quantity_gt?: number;
    quantity_gte?: number;
    description?: string;
    description_not?: string;
    description_in?: string[];
    description_not_in?: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
    provider?: string;
    provider_not?: string;
    provider_in?: string[];
    provider_not_in?: string[];
    provider_lt?: string;
    provider_lte?: string;
    provider_gt?: string;
    provider_gte?: string;
    provider_contains?: string;
    provider_not_contains?: string;
    provider_starts_with?: string;
    provider_not_starts_with?: string;
    provider_ends_with?: string;
    provider_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
    order?: OrderWhereInput;
    pricing_every?: PriceWhereInput;
    pricing_some?: PriceWhereInput;
    pricing_none?: PriceWhereInput;
}

export class ItemWhereUniqueInput {
    uid?: string;
}

export class OrderCreateInput {
    uid?: string;
    name: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
    issuedTo: BpCreateOneWithoutOrdersInput;
    assignedTo: UserCreateOneWithoutOrdersInput;
    items?: ItemCreateManyWithoutOrderInput;
    promotions?: PromotionCreateManyWithoutOrdersInput;
}

export class OrderCreateManyWithoutAssignedToInput {
    create?: OrderCreateWithoutAssignedToInput[];
    connect?: OrderWhereUniqueInput[];
}

export class OrderCreateManyWithoutIssuedToInput {
    create?: OrderCreateWithoutIssuedToInput[];
    connect?: OrderWhereUniqueInput[];
}

export class OrderCreateManyWithoutPromotionsInput {
    create?: OrderCreateWithoutPromotionsInput[];
    connect?: OrderWhereUniqueInput[];
}

export class OrderCreateOneWithoutItemsInput {
    create?: OrderCreateWithoutItemsInput;
    connect?: OrderWhereUniqueInput;
}

export class OrderCreateWithoutAssignedToInput {
    uid?: string;
    name: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
    issuedTo: BpCreateOneWithoutOrdersInput;
    items?: ItemCreateManyWithoutOrderInput;
    promotions?: PromotionCreateManyWithoutOrdersInput;
}

export class OrderCreateWithoutIssuedToInput {
    uid?: string;
    name: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
    assignedTo: UserCreateOneWithoutOrdersInput;
    items?: ItemCreateManyWithoutOrderInput;
    promotions?: PromotionCreateManyWithoutOrdersInput;
}

export class OrderCreateWithoutItemsInput {
    uid?: string;
    name: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
    issuedTo: BpCreateOneWithoutOrdersInput;
    assignedTo: UserCreateOneWithoutOrdersInput;
    promotions?: PromotionCreateManyWithoutOrdersInput;
}

export class OrderCreateWithoutPromotionsInput {
    uid?: string;
    name: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
    issuedTo: BpCreateOneWithoutOrdersInput;
    assignedTo: UserCreateOneWithoutOrdersInput;
    items?: ItemCreateManyWithoutOrderInput;
}

export class OrderScalarWhereInput {
    AND?: OrderScalarWhereInput[];
    OR?: OrderScalarWhereInput[];
    NOT?: OrderScalarWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    stage?: OrderStage;
    stage_not?: OrderStage;
    stage_in?: OrderStage[];
    stage_not_in?: OrderStage[];
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
}

export class OrderSubscriptionWhereInput {
    AND?: OrderSubscriptionWhereInput[];
    OR?: OrderSubscriptionWhereInput[];
    NOT?: OrderSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: OrderWhereInput;
}

export class OrderUpdateInput {
    name?: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
    issuedTo?: BpUpdateOneRequiredWithoutOrdersInput;
    assignedTo?: UserUpdateOneRequiredWithoutOrdersInput;
    items?: ItemUpdateManyWithoutOrderInput;
    promotions?: PromotionUpdateManyWithoutOrdersInput;
}

export class OrderUpdateManyDataInput {
    name?: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
}

export class OrderUpdateManyMutationInput {
    name?: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
}

export class OrderUpdateManyWithoutAssignedToInput {
    create?: OrderCreateWithoutAssignedToInput[];
    connect?: OrderWhereUniqueInput[];
    set?: OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput[];
    update?: OrderUpdateWithWhereUniqueWithoutAssignedToInput[];
    updateMany?: OrderUpdateManyWithWhereNestedInput[];
    deleteMany?: OrderScalarWhereInput[];
    upsert?: OrderUpsertWithWhereUniqueWithoutAssignedToInput[];
}

export class OrderUpdateManyWithoutIssuedToInput {
    create?: OrderCreateWithoutIssuedToInput[];
    connect?: OrderWhereUniqueInput[];
    set?: OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput[];
    update?: OrderUpdateWithWhereUniqueWithoutIssuedToInput[];
    updateMany?: OrderUpdateManyWithWhereNestedInput[];
    deleteMany?: OrderScalarWhereInput[];
    upsert?: OrderUpsertWithWhereUniqueWithoutIssuedToInput[];
}

export class OrderUpdateManyWithoutPromotionsInput {
    create?: OrderCreateWithoutPromotionsInput[];
    connect?: OrderWhereUniqueInput[];
    set?: OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput[];
    update?: OrderUpdateWithWhereUniqueWithoutPromotionsInput[];
    updateMany?: OrderUpdateManyWithWhereNestedInput[];
    deleteMany?: OrderScalarWhereInput[];
    upsert?: OrderUpsertWithWhereUniqueWithoutPromotionsInput[];
}

export class OrderUpdateManyWithWhereNestedInput {
    where: OrderScalarWhereInput;
    data: OrderUpdateManyDataInput;
}

export class OrderUpdateOneRequiredWithoutItemsInput {
    create?: OrderCreateWithoutItemsInput;
    connect?: OrderWhereUniqueInput;
    update?: OrderUpdateWithoutItemsDataInput;
    upsert?: OrderUpsertWithoutItemsInput;
}

export class OrderUpdateWithoutAssignedToDataInput {
    name?: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
    issuedTo?: BpUpdateOneRequiredWithoutOrdersInput;
    items?: ItemUpdateManyWithoutOrderInput;
    promotions?: PromotionUpdateManyWithoutOrdersInput;
}

export class OrderUpdateWithoutIssuedToDataInput {
    name?: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
    assignedTo?: UserUpdateOneRequiredWithoutOrdersInput;
    items?: ItemUpdateManyWithoutOrderInput;
    promotions?: PromotionUpdateManyWithoutOrdersInput;
}

export class OrderUpdateWithoutItemsDataInput {
    name?: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
    issuedTo?: BpUpdateOneRequiredWithoutOrdersInput;
    assignedTo?: UserUpdateOneRequiredWithoutOrdersInput;
    promotions?: PromotionUpdateManyWithoutOrdersInput;
}

export class OrderUpdateWithoutPromotionsDataInput {
    name?: string;
    stage?: OrderStage;
    createdBy?: string;
    updatedBy?: string;
    issuedTo?: BpUpdateOneRequiredWithoutOrdersInput;
    assignedTo?: UserUpdateOneRequiredWithoutOrdersInput;
    items?: ItemUpdateManyWithoutOrderInput;
}

export class OrderUpdateWithWhereUniqueWithoutAssignedToInput {
    where: OrderWhereUniqueInput;
    data: OrderUpdateWithoutAssignedToDataInput;
}

export class OrderUpdateWithWhereUniqueWithoutIssuedToInput {
    where: OrderWhereUniqueInput;
    data: OrderUpdateWithoutIssuedToDataInput;
}

export class OrderUpdateWithWhereUniqueWithoutPromotionsInput {
    where: OrderWhereUniqueInput;
    data: OrderUpdateWithoutPromotionsDataInput;
}

export class OrderUpsertWithoutItemsInput {
    update: OrderUpdateWithoutItemsDataInput;
    create: OrderCreateWithoutItemsInput;
}

export class OrderUpsertWithWhereUniqueWithoutAssignedToInput {
    where: OrderWhereUniqueInput;
    update: OrderUpdateWithoutAssignedToDataInput;
    create: OrderCreateWithoutAssignedToInput;
}

export class OrderUpsertWithWhereUniqueWithoutIssuedToInput {
    where: OrderWhereUniqueInput;
    update: OrderUpdateWithoutIssuedToDataInput;
    create: OrderCreateWithoutIssuedToInput;
}

export class OrderUpsertWithWhereUniqueWithoutPromotionsInput {
    where: OrderWhereUniqueInput;
    update: OrderUpdateWithoutPromotionsDataInput;
    create: OrderCreateWithoutPromotionsInput;
}

export class OrderWhereInput {
    AND?: OrderWhereInput[];
    OR?: OrderWhereInput[];
    NOT?: OrderWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    stage?: OrderStage;
    stage_not?: OrderStage;
    stage_in?: OrderStage[];
    stage_not_in?: OrderStage[];
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
    issuedTo?: BpWhereInput;
    assignedTo?: UserWhereInput;
    items_every?: ItemWhereInput;
    items_some?: ItemWhereInput;
    items_none?: ItemWhereInput;
    promotions_every?: PromotionWhereInput;
    promotions_some?: PromotionWhereInput;
    promotions_none?: PromotionWhereInput;
}

export class OrderWhereUniqueInput {
    uid?: string;
}

export class PriceCreateInput {
    uid?: string;
    type?: PriceType;
    amount: number;
    currency: Currency;
    createdBy?: string;
    updatedBy?: string;
    item: ItemCreateOneWithoutPricingInput;
}

export class PriceCreateManyWithoutItemInput {
    create?: PriceCreateWithoutItemInput[];
    connect?: PriceWhereUniqueInput[];
}

export class PriceCreateWithoutItemInput {
    uid?: string;
    type?: PriceType;
    amount: number;
    currency: Currency;
    createdBy?: string;
    updatedBy?: string;
}

export class PriceScalarWhereInput {
    AND?: PriceScalarWhereInput[];
    OR?: PriceScalarWhereInput[];
    NOT?: PriceScalarWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    type?: PriceType;
    type_not?: PriceType;
    type_in?: PriceType[];
    type_not_in?: PriceType[];
    amount?: number;
    amount_not?: number;
    amount_in?: number[];
    amount_not_in?: number[];
    amount_lt?: number;
    amount_lte?: number;
    amount_gt?: number;
    amount_gte?: number;
    currency?: Currency;
    currency_not?: Currency;
    currency_in?: Currency[];
    currency_not_in?: Currency[];
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
}

export class PriceSubscriptionWhereInput {
    AND?: PriceSubscriptionWhereInput[];
    OR?: PriceSubscriptionWhereInput[];
    NOT?: PriceSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: PriceWhereInput;
}

export class PriceUpdateInput {
    type?: PriceType;
    amount?: number;
    currency?: Currency;
    createdBy?: string;
    updatedBy?: string;
    item?: ItemUpdateOneRequiredWithoutPricingInput;
}

export class PriceUpdateManyDataInput {
    type?: PriceType;
    amount?: number;
    currency?: Currency;
    createdBy?: string;
    updatedBy?: string;
}

export class PriceUpdateManyMutationInput {
    type?: PriceType;
    amount?: number;
    currency?: Currency;
    createdBy?: string;
    updatedBy?: string;
}

export class PriceUpdateManyWithoutItemInput {
    create?: PriceCreateWithoutItemInput[];
    connect?: PriceWhereUniqueInput[];
    set?: PriceWhereUniqueInput[];
    disconnect?: PriceWhereUniqueInput[];
    delete?: PriceWhereUniqueInput[];
    update?: PriceUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: PriceUpdateManyWithWhereNestedInput[];
    deleteMany?: PriceScalarWhereInput[];
    upsert?: PriceUpsertWithWhereUniqueWithoutItemInput[];
}

export class PriceUpdateManyWithWhereNestedInput {
    where: PriceScalarWhereInput;
    data: PriceUpdateManyDataInput;
}

export class PriceUpdateWithoutItemDataInput {
    type?: PriceType;
    amount?: number;
    currency?: Currency;
    createdBy?: string;
    updatedBy?: string;
}

export class PriceUpdateWithWhereUniqueWithoutItemInput {
    where: PriceWhereUniqueInput;
    data: PriceUpdateWithoutItemDataInput;
}

export class PriceUpsertWithWhereUniqueWithoutItemInput {
    where: PriceWhereUniqueInput;
    update: PriceUpdateWithoutItemDataInput;
    create: PriceCreateWithoutItemInput;
}

export class PriceWhereInput {
    AND?: PriceWhereInput[];
    OR?: PriceWhereInput[];
    NOT?: PriceWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    type?: PriceType;
    type_not?: PriceType;
    type_in?: PriceType[];
    type_not_in?: PriceType[];
    amount?: number;
    amount_not?: number;
    amount_in?: number[];
    amount_not_in?: number[];
    amount_lt?: number;
    amount_lte?: number;
    amount_gt?: number;
    amount_gte?: number;
    currency?: Currency;
    currency_not?: Currency;
    currency_in?: Currency[];
    currency_not_in?: Currency[];
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
    item?: ItemWhereInput;
}

export class PriceWhereUniqueInput {
    uid?: string;
}

export class PromotionCreateInput {
    uid?: string;
    code: string;
    name: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdBy?: string;
    updatedBy?: string;
    assignedTo: UserCreateOneWithoutPromotionsInput;
    publications?: PublicationCreateManyWithoutPromotionInput;
    orders?: OrderCreateManyWithoutPromotionsInput;
}

export class PromotionCreateManyWithoutAssignedToInput {
    create?: PromotionCreateWithoutAssignedToInput[];
    connect?: PromotionWhereUniqueInput[];
}

export class PromotionCreateManyWithoutOrdersInput {
    create?: PromotionCreateWithoutOrdersInput[];
    connect?: PromotionWhereUniqueInput[];
}

export class PromotionCreateOneWithoutPublicationsInput {
    create?: PromotionCreateWithoutPublicationsInput;
    connect?: PromotionWhereUniqueInput;
}

export class PromotionCreateWithoutAssignedToInput {
    uid?: string;
    code: string;
    name: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdBy?: string;
    updatedBy?: string;
    publications?: PublicationCreateManyWithoutPromotionInput;
    orders?: OrderCreateManyWithoutPromotionsInput;
}

export class PromotionCreateWithoutOrdersInput {
    uid?: string;
    code: string;
    name: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdBy?: string;
    updatedBy?: string;
    assignedTo: UserCreateOneWithoutPromotionsInput;
    publications?: PublicationCreateManyWithoutPromotionInput;
}

export class PromotionCreateWithoutPublicationsInput {
    uid?: string;
    code: string;
    name: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdBy?: string;
    updatedBy?: string;
    assignedTo: UserCreateOneWithoutPromotionsInput;
    orders?: OrderCreateManyWithoutPromotionsInput;
}

export class PromotionScalarWhereInput {
    AND?: PromotionScalarWhereInput[];
    OR?: PromotionScalarWhereInput[];
    NOT?: PromotionScalarWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    code?: string;
    code_not?: string;
    code_in?: string[];
    code_not_in?: string[];
    code_lt?: string;
    code_lte?: string;
    code_gt?: string;
    code_gte?: string;
    code_contains?: string;
    code_not_contains?: string;
    code_starts_with?: string;
    code_not_starts_with?: string;
    code_ends_with?: string;
    code_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    start?: DateTime;
    start_not?: DateTime;
    start_in?: DateTime[];
    start_not_in?: DateTime[];
    start_lt?: DateTime;
    start_lte?: DateTime;
    start_gt?: DateTime;
    start_gte?: DateTime;
    end?: DateTime;
    end_not?: DateTime;
    end_in?: DateTime[];
    end_not_in?: DateTime[];
    end_lt?: DateTime;
    end_lte?: DateTime;
    end_gt?: DateTime;
    end_gte?: DateTime;
    category?: string;
    category_not?: string;
    category_in?: string[];
    category_not_in?: string[];
    category_lt?: string;
    category_lte?: string;
    category_gt?: string;
    category_gte?: string;
    category_contains?: string;
    category_not_contains?: string;
    category_starts_with?: string;
    category_not_starts_with?: string;
    category_ends_with?: string;
    category_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in?: string[];
    content_not_in?: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
}

export class PromotionSubscriptionWhereInput {
    AND?: PromotionSubscriptionWhereInput[];
    OR?: PromotionSubscriptionWhereInput[];
    NOT?: PromotionSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: PromotionWhereInput;
}

export class PromotionUpdateInput {
    code?: string;
    name?: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdBy?: string;
    updatedBy?: string;
    assignedTo?: UserUpdateOneRequiredWithoutPromotionsInput;
    publications?: PublicationUpdateManyWithoutPromotionInput;
    orders?: OrderUpdateManyWithoutPromotionsInput;
}

export class PromotionUpdateManyDataInput {
    code?: string;
    name?: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdBy?: string;
    updatedBy?: string;
}

export class PromotionUpdateManyMutationInput {
    code?: string;
    name?: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdBy?: string;
    updatedBy?: string;
}

export class PromotionUpdateManyWithoutAssignedToInput {
    create?: PromotionCreateWithoutAssignedToInput[];
    connect?: PromotionWhereUniqueInput[];
    set?: PromotionWhereUniqueInput[];
    disconnect?: PromotionWhereUniqueInput[];
    delete?: PromotionWhereUniqueInput[];
    update?: PromotionUpdateWithWhereUniqueWithoutAssignedToInput[];
    updateMany?: PromotionUpdateManyWithWhereNestedInput[];
    deleteMany?: PromotionScalarWhereInput[];
    upsert?: PromotionUpsertWithWhereUniqueWithoutAssignedToInput[];
}

export class PromotionUpdateManyWithoutOrdersInput {
    create?: PromotionCreateWithoutOrdersInput[];
    connect?: PromotionWhereUniqueInput[];
    set?: PromotionWhereUniqueInput[];
    disconnect?: PromotionWhereUniqueInput[];
    delete?: PromotionWhereUniqueInput[];
    update?: PromotionUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: PromotionUpdateManyWithWhereNestedInput[];
    deleteMany?: PromotionScalarWhereInput[];
    upsert?: PromotionUpsertWithWhereUniqueWithoutOrdersInput[];
}

export class PromotionUpdateManyWithWhereNestedInput {
    where: PromotionScalarWhereInput;
    data: PromotionUpdateManyDataInput;
}

export class PromotionUpdateOneRequiredWithoutPublicationsInput {
    create?: PromotionCreateWithoutPublicationsInput;
    connect?: PromotionWhereUniqueInput;
    update?: PromotionUpdateWithoutPublicationsDataInput;
    upsert?: PromotionUpsertWithoutPublicationsInput;
}

export class PromotionUpdateWithoutAssignedToDataInput {
    code?: string;
    name?: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdBy?: string;
    updatedBy?: string;
    publications?: PublicationUpdateManyWithoutPromotionInput;
    orders?: OrderUpdateManyWithoutPromotionsInput;
}

export class PromotionUpdateWithoutOrdersDataInput {
    code?: string;
    name?: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdBy?: string;
    updatedBy?: string;
    assignedTo?: UserUpdateOneRequiredWithoutPromotionsInput;
    publications?: PublicationUpdateManyWithoutPromotionInput;
}

export class PromotionUpdateWithoutPublicationsDataInput {
    code?: string;
    name?: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdBy?: string;
    updatedBy?: string;
    assignedTo?: UserUpdateOneRequiredWithoutPromotionsInput;
    orders?: OrderUpdateManyWithoutPromotionsInput;
}

export class PromotionUpdateWithWhereUniqueWithoutAssignedToInput {
    where: PromotionWhereUniqueInput;
    data: PromotionUpdateWithoutAssignedToDataInput;
}

export class PromotionUpdateWithWhereUniqueWithoutOrdersInput {
    where: PromotionWhereUniqueInput;
    data: PromotionUpdateWithoutOrdersDataInput;
}

export class PromotionUpsertWithoutPublicationsInput {
    update: PromotionUpdateWithoutPublicationsDataInput;
    create: PromotionCreateWithoutPublicationsInput;
}

export class PromotionUpsertWithWhereUniqueWithoutAssignedToInput {
    where: PromotionWhereUniqueInput;
    update: PromotionUpdateWithoutAssignedToDataInput;
    create: PromotionCreateWithoutAssignedToInput;
}

export class PromotionUpsertWithWhereUniqueWithoutOrdersInput {
    where: PromotionWhereUniqueInput;
    update: PromotionUpdateWithoutOrdersDataInput;
    create: PromotionCreateWithoutOrdersInput;
}

export class PromotionWhereInput {
    AND?: PromotionWhereInput[];
    OR?: PromotionWhereInput[];
    NOT?: PromotionWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    code?: string;
    code_not?: string;
    code_in?: string[];
    code_not_in?: string[];
    code_lt?: string;
    code_lte?: string;
    code_gt?: string;
    code_gte?: string;
    code_contains?: string;
    code_not_contains?: string;
    code_starts_with?: string;
    code_not_starts_with?: string;
    code_ends_with?: string;
    code_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    start?: DateTime;
    start_not?: DateTime;
    start_in?: DateTime[];
    start_not_in?: DateTime[];
    start_lt?: DateTime;
    start_lte?: DateTime;
    start_gt?: DateTime;
    start_gte?: DateTime;
    end?: DateTime;
    end_not?: DateTime;
    end_in?: DateTime[];
    end_not_in?: DateTime[];
    end_lt?: DateTime;
    end_lte?: DateTime;
    end_gt?: DateTime;
    end_gte?: DateTime;
    category?: string;
    category_not?: string;
    category_in?: string[];
    category_not_in?: string[];
    category_lt?: string;
    category_lte?: string;
    category_gt?: string;
    category_gte?: string;
    category_contains?: string;
    category_not_contains?: string;
    category_starts_with?: string;
    category_not_starts_with?: string;
    category_ends_with?: string;
    category_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in?: string[];
    content_not_in?: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
    assignedTo?: UserWhereInput;
    publications_every?: PublicationWhereInput;
    publications_some?: PublicationWhereInput;
    publications_none?: PublicationWhereInput;
    orders_every?: OrderWhereInput;
    orders_some?: OrderWhereInput;
    orders_none?: OrderWhereInput;
}

export class PromotionWhereUniqueInput {
    uid?: string;
}

export class PublicationCreateInput {
    uid?: string;
    type: PublicationType;
    status?: PublicationStatus;
    delay?: number;
    createdBy?: string;
    updatedBy?: string;
    promotion: PromotionCreateOneWithoutPublicationsInput;
}

export class PublicationCreateManyWithoutPromotionInput {
    create?: PublicationCreateWithoutPromotionInput[];
    connect?: PublicationWhereUniqueInput[];
}

export class PublicationCreateWithoutPromotionInput {
    uid?: string;
    type: PublicationType;
    status?: PublicationStatus;
    delay?: number;
    createdBy?: string;
    updatedBy?: string;
}

export class PublicationScalarWhereInput {
    AND?: PublicationScalarWhereInput[];
    OR?: PublicationScalarWhereInput[];
    NOT?: PublicationScalarWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    type?: PublicationType;
    type_not?: PublicationType;
    type_in?: PublicationType[];
    type_not_in?: PublicationType[];
    status?: PublicationStatus;
    status_not?: PublicationStatus;
    status_in?: PublicationStatus[];
    status_not_in?: PublicationStatus[];
    delay?: number;
    delay_not?: number;
    delay_in?: number[];
    delay_not_in?: number[];
    delay_lt?: number;
    delay_lte?: number;
    delay_gt?: number;
    delay_gte?: number;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
}

export class PublicationSubscriptionWhereInput {
    AND?: PublicationSubscriptionWhereInput[];
    OR?: PublicationSubscriptionWhereInput[];
    NOT?: PublicationSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: PublicationWhereInput;
}

export class PublicationUpdateInput {
    type?: PublicationType;
    status?: PublicationStatus;
    delay?: number;
    createdBy?: string;
    updatedBy?: string;
    promotion?: PromotionUpdateOneRequiredWithoutPublicationsInput;
}

export class PublicationUpdateManyDataInput {
    type?: PublicationType;
    status?: PublicationStatus;
    delay?: number;
    createdBy?: string;
    updatedBy?: string;
}

export class PublicationUpdateManyMutationInput {
    type?: PublicationType;
    status?: PublicationStatus;
    delay?: number;
    createdBy?: string;
    updatedBy?: string;
}

export class PublicationUpdateManyWithoutPromotionInput {
    create?: PublicationCreateWithoutPromotionInput[];
    connect?: PublicationWhereUniqueInput[];
    set?: PublicationWhereUniqueInput[];
    disconnect?: PublicationWhereUniqueInput[];
    delete?: PublicationWhereUniqueInput[];
    update?: PublicationUpdateWithWhereUniqueWithoutPromotionInput[];
    updateMany?: PublicationUpdateManyWithWhereNestedInput[];
    deleteMany?: PublicationScalarWhereInput[];
    upsert?: PublicationUpsertWithWhereUniqueWithoutPromotionInput[];
}

export class PublicationUpdateManyWithWhereNestedInput {
    where: PublicationScalarWhereInput;
    data: PublicationUpdateManyDataInput;
}

export class PublicationUpdateWithoutPromotionDataInput {
    type?: PublicationType;
    status?: PublicationStatus;
    delay?: number;
    createdBy?: string;
    updatedBy?: string;
}

export class PublicationUpdateWithWhereUniqueWithoutPromotionInput {
    where: PublicationWhereUniqueInput;
    data: PublicationUpdateWithoutPromotionDataInput;
}

export class PublicationUpsertWithWhereUniqueWithoutPromotionInput {
    where: PublicationWhereUniqueInput;
    update: PublicationUpdateWithoutPromotionDataInput;
    create: PublicationCreateWithoutPromotionInput;
}

export class PublicationWhereInput {
    AND?: PublicationWhereInput[];
    OR?: PublicationWhereInput[];
    NOT?: PublicationWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    type?: PublicationType;
    type_not?: PublicationType;
    type_in?: PublicationType[];
    type_not_in?: PublicationType[];
    status?: PublicationStatus;
    status_not?: PublicationStatus;
    status_in?: PublicationStatus[];
    status_not_in?: PublicationStatus[];
    delay?: number;
    delay_not?: number;
    delay_in?: number[];
    delay_not_in?: number[];
    delay_lt?: number;
    delay_lte?: number;
    delay_gt?: number;
    delay_gte?: number;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdBy?: string;
    createdBy_not?: string;
    createdBy_in?: string[];
    createdBy_not_in?: string[];
    createdBy_lt?: string;
    createdBy_lte?: string;
    createdBy_gt?: string;
    createdBy_gte?: string;
    createdBy_contains?: string;
    createdBy_not_contains?: string;
    createdBy_starts_with?: string;
    createdBy_not_starts_with?: string;
    createdBy_ends_with?: string;
    createdBy_not_ends_with?: string;
    updatedBy?: string;
    updatedBy_not?: string;
    updatedBy_in?: string[];
    updatedBy_not_in?: string[];
    updatedBy_lt?: string;
    updatedBy_lte?: string;
    updatedBy_gt?: string;
    updatedBy_gte?: string;
    updatedBy_contains?: string;
    updatedBy_not_contains?: string;
    updatedBy_starts_with?: string;
    updatedBy_not_starts_with?: string;
    updatedBy_ends_with?: string;
    updatedBy_not_ends_with?: string;
    promotion?: PromotionWhereInput;
}

export class PublicationWhereUniqueInput {
    uid?: string;
}

export class UserCreateInput {
    uid?: string;
    extUid?: string;
    business: string;
    role?: string;
    orders?: OrderCreateManyWithoutAssignedToInput;
    promotions?: PromotionCreateManyWithoutAssignedToInput;
    customers?: BpCreateManyWithoutCustomerOfInput;
}

export class UserCreateManyWithoutCustomersInput {
    create?: UserCreateWithoutCustomersInput[];
    connect?: UserWhereUniqueInput[];
}

export class UserCreateOneWithoutOrdersInput {
    create?: UserCreateWithoutOrdersInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateOneWithoutPromotionsInput {
    create?: UserCreateWithoutPromotionsInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateWithoutCustomersInput {
    uid?: string;
    extUid?: string;
    business: string;
    role?: string;
    orders?: OrderCreateManyWithoutAssignedToInput;
    promotions?: PromotionCreateManyWithoutAssignedToInput;
}

export class UserCreateWithoutOrdersInput {
    uid?: string;
    extUid?: string;
    business: string;
    role?: string;
    promotions?: PromotionCreateManyWithoutAssignedToInput;
    customers?: BpCreateManyWithoutCustomerOfInput;
}

export class UserCreateWithoutPromotionsInput {
    uid?: string;
    extUid?: string;
    business: string;
    role?: string;
    orders?: OrderCreateManyWithoutAssignedToInput;
    customers?: BpCreateManyWithoutCustomerOfInput;
}

export class UserScalarWhereInput {
    AND?: UserScalarWhereInput[];
    OR?: UserScalarWhereInput[];
    NOT?: UserScalarWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    extUid?: string;
    extUid_not?: string;
    extUid_in?: string[];
    extUid_not_in?: string[];
    extUid_lt?: string;
    extUid_lte?: string;
    extUid_gt?: string;
    extUid_gte?: string;
    extUid_contains?: string;
    extUid_not_contains?: string;
    extUid_starts_with?: string;
    extUid_not_starts_with?: string;
    extUid_ends_with?: string;
    extUid_not_ends_with?: string;
    business?: string;
    business_not?: string;
    business_in?: string[];
    business_not_in?: string[];
    business_lt?: string;
    business_lte?: string;
    business_gt?: string;
    business_gte?: string;
    business_contains?: string;
    business_not_contains?: string;
    business_starts_with?: string;
    business_not_starts_with?: string;
    business_ends_with?: string;
    business_not_ends_with?: string;
    role?: string;
    role_not?: string;
    role_in?: string[];
    role_not_in?: string[];
    role_lt?: string;
    role_lte?: string;
    role_gt?: string;
    role_gte?: string;
    role_contains?: string;
    role_not_contains?: string;
    role_starts_with?: string;
    role_not_starts_with?: string;
    role_ends_with?: string;
    role_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
}

export class UserSubscriptionWhereInput {
    AND?: UserSubscriptionWhereInput[];
    OR?: UserSubscriptionWhereInput[];
    NOT?: UserSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    extUid?: string;
    business?: string;
    role?: string;
    orders?: OrderUpdateManyWithoutAssignedToInput;
    promotions?: PromotionUpdateManyWithoutAssignedToInput;
    customers?: BpUpdateManyWithoutCustomerOfInput;
}

export class UserUpdateManyDataInput {
    extUid?: string;
    business?: string;
    role?: string;
}

export class UserUpdateManyMutationInput {
    extUid?: string;
    business?: string;
    role?: string;
}

export class UserUpdateManyWithoutCustomersInput {
    create?: UserCreateWithoutCustomersInput[];
    connect?: UserWhereUniqueInput[];
    set?: UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput[];
    update?: UserUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: UserUpdateManyWithWhereNestedInput[];
    deleteMany?: UserScalarWhereInput[];
    upsert?: UserUpsertWithWhereUniqueWithoutCustomersInput[];
}

export class UserUpdateManyWithWhereNestedInput {
    where: UserScalarWhereInput;
    data: UserUpdateManyDataInput;
}

export class UserUpdateOneRequiredWithoutOrdersInput {
    create?: UserCreateWithoutOrdersInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutOrdersDataInput;
    upsert?: UserUpsertWithoutOrdersInput;
}

export class UserUpdateOneRequiredWithoutPromotionsInput {
    create?: UserCreateWithoutPromotionsInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutPromotionsDataInput;
    upsert?: UserUpsertWithoutPromotionsInput;
}

export class UserUpdateWithoutCustomersDataInput {
    extUid?: string;
    business?: string;
    role?: string;
    orders?: OrderUpdateManyWithoutAssignedToInput;
    promotions?: PromotionUpdateManyWithoutAssignedToInput;
}

export class UserUpdateWithoutOrdersDataInput {
    extUid?: string;
    business?: string;
    role?: string;
    promotions?: PromotionUpdateManyWithoutAssignedToInput;
    customers?: BpUpdateManyWithoutCustomerOfInput;
}

export class UserUpdateWithoutPromotionsDataInput {
    extUid?: string;
    business?: string;
    role?: string;
    orders?: OrderUpdateManyWithoutAssignedToInput;
    customers?: BpUpdateManyWithoutCustomerOfInput;
}

export class UserUpdateWithWhereUniqueWithoutCustomersInput {
    where: UserWhereUniqueInput;
    data: UserUpdateWithoutCustomersDataInput;
}

export class UserUpsertWithoutOrdersInput {
    update: UserUpdateWithoutOrdersDataInput;
    create: UserCreateWithoutOrdersInput;
}

export class UserUpsertWithoutPromotionsInput {
    update: UserUpdateWithoutPromotionsDataInput;
    create: UserCreateWithoutPromotionsInput;
}

export class UserUpsertWithWhereUniqueWithoutCustomersInput {
    where: UserWhereUniqueInput;
    update: UserUpdateWithoutCustomersDataInput;
    create: UserCreateWithoutCustomersInput;
}

export class UserWhereInput {
    AND?: UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput[];
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    extUid?: string;
    extUid_not?: string;
    extUid_in?: string[];
    extUid_not_in?: string[];
    extUid_lt?: string;
    extUid_lte?: string;
    extUid_gt?: string;
    extUid_gte?: string;
    extUid_contains?: string;
    extUid_not_contains?: string;
    extUid_starts_with?: string;
    extUid_not_starts_with?: string;
    extUid_ends_with?: string;
    extUid_not_ends_with?: string;
    business?: string;
    business_not?: string;
    business_in?: string[];
    business_not_in?: string[];
    business_lt?: string;
    business_lte?: string;
    business_gt?: string;
    business_gte?: string;
    business_contains?: string;
    business_not_contains?: string;
    business_starts_with?: string;
    business_not_starts_with?: string;
    business_ends_with?: string;
    business_not_ends_with?: string;
    role?: string;
    role_not?: string;
    role_in?: string[];
    role_not_in?: string[];
    role_lt?: string;
    role_lte?: string;
    role_gt?: string;
    role_gte?: string;
    role_contains?: string;
    role_not_contains?: string;
    role_starts_with?: string;
    role_not_starts_with?: string;
    role_ends_with?: string;
    role_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    orders_every?: OrderWhereInput;
    orders_some?: OrderWhereInput;
    orders_none?: OrderWhereInput;
    promotions_every?: PromotionWhereInput;
    promotions_some?: PromotionWhereInput;
    promotions_none?: PromotionWhereInput;
    customers_every?: BpWhereInput;
    customers_some?: BpWhereInput;
    customers_none?: BpWhereInput;
}

export class UserWhereUniqueInput {
    uid?: string;
    extUid?: string;
}

export interface Node {
    id: string;
}

export class AggregateBp {
    count: number;
}

export class AggregateItem {
    count: number;
}

export class AggregateOrder {
    count: number;
}

export class AggregatePrice {
    count: number;
}

export class AggregatePromotion {
    count: number;
}

export class AggregatePublication {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Bp {
    uid: string;
    extUid?: string;
    name1: string;
    name2?: string;
    lastName1?: string;
    lastName2?: string;
    phone?: string;
    email?: string;
    orders?: Order[];
    customerOf?: User[];
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class BpConnection {
    pageInfo: PageInfo;
    edges: BpEdge[];
    aggregate: AggregateBp;
}

export class BpEdge {
    node: Bp;
    cursor: string;
}

export class BpPreviousValues {
    uid: string;
    extUid?: string;
    name1: string;
    name2?: string;
    lastName1?: string;
    lastName2?: string;
    phone?: string;
    email?: string;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class BpSubscriptionPayload {
    mutation: MutationType;
    node?: Bp;
    updatedFields?: string[];
    previousValues?: BpPreviousValues;
}

export class Item {
    uid: string;
    code?: string;
    quantity?: number;
    description?: string;
    provider?: string;
    order: Order;
    pricing?: Price[];
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class ItemConnection {
    pageInfo: PageInfo;
    edges: ItemEdge[];
    aggregate: AggregateItem;
}

export class ItemEdge {
    node: Item;
    cursor: string;
}

export class ItemPreviousValues {
    uid: string;
    code?: string;
    quantity?: number;
    description?: string;
    provider?: string;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class ItemSubscriptionPayload {
    mutation: MutationType;
    node?: Item;
    updatedFields?: string[];
    previousValues?: ItemPreviousValues;
}

export abstract class IMutation {
    abstract createBp(data: BpCreateInput): Bp | Promise<Bp>;

    abstract createUser(data: UserCreateInput): User | Promise<User>;

    abstract createOrder(data: OrderCreateInput): Order | Promise<Order>;

    abstract createItem(data: ItemCreateInput): Item | Promise<Item>;

    abstract createPrice(data: PriceCreateInput): Price | Promise<Price>;

    abstract createPromotion(data: PromotionCreateInput): Promotion | Promise<Promotion>;

    abstract createPublication(data: PublicationCreateInput): Publication | Promise<Publication>;

    abstract updateBp(data: BpUpdateInput, where: BpWhereUniqueInput): Bp | Promise<Bp>;

    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;

    abstract updateOrder(data: OrderUpdateInput, where: OrderWhereUniqueInput): Order | Promise<Order>;

    abstract updateItem(data: ItemUpdateInput, where: ItemWhereUniqueInput): Item | Promise<Item>;

    abstract updatePrice(data: PriceUpdateInput, where: PriceWhereUniqueInput): Price | Promise<Price>;

    abstract updatePromotion(data: PromotionUpdateInput, where: PromotionWhereUniqueInput): Promotion | Promise<Promotion>;

    abstract updatePublication(data: PublicationUpdateInput, where: PublicationWhereUniqueInput): Publication | Promise<Publication>;

    abstract deleteBp(where: BpWhereUniqueInput): Bp | Promise<Bp>;

    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;

    abstract deleteOrder(where: OrderWhereUniqueInput): Order | Promise<Order>;

    abstract deleteItem(where: ItemWhereUniqueInput): Item | Promise<Item>;

    abstract deletePrice(where: PriceWhereUniqueInput): Price | Promise<Price>;

    abstract deletePromotion(where: PromotionWhereUniqueInput): Promotion | Promise<Promotion>;

    abstract deletePublication(where: PublicationWhereUniqueInput): Publication | Promise<Publication>;

    abstract upsertBp(where: BpWhereUniqueInput, create: BpCreateInput, update: BpUpdateInput): Bp | Promise<Bp>;

    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;

    abstract upsertOrder(where: OrderWhereUniqueInput, create: OrderCreateInput, update: OrderUpdateInput): Order | Promise<Order>;

    abstract upsertItem(where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput): Item | Promise<Item>;

    abstract upsertPrice(where: PriceWhereUniqueInput, create: PriceCreateInput, update: PriceUpdateInput): Price | Promise<Price>;

    abstract upsertPromotion(where: PromotionWhereUniqueInput, create: PromotionCreateInput, update: PromotionUpdateInput): Promotion | Promise<Promotion>;

    abstract upsertPublication(where: PublicationWhereUniqueInput, create: PublicationCreateInput, update: PublicationUpdateInput): Publication | Promise<Publication>;

    abstract updateManyBps(data: BpUpdateManyMutationInput, where?: BpWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyOrders(data: OrderUpdateManyMutationInput, where?: OrderWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyItems(data: ItemUpdateManyMutationInput, where?: ItemWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyPrices(data: PriceUpdateManyMutationInput, where?: PriceWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyPromotions(data: PromotionUpdateManyMutationInput, where?: PromotionWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyPublications(data: PublicationUpdateManyMutationInput, where?: PublicationWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyBps(where?: BpWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyOrders(where?: OrderWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyItems(where?: ItemWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyPrices(where?: PriceWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyPromotions(where?: PromotionWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyPublications(where?: PublicationWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class Order {
    uid: string;
    name: string;
    stage?: OrderStage;
    issuedTo: Bp;
    assignedTo: User;
    items?: Item[];
    promotions?: Promotion[];
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class OrderConnection {
    pageInfo: PageInfo;
    edges: OrderEdge[];
    aggregate: AggregateOrder;
}

export class OrderEdge {
    node: Order;
    cursor: string;
}

export class OrderPreviousValues {
    uid: string;
    name: string;
    stage?: OrderStage;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class OrderSubscriptionPayload {
    mutation: MutationType;
    node?: Order;
    updatedFields?: string[];
    previousValues?: OrderPreviousValues;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export class Price {
    uid: string;
    type?: PriceType;
    amount: number;
    currency: Currency;
    item: Item;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class PriceConnection {
    pageInfo: PageInfo;
    edges: PriceEdge[];
    aggregate: AggregatePrice;
}

export class PriceEdge {
    node: Price;
    cursor: string;
}

export class PricePreviousValues {
    uid: string;
    type?: PriceType;
    amount: number;
    currency: Currency;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class PriceSubscriptionPayload {
    mutation: MutationType;
    node?: Price;
    updatedFields?: string[];
    previousValues?: PricePreviousValues;
}

export class Promotion {
    uid: string;
    code: string;
    name: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    assignedTo: User;
    publications?: Publication[];
    orders?: Order[];
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class PromotionConnection {
    pageInfo: PageInfo;
    edges: PromotionEdge[];
    aggregate: AggregatePromotion;
}

export class PromotionEdge {
    node: Promotion;
    cursor: string;
}

export class PromotionPreviousValues {
    uid: string;
    code: string;
    name: string;
    start?: DateTime;
    end?: DateTime;
    category?: string;
    content?: string;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class PromotionSubscriptionPayload {
    mutation: MutationType;
    node?: Promotion;
    updatedFields?: string[];
    previousValues?: PromotionPreviousValues;
}

export class Publication {
    uid: string;
    type: PublicationType;
    status?: PublicationStatus;
    delay?: number;
    promotion: Promotion;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class PublicationConnection {
    pageInfo: PageInfo;
    edges: PublicationEdge[];
    aggregate: AggregatePublication;
}

export class PublicationEdge {
    node: Publication;
    cursor: string;
}

export class PublicationPreviousValues {
    uid: string;
    type: PublicationType;
    status?: PublicationStatus;
    delay?: number;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    createdBy?: string;
    updatedBy?: string;
}

export class PublicationSubscriptionPayload {
    mutation: MutationType;
    node?: Publication;
    updatedFields?: string[];
    previousValues?: PublicationPreviousValues;
}

export abstract class IQuery {
    abstract bps(where?: BpWhereInput, orderBy?: BpOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Bp[] | Promise<Bp[]>;

    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;

    abstract orders(where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Order[] | Promise<Order[]>;

    abstract items(where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Item[] | Promise<Item[]>;

    abstract prices(where?: PriceWhereInput, orderBy?: PriceOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Price[] | Promise<Price[]>;

    abstract promotions(where?: PromotionWhereInput, orderBy?: PromotionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Promotion[] | Promise<Promotion[]>;

    abstract publications(where?: PublicationWhereInput, orderBy?: PublicationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Publication[] | Promise<Publication[]>;

    abstract bp(where: BpWhereUniqueInput): Bp | Promise<Bp>;

    abstract user(where: UserWhereUniqueInput): User | Promise<User>;

    abstract order(where: OrderWhereUniqueInput): Order | Promise<Order>;

    abstract item(where: ItemWhereUniqueInput): Item | Promise<Item>;

    abstract price(where: PriceWhereUniqueInput): Price | Promise<Price>;

    abstract promotion(where: PromotionWhereUniqueInput): Promotion | Promise<Promotion>;

    abstract publication(where: PublicationWhereUniqueInput): Publication | Promise<Publication>;

    abstract bpsConnection(where?: BpWhereInput, orderBy?: BpOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): BpConnection | Promise<BpConnection>;

    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;

    abstract ordersConnection(where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): OrderConnection | Promise<OrderConnection>;

    abstract itemsConnection(where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): ItemConnection | Promise<ItemConnection>;

    abstract pricesConnection(where?: PriceWhereInput, orderBy?: PriceOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): PriceConnection | Promise<PriceConnection>;

    abstract promotionsConnection(where?: PromotionWhereInput, orderBy?: PromotionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): PromotionConnection | Promise<PromotionConnection>;

    abstract publicationsConnection(where?: PublicationWhereInput, orderBy?: PublicationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): PublicationConnection | Promise<PublicationConnection>;

    abstract node(id: string): Node | Promise<Node>;
}

export abstract class ISubscription {
    abstract bp(where?: BpSubscriptionWhereInput): BpSubscriptionPayload | Promise<BpSubscriptionPayload>;

    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;

    abstract order(where?: OrderSubscriptionWhereInput): OrderSubscriptionPayload | Promise<OrderSubscriptionPayload>;

    abstract item(where?: ItemSubscriptionWhereInput): ItemSubscriptionPayload | Promise<ItemSubscriptionPayload>;

    abstract price(where?: PriceSubscriptionWhereInput): PriceSubscriptionPayload | Promise<PriceSubscriptionPayload>;

    abstract promotion(where?: PromotionSubscriptionWhereInput): PromotionSubscriptionPayload | Promise<PromotionSubscriptionPayload>;

    abstract publication(where?: PublicationSubscriptionWhereInput): PublicationSubscriptionPayload | Promise<PublicationSubscriptionPayload>;
}

export class User {
    uid: string;
    extUid?: string;
    business: string;
    role?: string;
    orders?: Order[];
    promotions?: Promotion[];
    customers?: Bp[];
    createdAt?: DateTime;
    updatedAt?: DateTime;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    uid: string;
    extUid?: string;
    business: string;
    role?: string;
    createdAt?: DateTime;
    updatedAt?: DateTime;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Long = any;
