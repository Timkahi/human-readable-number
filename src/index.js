module.exports = function toReadable (number) {
  if (number < 10) {
        const t = unitsArray[number]
      return t
    } else if (number === 20 || number === 30 ||  number === 40 || number === 50 ||number === 60 ||number === 70 ||number === 80 ||number === 90) {
        const tents = number / 10 
        
        return dozensArray[tents]
    } else if (number === 10 || number === 11 || number ===12 || number ===13 || number === 14 || number === 15 || number ===16 || number ===17 || number ===18 || number === 19 ) {
        const ten = number % 10
        return onedozenArray[ten]

    } else if (number < 100) {
        const first = Math.floor(number/10)
        const last = number%10
        return `${dozensArray[first]} ${unitsArray[last]}`

    } else if (number <= 1000) {
        let dozensArray1 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const first2 = Math.floor(number/100)
        const second1 = number%100
        const second2 = (Math.floor(second1/10))
        const last1 = number%10
        console.log(last1)
        return  `${unitsArray[first2]} hundred ${dozensArray1[second2 -1 ]} ${unitsArray[last1]}`
    }
}
