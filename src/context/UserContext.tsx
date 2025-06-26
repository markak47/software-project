import React, { createContext, useContext, useState } from "react";
import { sampleUsers } from "../data/sampleUsers";
import type { User } from "../data/sampleUsers";

type AttendanceStatus = "Present" | "Absent" | "Late";

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
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.username !== username) return user;

        return {
          ...user,
          status: status as User["status"],
          absenceApproved: status === "Absent" ? approved : undefined,
        };
      })
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
