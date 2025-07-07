import React, { useContext } from 'react';
import { DutyPlanContext } from '../context/DutyPlanContext';
import { dutyPlanLegend } from '../data/dutyPlanLegend';

const MySchedule: React.FC = () => {
  const dutyPlanContext = useContext(DutyPlanContext);
  const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

  if (!dutyPlanContext || !user.username) {
    return <div>Loading schedule...</div>;
  }

  const { dutyPlan } = dutyPlanContext;
  const mySchedule = dutyPlan[user.username] || {};
  const today = new Date();
  const twoMonthsLater = new Date();
  twoMonthsLater.setMonth(today.getMonth() + 2);

  const scheduleEntries = Object.entries(mySchedule)
    .map(([date, shift]) => ({ date: new Date(date), shift }))
    .filter(({ date }) => date >= today && date <= twoMonthsLater)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const getShiftStyle = (status: string) => {
    const legendItem = dutyPlanLegend.find(item => item.code === status);
    return {
      backgroundColor: legendItem ? legendItem.color : '#f3f4f6',
      borderLeft: `5px solid ${legendItem ? legendItem.color.replace('fe', '99') : '#d1d5db'}`,
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    };
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#1d4ed8', marginBottom: '2rem' }}>My Schedule (Next 2 Months)</h1>
      {scheduleEntries.length === 0 ? (
        <p>No shifts assigned in the next two months.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {scheduleEntries.map(({ date, shift }, index) => (
            <div key={index} style={getShiftStyle(shift.status)}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>
                {date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </strong>
              <span>{shift.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySchedule;