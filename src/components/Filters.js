// src/components/Filters.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Grid } from '@mui/material';

const Filters = ({ status, setStatus, startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            label="Status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Pago">Pago</MenuItem>
            <MenuItem value="Em Aberto">Em Aberto</MenuItem>
            <MenuItem value="Vencido">Vencido</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Data Início"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Data Fim"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default Filters;
