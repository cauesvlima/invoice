// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceScreen from './screens/InvoiceScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/faturas" element={<InvoiceScreen />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
