import React from 'react';

function BuyingListings() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>View My Office Listings</h2>
      <p>
        Click the button below to see all current listings on Realtor.ca.
      </p>
      <a
        href="https://www.realtor.ca/agent/2021665/assel-abisheva-14-chamberlain-ave-suite-101-ottawa-ontario-k1s1v9"
        target="_blank"
        rel="noopener noreferrer"
        className="header-btn"
        style={{ marginTop: '1.5rem', display: 'inline-block' }}
      >
        View Listings on Realtor.ca
      </a>
    </div>
  );
}

export default BuyingListings;