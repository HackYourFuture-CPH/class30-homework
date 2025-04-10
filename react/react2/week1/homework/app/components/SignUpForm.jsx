"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box } from "@mui/material";
import { useRef, useState } from "react";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
  });

  const router = useRouter();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const { firstName, lastName, email, phoneNumber } = formData;

    if (!firstName || !lastName || !email || !phoneNumber) {
      setErrors({
        firstName: !firstName,
        lastName: !lastName,
        email: !email,
        phoneNumber: !phoneNumber,
      });
      return;
    }

    isValid = Object.values(errors).every((value) => value === false);

    if (isValid) {
      alert("Form submitted successfully!");
      router.push("/Home");
    } else {
      alert("Please fill in all fields correctly.");
      focusOnError(Object.keys(errors).find((key) => errors[key]));
    }
  };

  const focusOnError = (field) => {
    switch (field) {
      case "firstName":
        firstNameRef.current.focus();
        break;
      case "lastName":
        lastNameRef.current.focus();
        break;
      case "email":
        emailRef.current.focus();
        break;
      case "phoneNumber":
        phoneNumberRef.current.focus();
        break;
      default:
        break;
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, margin: "auto", padding: 2 }}
    >
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        error={errors.firstName}
        helperText={errors.firstName && "First Name is required"}
        inputRef={firstNameRef}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        error={errors.lastName}
        helperText={errors.lastName && "Last Name is required"}
        inputRef={lastNameRef}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        error={errors.email}
        helperText={errors.email && "Email is required"}
        inputRef={emailRef}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        fullWidth
        error={errors.phoneNumber}
        helperText={errors.phoneNumber && "Phone Numebr is required"}
        inputRef={phoneNumberRef}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Sign Up
      </Button>
    </Box>
  );
}
