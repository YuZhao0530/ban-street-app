import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "secondhandHouseFilter",
    pure: false
})
export class SecondeHousePipe implements PipeTransform {

    transform(items: Array<any>, conditions: any): Array<any> {
        return items.filter(item => {
            // console.log(item.structure[0], conditions.structure.value);
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
            if (conditions.structure.value != undefined) {
                if (item.structure[0] < 5 && conditions.structure.value > 4) {
                    return false
                }
                if (item.structure[0] != conditions.structure.value && conditions.structure.value < 5) {
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
    }
}
