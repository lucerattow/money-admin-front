import { type ClassValue, clsx } from "clsx";
import { cloneElement, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const applyStylesToElement = (element: ReactElement | undefined, classNames: string) => {
  if (!element) return element;

  return cloneElement(element, {
    className: cn(classNames, element.props.className)
  });
};