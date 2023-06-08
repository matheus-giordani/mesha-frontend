import { Conhecimento } from './../form-register/conhecimento.interface';
export interface User {
  nome: string,
  email:string,
  celular: string
  cpf: string,
  Conhecimentos: Conhecimento[],
  validacao: string | null
}
