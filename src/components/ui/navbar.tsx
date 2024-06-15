import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface INavbarItem {
  to?: string;
  label: string;
  icon?: ReactNode;
  badge?: string;
}

interface NavbarItemProps {
  item: INavbarItem;
  selected?: boolean;
  direction?: "row" | "col";
  onClick?: () => void;
}

const NavbarItem = ({ item, direction = "col", selected = false, onClick }: NavbarItemProps) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/20",
        selected && "bg-muted",
        direction === "col" && "w-full"
      )}
      to={item.to || "#"}
      onClick={onClick}
    >
      {item.icon}
      {item.label}
      {item.badge && (
        <Badge className="ml-auto flex h-6 w-6 items-center justify-center rounded-full">
          {item.badge}
        </Badge>
      )}
    </Link>
  );
};

interface NavbarProps {
  className?: string;
  direction?: "row" | "col";
  align?: "start" | "center" | "end";
  items?: INavbarItem[];
}

export const Navbar = ({ className, direction = "col", align = "start", items }: NavbarProps) => {
  const [selectedItem, setSelectedItem] = useState<number | undefined>(undefined);

  const handleClick = (id: number) => {
    setSelectedItem(id);
  };

  return (
    <nav className={cn(
      direction === "col" ? "flex-col" : "flex-row",
      "justify-" + align,
      "flex items-center p-2 gap-1 text-sm font-medium lg:px-4",
      className,
    )}>
      {items && items.length > 0 && items.map((item, index) => (
        <NavbarItem
          key={index}
          item={item}
          direction={direction}
          selected={selectedItem === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </nav>
  );
};

export default Navbar;