import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email().required("Email obrigatório"),
  message: yup.string().required("Mensagem obrigatória"),
});
