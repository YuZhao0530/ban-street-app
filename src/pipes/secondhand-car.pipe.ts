import { Pipe, PipeTransform } from "@angular/core";
import { Events } from 'ionic-angular';

@Pipe({
    name: "secondhandCarFilter",
    pure: false
})
export class SecondhandCarPipe implements PipeTransform {
    filteredItems = [];
    constructor(public events: Events) {}

    transform(items: Array<any>, conditions: any): Array<any> {
        this.filteredItems = items.filter(item => {
            // console.log(item.structure[0], conditions.structure.value);
            if (item.name.indexOf(conditions) < 0) {
                return false
            }
            return true
        });
        return this.filteredItems
    }
}
