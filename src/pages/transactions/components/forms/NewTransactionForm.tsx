import React, { ReactNode } from "react";
import {
  Button,
  Input,
  Label,
} from "@/components/ui";
import { ContentCopy } from "@nine-thirty-five/material-symbols-react/outlined";

interface TransactionFormProps {
  className?: string;
}

export const TransactionForm = ({ className }: TransactionFormProps) => {

  return (
    <div className="flex items-center space-x-2">
      <div className="grid flex-1 gap-2">
        <Label htmlFor="link" className="sr-only">
          Link
        </Label>
        <Input
          id="link"
          defaultValue="https://ui.shadcn.com/docs/installation"
          readOnly
        />
      </div>
      <Button type="submit" size="sm" className="px-3">
        <span className="sr-only">Copiar</span>
        <ContentCopy className="h-4 w-4" />
      </Button>
    </div>
  );
};