import { Pipe, PipeTransform } from "@angular/core";
import { Events } from 'ionic-angular';

@Pipe({
    name: "carFilter",
    pure: false
})
export class CarPipe implements PipeTransform {
    filteredItems = [];
    constructor(public events: Events) {}
    transform(items: Array<any>, conditions: any): Array<any> {
        this.filteredItems = items.filter(item => {
            // console.log(item.bedroom[0], conditions.bedroom.value);
            if (item.title.indexOf(conditions.title) < 0) {
                return false
            }
            if (conditions.price.value != undefined) {
                if (item.price < conditions.price.value && conditions.price.value > 120) {
                    return false
                }
                if (conditions.price.value < 121 && (item.price < (conditions.price.value - 30) || item.price > conditions.price.value)) {
                    return false
                }
            }
            if (conditions.type != undefined && item.type != conditions.type) {
                return false
            }
            return true
        });
        console.log('filter happened');
        if(this.filteredItems.length < 20) {
            this.events.publish('carFiltered:not enough items');
        }
        return this.filteredItems
    }
}
