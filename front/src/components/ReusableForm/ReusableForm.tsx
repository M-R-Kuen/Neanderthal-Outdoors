"use client";

import React, { useState } from "react";
import { Card, Button } from "@material-tailwind/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

interface FormProps {
  title: string;
  fields: { name: string; type: string; placeholder: string; label: string }[];
  validate: (data: any) => any;
  onSubmit: (data: any) => Promise<void>;
  redirectLink: string;
  redirectText: string;
  buttonText: string;
  backendError: string | null;
  successMessage: string | null;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  modalType: "error" | "success";
}

const ReusableForm: React.FC<FormProps> = ({
  title,
  fields,
  validate,
  onSubmit,
  redirectLink,
  redirectText,
  buttonText,
  backendError,
  successMessage,
  isModalOpen,
  setIsModalOpen,
  modalType,
}) => {
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors(validate({ ...formData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const error = validate(formData);
    setErrors(error);
    if (Object.keys(error).length === 0) {
      try {
        await onSubmit(formData);
        if (modalType === "success") {
          setIsModalOpen(true);
        }
      } catch (error) {
        console.log(error);
        if (modalType === "error") {
          setIsModalOpen(true);
        }
      }
    }
  };

  const columns = Math.ceil(fields.length / 2);
  const leftFields = fields.slice(0, columns);
  const rightFields = fields.slice(columns);

  return (
    <div className="max-h-screen mx-auto my-2 w-[90%] md:w-[50%]">
      <Card shadow={false} className="w-full bg-black bg-opacity-55 p-4">
        <h2 className="text-2xl font-cyBold uppercase text-white mb-4">
          {title}
        </h2>

        <form
          className="mt-4 mb-2 mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4">
            {leftFields.map((field) => (
              <div key={field.name}>
                <h3 className="mb-1 text-sm md:text-lg text-white">
                  {field.label}
                </h3>
                <input
                  className="w-full px-3 py-2 text-white rounded-lg bg-transparent border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                />
                {errors[field.name] && (
                  <p className="text-red-500">{errors[field.name]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {rightFields.map((field) => (
              <div key={field.name}>
                <h3 className="mb-1 text-sm md:text-lg text-white">
                  {field.label}
                </h3>
                <input
                  className="w-full px-3 py-2 text-white rounded-lg bg-transparent border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                />
                {errors[field.name] && (
                  <p className="text-red-500">{errors[field.name]}</p>
                )}
              </div>
            ))}
          </div>

          <Button
            className="mt-6 bg-darkMustard font-suisse"
            fullWidth
            type="submit"
          >
            {buttonText}
          </Button>
          <h3 className="mt-4 text-center font-suisse text-white">
            {redirectText}{" "}
            <a href={redirectLink} className=" text-white">
              {buttonText}
            </a>
          </h3>
        </form>
      </Card>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        placement="center"
        className="glass-background"
      >
        <ModalContent className="p-4 rounded-md shadow-md w-[25%] m-auto">
          <ModalHeader className="typography-custom text-2xl text-white">
            {modalType === "error" ? "Error" : "Success"}
          </ModalHeader>
          <ModalBody className="typography-thin text-white">
            {modalType === "error" ? `${backendError} :(` : successMessage}
          </ModalBody>
          <ModalFooter>
            <Button
              color={modalType === "error" ? "red" : "green"}
              className="typography-custom"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ReusableForm;
