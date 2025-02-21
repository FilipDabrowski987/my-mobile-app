import React, { createContext, ReactNode, useState } from "react";

interface FormData {
  name: string;
  surname: string;
  phone: string;
  email?: string | null;
  zipcode: string;
  city: string;
  street: string;
  houseNumber: string;
  flatNumber: string;
  isOwes?: string | null;
  typeOfContract?: string | null;
  workingTime?: string | null;
  degreeOfDisability?: string | null;
  isLyingDownPerson?: string | null;
}

interface FormContextProps {
  formData: FormData;
  updateField: (field: keyof FormData, value: string | null) => void;
}

export const FormContext = createContext<FormContextProps>({
  formData: {
    name: "",
    surname: "",
    phone: "",
    email: null,
    zipcode: "",
    city: "",
    street: "",
    houseNumber: "",
    flatNumber: "",
    isOwes: null,
    typeOfContract: null,
    workingTime: null,
    degreeOfDisability: null,
    isLyingDownPerson: null,
  } as FormData,
  updateField: () => {},
});

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    phone: "",
    email: null,
    zipcode: "",
    city: "",
    street: "",
    houseNumber: "",
    flatNumber: "",
    isOwes: null,
    typeOfContract: null,
    workingTime: null,
    degreeOfDisability: null,
    isLyingDownPerson: null,
  });

  // const updateField = (field: keyof FormData, value: string) => {
  //   setFormData((prev) => ({ ...prev, [field]: value }));
  // };

  const updateField = (field: keyof FormData, value: string | null) => {
    setFormData((prev) => {
      const updatedForm = { ...prev, [field]: value };

      // Usuwamy pole z obiektu, jeśli jego wartość to null
      if (value === null) {
        delete updatedForm[field];
      }

      return updatedForm;
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateField }}>
      {children}
    </FormContext.Provider>
  );
};
