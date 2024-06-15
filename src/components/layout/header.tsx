import React from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Typography,
} from "@/components/ui";
import { ProfileMenu } from "@/components/dropdown-menus";
import { useAppStore } from "@/lib/context";
import { getInitials } from "@/lib/functions";
import { Link } from "react-router-dom";
import { routes } from '@/lib/constants/routes';
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const user = useAppStore((state) => state.user);
  return (
    <header className={cn(
      "flex flex-row justify-between items-center border-b bg-card z-10 px-6",
      className
    )} >
      <Link to={routes.home}>
        <Typography variant="h4">Money Administrator</Typography>
      </Link>
      {!user ? (
        <div>Iniciar sesion</div>
      ) : (
        <div className="flex flex-row gap-2 items-center">
          <Typography variant="span">{user.displayName}</Typography>
          <ProfileMenu>
            <Avatar>
              {user.image ? (
                <AvatarImage src={user.image} />
              ) : (
                <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
              )}
            </Avatar>
          </ProfileMenu>
        </div>
      )}
    </header>
  );
};

export default Header;
