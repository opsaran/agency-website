import { BoxProps, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import CustomTextField from "./customTextField";
import { CTAButtonSmall } from "../Items/ctaButton";
import SendIcon from "@mui/icons-material/Send";

export default function ContactForm(props: BoxProps) {
  const { children, ...otherProps } = props;
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    onSubmit: (values) => {
      fetch("https://formspree.io/f/xwkyzznd", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setMessage("Form Submitted! We will reply within 24 hrs");
            setSubmitted(true);
          } else {
            setMessage('"Oops! There was a problem submitting your form"');
            setSubmitted(false);
          }
        })
        .catch((error) => {
          setMessage('"Oops! There was a problem submitting your form"');
          setSubmitted(false);
        });
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("must be a valid email")
        .required("Email is required"),
      phoneNumber: yup.mixed(),
      message: yup.string().trim().required("message is required"),
    }),
  });

  return (
    <Box
      sx={{
        flexDirection: "column",
        padding: "3rem",
        background: `linear-gradient(
          45deg,
          #ffffff1a,
          #ffffff66
        )`,
        boxShadow:
          "0px 0px 20px 0px rgba(233, 78, 238, 0.19), 0px 0px 6px 0px rgba(233, 78, 238, 0.23)", //0px 0px 20px 0px rgba(233, 78, 238, 0.19), 0px 0px 6px 0px rgba(233, 78, 238, 0.23)
      }}
      {...otherProps}
    >
      <Typography
        variant="h6"
        hidden={!submitted}
        color="success.main"
        gutterBottom
      >
        {message}
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CustomTextField
          error={formik.touched.name && formik.errors.name ? true : false}
          label="Name"
          name="name"
          type={"text"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          variant="standard"
          helperText={
            formik.touched.name && formik.errors.name && formik.errors.name
          }
        ></CustomTextField>
        <CustomTextField
          error={formik.touched.email && formik.errors.email ? true : false}
          label="Email"
          name="email"
          type={"email"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          variant="standard"
          helperText={
            formik.touched.email && formik.errors.email && formik.errors.email
          }
        ></CustomTextField>
        <CustomTextField
          error={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? true
              : false
          }
          label="Phone Number"
          name="phoneNumber"
          type={"tel"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          variant="standard"
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        ></CustomTextField>
        <CustomTextField
          error={formik.touched.message && formik.errors.message ? true : false}
          label="Message"
          name="message"
          type={"text"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          variant="standard"
          multiline={true}
          helperText={
            formik.touched.message &&
            formik.errors.message &&
            formik.errors.message
          }
        ></CustomTextField>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <CTAButtonSmall type="submit" endIcon={<SendIcon />}>
            Submit
          </CTAButtonSmall>
        </div>
      </form>
    </Box>
  );
}
