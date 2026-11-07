export type UserRole = "SHOPPER" | "SUPERVISOR" | "MANAGER";

export type OrderStatus =
    | "QUEUED"
    | "ASSIGNED"
    | "PICKING"
    | "NEEDS_REVIEW"
    | "READY"
    | "COMPLETED";

export interface User {
    id: string;
    name: string;
    role: UserRole;
}

export interface GroceryOrder {
    id: string;
    orderNumber: string;
    status: OrderStatus;
    assignedShopperId?: string;
    dueAt: string;
    version: number;
}

export interface OrderAssignedEvent {
    orderId: string;
    shopperId: string;
    version: number;
}

