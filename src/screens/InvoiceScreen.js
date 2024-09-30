// src/screens/InvoiceScreen.js
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import InvoiceCard from '../components/InvoiceCard';
import Filters from '../components/Filters';
import { invoices } from '../data/invoices';

const InvoiceScreen = () => {
    const [status, setStatus] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const filterInvoices = () => {
        return invoices.filter((invoice) => {
            const matchesStatus = status ? invoice.status === status : true;
            const matchesStartDate = startDate ? new Date(invoice.dueDate) >= new Date(startDate) : true;
            const matchesEndDate = endDate ? new Date(invoice.dueDate) <= new Date(endDate) : true;
            return matchesStatus && matchesStartDate && matchesEndDate;
        });
    };

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                Faturas
            </Typography>
            <Filters
                status={status}
                setStatus={setStatus}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
            {filterInvoices().map((invoice) => (
                <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
        </Container>
    );
};

export default InvoiceScreen;
