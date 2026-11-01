import { HttpErrorResponse } from '@angular/common/http';

export function mensajeError(err: HttpErrorResponse): string {
  if (err.status === 0) {
    return 'No se pudo conectar con el servidor. Si está en Render, espera unos segundos e intenta de nuevo.';
  }

  const detalle: string = err.error?.error ?? err.error?.message ?? '';

  if (/unicidad|unique/i.test(detalle)) {
    if (/carnet/i.test(detalle)) return 'Ese carnet ya está registrado';
    if (/email/i.test(detalle)) return 'Ese correo ya está registrado';
    return 'Ese dato ya está registrado';
  }

  return detalle.replace(/^Validation error:\s*/i, '') || 'Ocurrió un error, intenta de nuevo';
}
