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
    favFood: "Pizza",
    allergies: "None",
    picture: kid1,
    date: "2019-07-10",
    plan: "Cupcakes and drawings",
  },
  {
    id: 2,
    name: "Noah",
    group: "Preschool",
    teacher: "Ms. Anna",
    favFood: "Fries",
    allergies: "Peanuts",
    picture: kid2,
    date: "2019-12-02",
    plan: "Puppet show",
  },
  {
    id: 3,
    name: "steve",
    group: "Kindergarten",
    teacher: "Mr. Tom",
    favFood: "Spaghetti",
    allergies: "Lactose",
    picture: kid3,
    date: "2018-09-15",
    plan: "Magic tricks and popcorn",
  },
  {
    id: 4,
    name: "Elias",
    group: "Kindergarten",
    teacher: "Mr. Tom",
    favFood: "Chicken nuggets",
    allergies: "Gluten",
    picture: kid4,
    date: "2018-11-25",
    plan: "Balloons and coloring books",
  },
];
