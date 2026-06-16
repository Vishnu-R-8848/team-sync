import React, { useState } from "react";
import { useForm } from "react-hook-form";

const useAuth = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const loginPayload = {
      ...data,
      rememberMe,
    };

    console.log("Login data:", loginPayload);

    // later:
    // dispatch(loginUser(loginPayload));
    // navigate("/dashboard");
    reset();
  };

  return {
    onSubmit,
    handleSubmit,
    errors,
    register,
    rememberMe,
    isSubmitting,
  };
};

export default useAuth;
