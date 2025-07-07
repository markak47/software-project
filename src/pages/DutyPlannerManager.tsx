import React, { useContext, useState } from 'react';
import { DutyPlanContext } from '../context/DutyPlanContext';
import { sampleUsers } from '../data/sampleUsers';
import { dutyPlanLegend, type LegendItem } from '../data/dutyPlanLegend';

const DutyPlannerManager: React.FC = () => {
  const dutyPlanContext = useContext(DutyPlanContext);
  const [weekOffset, setWeekOffset] = useState(0);

  if (!dutyPlanContext) {
    return <div>Loading Duty Planner...</div>;
  }

  const { dutyPlan, updateShift } = dutyPlanContext;
  const employees = sampleUsers.filter(u => u.role === 'teacher');
  
  const getWeekDays = (offset: number) => {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1 + (offset * 7)); // Start on Monday
    const days: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const weekDays = getWeekDays(weekOffset);

  const handleCellClick = (username: string, date: string) => {
    const currentShift = dutyPlan[username]?.[date]?.status || '';
    const newShift = prompt(`Enter new shift/status for ${username} on ${date}:`, currentShift);
    if (newShift !== null) {
      updateShift(username, date, { status: newShift });
    }
  };

  const getShiftStyle = (status: string): React.CSSProperties => {
      const legendItem = dutyPlanLegend.find(item => item.code === status);
      return { backgroundColor: legendItem ? legendItem.color : 'transparent' };
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#1e3a8a' }}>Duty Planner</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <button onClick={() => setWeekOffset(weekOffset - 1)}>Previous Week</button>
        <h3>{weekDays[0].toLocaleDateString()} - {weekDays[6].toLocaleDateString()}</h3>
        <button onClick={() => setWeekOffset(weekOffset + 1)}>Next Week</button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Employee</th>
              {weekDays.map(day => (
                <th key={day.toISOString()} style={tableHeaderStyle}>
                  {day.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td style={tableCellStyle}>{emp.username}</td>
                {weekDays.map(day => {
                  const dateString = day.toISOString().split('T')[0];
                  const shift = dutyPlan[emp.username]?.[dateString]?.status || '-';
                  return (
                    <td 
                      key={dateString} 
                      style={{...tableCellStyle, ...getShiftStyle(shift), cursor: 'pointer' }}
                      onClick={() => handleCellClick(emp.username, dateString)}
                    >
                      {shift}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       <div style={{ marginTop: '2rem' }}>
            <h2 style={{ color: '#1e3a8a' }}>Legend</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {dutyPlanLegend.map(item => (
                    <div key={item.code} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: 20, height: 20, backgroundColor: item.color, border: '1px solid #ccc' }}></div>
                        <span><strong>{item.code}:</strong> {item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
  background: '#f2f2f2',
  textAlign: 'left',
};

const tableCellStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'center',
  minWidth: '100px',
};


export default DutyPlannerManager;