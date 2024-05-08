import { Pipe, PipeTransform } from "@angular/core";

// israel | toggleCase = 'ISRAEL'
// ISRAEL | toggleCase = 'israel'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return (toUpper)
      ? value.toUpperCase()
      : value.toLowerCase();
  }

}
