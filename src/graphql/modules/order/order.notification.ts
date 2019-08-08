import { Injectable, Logger } from '@nestjs/common';
import * as EventEmitter from 'events';
import { Order } from './model/order';
import { WebPushService } from '../../../web-push/web-push.service';

export enum OrderNotifyEvents {
  UPDATE = 'update',
  CREATE = 'create',
}

interface NotificationPayload {
  title: string; // notification title
  body: string; // notification body
  data: any; // notification data
}

@Injectable()
export class OrderNotification extends EventEmitter {
  private readonly logger = new Logger(OrderNotification.name);

  constructor(private readonly webpush: WebPushService) {
    super();
    this.on(OrderNotifyEvents.UPDATE, this.onUpdateHandler);
    this.on(OrderNotifyEvents.CREATE, this.onCreateHandler);
  }

  /**
   * Get the receiver to whom the notification should be sent based on the
   * order data
   * @param order Order object to notify
   * @param {string} emmitedBy The user Id that emitted the notification
   * @returns {string} The receiver ID
   */
  private getReceiver(order: Order, emmitedBy: string): string {
    let receiver: string;
    if (!order.issuedTo || !order.assignedTo) {
      return ''; // if issuedTo or assignedTo are undefined, no receiver can be got
    }
    switch (emmitedBy) {
      case order.issuedTo.uid:
        // if the emmiter is the customer, the receiver is the user assigned to
        // the order (seller)
        receiver = order.assignedTo.extUid;
        break;
      case order.assignedTo.extUid:
        // if the emmiter is the assigned user(seller), the receiver is customer
        // the order
        receiver = order.issuedTo.uid;
        break;
      default:
        receiver = '';
    }
    return receiver;
  }

  /**
   * Handler on update event
   * @param order Order object to notify
   * @param {string} emmitedBy The user Id that emitted the notification
   * @returns {string} The receiver ID
   */
  private onUpdateHandler(order: Order, emmitedBy: string): void {
    const receiver = this.getReceiver(order, emmitedBy);
    // TODO The payload should be a more robust approach, enriching the notifications
    // with more information and getting the text from an i18n module.
    const payload: NotificationPayload = {
      title: 'Pedido actualizado',
      body: `${order.name} ha sido actualizado`,
      data: {
        type: 'order',
        uid: order.uid,
        operation: OrderNotifyEvents.UPDATE,
      },
    };
    this.pushNotification(receiver, payload);
  }

  /**
   * Handler on create event
   * @param order Order object to notify
   * @param {string} emmitedBy The user Id that emitted the notification
   * @returns {string} The receiver ID
   */
  private onCreateHandler(order: Order, emmitedBy: string): void {
    const receiver = this.getReceiver(order, emmitedBy);
    // TODO The payload should be a more robust approach, enriching the notifications
    // with more information and getting the text from an i18n module.
    const payload: NotificationPayload = {
      title: 'Pedido nuevo',
      body: `Tienes un nuevo pedido: ${order.name}`,
      data: {
        type: 'order',
        uid: order.uid,
        operation: OrderNotifyEvents.CREATE,
      },
    };

    this.pushNotification(receiver, payload);
  }

  /** Send notification
   * @param {Order} receiver The receiver id
   * @param {NotificationPayload} emmitedBy Notification payload
   */
  private pushNotification(receiver: string, payload: NotificationPayload): void {

    setImmediate(async () => {
      try {
        await this.webpush.pushNotification(receiver, JSON.stringify(payload));
      } catch (error) {
        this.logger.error(error.message);
      }
    });
  }
}
