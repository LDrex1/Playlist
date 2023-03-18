import React from "react";
import CustomButton from "../../components/custom-mui/CustomButton";

function Filter({ filters, handleClick, activeFilter }) {
  return (
    <>
      {filters?.map((filter) => (
        <CustomButton
          sx={{
            backgroundColor: filter === activeFilter && "#0d47a1",
            border: filter === activeFilter && "1px solid",
          }}
          key={filter}
          children={filter}
          handleClick={handleClick}
        />
      ))}
    </>
  );
}

export default Filter;
