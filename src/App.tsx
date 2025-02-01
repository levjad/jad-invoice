import React, { useState, useEffect } from 'react';
import Titlebar from './components/Titlebar';
import InvoiceList from './components/InvoiceList';
import InvoiceDetail from './components/InvoiceDetail';
import Header from './components/Header';
import Dialog from './components/Dialog';
import InvoiceForm from './components/InvoiceForm';
import { Invoice, InvoiceStatus } from './types/types.ts';
import { generateId } from "./utils/generateId.ts";

const App: React.FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [filter, setFilter] = useState<'all' | InvoiceStatus>('all');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentInvoice, setCurrentInvoice] = useState<Invoice | null>(null);
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                const invoices = data.map((invoice: Invoice) => ({
                    ...invoice,
                    status: invoice.status as InvoiceStatus,
                }));
                setInvoices(invoices);
            });
    }, []);

    const saveInvoice = (invoice: Invoice) => {
        let updatedInvoices;

        if (invoice.id) {
            updatedInvoices = invoices.map((inv) => (inv.id === invoice.id ? invoice : inv));
        } else {
            const newInvoice = { ...invoice, id: generateId() };
            updatedInvoices = [...invoices, newInvoice];
        }

        setInvoices(updatedInvoices);
        localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
        setIsDialogOpen(false);
    };

    const deleteInvoice = (id: string) => {
        const updatedInvoices = invoices.filter((inv) => inv.id !== id);
        setInvoices(updatedInvoices);
        setSelectedInvoice(null);
    };

    const markAsPaid = (id: string) => {
        const updatedInvoices = invoices.map((inv) =>
            inv.id === id ? { ...inv, status: InvoiceStatus.Paid } : inv
        );
        setInvoices(updatedInvoices);
        setSelectedInvoice(updatedInvoices.find((inv) => inv.id === id) || null);
    };

    const filteredInvoices = invoices.filter((invoice) => filter === 'all' || invoice.status === filter);

    return (
        <div className={`min-h-screen flex ${isDarkMode ? 'dark' : ''}`}>
            {/* Sticky Titlebar on the left */}
            <div className="sticky top-0 h-screen">
                <Titlebar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
            </div>

            {/* Scrollable Main Content */}
            <div className="flex-1 overflow-y-auto p-8 bg-gray-100 dark:bg-gray-900 items-center">
                <div className="mx-auto xl:max-w-4xl w-full">
                    {selectedInvoice ? (
                        <InvoiceDetail
                            invoice={selectedInvoice}
                            onEdit={() => {
                                setCurrentInvoice(selectedInvoice);
                                setIsDialogOpen(true);
                            }}
                            onDelete={() => deleteInvoice(selectedInvoice.id)}
                            onMarkAsPaid={() => markAsPaid(selectedInvoice.id)}
                            onBack={() => setSelectedInvoice(null)}
                        />
                    ) : (
                        <>
                            <Header
                                invoiceCount={filteredInvoices.length}
                                onFilterChange={setFilter}
                                onAddInvoice={() => {
                                    setCurrentInvoice(null);
                                    setIsDialogOpen(true);
                                }}
                            />
                            <InvoiceList
                                invoices={filteredInvoices}
                                onItemClick={(invoice) => setSelectedInvoice(invoice)}
                            />
                        </>
                    )}
                    <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                        <InvoiceForm invoice={currentInvoice} onSubmit={saveInvoice} />
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default App;