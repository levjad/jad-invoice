import { Invoice } from '../types/types.ts';

export const validateInvoice = (data: any): data is Invoice => {
    return (
        typeof data.id === 'string' &&
        typeof data.dueDate === 'string' &&
        typeof data.clientName === 'string' &&
        typeof data.amount === 'string' &&
        (data.status === 'draft' || data.status === 'pending' || data.status === 'paid')
    );
};

export const validateInvoices = (data: any): data is Invoice[] => {
    return Array.isArray(data) && data.every(validateInvoice);
};