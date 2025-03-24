import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../utils/validationSchema";
import { sendContactForm } from "../services/api";
import { useState } from "react";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 500px;
  margin: 2rem auto;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 0.8rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    await sendContactForm(data);
    reset();
    setSuccess(true);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Nome" {...register("name")} />
      <span>{errors.name?.message}</span>
      <Input placeholder="Email" {...register("email")} />
      <span>{errors.email?.message}</span>
      <Textarea placeholder="Mensagem" rows="4" {...register("message")} />
      <span>{errors.message?.message}</span>
      <Button type="submit">Enviar</Button>
      {success && <p>Mensagem enviada com sucesso!</p>}
    </FormContainer>
  );
}
