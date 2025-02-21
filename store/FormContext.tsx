import React, { createContext, ReactNode, useState } from "react";

interface FormData {
  name: string;
  surname: string;
  phone: string;
  zipcode: string;
  city: string;
  street: string;
  houseNumber: string;
  flatNumber: string;
  // dodaj inne pola w razie potrzeby
}

interface FormContextProps {
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
}

export const FormContext = createContext<FormContextProps>({
  formData: {
    name: "",
    surname: "",
    phone: "",
    zipcode: "",
    city: "",
    street: "",
    houseNumber: "",
    flatNumber: "",
  },
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
    zipcode: "",
    city: "",
    street: "",
    houseNumber: "",
    flatNumber: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateField }}>
      {children}
    </FormContext.Provider>
  );
};
