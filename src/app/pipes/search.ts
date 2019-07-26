
import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({
//     name: 'repeat'
// })
// export class RepeatPIPES implements PipeTransform {
//     transform(value: any, times: number){
//         return value.repeat(times);
//     }
// }
@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    // el método que me pide implementar el PipeTransform
    public transform(value, args: string) {
        if (!value) {
            return;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter((item) => {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
