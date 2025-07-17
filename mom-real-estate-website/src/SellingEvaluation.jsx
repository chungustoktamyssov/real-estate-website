import React, { useState } from 'react';

function SellingEvaluation() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    propertyType: '',
    size: '',
    bedrooms: '',
    bathrooms: '',
    garage: '',
    yearBuilt: '',
    features: '',
    purpose: '',
    heardAbout: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRadio = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const data = 'dick';

    fetch('/api/send-evaluation', {
        method: 'POST',
        // body: JSON.stringify(form),
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
      });

    // try {
    //   const res = await fetch('/api/send-evaluation', {
    //     method: 'POST',
    //     // body: JSON.stringify(form),
    //     body: JSON.stringify(data),
    //     headers: { 'Content-Type': 'application/json'}
    //   });
    //   if (res.ok) {
    //     setStatus('Thank you! Your request was sent.');
    //     setForm({
    //       firstName: '',
    //       lastName: '',
    //       email: '',
    //       phone: '',
    //       address: '',
    //       city: '',
    //       propertyType: '',
    //       size: '',
    //       bedrooms: '',
    //       bathrooms: '',
    //       garage: '',
    //       yearBuilt: '',
    //       features: '',
    //       purpose: '',
    //       heardAbout: ''
    //     });
    //   } else {
    //     setStatus('There was an error. Please try again.');
    //   }
    // } catch (err) {
    //   setStatus('There was an error. Please try again.');
    // }
  };

  return (
    <div className="selling-evaluation-page">
      <h2 className="selling-evaluation-title">Home Evaluation Request</h2>
      <p className="selling-evaluation-desc">
        Fill out the form below to request a free home evaluation.
      </p>
      <form className="selling-evaluation-form" onSubmit={handleSubmit}>
        {/* 1. Contact Info */}
        <h3 className="selling-evaluation-section">① Contact info</h3>
        <div className="selling-evaluation-row">
          <div className="selling-evaluation-col">
            <label>First name: *</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div className="selling-evaluation-col">
            <label>Last name: *</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="selling-evaluation-row">
          <div className="selling-evaluation-col">
            <label>Email address: *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="selling-evaluation-col">
            <label>Phone number: *</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
          </div>
        </div>

        {/* 2. Property Details */}
        <h3 className="selling-evaluation-section">② Property details</h3>
        <div className="selling-evaluation-row">
          <div className="selling-evaluation-col">
            <label>Address: *</label>
            <input type="text" name="address" value={form.address} onChange={handleChange} required />
          </div>
          <div className="selling-evaluation-col">
            <label>City:</label>
            <input type="text" name="city" value={form.city} onChange={handleChange} />
          </div>
        </div>
        <div className="selling-evaluation-row">
          <div className="selling-evaluation-col">
            <label>Property type:</label>
            <select name="propertyType" value={form.propertyType} onChange={handleChange}>
              <option value="">Select</option>
              <option>Detached</option>
              <option>Semi-Detached</option>
              <option>Townhouse</option>
              <option>Condo</option>
              <option>Other</option>
            </select>
          </div>
          <div className="selling-evaluation-col">
            <label>Size:</label>
            <input type="text" name="size" value={form.size} onChange={handleChange} />
          </div>
        </div>
        <div className="selling-evaluation-row">
          <div className="selling-evaluation-col">
            <label>Bedrooms: *</label>
            <div className="selling-evaluation-radio-group">
              {[0,1,2,3,4].map(n => (
                <label key={n}>
                  <input
                    type="radio"
                    name="bedrooms"
                    value={n}
                    checked={form.bedrooms === n.toString()}
                    onChange={handleRadio}
                    required
                  /> {n}
                </label>
              ))}
              <label>
                <input
                  type="radio"
                  name="bedrooms"
                  value="5+"
                  checked={form.bedrooms === "5+"}
                  onChange={handleRadio}
                  required
                /> 5+
              </label>
            </div>
          </div>
          <div className="selling-evaluation-col">
            <label>Bathrooms: *</label>
            <div className="selling-evaluation-radio-group">
              {[0,1,2,3,4].map(n => (
                <label key={n}>
                  <input
                    type="radio"
                    name="bathrooms"
                    value={n}
                    checked={form.bathrooms === n.toString()}
                    onChange={handleRadio}
                    required
                  /> {n}
                </label>
              ))}
              <label>
                <input
                  type="radio"
                  name="bathrooms"
                  value="5+"
                  checked={form.bathrooms === "5+"}
                  onChange={handleRadio}
                  required
                /> 5+
              </label>
            </div>
          </div>
        </div>
        <div className="selling-evaluation-row">
          <div className="selling-evaluation-col">
            <label># of Garage: *</label>
            <div className="selling-evaluation-radio-group">
              {[0,1,2,3,4].map(n => (
                <label key={n}>
                  <input
                    type="radio"
                    name="garage"
                    value={n}
                    checked={form.garage === n.toString()}
                    onChange={handleRadio}
                    required
                  /> {n}
                </label>
              ))}
              <label>
                <input
                  type="radio"
                  name="garage"
                  value="5+"
                  checked={form.garage === "5+"}
                  onChange={handleRadio}
                  required
                /> 5+
              </label>
            </div>
          </div>
          <div className="selling-evaluation-col">
            <label>Year Built:</label>
            <input type="text" name="yearBuilt" value={form.yearBuilt} onChange={handleChange} />
          </div>
        </div>
        <div className="selling-evaluation-row">
          <label>Features:</label>
          <textarea
            name="features"
            value={form.features}
            onChange={handleChange}
            placeholder="Include special features, recent renovations, etc."
          />
        </div>

        {/* 3. Helpful Information */}
        <h3 className="selling-evaluation-section">③ Helpful information</h3>
        <div className="selling-evaluation-row">
          <div className="selling-evaluation-col">
            <label>Purpose for evaluation:</label>
            <select name="purpose" value={form.purpose} onChange={handleChange}>
              <option value="">Select</option>
              <option>Thinking of Selling</option>
              <option>Curious About Value</option>
              <option>Refinancing</option>
              <option>Other</option>
            </select>
          </div>
          <div className="selling-evaluation-col">
            <label>How did you hear about me?:</label>
            <input type="text" name="heardAbout" value={form.heardAbout} onChange={handleChange} />
          </div>
        </div>
        <button
          type="submit"
          className="selling-evaluation-submit"
        >
          Submit &gt;
        </button>
        {status && (
          <div style={{ marginTop: '1rem', color: status.startsWith('Thank') ? 'green' : 'red' }}>
            {status}
          </div>
        )}
      </form>
    </div>
  );
}

export default SellingEvaluation;