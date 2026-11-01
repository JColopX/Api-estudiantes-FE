export interface Campo {
  nombre: string;
  etiqueta: string;
  tipo: 'text' | 'email' | 'number';
  requerido: boolean;
  maxLength?: number;
  min?: number;
  max?: number;
}

export const CAMPOS_ESTUDIANTE: Campo[] = [
  { nombre: 'carnet', etiqueta: 'Carnet', tipo: 'text', requerido: true, maxLength: 20 },
  { nombre: 'nombre', etiqueta: 'Nombre completo', tipo: 'text', requerido: true, maxLength: 150 },
  { nombre: 'carrera', etiqueta: 'Carrera', tipo: 'text', requerido: false, maxLength: 100 },
  { nombre: 'promedio', etiqueta: 'Promedio', tipo: 'number', requerido: false, min: 0, max: 99.99 },
];

export interface Estudiante {
  id?: number;
  [campo: string]: unknown;
}
