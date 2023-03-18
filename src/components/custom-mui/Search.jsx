import React from "react";
import { alpha, styled } from "@mui/material/styles";
import { SearchOutlined } from "@mui/icons-material";
import { InputBase } from "@mui/material";

//Custom mui component for the Div that will be wrapping the searchBox
const SearchDiv = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius + 10,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

//Custom mui component for the Div that will be wrapping the searchInput and icon
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  right: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

//Custom mui component for the Div that will be wrapping the searchInput
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.3, 1, 1.3, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "34ch",
    },
  },
}));

function Search({ setSearch }) {
  const handleChange = (ev) => {
    setSearch(ev.target.value);
  };
  return (
    <SearchDiv>
      <SearchIconWrapper>
        <SearchOutlined fontSize="large" />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={handleChange}
        placeholder={"Type your search here"}
        aria-label={"search-box"}
      />
    </SearchDiv>
  );
}

export default Search;
