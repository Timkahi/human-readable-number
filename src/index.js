let unitsArray = ['zero','one','two','three','four','five','six','seven','eight','nine'];
let onedozenArray = ['ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let dozensArray = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


module.exports = function toReadable (number) {
    if (number < 10) {
        return unitsArray[number]
    } else if (number <= 19) {
        const idNum = number%10
        return onedozenArray[idNum]
    } else if (number > 19 && number <= 99) {
        const firstNum = Math.floor(number / 10)
        const lastNum = number % 10
        if (lastNum === 0) {
            return dozensArray[firstNum - 1]
        } else {
            return `${dozensArray[firstNum - 1]} ${unitsArray[lastNum]}`
        }
    } else if (number >= 100 && number < 1000) {
        const firstThreeNum = Math.floor(number / 100)
        const midelNum = Math.floor((number % 100) / 10)
        const lastThreeNum = number % 10
        const ecspectTwoLastNum = number % 100
        if (midelNum === 0 && lastThreeNum === 0) {
            return `${unitsArray[firstThreeNum]} hundred`
        } else if (midelNum === 0) {
            return `${unitsArray[firstThreeNum]} hundred ${unitsArray[lastThreeNum]}`
        } else if (ecspectTwoLastNum >=10 && ecspectTwoLastNum <= 19) {
            return `${unitsArray[firstThreeNum]} hundred ${onedozenArray[lastThreeNum]}`
        } else if (ecspectTwoLastNum >10 && ecspectTwoLastNum <= 90 && lastThreeNum === 0) {
            return `${unitsArray[firstThreeNum]} hundred ${dozensArray[midelNum - 1]}`
        }
        return `${unitsArray[firstThreeNum]} hundred ${dozensArray[midelNum - 1]} ${unitsArray[lastThreeNum]}`
    }
}
