// Style
import "./index.scss";

// Component
function DayOfWeek({ day }: { day: string }) {
  /* ******************************** RENDERING ******************************* */
  return <div className={`dayOfWeek`}>{day}</div>;
}

export default DayOfWeek;
