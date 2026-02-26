import { Gantt } from "@svar-ui/react-gantt";
import "@svar-ui/react-gantt/all.css";  
export const Month_Attendence=()=>{
    const tasks = [
  {
    id: 1,
    text: "Project Planning",
    start: new Date(2024, 0, 1),
    end: new Date(2024, 0, 10),
    progress: 100,
    type: "summary",
    open: true,
  },
  {
    id: 2,
    text: "Requirements Gathering",
    start: new Date(2024, 0, 1),
    end: new Date(2024, 0, 5),
    progress: 100,
    parent: 1,
  },
  // ... more tasks
];
const links = [
  { id: 1, source: 2, target: 3, type: "e2s" },
];

const scales = [
  { unit: "month", step: 1, format: "%M %Y" },
  { unit: "week", step: 1, format: "Week %w" },
];

return(
    <>
     <div style={{ height: "600px", width: "100%" }}>
      <Gantt tasks={tasks} links={links} scales={scales} />
    </div>
    </>
)
}