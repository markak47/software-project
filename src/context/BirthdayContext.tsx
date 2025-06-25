// BirthdayContext.tsx

import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { sampleBirthdays } from "../data/sampleBirthdays";

export type Birthday = {
  id: number;
  name: string;
  group: "Preschool" | "Kindergarten" | "Toddler";
  teacher: string;
  date: string;
  plan: string;
  favFood?: string;
  allergies?: string;
  message?: string;
  picture?: string;
};

type BirthdayContextType = {
  birthdays: Birthday[];
  addBirthday: (birthday: Birthday) => void;
  deleteBirthday: (id: number) => void;
  updateBirthday: (updated: Birthday) => void;
};

export const BirthdayContext = createContext<BirthdayContextType>({
  birthdays: [],
  addBirthday: () => {},
  deleteBirthday: () => {},
  updateBirthday: () => {}, // <- required!
});

export function BirthdayProvider({ children }: { children: ReactNode }) {
  const [birthdays, setBirthdays] = useState<Birthday[]>(sampleBirthdays);

  const addBirthday = (birthday: Birthday) => {
    setBirthdays((prev) => [...prev, birthday]);
  };

  const deleteBirthday = (id: number) => {
    setBirthdays((prev) => prev.filter((b) => b.id !== id));
  };

  const updateBirthday = (updated: Birthday) => {
    setBirthdays((prev) =>
      prev.map((b) => (b.id === updated.id ? updated : b))
    );
  };

  return (
    <BirthdayContext.Provider
      value={{ birthdays, addBirthday, deleteBirthday, updateBirthday }}
    >
      {children}
    </BirthdayContext.Provider>
  );
}
