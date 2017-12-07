import { Pipe, PipeTransform } from "@angular/core";
import { Events } from 'ionic-angular';

@Pipe({
    name: "convenienceInfoFilter",
    pure: false
})
export class ConvenienceInfoPipe implements PipeTransform {
    filteredItems = [];
    constructor(public events: Events) {}
    transform(items: Array<any>, conditions: any): Array<any> {
        this.filteredItems = items.filter(item => {
            // console.log(item.structure[0], conditions.structure.value);
            if (item.content.indexOf(conditions.contentAndPublisher) < 0
                && item.publisher.indexOf(conditions.contentAndPublisher) < 0) {
                return false
            }
            return true
        });
        if(this.filteredItems.length < 20) {
            this.events.publish('convenienceInfoFiltered:not enough items');
        }
        return this.filteredItems
    }
}
