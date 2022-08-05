export interface User {
  email: string;
  nome: string;
  username: string;
  senha: string;
  imgPerfil?: string;
  ultimasReservas?: number[];
}
