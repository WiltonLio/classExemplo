import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meupipe',
  standalone: true,
})
export class MeupipePipe implements PipeTransform {
  transform(valor: string): string {
    return valor;
  }
}
