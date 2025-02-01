export const saveInvoices = (invoices: any[]) => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
};

export const loadInvoices = () => {
    return JSON.parse(localStorage.getItem('invoices') || '[]');
};