// src/components/InvoiceCard.js
import React from 'react';
import { Card, CardContent, Typography, Chip } from '@mui/material';

const statusColors = {
  'Pago': 'success',
  'Em Aberto': 'warning',
  'Vencido': 'error',
};

const InvoiceCard = ({ invoice }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{invoice.number}</Typography>
        <Typography color="textSecondary">Cliente: {invoice.client}</Typography>
        <Typography>Valor: R$ {invoice.amount.toFixed(2)}</Typography>
        <Chip label={invoice.status} color={statusColors[invoice.status]} sx={{ mt: 1 }} />
        <Typography color="textSecondary">Vencimento: {invoice.dueDate}</Typography>
      </CardContent>
    </Card>
  );
};

export default InvoiceCard;
