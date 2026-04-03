import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { toast } from "sonner";
import { Clock2Icon } from "lucide-react";
import { Button } from "./ui/button";
interface homeItems {
  date: Date | undefined;
  time: string;
}
const DatePicker = ({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (payload: { current: Date; selected: Date }) => void;
}) => {
  const getDefaultTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 2);
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const [data, setData] = useState<homeItems>({
    date: new Date(),
    time: getDefaultTime(),
  });

  const now = new Date();
  const minFuture = new Date(now.getTime() + 2 * 60 * 60 * 1000);
  const isToday = data?.date?.toDateString() === now.toDateString();
  const minTime = isToday ? minFuture.toTimeString().slice(0, 5) : "00:00";

  const combineDateTime = (date: Date, time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const newDate = new Date(date);
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    newDate.setSeconds(0);

    return newDate;
  };
  const isValidSelection = (selected: Date) => {
    const now = new Date();
    const diffMs = selected.getTime() - now.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    return diffHours >= 2;
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-0 w-[90%] max-w-md z-50 flex flex-col gap-1">
        <DialogTitle className="p-3 font-semibold text-lg">
          Select Date & Time
        </DialogTitle>

        <Card size="sm" className="w-full">
          <CardContent className="w-full">
            <Calendar
              mode="single"
              selected={data?.date}
              onSelect={(selectedDate) =>
                setData((prev) => ({
                  ...prev,
                  date: selectedDate,
                }))
              }
              disabled={{ before: now }}
              className="p-0 w-[90%] mx-auto "
            />
          </CardContent>

          <CardFooter className="bg-card w-full">
            <FieldGroup className="w-full flex flex-col gap-2">
              <Field className="w-full flex flex-col gap-1">
                <FieldLabel>Start Time</FieldLabel>

                <InputGroup className="w-full">
                  <InputGroupInput
                    type="time"
                    value={data.time}
                    min={minTime}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        time: e.target.value,
                      }))
                    }
                  />
                  <InputGroupAddon>
                    <Clock2Icon />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Button
                className="w-full"
                onClick={() => {
                  if (!data.date) return;
                  const currentDateTime = new Date();
                  const selectedDateTime = combineDateTime(
                    data.date,
                    data.time,
                  );
                  if (selectedDateTime <= currentDateTime) {
                    toast.warning("Please select a future time", {
                      position: "top-right",
                    });
                    return;
                  }
                  if (!isValidSelection(selectedDateTime)) {
                    toast.warning(
                      "Please select time at least 2 hours from now",
                      { position: "top-right" },
                    );
                    return;
                  }
                  onSubmit({
                    current: currentDateTime,
                    selected: selectedDateTime,
                  });

                  onClose();
                }}
              >
                Submit
              </Button>
            </FieldGroup>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
export default DatePicker;
