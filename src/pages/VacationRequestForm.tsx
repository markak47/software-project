import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { VacationRequestContext } from '../context/VacationRequestContext';

const VacationRequestForm: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const navigate = useNavigate();
  const vacationContext = useContext(VacationRequestContext);
  const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vacationContext || !user.username) return;
    if (new Date(startDate) > new Date(endDate)) {
        alert("Start date cannot be after end date.");
        return;
    }
    vacationContext.addRequest({ employeeUsername: user.username, startDate, endDate, reason });
    alert('Vacation request submitted!');
    navigate('/dashboard/teacher');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '2rem auto', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#1d4ed8', marginBottom: '1.5rem' }}>Request Vacation Time</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required style={inputStyle} />
        
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required style={inputStyle} />
        
        <label>Reason:</label>
        <textarea value={reason} onChange={e => setReason(e.target.value)} required style={inputStyle} rows={3} />
        
        <button type="submit" style={{ padding: '0.8rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' }}>
          Submit Request
        </button>
      </form>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  padding: '0.7rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  outlineColor: '#3b82f6',
};

export default VacationRequestForm;