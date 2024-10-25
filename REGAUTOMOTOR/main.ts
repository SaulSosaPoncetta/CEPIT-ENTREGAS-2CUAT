import { Registro } from './registro';
import { Titular } from './titular';
import { Auto } from './auto';
import { Camion } from './camion';
import { Cuatriciclo } from './cuatriciclo';
import { MAgricola } from './magricola';
import { Moto } from './moto';


const registro = new Registro("TIMOTEO RODRIGUEZ", "COLON 3250", "001");

const titular1 = new Titular("JULIETA", "PEREZ", "24567432", "Av. DEL VALLE 3500", "CASADA");
const auto1 = new Moto("Zanella", "Sol", "50cc", "CH12356765544", "MTR4433345556", "CZY412");

const titular2 = new Titular("GENARO", "SOSA", "24567432", "V. LOPEZ 1820", "SOLTERO");
const auto2 = new Camion("FIAT", "240", "Cargo", "CH234765544", "MTR44335666556", "HSF590");

const titular3 = new Titular("GONZALO", "CORIA", "44576389", "ALSINA 2346", "DIVORCIADO");
const auto3 = new Cuatriciclo("MONDIAL", "200", "200cc", "CH1238987656554", "MTR434267875656", "HHR482");

registro.agregarTitular(titular1);
registro.agregarVehiculo(auto1);
registro.agregarTitular(titular2);
registro.agregarVehiculo(auto2);
registro.agregarTitular(titular3);
registro.agregarVehiculo(auto3);

console.log("VEHICULOS");
console.log(registro.listarVehiculos());

console.log("TITULARES");
console.log(registro.listarTitulares());