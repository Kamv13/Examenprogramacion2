export interface IDispositivoElectrico {
    id: number;
    nombre: string;
    categoria: string;
    consumoWh: string;
    ubicacion: string;
    horasUsoDiario: string;

    calcularConsumoDiario(): number;
}