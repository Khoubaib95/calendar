// Type
import { dayPropsType } from "./types";

// Style
import "./index.scss";

// Component
function Day({ day, selected, disabled, hasEvent, onClick }: dayPropsType) {
  /* ******************************** RENDERING ******************************* */
  return (
    <div
      onClick={onClick}
      className={`${selected ? "selected" : ""} 
      ${disabled ? "disabled" : ""}
      ${hasEvent ? "has-event" : ""}
      day `}
    >
      {day}
    </div>
  );
}

export default Day;
