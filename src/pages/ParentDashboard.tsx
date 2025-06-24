// src/pages/ParentDashboard.tsx
import React from "react";

function ParentDashboard() {
  return (
    <div className="min-h-screen p-6 bg-blue-50">
      <h1 className="text-3xl font-bold text-center mb-4">
        👨‍👩‍👧‍👦 Parent Dashboard
      </h1>
      <p className="text-center">
        Welcome! Here you can view your child's birthday plans and preferences.
      </p>
      {/* Future: Add birthday details for assignedChildName */}
    </div>
  );
}

export default ParentDashboard;
