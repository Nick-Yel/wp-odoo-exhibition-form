import React from 'react';
import ReactDOM from 'react-dom/client';

import ContactForm from './components/ContactForm';
// import ContactForm2 from './components/ContactForm2';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('odoo-form-root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ContactForm />
        {/* <ContactForm2 /> */}
      </React.StrictMode>
    );
  } 
});