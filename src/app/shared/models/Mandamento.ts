export type Mandamento = {
  pecados: Pecado[];
};

export type Pecado = {
  texto: string;
  selecionado?: boolean;
};
