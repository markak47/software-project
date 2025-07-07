export type LegendItem = {
    code: string;
    label: string;
    description: string;
    color: string;
  };
  
  export const dutyPlanLegend: LegendItem[] = [
    { code: "x", label: "Present", description: "Anwesend in Einrichtung", color: "#e0f2fe" },
    { code: "HO", label: "Home Office", description: "Homeoffice", color: "#fef9c3" },
    { code: "AH", label: "External Work", description: "Außerhaus / Anwesend abweichend der Einrichtung", color: "#fee2e2" },
    { code: "K", label: "Sick", description: "Krankentag", color: "#fca5a5" },
    { code: "KoAU", label: "Sick (no note)", description: "Krankentage ohne AU", color: "#fdba74" },
    { code: "KK", label: "Child Sick", description: "Kind krank", color: "#fed7aa" },
    { code: "W", label: "Reintegration", description: "Wiedereingliederung", color: "#d1d5db" },
    { code: "U", label: "Vacation", description: "Urlaub", color: "#a5b4fc" },
    { code: "UU", label: "Unpaid Vacation", description: "unbezahlter Urlaub", color: "#c4b5fd" },
    { code: "R", label: "Regeneration Day", description: "Regenerationstag", color: "#d8b4fe" },
    { code: "RU", label: "Rest Vacation", description: "Resturlaub", color: "#e9d5ff" },
    { code: "MF", label: "Overtime Off", description: "Mehrstundenfrei/-ausgleich", color: "#f0abfc" },
    { code: "GR", label: "Group Trip", description: "Gruppenreise", color: "#f9a8d4" },
    { code: "FB", label: "Training", description: "Fortbildung / Schulung", color: "#a7f3d0" },
    { code: "BV", label: "Employment Ban", description: "Beschäftigungsverbot", color: "#bbf7d0" },
    { code: "MS", label: "Maternity Leave", description: "Mutterschutz", color: "#dcfce7" },
    { code: "EZ", label: "Parental Leave", description: "Elternzeit", color: "#f0fdf4" },
  ];