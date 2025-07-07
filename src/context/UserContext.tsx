import React, { createContext, useContext, useState } from "react";
import { sampleUsers } from "../data/sampleUsers";
import type { User } from "../data/sampleUsers";

export type AttendanceStatus = "Present" | "Absent" | "Late";

type UserContextType = {
  users: User[];
  updateAttendance: (
    username: string,
    status: AttendanceStatus,
    approved?: boolean
  ) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>(sampleUsers);

  const updateAttendance = (
    username: string,
    status: AttendanceStatus,
    approved: boolean = false
  ) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.username === username
          ? {
              ...user,
              status,
              absenceApproved: status === "Absent" ? approved : false,
            }
          : user
      )
    );
  };

  return (
    <UserContext.Provider value={{ users, updateAttendance }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext is not available");
  return context;
};
