import { DispositivoInstalado } from "./classes/DispositivoInstalado";
import { RegistroDiario } from "./classes/RegistroDiario";
import { IUsuario } from "./interfaces/IUsuario";
import { IRegistroConsumo } from "./interfaces/IRegistroConsumo";

const usuario: IUsuario = {
    nombre: "Kevin Mendoza",
    direccion: { calle: "18", ciudad: "El Progreso", pais: "Honduras" }
};

const tv = new DispositivoInstalado ( 1, "televisor" , "entretenimiento", 100, "sala", 5 )
const refri = new DispositivoInstalado(2, "refrigeradora", "electrodomestico", 200, "cocina", 24 )
const pc = new DispositivoInstalado(3, "computadora", "entretenimiento", 150, "sala", 8 )

const registro1: IRegistroConsumo = {usuario, dispositivo:tv, fecha: "2026-02-21", calcularConsumoTotal: () => tv.calcularConsumoDiario()};
const registro2: IRegistroConsumo = {usuario, dispositivo:refri, fecha:"2026-02-21", calcularConsumoTotal: () => refri.calcularConsumoDiario()}
const registro3: IRegistroConsumo = {usuario, dispositivo:pc, fecha: "2026-02-21", calcularConsumoTotal: () => pc.calcularConsumoDiario()}

const monitoreo = new RegistroDiario();
monitoreo.agregarRegistro(registro1)
monitoreo.agregarRegistro(registro2)
monitoreo.agregarRegistro(registro3)

monitoreo.eliminarRegistro("2026-02-21","televisor")
monitoreo.obtenerConsumoPorCategoria("2026-02-21")
monitoreo.obtenerConsumoTotalPorDia("2026-02-21")

