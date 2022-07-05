import * as React from "react";

import { TextField, TextFieldProps, styled } from "@mui/material";

const CustomTextFieldRoot = styled(TextField)<TextFieldProps>(({ theme }) => ({
  "& .MuiInput-root": {
    marginBottom: "1rem",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: theme.palette.text.secondary,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.text.secondary,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.text.secondary,
  },
}));

const CustomTextField: React.FunctionComponent<TextFieldProps> = (props) => {
  const { children, ...otherProps } = props;
  return <CustomTextFieldRoot {...otherProps} />;
};

export default CustomTextField;
