import { createContext, useContext, useState, type ReactNode } from "react";
import { sampleUsers } from "../data/sampleUsers"; // Create this if not done yet

type Role = "manager" | "teacher" | "parent";

interface AuthUser {
  username: string;
  role: Role;
  assignedChildName?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (username: string, password: string): boolean => {
    const found = sampleUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser({
        username: found.username,
        role: found.role,
        assignedChildName: found.assignedChildName,
      });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
