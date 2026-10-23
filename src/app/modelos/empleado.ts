export interface Empleado {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    sueldo: number;
    activo: boolean;
    foto?: string; // Ruta de la foto es una cadnea de caracteres.
}
