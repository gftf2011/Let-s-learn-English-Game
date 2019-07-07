export class StringUtil {

    public static toPascalCase (valueString: string): string {
        let valueArray: Array<string> = valueString.split(" ")

        let valueAnswer: string = valueArray[0].substring(0, 1).toUpperCase() + 
            valueArray[0].substring(1, valueArray[0].length) + " "

        for (let i: number = 1; i < valueArray.length; i++) {
            valueAnswer += valueArray[i] + " "
        }

        return valueAnswer.trim()
    }
}