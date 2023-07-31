// Time Words
// Write a function that turns a string of 24-hour time into words.

// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). 
//Hours 0-11 are am, and hours 12-23 are pm.

// Handle noon and midnight specially:

// timeWord("00:00")
// // 'midnight'

// timeWord("12:00")
// // 'noon'
// Otherwise, covert times to text:

// timeWord("01:00")
// // "one o'clock am"

// timeWord("06:01")
// // 'six oh one am'

// timeWord("06:10")
// // 'six ten am'

// timeWord("06:18")
// // 'six eighteen am'

// timeWord("06:30")
// // 'six thirty am'

// timeWord("10:34")
// // 'ten thirty four am'
// Don’t forget to handle early morning properly:

// timeWord("00:12")
// // 'twelve twelve am'
// For times after noon, add ‘pm’:

// timeWord("12:09")
// // 'twelve oh nine pm'

// timeWord("23:23")
// // 'eleven twenty three pm'


function HoursToString (time) {
    if (time === '00:00') {
        return 'midnight';
    } else if (time === '12:00') {
        return 'noon';
    }
      let [hours, minutes] = time.split(':').map(Number);

      let hour_words = ["twelve", "one", "two", "three", "four", "five", "six", 
                      "seven", "eight", "nine", "ten", "eleven", "twelve", 
                      "one", "two", "three", "four", "five", "six", 
                      "seven", "eight", "nine", "ten", "eleven"];
    
    let minute_words = ["o'clock", "one", "two", "three", "four", "five", 
                        "six", "seven", "eight", "nine", "ten", "eleven", 
                        "twelve", "thirteen", "fourteen", "fifteen", 
                        "sixteen", "seventeen", "eighteen", "nineteen", 
                        "twenty", "twenty-one", "twenty-two", 
                        "twenty-three", "twenty-four", "twenty-five", 
                        "twenty-six", "twenty-seven", "twenty-eight", 
                        "twenty-nine", "thirty", "thirty-one", 
                        "thirty-two", "thirty-three", "thirty-four", 
                        "thirty-five", "thirty-six", "thirty-seven", 
                        "thirty-eight", "thirty-nine", "forty", 
                        "forty-one", "forty-two", "forty-three", 
                        "forty-four", "forty-five", "forty-six", 
                        "forty-seven", "forty-eight", "forty-nine", 
                        "fifty", "fifty-one", "fifty-two", "fifty-three", 
                        "fifty-four", "fifty-five", "fifty-six", 
                        "fifty-seven", "fifty-eight", "fifty-nine"];

    let hour_word = hour_words[hours];
    let minute_word = minute_words[minutes];

    if (hours < 12) {
        return `${hour_word} ${minute_word} am`;
    } else {
        return `${hour_word} ${minute_word} pm`;
    }
}

console.log(HoursToString("00:00"))
console.log(HoursToString("10:34"))