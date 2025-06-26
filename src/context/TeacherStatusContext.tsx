// ✅ TeacherStatusContext.tsx
import { createContext, useState, useContext } from "react";
import { useUserContext } from "./UserContext";

export type StatusType = "illness" | "lateness" | "other";

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
  const { updateAttendance } = useUserContext();

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

    setReports((prevReports) => [...prevReports, newReport]);

    // ✅ Update user status correctly
    if (status === "illness" || status === "other") {
      updateAttendance(name, "Absent");
    } else if (status === "lateness") {
      updateAttendance(name, "Late");
    }
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
