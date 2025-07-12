import React from 'react';

function BuyingProcess() {
  return (
    <div className="buying-process-page" style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ color: '#4b259b' }}>The Buying Process</h2>
      <ol style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#2d2350' }}>
        <li>
          <strong>Initial Consultation:</strong> Meet to discuss your needs, goals, and budget.
        </li>
        <li>
          <strong>Mortgage Pre-Approval:</strong> Connect with a lender to determine your purchasing power.
        </li>
        <li>
          <strong>Home Search:</strong> View listings that match your criteria and schedule showings.
        </li>
        <li>
          <strong>Making an Offer:</strong> Prepare and submit an offer on your chosen property.
        </li>
        <li>
          <strong>Negotiation:</strong> Negotiate terms and price with the seller.
        </li>
        <li>
          <strong>Home Inspection:</strong> Conduct a professional inspection to ensure the property’s condition.
        </li>
        <li>
          <strong>Finalizing Financing:</strong> Complete your mortgage application and secure approval.
        </li>
        <li>
          <strong>Closing:</strong> Sign documents, transfer funds, and receive the keys to your new home!
        </li>
      </ol>
      <p style={{ marginTop: '2rem', color: '#4b259b', fontWeight: 500 }}>
        Ready to start your home buying journey? Contact me today!
      </p>
    </div>
  );
}

export default BuyingProcess;