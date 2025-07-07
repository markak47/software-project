import React, { useContext } from 'react';
import { VacationRequestContext, type VacationRequest } from '../context/VacationRequestContext';

const ManageVacationRequests: React.FC = () => {
  const vacationContext = useContext(VacationRequestContext);

  if (!vacationContext) {
    return <div>Loading requests...</div>;
  }

  const { requests, updateRequestStatus } = vacationContext;

  const getStatusColor = (status: VacationRequest['status']) => {
    if (status === 'approved') return '#22c55e';
    if (status === 'denied') return '#ef4444';
    return '#6b7280';
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ color: '#1d4ed8', marginBottom: '2rem' }}>Manage Vacation Requests</h1>
      {requests.length === 0 ? (
        <p>No vacation requests.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {requests.map(req => (
            <div key={req.id} style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <p><strong>Employee:</strong> {req.employeeUsername}</p>
              <p><strong>Dates:</strong> {req.startDate} to {req.endDate}</p>
              <p><strong>Reason:</strong> {req.reason}</p>
              <p><strong>Status:</strong> <span style={{ color: getStatusColor(req.status), fontWeight: 'bold' }}>{req.status}</span></p>
              {req.status === 'pending' && (
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                  <button onClick={() => updateRequestStatus(req.id, 'approved')} style={{ ...buttonStyle, background: '#22c55e' }}>Approve</button>
                  <button onClick={() => updateRequestStatus(req.id, 'denied')} style={{ ...buttonStyle, background: '#ef4444' }}>Deny</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default ManageVacationRequests;