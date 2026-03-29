"use client";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Spinner } from "../ui/spinner";
import { useState } from "react";
type PropsItems = {
  open?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  Header?: string;
  descriptions?: string;
};

const DeleteConfirm = ({
  open = false,
  onClose = () => {},
  onSubmit = () => {},
  Header = "Delete Confirm",
  descriptions = "Are you sure you want to delete? This action cannot be reversed.",
}: PropsItems) => {
  const [loading, setLoading] = useState(false);
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-4">
        <DialogTitle className="text-black items-center text-xl font-bold">
          {Header}
        </DialogTitle>
        <p className="text-sm text-gray-500">{descriptions}</p>
        <div className="flex flex-row gap-2 justify-end">
          <Button variant={"outline"} onClick={onClose}>
            Cancle
          </Button>
          <Button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              onSubmit();
            }}
          >
            {loading ? <Spinner /> : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirm;
