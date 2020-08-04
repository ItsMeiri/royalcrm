import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphUppercase',
})
export class ParagraphUppercasePipe implements PipeTransform {
  transform(value: string): unknown {
    return (
      value
        .split('.')
        .map(
          (item) =>
            item.trim().charAt(0).toUpperCase() +
            item.trim().slice(1).toLowerCase()
        )
        .join('. ') + '.'
    );
  }
}
