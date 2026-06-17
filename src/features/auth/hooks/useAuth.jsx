import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginEmployee } from "../states/auth/authActions";

const useAuth = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // LOGIN FORM
  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // REGISTER FORM
  const registerForm = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const password = registerForm.watch("password");

  const handleRememberChange = () => {
    setRememberMe((prev) => !prev);
  };

  const handleTermsChange = () => {
    const nextValue = !acceptedTerms;
    setAcceptedTerms(nextValue);

    if (nextValue) {
      registerForm.clearErrors("terms");
    }
  };

  const onLoginSubmit = async (data) => {
    const loginPayload = {
      ...data,
      rememberMe,
    };

    // console.log("Login data:", loginPayload);

    // later:
    dispatch(loginEmployee(loginPayload));
    navigate("/home");

    loginForm.reset();
  };

  const onRegisterSubmit = async (data) => {
    if (!acceptedTerms) {
      registerForm.setError("terms", {
        type: "manual",
        message: "Please accept the terms and privacy policy",
      });
      return;
    }

    const registerPayload = {
      ...data,
      acceptedTerms,
    };

    console.log("Register data:", registerPayload);

    // later:
    // dispatch(registerUser(registerPayload));
    // navigate("/login");

    registerForm.reset();
    setAcceptedTerms(false);
  };

  return {
    // login
    loginForm,
    rememberMe,
    handleRememberChange,
    onLoginSubmit,

    // register
    registerForm,
    acceptedTerms,
    handleTermsChange,
    password,
    onRegisterSubmit,

    //global
    navigate,
  };
};

export default useAuth;
