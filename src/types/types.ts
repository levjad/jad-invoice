export enum InvoiceStatus {
    Draft = 'draft',
    Pending = 'pending',
    Paid = 'paid',
}

export interface Item {
    name: string;
    quantity: number;
    price: number;
}

export interface Invoice {
    id: string;
    fromStreet: string;
    fromCity: string;
    fromPostalCode: string;
    fromCountry: string;
    clientName: string;
    clientEmail: string;
    clientStreet: string;
    clientCity: string;
    clientPostalCode: string;
    clientCountry: string;
    dueDate: string;
    amount: string;
    status: InvoiceStatus;
}

export type InvoiceFormProps = {
    invoice: Invoice | null;
    onSubmit: (invoice: Invoice) => void;
};

export type InvoiceListProps = {
    invoices: Invoice[];
    onItemClick: (invoice: Invoice) => void;
};

export type InvoiceItemProps = {
    invoice: Invoice;
    onClick: () => void;
};

export type InvoiceDetailProps = {
    invoice: Invoice;
    onEdit: () => void;
    onDelete: () => void;
    onMarkAsPaid: () => void;
    onBack: () => void;
};

export type HeaderProps = {
    invoiceCount: number;
    onFilterChange: (filter: 'all' | InvoiceStatus) => void;
    onAddInvoice: () => void;
};

export type TitlebarProps = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

export type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};