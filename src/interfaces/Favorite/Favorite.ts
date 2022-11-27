export interface Favorite {
  id: number;
  id_usuario: number;
  id_direccion: number;
  alias: string;
  icono: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NuevoFavorito {
  alias: string;
  icono: string;
  id_direccion?: number;
}
