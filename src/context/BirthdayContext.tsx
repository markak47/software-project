// BirthdayContext.tsx
// Provides birthday data and add/delete functionality

import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { sampleBirthdays } from "../data/sampleBirthdays";

// 🎂 Data structure for a birthday entry
export type Birthday = {
  id: number;
  name: string;
  group: "Preschool" | "Kindergarten" | "Toddler";
  teacher: string;
  date: string;
  plan: string;
};

// 📦 What the context provides
type BirthdayContextType = {
  birthdays: Birthday[];
  addBirthday: (birthday: Birthday) => void;
  deleteBirthday: (id: number) => void;
};

// 🧠 Default values (only used to prevent TS error)
export const BirthdayContext = createContext<BirthdayContextType>({
  birthdays: [],
  addBirthday: () => {},
  deleteBirthday: () => {},
});

// 🌐 Provider component wraps the app and shares state
export function BirthdayProvider({ children }: { children: ReactNode }) {
  const [birthdays, setBirthdays] = useState<Birthday[]>(sampleBirthdays);

  // ➕ Add a new birthday
  const addBirthday = (birthday: Birthday) => {
    setBirthdays((prev) => [...prev, birthday]);
  };

  // 🗑️ Delete a birthday by ID
  const deleteBirthday = (id: number) => {
    setBirthdays((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <BirthdayContext.Provider
      value={{ birthdays, addBirthday, deleteBirthday }}
    >
      {children}
    </BirthdayContext.Provider>
  );
}
