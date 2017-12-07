import { Pipe, PipeTransform } from "@angular/core";
import { Events } from 'ionic-angular';

@Pipe({
    name: "carpoolingFilter",
    pure: false
})
export class CarpoolingPipe implements PipeTransform {
    filteredItems = [];
    constructor(public events: Events) {}
    transform(items: Array<any>, conditions: any): Array<any> {
        this.filteredItems = items.filter(item => {
            // console.log(item.structure[0], conditions.structure.value);
            if (item.type.indexOf(conditions) < 0) {
                return false
            }
            return true
        });
        if(this.filteredItems.length < 20) {
            this.events.publish('carpoolingFiltered:not enough items');
        }
        return this.filteredItems
    }
}
