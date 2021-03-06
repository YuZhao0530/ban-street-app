import { Pipe, PipeTransform } from "@angular/core";
import { Events } from 'ionic-angular';

@Pipe({
    name: "housekeepingFilter",
    pure: false
})
export class HousekeepingPipe implements PipeTransform {
    filteredItems = [];
    constructor(public events: Events) {}

    transform(items: Array<any>, conditions: any): Array<any> {
        this.filteredItems = items.filter(item => {
            // console.log(item.structure[0], conditions.structure.value);
            if (item.title.indexOf(conditions.title) < 0) {
                return false
            }
            return true
        });
        if(this.filteredItems.length < 20) {
            this.events.publish('housekeepingFiltered:not enough items');
        }
        return this.filteredItems
    }
}
