import React from "react";
import { ThemeProvider } from "react-bootstrap";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => (
  <ThemeProvider>{children}</ThemeProvider>
);
