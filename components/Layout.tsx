import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <Box>
    <Header />
    <Box m={2}>{props.children}</Box>
  </Box>
);

export default Layout;
