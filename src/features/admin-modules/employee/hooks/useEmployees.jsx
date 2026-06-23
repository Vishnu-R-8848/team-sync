import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllEmployees } from "../apis/employeeApis";

export const useEmployee = () => {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    search: "",
    role: "",
    department: "",
    status: "",
  });

  const { data, isPending, isFetching, error } = useQuery({
    queryKey: ["employees", page, filters],
    queryFn: () =>
      getAllEmployees({
        page,  
        limit: 20,
        search: filters.search,
        role: filters.role,
        department: filters.department,
        status: filters.status,
      }),
    staleTime: 100000,
    placeholderData: (previousData) => previousData,
    keepPreviousData: true,
  });

  const employeeData = data?.data || data;

  const employees = employeeData?.employees || [];
  const pagination = employeeData?.pagination || {};

  const handlePageChange = (newPage) => {
    const totalPages = pagination?.totalPages || 1;

    if (newPage < 1) return;
    if (newPage > totalPages) return;

    setPage(newPage);
  };

  const handleSearchFilters = (name, value) => {
    setPage(1);

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    employees,
    pagination,
    page,
    filters,

    isPending,
    isFetching,
    error,

    handleSearchFilters,
    handlePageChange,
  };
};