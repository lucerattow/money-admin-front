import { ReactNode } from "react";
import Header from "./header";
import { AppContainer } from "@/components/containers";

interface LayoutProps {
  loggedIn: boolean;
  children: ReactNode;
}

export const Layout = ({ loggedIn, children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header className="shrink-0 h-header" />
      <AppContainer className="grow w-screen h-container" loggedIn={loggedIn}>
        {children}
      </AppContainer>
    </div>
  );
};