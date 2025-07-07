// src/data/sampleBirthday.ts
import type { Birthday } from "../context/BirthdayContext";
import kid1 from "../assets/kid1.png";
import kid2 from "../assets/kid2.png";
import kid3 from "../assets/kid3.png";
import kid4 from "../assets/kid4.png";

export const sampleBirthdays: Birthday[] = [
  {
    id: 1,
    name: "Lina",
    group: "Preschool",
    teacher: "Ms. Anna",
    date: "2019-07-08",
    plan: "Cupcakes and drawings",
    allergies: "None",
    message: "Loves unicorns 🦄",
    picture: kid1,
  },
  {
    id: 2,
    name: "Noah",
    group: "Preschool",
    teacher: "Ms. Anna",
    date: "2019-12-02",
    plan: "Puppet show",
    allergies: "Peanuts",
    message: "Enjoys music and singing 🎶",
    picture: kid2,
  },
  {
    id: 3,
    name: "Steve",
    group: "Kindergarten",
    teacher: "Mr. Tom",
    date: "2018-09-15",
    plan: "Magic tricks and popcorn",
    allergies: "Lactose",
    message: "Big fan of superheroes 🦸",
    picture: kid3,
  },
  {
    id: 4,
    name: "Elias",
    group: "Kindergarten",
    teacher: "Mr. Tom",
    date: "2018-11-25",
    plan: "Balloons and coloring books",
    allergies: "Gluten",
    message: "Loves puzzles and games 🧩",
    picture: kid4,
  },
];
