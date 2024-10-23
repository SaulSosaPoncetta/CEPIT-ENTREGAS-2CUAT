import { Registro } from './registro';
import { Auto } from './vehiculos';
import { Titular } from './titular';

const registro = new Registro("TIMOTEO RODRIGUEZ", "COLON 3250", "001");

const titular1 = new Titular("JULIETA", "PEREZ", "24567432", "Av. DEL VALLE 3500", "CASADA");
const auto1 = new Auto("Zanella", "Sol", "50cc", "CH12356765544", "MTR4433345556", "CZY412", titular1);

const titular2 = new Titular("GENARO", "SOSA", "24567432", "V. LOPEZ 1820", "SOLTERO");
const auto2 = new Auto("FIAT", "240", "Cargo", "CH234765544", "MTR44335666556", "HSF590", titular2);

const titular3 = new Titular("GONZALO", "CORIA", "44576389", "ALSINA 2346", "DIVORCIADO");
const auto3 = new Auto("MONDIAL", "200", "200cc", "CH1238987656554", "MTR434267875656", "HHR482", titular3);

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