import React, { createContext, useState } from 'react';
import { sampleDutyPlan, type DutyPlan, type Shift } from '../data/sampleDutyPlan';

type DutyPlanContextType = {
  dutyPlan: DutyPlan;
  updateShift: (username: string, date: string, shift: Shift) => void;
  getEmployeeSchedule: (username: string) => { [date: string]: Shift };
};

export const DutyPlanContext = createContext<DutyPlanContextType | undefined>(undefined);

export const DutyPlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [dutyPlan, setDutyPlan] = useState<DutyPlan>(sampleDutyPlan);

  const updateShift = (username: string, date: string, shift: Shift) => {
    setDutyPlan(prevPlan => ({
      ...prevPlan,
      [username]: {
        ...prevPlan[username],
        [date]: shift,
      },
    }));
  };

  const getEmployeeSchedule = (username: string) => {
    return dutyPlan[username] || {};
  };

  return (
    <DutyPlanContext.Provider value={{ dutyPlan, updateShift, getEmployeeSchedule }}>
      {children}
    </DutyPlanContext.Provider>
  );
};