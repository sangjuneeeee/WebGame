import * as React from "react";

interface AppProvederProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProvederProps) => {
  return <>{children}</>;
};
