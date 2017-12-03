import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convenienceInfoFilter",
    pure: false
})
export class ConvenienceInfoPipe implements PipeTransform {

    transform(items: Array<any>, conditions: any): Array<any> {
        return items.filter(item => {
            // console.log(item.structure[0], conditions.structure.value);
            if (item.content.indexOf(conditions.contentAndPublisher) < 0
                && item.publisher.indexOf(conditions.contentAndPublisher) < 0) {
                return false
            }
            return true
        });
    }
}
