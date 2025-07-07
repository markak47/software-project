import { sampleUsers } from './sampleUsers';

export type Shift = {
  status: string; // e.g., '09:00-17:00', or a status code like 'K', 'U'
};

export type DutyPlan = {
  [employeeUsername: string]: {
    [date: string]: Shift; // date is YYYY-MM-DD
  };
};

// Function to generate a sample duty plan for the next 2 months
export const generateSampleDutyPlan = (): DutyPlan => {
  const plan: DutyPlan = {};
  const today = new Date();
  const employees = sampleUsers.filter(u => u.role === 'teacher');

  employees.forEach(emp => {
    plan[emp.username] = {};
    for (let i = 0; i < 60; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.getDay();
      const dateString = date.toISOString().split('T')[0];

      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not Saturday or Sunday
        // Assign some random shifts and statuses
        const rand = Math.random();
        if (i > 0 && i % 15 === 0) {
            plan[emp.username][dateString] = { status: 'U' }; // Vacation
        } else if (i > 0 && i % 25 === 0) {
            plan[emp.username][dateString] = { status: 'K' }; // Sick
        } else {
            plan[emp.username][dateString] = { status: rand > 0.5 ? '08:00-16:00' : '09:30-17:30' };
        }
      }
    }
  });

  return plan;
};

export const sampleDutyPlan = generateSampleDutyPlan();