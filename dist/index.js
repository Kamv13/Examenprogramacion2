"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DispositivoInstalado_1 = require("./classes/DispositivoInstalado");
const RegistroDiario_1 = require("./classes/RegistroDiario");
const usuario = {
    nombre: "Kevin Mendoza",
    direccion: { calle: "18", ciudad: "El Progreso", pais: "Honduras" }
};
const tv = new DispositivoInstalado_1.DispositivoInstalado(1, "televisor", "entretenimiento", 100, "sala", 5);
const refri = new DispositivoInstalado_1.DispositivoInstalado(2, "refrigeradora", "electrodomestico", 200, "cocina", 24);
const pc = new DispositivoInstalado_1.DispositivoInstalado(3, "computadora", "entretenimiento", 150, "sala", 8);
const registro1 = { usuario, dispositivo: tv, fecha: "2026-02-21", calcularConsumoTotal: () => tv.calcularConsumoDiario() };
const registro2 = { usuario, dispositivo: refri, fecha: "2026-02-21", calcularConsumoTotal: () => refri.calcularConsumoDiario() };
const registro3 = { usuario, dispositivo: pc, fecha: "2026-02-21", calcularConsumoTotal: () => pc.calcularConsumoDiario() };
const monitoreo = new RegistroDiario_1.RegistroDiario();
monitoreo.agregarRegistro(registro1);
monitoreo.agregarRegistro(registro2);
monitoreo.agregarRegistro(registro3);
monitoreo.eliminarRegistro("2026-02-21", "televisor");
monitoreo.obtenerConsumoPorCategoria("2026-02-21");
monitoreo.obtenerConsumoTotalPorDia("2026-02-21");
