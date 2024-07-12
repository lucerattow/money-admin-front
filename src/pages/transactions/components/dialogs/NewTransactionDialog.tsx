import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

interface NewTransactionDialogProps {
  className?: string;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
}

export const NewTransactionDialog = ({ className, trigger, children }: NewTransactionDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Nueva Transaccion</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};