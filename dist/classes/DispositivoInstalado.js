"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivoInstalado = void 0;
class DispositivoInstalado {
    constructor(id, nombre, categoria, consumoWh, ubicacion, horasUsoDiario) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.consumoWh = consumoWh;
        this.ubicacion = ubicacion;
        this.horasUsoDiario = horasUsoDiario;
    }
    calcularConsumoDiario() {
        return this.consumoWh * this.horasUsoDiario;
    }
}
exports.DispositivoInstalado = DispositivoInstalado;
