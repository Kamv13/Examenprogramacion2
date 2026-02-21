# Monitoreo de Consumo Eléctrico

Este proyecto en **TypeScript** permite registrar dispositivos eléctricos, calcular su consumo diario y monitorear el consumo total de un usuario.

---

## 1. Requisitos del proyecto

- Node.js instalado .
- TypeScript instalado como dependencia de desarrollo:
  npm install typescript --save-dev

## 2. Pasos para crear un registro
 **1.Crear un usuario**
   Define un objeto IUsuario con nombre y dirección:
   
   const usuario: IUsuario = {
     nombre: "Ana López",
     direccion: { calle: "Calle 10", ciudad: "El Progreso", pais: "Honduras" }
   };
 **2.inicializar un dispositivo**
   luego define un dispositivo para por medio del uso de la instancia de la clase "DispositivoInstalado"

   cost microondas = new DispositivoInstalado("Microondas", "Electrodoméstico", 1200, "Cocina", 1);

   luego crea el registro de consumo de ese dispositivo definiendo un nuevo objeto del tipo IRegistroConsumo que relacione el usuario y el dispositivo

   const registro: IRegistroConsumo = {usuario, dispositivo: microondas,fecha: "2026-02-21", calcularConsumoTotal: () => microondas.calcularConsumoDiario()
};
 **3.agregar el registro al monitoreo**
y por ultimo agregar el registro al monitoreo usando la clase RegistroDiario 

const monitoreo = new RegistroDiario();
monitoreo.agregarRegistro(registro);

**Para ver los registros**
basta con llamar a los metodos de nuestro nuevo registro por medio de la clase monitoreo pasando la fecha como parametro
monitoreo.obtenerConsumoTotalPorDia("2026-02-21")