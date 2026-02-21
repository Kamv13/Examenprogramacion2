"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroDiario = void 0;
class RegistroDiario {
    constructor() {
        this.registros = [];
    }
    agregarRegistro(registro) {
        this.registros.push(registro);
        console.log(`Se agrego el registro de consumo para ${registro.dispositivo.nombre}`);
    }
    eliminarRegistro(fecha, dispositivoNombre) {
        this.registros = this.registros.filter(r => {
            if (r.fecha === fecha && r.dispositivo.nombre === dispositivoNombre) {
                console.log(`Se elimino el registro para ${r.dispositivo.nombre}`);
                return false;
            }
            return true;
        });
    }
    obtenerConsumoTotalPorDia(fecha) {
        const total = this.registros.filter(r => r.fecha === fecha).reduce((sum, r) => sum + r.calcularConsumoTotal(), 0);
        console.log(`Total de Watts Hora consumidos en el día ${fecha}: ${total} Wh`);
        return total;
    }
    obtenerConsumoPorCategoria(fecha) {
        console.log(`consumo del dia ${fecha} :`);
        this.registros.filter(r => r.fecha === fecha).forEach((r, i) => console.log(`${i + 1}.${r.dispositivo.nombre} - ${r.calcularConsumoTotal()}wH`));
    }
}
exports.RegistroDiario = RegistroDiario;
