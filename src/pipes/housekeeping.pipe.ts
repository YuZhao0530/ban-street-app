import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "housekeepingFilter",
    pure: false
})
export class HousekeepingPipe implements PipeTransform {

    transform(items: Array<any>, conditions: any): Array<any> {
        return items.filter(item => {
            // console.log(item.structure[0], conditions.structure.value);
            if (item.title.indexOf(conditions.title) < 0) {
                return false
            }
            return true
        });
    }
}
