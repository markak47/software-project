import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

const activities = [
  {
    title: "Language Development",
    subtitle: "All Groups",
    date: "Daily",
    iconType: "school",
    content:
      "Integrated language support as part of daily routine, supported by 'Kita-Plus' program.",
  },
  {
    title: "STEM & Exploration",
    subtitle: "Pre-school Engineers",
    date: "Weekly",
    iconType: "school",
    content:
      "In cooperation with TU Harburg, kids explore science, math, and technology through experiments.",
  },
  {
    title: "Swimming Lessons",
    subtitle: "Ages 4–6",
    date: "Biweekly",
    iconType: "star",
    content:
      "Water play and swimming in our own teaching pool, supported by 'Ab ins Wasser – aber sicher!'.",
  },
  {
    title: "Creative Workshops",
    subtitle: "All Ages",
    date: "Throughout the Week",
    iconType: "work",
    content: "Painting, crafts, and hands-on projects in our creative atelier.",
  },
  {
    title: "Nature & Sustainability",
    subtitle: "KITA21 Program",
    date: "Year-Round",
    iconType: "school",
    content:
      "Sustainability education through play and outdoor exploration, awarded with the KITA21 plaque.",
  },
  {
    title: "Kita Travel",
    subtitle: "Langballig Seaside Farm",
    date: "Annually",
    iconType: "star",
    content:
      "Multi-day trips to the seaside farm for nature experience and independence building.",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "work":
      return <WorkIcon />;
    case "school":
      return <SchoolIcon />;
    case "star":
      return <StarIcon />;
    default:
      return <WorkIcon />;
  }
};

const DaycareTimeline: React.FC = () => {
  return (
    <VerticalTimeline>
      {activities.map((activity, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--education"
          date={activity.date}
          iconStyle={{
            background:
              "linear-gradient(to bottom,rgba(186, 141, 236, 1),rgb(217, 130, 7))",
            color: "#f5f5f5",
          }}
          icon={getIcon(activity.iconType)}
        >
          <h3 className="vertical-timeline-element-title">{activity.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {activity.subtitle}
          </h4>
          <p>{activity.content}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default DaycareTimeline;
