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
  let arrayMultiple: (number | string)[]= ["a", 2];
  let tupla: [number, string]= [1, "b"];
