import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createEmployee } from "../../apis/employeeApis";

import AddEmployeeHeader from "../components/addEmployee/AddEmployeeHeader";
import PersonalInfoForm from "../components/addEmployee/PersonalInfoForm";
import EmploymentForm from "../components/addEmployee/EmploymentForm";
import FormActions from "../components/addEmployee/FormActions";

const AddEmployeePage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "12345678",
      avatar: "",
      role: "employee",
      department: "common",
      status: "active",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createEmployee,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      alert("Employee created successfully");
      reset();
      navigate("/home/employees");
    },

    onError: (error) => {
      console.log("Create employee failed", error);
      alert(error?.response?.data?.message || "Failed to create employee");
    },
  });

  const onSubmit = (data) => {
    const employeePayload = {
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
      role: data.role,
      department: data.department,
      status: data.status,
    };

    mutate(employeePayload);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-main)] p-8">
      <div className="mx-auto max-w-7xl">
        <AddEmployeeHeader />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_380px]">
            <PersonalInfoForm
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
            />

            <EmploymentForm
              register={register}
              watch={watch}
              setValue={setValue}
            />
          </div>

          <FormActions isPending={isPending} />
        </form>
      </div>
    </main>
  );
};

export default AddEmployeePage;