export interface NuevoUsuario {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
}

export interface Usuario {
  id: number;
  email: string;
  nombre: string;
  apellido: string;
  password: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date;
}

