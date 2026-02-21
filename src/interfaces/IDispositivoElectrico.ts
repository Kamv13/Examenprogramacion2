export interface IDispositivoElectrico {
    id: number;
    nombre: string;
    categoria: string;
    consumoWh: number;
    ubicacion: string;
    horasUsoDiario: number;

    calcularConsumoDiario(): number;
}