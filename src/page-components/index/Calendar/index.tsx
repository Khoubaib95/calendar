import { useState } from "react";
import DayOfWeek from "../../../shared/UIKIT/DayOfWeek";
import Day from "../../../shared/UIKIT/Day";
import Month from "../../../shared/UIKIT/Month";
import EventsModal from "../../../shared/UIKIT/EventsModal";
import { useMonthDays } from "../../../utils/hooks/month";
import { getMonth, daysList } from "../../../utils/Const";

// Style
import "./index.scss";

// Component
function Calendar() {
  /* ******************************** HOOKS ******************************* */
  const { currentMonthDays, lastMonthDays, nextMonthDays } = useMonthDays();
  const [activeDate, setActiveDate] = useState<any>(currentMonthDays);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [event, setEvent] = useState<string>("");
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(1);
  const date = new Date();
  const todayDate = date.getDate();
  // Add Event
  const addEvent = (index: any) => {
    if (isEditing) {
      activeDate[selectedDateIndex][index] = event;
      setIsEditing(false);
      setEvent("");
    } else if (event.length > 0) {
      activeDate[selectedDateIndex].push(event);
      setActiveDate({ ...activeDate });
      setEvent("");
    }
  };
  // Update Event
  const updateEvent = (index: number) => {
    setEvent(activeDate[selectedDateIndex][index]);
  };
  // Remove Event
  const removeEvent = (index: number) => {
    activeDate[selectedDateIndex].splice(index, 1);
    setActiveDate({ ...activeDate });
  };
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="calendar">
      <h2>
        {getMonth(date.getMonth())} {date.getFullYear()}
      </h2>
      <Month>
        {daysList.map((day) => (
          <DayOfWeek key={day} day={day} />
        ))}
      </Month>
      <Month>
        {lastMonthDays.map((day: number) => (
          <Day day={day} disabled key={`last-${day}`} />
        ))}
        {Object.keys(currentMonthDays).map((day: string) => (
          <Day
            onClick={() => {
              setSelectedDateIndex(+day);
              setIsOpen(true);
            }}
            selected={todayDate === +day}
            hasEvent={activeDate[day].length > 0}
            day={+day}
            key={`current-${day}`}
          />
        ))}
        {nextMonthDays.map((day: number) => (
          <Day day={day} disabled key={`next-${day}`} />
        ))}
      </Month>
      <EventsModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        addEvent={addEvent}
        removeEvent={removeEvent}
        updateEvent={updateEvent}
        activeDate={activeDate}
        event={event}
        setEvent={setEvent}
        selectedDateIndex={selectedDateIndex}
        month={getMonth(date.getMonth())}
      />
    </div>
  );
}

export default Calendar;
