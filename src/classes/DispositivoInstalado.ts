import { IDispositivoElectrico } from "../interfaces/IDispositivoElectrico";

export class DispositivoInstalado implements IDispositivoElectrico {
    constructor (
        public id: number,
        public nombre: string,
        public categoria: string,
        public consumoWh: number,
        public ubicacion: string,
        public horasUsoDiario: number
    ) {}

    calcularConsumoDiario(): number {
        return this.consumoWh * this.horasUsoDiario
    }
}