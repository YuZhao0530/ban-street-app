import { Pipe, PipeTransform } from "@angular/core";
import { Events } from 'ionic-angular';

@Pipe({
    name: "secondhandHouseFilter",
    pure: false
})
export class SecondeHousePipe implements PipeTransform {
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
            if (conditions.bedroom.value != undefined) {
                if (item.bedroom < 5 && conditions.bedroom.value > 4) {
                    return false
                }
                if (item.bedroom != conditions.bedroom.value && conditions.bedroom.value < 5) {
                    return false
                }
            }
            if (conditions.floor.value != undefined
                && (item.floor < 7 && conditions.floor.value >= 7)
                && (item.floor != conditions.floor.value && conditions.floor.value < 7)) {
                return false
            }
            if (conditions.floor.value != undefined) {
                if (item.floor < 7 && conditions.floor.value >= 7) {
                    return false
                }
                if (item.floor != conditions.floor.value && conditions.floor.value < 7) {
                    return false
                }
            }
            if (conditions.towards.value != undefined && item.towards.indexOf(conditions.towards.value) < 0) {
                return false
            }
            if (conditions.decoration.value != undefined && item.decoration.indexOf(conditions.decoration.value) < 0) {
                return false
            }
            return true
        });
        console.log('filter happened');
        if(this.filteredItems.length < 20) {
            this.events.publish('secondhandHouseFiltered:not enough items');
        }
        return this.filteredItems
    }
}
