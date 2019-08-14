import { OrderStage } from '../../graphql.schema';

// For constant business changes, bussines rules should be
// persited in DB
export const ActiveStatus = [
  OrderStage.OPEN,
  OrderStage.IN_PROCESS,
];
