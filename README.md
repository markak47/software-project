# 🎓 TUHH Software Engineering Project – Daycare Management System

Hello, and welcome to our Software Engineering project 👋  
This project was developed as part of our coursework at **Hamburg University of Technology (TUHH)** in collaboration with a **local kindergarten in Harburg**.

Our goal was to build a **practical, real-world solution** addressing two key challenges faced by the daycare:
  for the logins use
- Teacher: username: tom/anna , password:teacher123
- manager: manager, admin123
- parent: larry/smith/potter/grimes. password: parent123
---

## 💡 Problem Statement

### 1️⃣ Duty Planning & Internal Communication  
Daycare staff and management lacked a clear, efficient system to:
- Plan duty schedules
- Submit and manage leave or sick reports
- Handle vacation requests
- Enable responsive communication between teachers and managers

### 2️⃣ Birthday Celebration Screen for Kids  
Young children (many of whom cannot read yet) needed a way to:
- **Visualize birthdays** of their classmates
- See engaging, intuitive information on a digital screen

---

## 🌐 Live Demo  
While this is a **frontend-only prototype**, it simulates a fully functioning system with mock data, routing, and context management for multiple user roles.

---

## 👩‍🏫 Teacher Features

- **🗓️ My Schedule**: View upcoming duty plans for the next 2 months
- **📄 Status Report**: Submit daily status (e.g., sick, late), edit, and review past reports
- **🏖️ Vacation Requests**: Submit and track leave applications
- **🎉 Birthday Planner**: Add, edit, and view birthdays for the class
- **🎈 Birthday Screen**: A public-facing birthday display screen suitable for young children

---

## 🧑‍💼 Manager Features

- **📋 Duty Planner**: Assign and manage shifts across employees
- **👥 Manage Employees**: View all teachers and their current statuses
- **📊 Vacation & Report Requests**: Review, approve, or reject submitted reports
- **🤖 AI Assistant**: Integrated assistant to guide the manager through all tasks, boosting efficiency and usability

---

## 👨‍👩‍👧‍👦 Parent Features

- View assigned child’s birthdays
- Add and edit birthday details (preferences, wishes)
- Planned expansion for direct communication with staff

---

## 🧠 Technical Stack

- **React + TypeScript + Vite**
- **React Router DOM** for routing
- **React Context API** for global state (Auth, User, Vacation, Status, etc.)
- **Custom CSS and modular components**
- Mock data in `sampleUsers.ts`, `sampleBirthdays.ts`, etc.

---

## 📁 Project Structure

