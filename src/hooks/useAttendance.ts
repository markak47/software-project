import { useContext } from "react";
import { TeacherStatusContext } from "../context/TeacherStatusContext";

export function useAttendance(username: string) {
  const { reports } = useContext(TeacherStatusContext);
  const today = new Date().toISOString().split("T")[0];

  const isAbsent = reports.some(
    (r) =>
      r.name.toLowerCase() === username.toLowerCase() &&
      r.date.startsWith(today)
  );

  return isAbsent ? "Absent" : "Present";
}
