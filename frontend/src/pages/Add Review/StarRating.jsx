import React, { useState } from "react";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { colors } from "@mui/material";

function StarRating(props) {
  const { setRating, name } = props;

  const [starvalue, setStarValue] = useState(0);

  const changeHandler = (newValue) => {
    const data = { name: name, value: newValue };
    setRating(data.value);
  };

  const my = {
    color: "#FF385C",
  };
  return (
    <>
      <div className="star--rating">
        <Stack spacing={1}>
          <Rating
            name="half-rating"
            value={starvalue}
            precision={0.5}
            onChange={(event, newValue) => {
              console.log("newValue", newValue);
              setStarValue(newValue);
              changeHandler(newValue);
            }}
            style={my}
          />
        </Stack>
      </div>
    </>
  );
}

export default StarRating;
