import { createContext, useState } from "react";

export type StatusType = "Absent" | "Late" | "other";

export type TeacherStatus = {
  id: number;
  name: string;
  status: StatusType;
  details: string;
  date: string;
};

type ContextType = {
  reports: TeacherStatus[];
  submitStatus: (newStatus: Omit<TeacherStatus, "id" | "date">) => void;
  updateReport: (
    id: number,
    updates: Partial<Omit<TeacherStatus, "id" | "date">>
  ) => void;
  deleteReport: (id: number) => void;
};
export function isPresent(username: string, reports: TeacherStatus[]): boolean {
  const today = new Date().toISOString().split("T")[0];
  return !reports.some((r) => r.name === username && r.date.startsWith(today));
}

export const TeacherStatusContext = createContext<ContextType>({
  reports: [],
  submitStatus: () => {},
  updateReport: () => {},
  deleteReport: () => {},
});

export function TeacherStatusProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reports, setReports] = useState<TeacherStatus[]>([]);

  const submitStatus: ContextType["submitStatus"] = ({
    name,
    status,
    details,
  }) => {
    const newReport: TeacherStatus = {
      id: Date.now(),
      name,
      status,
      details,
      date: new Date().toISOString(),
    };
    setReports((prev) => [...prev, newReport]);
  };

  const updateReport: ContextType["updateReport"] = (id, updates) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...updates } : r))
    );
  };

  const deleteReport = (id: number) => {
    setReports((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <TeacherStatusContext.Provider
      value={{ reports, submitStatus, updateReport, deleteReport }}
    >
      {children}
    </TeacherStatusContext.Provider>
  );
}
