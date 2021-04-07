import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const SlideButton = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="Accept Custom Orders"
      />
    </FormGroup>
  );
};

export default SlideButton;
