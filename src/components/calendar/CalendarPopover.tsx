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

const dayClasses: Record<number, string> = {
  0: "bg-winc-red-400 text-white",
  1: "bg-winc-yellow-200 text-winc-blue-500",
  2: "bg-winc-orange-100 text-white",
  3: "bg-winc-yellow-200 text-winc-blue-500",
  4: "bg-winc-orange-100 text-white",
  5: "bg-winc-yellow-200 text-winc-blue-500",
  6: "bg-winc-red-400 text-white",
};

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

  const dayClass = dayClasses[date.getDay()] ?? "bg-white";

  return (
    <Dialog>
      <DialogTrigger
        className={`flex w-full cursor-pointer justify-center py-1 text-left font-bold hover:opacity-75 ${dayClass}`}
      >
        <span className="pr-1 text-right text-xs">
          {hasStartTime &&
            eventStartDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              timeZone: "America/Los_Angeles",
            })}
        </span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap px-1 pl-1 text-xs">
          {title}
        </span>
      </DialogTrigger>
      <DialogOverlay className="bg-gray-400/60">
        <DialogContent className="z-50 border-2 border-black bg-winc-yellow-200 p-0 text-winc-blue-500 shadow-md">
          <DialogTitle>
            <div className="flex items-center justify-between px-4 pt-2 text-xl font-semibold">
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