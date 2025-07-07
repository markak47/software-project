import React, { createContext, useState, useContext } from 'react';
import { DutyPlanContext } from './DutyPlanContext';

export type VacationStatus = 'pending' | 'approved' | 'denied';

export type VacationRequest = {
  id: number;
  employeeUsername: string;
  startDate: string;
  endDate: string;
  status: VacationStatus;
  reason: string;
};

type VacationRequestContextType = {
  requests: VacationRequest[];
  addRequest: (request: Omit<VacationRequest, 'id' | 'status'>) => void;
  updateRequestStatus: (id: number, status: VacationStatus) => void;
};

export const VacationRequestContext = createContext<VacationRequestContextType | undefined>(undefined);

export const VacationRequestProvider = ({ children }: { children: React.ReactNode }) => {
  const [requests, setRequests] = useState<VacationRequest[]>([
    // Sample request
    { id: 1, employeeUsername: 'anna', startDate: '2025-08-01', endDate: '2025-08-05', status: 'pending', reason: 'Family trip' }
  ]);

  const dutyPlanContext = useContext(DutyPlanContext);

  const addRequest = (request: Omit<VacationRequest, 'id' | 'status'>) => {
    const newRequest: VacationRequest = {
      ...request,
      id: Date.now(),
      status: 'pending',
    };
    setRequests(prev => [...prev, newRequest]);
  };

  const updateRequestStatus = (id: number, status: VacationStatus) => {
    const request = requests.find(r => r.id === id);
    if (!request) return;

    setRequests(prev => prev.map(r => (r.id === id ? { ...r, status } : r)));

    // If approved, update the duty plan
    if (status === 'approved' && dutyPlanContext) {
      const { updateShift } = dutyPlanContext;
      const start = new Date(request.startDate);
      const end = new Date(request.endDate);

      for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
        const dateString = d.toISOString().split('T')[0];
        updateShift(request.employeeUsername, dateString, { status: 'U' });
      }
    }
  };

  return (
    <VacationRequestContext.Provider value={{ requests, addRequest, updateRequestStatus }}>
      {children}
    </VacationRequestContext.Provider>
  );
};