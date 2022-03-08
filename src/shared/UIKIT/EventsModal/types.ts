export type eventsModalPropType = {
  isOpen: boolean;
  isEditing: boolean;
  event: string;
  activeDate: any;
  setIsOpen: any;
  setIsEditing: any;
  addEvent: any;
  selectedDateIndex: any;
  month: string;
  removeEvent: (index: number) => any;
  updateEvent: (index: number) => any;
  setEvent: (e: string) => any;
};
