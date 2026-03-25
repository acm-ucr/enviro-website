import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogTitle,
} from "@/components/calendar/dialog";
interface CalendarEventPopoverProps {
  startDate: {
    dateTime?: string;
    date?: string;
  };
  endDate?: {
    dateTime?: string;
    date?: string;
  };
  title: string;
  date: Date;
  location?: string;
  description?: string;
}


const CalendarEventPopover = ({
  startDate,
  endDate,
  title,
  date,
  location,
  description,
}: CalendarEventPopoverProps) => {
  let eventStartDate = new Date();
  let eventEndDate = new Date();
  let hasStartTime = false;
  let hasEndTime = false;

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasStartTime = true;
  } else if (startDate.date) {
    eventStartDate = new Date(startDate.date);
  }

  if (endDate?.dateTime) {
    eventEndDate = new Date(endDate.dateTime);
    hasEndTime = true;
  } else if (endDate?.date) {
    eventEndDate = new Date(endDate.date);
  }

  let timeRangeDisplay = "";
  if (hasStartTime) {
    timeRangeDisplay = eventStartDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
    if (hasEndTime) {
      timeRangeDisplay +=
        " - " +
        eventEndDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/Los_Angeles",
        });
    }
  }

  return (
    <Dialog>
      <DialogTrigger
        className={`flex w-full cursor-pointer border border-enviro-green-200 bg-enviro-blue-100 text-enviro-gray-100 items-center py-1 text-left font-enviro-open-sans hover:opacity-75`}
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap px-1 text-xs">
          {title}
        </span>
        <span className="pr-1 text-right text-xs">
          {hasStartTime &&
            eventStartDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              timeZone: "America/Los_Angeles",
            })}
        </span>
        
      </DialogTrigger>
      <DialogOverlay className="bg-enviro-gray-100/50">
        <DialogContent className="z-50 border-2 border-black bg-enviro-blue-100 p-0 text-enviro-green-300 shadow-md">
          <DialogTitle>
            <div className="flex items-center justify-between px-4 pt-2 text-xl">
              <p className="truncate">{title}</p>
            </div>
          </DialogTitle>

          <div className="rounded-b-xl bg-white px-4 py-3 text-lg">
            <div className="flex">
              <p className="whitespace-nowrap pr-2">
                {date.toLocaleString("default", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <div>{hasStartTime && <p>{timeRangeDisplay}</p>}</div>
            </div>
            <p>{location}</p>
            {description && <p className="pb-4 pt-4">{description}</p>}
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default CalendarEventPopover;