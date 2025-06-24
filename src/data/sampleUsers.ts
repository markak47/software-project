export type Role = "teacher" | "parent" | "manager";

export type User = {
  id: number;
  username: string;
  password: string;
  role: Role;
  assignedChildName?: string;
};

export const sampleUsers: User[] = [
  {
    id: 1,
    username: "anna",
    password: "teacher123",
    role: "teacher",
  },
  {
    id: 2,
    username: "tom",
    password: "teacher123",
    role: "teacher",
  },

  {
    id: 3,
    username: "smith",
    password: "parent123",
    role: "parent",
    assignedChildName: "noah",
  },
  {
    id: 4,
    username: "potter",
    password: "parent123",
    role: "parent",
    assignedChildName: "Lina",
  },
  {
    id: 5,
    username: "grimes",
    password: "parent123",
    role: "parent",
    assignedChildName: "mila",
  },
  {
    id: 6,
    username: "larry",
    password: "parent123",
    role: "parent",
    assignedChildName: "Elias",
  },

  // 🧑‍💼 Manager
  {
    id: 7,
    username: "manager",
    password: "admin123",
    role: "manager",
  },
];
