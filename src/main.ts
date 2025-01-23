import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

  console.log("hola mundo");

  // EJEMPLO VARIABLES EN TS

  let number: number = 30;
  let string: string = "Negua";
  let boolean: boolean = false;
  let nulo: null = null;
  let any: any = undefined;
  // distintos tipos de array
  let arrayDeString: string[] = ["a", "b"];
  let arrayDeStringOtraFormaDeTipar: Array<string> = ["a", "b"];
  let arrayMultiple: (number | string)[]= ["a", 2];
  let tupla: [number, string]= [1, "b"];

  // enumeraciones. Se define con enum y se escribe con la primera en mayúsucula
 // Es tipo JSON, al utilizarlo en una variable podemos utilizar su nombre como tipo de dato.
 // Bueno para valores estáticos. Definimos al comienzo y utilizamos las veces que necesitemos
  enum Volumen {
  Alto = 100,
  Medio = 50,
  Bajo = 10
 }

 let volumenMax: Volumen = Volumen.Alto;

 // Funciones
 // Podemos poner que puede recibir valores de forma opcional
 // Si hay un return podemos tipar el resultado
 // Si no hay un return el tipo de dato de resultado siembre va a ser void. Podemos ponerlo, si ponemos cualquier otra cosa se enfada

 function saludar (nombre: string) {
  console.log("hola "  + nombre);
 }
 saludar("Esti");

 function saludarConValorOpcional (nombre?: string): void {
  console.log("hola "  + nombre);
 }

 saludar("Esti");
 saludarConValorOpcional();

 function tiparElResultado (a: number, b: number): number {
  return a + b;
 }
 
// Objetos, cómo tiparlos
// Directamente en el incio del objeto uno por uno
// O utilizando interfaces. Primero definimos, luego creamos el objeto de tipo de la interfaz
// También se pueden crear clases

// -- básico
const objetoTipado: {nombre: string, edad:number} = {
  nombre: "Amalur",
  edad : 2
}

// -- interface
interface Perrito {
  nombre: string;
  edad: number;
  juguetes: string[];
}
const objetoTipadoMasSencillo: Perrito = {
  nombre: "Amalur",
  edad : 2,
  juguetes: ["pelota", "peluche"]
}

// -- clase
// tenemos que crear el constructor porque sino nos obliga a inicializar las variables de la calse con algún valor
class Dog {
  nombre: string;
  edad: number;
  juguetes: string[];
  adoptarPerrito(): void {
    console.log("este perrito ha sido adoptado");
  }

  constructor(
    name: string, 
    age: number, 
    toys: string[]) {
    this.nombre = name;
    this.edad = age;
    this.juguetes = toys;
  }
}

const nuevoPerrito = new Dog (
  "Amalur",
  3,
  ["pelota", "peluche"]
)
const quieroAdoptar = nuevoPerrito.adoptarPerrito;

// -- Otra forma de crear las clases más sencillas.
// Si ponemos propiedades públicas podemos acceder a ellas al crear una nueva variable, las privadas no. 

class PerritoAdorable {
  constructor (
    public nombre: string,
    public edad: number,
    public juguetes: string[],
    private chip: number,
  ) {}
}

// Una clase implementando una interfaz

interface Animal {
  numPatas: number;
  pelaje: boolean;
}

class Perro implements Animal {
  numPatas: number;
  pelaje: boolean;

  constructor (numPatas: number, pelaje: boolean) {
    this.numPatas =  numPatas;
    this.pelaje =  pelaje;
  }
}

// Una clase que extiende de otra. Ojo cuidado con los public o private en la clase que extiende, solo puedes ponerlo a lo nuevo
class Mascota {
  constructor (
    public numPatitas: number,
    public pelito: boolean
  ) {}
  ladrar(): void {console.log("guau")}
}

class MiPerro extends Mascota {
  constructor (
     numPatitas: number,
     pelito: boolean,
     public adorable: number
  ) {
    super(numPatitas, pelito);
  }
}

const negua = new MiPerro(4, true, 100);
negua.ladrar();

