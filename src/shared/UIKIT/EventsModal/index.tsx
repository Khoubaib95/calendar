import { useState } from "react";
import Modal from "../Modal";

// Type
import { eventsModalPropType } from "./types";

//Style
import "./index.scss";

//Assets
import EDIT from "../../../assets/icons/edit.svg";
import DELETE from "../../../assets/icons/delete.svg";
// Component
function EventsModal({
  isOpen,
  isEditing,
  event,
  activeDate,
  selectedDateIndex,
  month,
  setIsOpen,
  setIsEditing,
  addEvent,
  removeEvent,
  updateEvent,
  setEvent,
}: eventsModalPropType) {
  /* ******************************** HOOKS ******************************* */
  const [eventIndex, setEventIndex] = useState<number | null>(null);

  /* ******************************** RENDERING ******************************* */
  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <h2>
        {selectedDateIndex} {month} 2022
      </h2>

      {activeDate[selectedDateIndex].length > 0 ? (
        <ul>
          {activeDate[selectedDateIndex].map((event: any, index: number) => (
            <li className="event-list" key={index}>
              {event}
              <div className="button-group">
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setEventIndex(index);
                    updateEvent(index);
                  }}
                  className="btn btn-update"
                >
                  <img src={EDIT} style={{ width: "20px" }} alt="edit" />
                </button>
                <button
                  onClick={() => {
                    removeEvent(index);
                  }}
                  className="btn btn-remove"
                >
                  <img src={DELETE} style={{ width: "20px" }} alt="delete" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events to show yet!</p>
      )}

      <div className="add-event">
        <textarea
          onChange={(e) => {
            setEvent(e.target.value);
          }}
          value={event}
          name="events"
          cols={30}
          rows={5}
          placeholder="Add Events"
        />
        <button
          className={`${event.length > 0 ? "" : "disabled"}`}
          disabled={event.length < 0}
          onClick={() => {
            addEvent(eventIndex);
          }}
        >{`${isEditing ? "Update Event" : "Add new Event"}`}</button>
      </div>
    </Modal>
  );
}

export default EventsModal;
