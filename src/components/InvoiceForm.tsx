import React, { useState } from 'react';
import { Invoice, InvoiceFormProps, InvoiceStatus } from '../types/types.ts';

const InvoiceForm: React.FC<InvoiceFormProps> = ({ invoice, onSubmit }) => {
    const [formData, setFormData] = useState<Invoice>(
        invoice || {
            id: '',
            fromStreet: '',
            fromCity: '',
            fromPostalCode: '',
            fromCountry: '',
            clientName: '',
            clientEmail: '',
            clientStreet: '',
            clientCity: '',
            clientPostalCode: '',
            clientCountry: '',
            dueDate: '',
            amount: '',
            status: InvoiceStatus.Draft,
        }
    );

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate all fields
        const newErrors: { [key: string]: string } = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key as keyof Invoice] && key !== 'id') {
                newErrors[key] = 'This field is required';
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Validate amount (must be a number)
        if (isNaN(Number(formData.amount))) {
            setErrors((prev) => ({ ...prev, amount: 'Amount must be a number' }));
            return;
        }

        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section 1: Sender's Address */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold dark:text-white">From</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            name="fromStreet"
                            value={formData.fromStreet}
                            onChange={handleChange}
                            placeholder="Street Address"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.fromStreet && <p className="text-red-500 text-sm">{errors.fromStreet}</p>}
                    </div>
                    <div>
                        <input
                            name="fromCity"
                            value={formData.fromCity}
                            onChange={handleChange}
                            placeholder="City"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.fromCity && <p className="text-red-500 text-sm">{errors.fromCity}</p>}
                    </div>
                    <div>
                        <input
                            name="fromPostalCode"
                            value={formData.fromPostalCode}
                            onChange={handleChange}
                            placeholder="Postal Code"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.fromPostalCode && <p className="text-red-500 text-sm">{errors.fromPostalCode}</p>}
                    </div>
                    <div>
                        <input
                            name="fromCountry"
                            value={formData.fromCountry}
                            onChange={handleChange}
                            placeholder="Country"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.fromCountry && <p className="text-red-500 text-sm">{errors.fromCountry}</p>}
                    </div>
                </div>
            </div>

            {/* Section 2: Client's Details */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold dark:text-white">Bill To</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            name="clientName"
                            value={formData.clientName}
                            onChange={handleChange}
                            placeholder="Client's Name"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.clientName && <p className="text-red-500 text-sm">{errors.clientName}</p>}
                    </div>
                    <div>
                        <input
                            name="clientEmail"
                            value={formData.clientEmail}
                            onChange={handleChange}
                            placeholder="Client's Email"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.clientEmail && <p className="text-red-500 text-sm">{errors.clientEmail}</p>}
                    </div>
                    <div>
                        <input
                            name="clientStreet"
                            value={formData.clientStreet}
                            onChange={handleChange}
                            placeholder="Street Address"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.clientStreet && <p className="text-red-500 text-sm">{errors.clientStreet}</p>}
                    </div>
                    <div>
                        <input
                            name="clientCity"
                            value={formData.clientCity}
                            onChange={handleChange}
                            placeholder="City"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.clientCity && <p className="text-red-500 text-sm">{errors.clientCity}</p>}
                    </div>
                    <div>
                        <input
                            name="clientPostalCode"
                            value={formData.clientPostalCode}
                            onChange={handleChange}
                            placeholder="Postal Code"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.clientPostalCode && <p className="text-red-500 text-sm">{errors.clientPostalCode}</p>}
                    </div>
                    <div>
                        <input
                            name="clientCountry"
                            value={formData.clientCountry}
                            onChange={handleChange}
                            placeholder="Country"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.clientCountry && <p className="text-red-500 text-sm">{errors.clientCountry}</p>}
                    </div>
                </div>
            </div>

            {/* Section 3: Invoice Details */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold dark:text-white">Invoice Details</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            type="date"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate}</p>}
                    </div>
                    <div>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Amount"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
                    </div>
                    <div>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
                        >
                            <option value={InvoiceStatus.Draft}>Draft</option>
                            <option value={InvoiceStatus.Pending}>Pending</option>
                            <option value={InvoiceStatus.Paid}>Paid</option>
                        </select>
                        {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Save
            </button>
        </form>
    );
};

export default InvoiceForm;