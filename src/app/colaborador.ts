import {Endereco} from "../app/endereco";
import {Usuario} from "../app/usuario";

export class Colaborador{
    codigo: number;
    nome: string;
    cpf: string;
    status: boolean;
    dataNascimento: Date;
    endereco: Endereco;
    email: string;
    telefone: string;
    usuario: Usuario;
}
