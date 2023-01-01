import React, { useState } from "react";
import { AppBar, Tabs, Toolbar } from "@mui/material";
import LinkTab from "./LinkTab";
import Search from "../custom-mui/Search";
import AccountInfo from "./AccountInfo";
import { Box } from "@mui/system";

/**
 *
 * @returns navigation content with search button that's at the top of the page
 */
function TopNavigation() {
  const lists = [
    {
      name: "music",
      href: "#",
    },

    {
      name: "live",
      href: "#",
    },
    {
      name: "podcast",
      href: "#",
    },
  ];

  //handling the change in the active top nav bar
  const [value, setValue] = useState(0);

  /**
   *
   * @param {*} ev
   * @param {*} tabValue takes in the index of the corresponding tab
   */
  const handleTabs = (ev, tabValue) => {
    setValue(() => tabValue);
  };
  return (
    <>
      <AppBar position="static" sx={{ background: "none", pt: 5 }}>
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleTabs}
            indicatorColor={"secondary"}
            textColor={"inherit"}
            aria-label={"Music session type navigation list"}
          >
            {lists.map(({ name, href }) => (
              <LinkTab key={name} label={name} href={href} />
            ))}
          </Tabs>
          <Box sx={{ flexGrow: 1 }} />
          <Search />
          <Box sx={{ flexGrow: 1 }} />

          <AccountInfo />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default TopNavigation;
