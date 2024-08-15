module.exports = function toReadable(number) {
    let readableNumber = [];
    let digitsOfNumber = [];


    if (number === 0) {
        return 'zero';
    }

    for (let i = 0; i < 3; i++) {
        digitsOfNumber.unshift(number % 10);
        number = Math.floor(number / 10);
    }

    if (digitsOfNumber[0] > 0) {
        readableNumber.push(numberTranslate(digitsOfNumber[0]) + ' ' + 'hundred');
    }
    if (digitsOfNumber[1] === 0 && digitsOfNumber[2] === 0) return readableNumber.join(' ')


    if (digitsOfNumber[1] > 1 && digitsOfNumber[2] > 0) {

        readableNumber.push(tenTranslate(digitsOfNumber[1], digitsOfNumber[2]));
        readableNumber.push(numberTranslate(digitsOfNumber[2]));
        return readableNumber.join(' ')

    } else if (digitsOfNumber[2] === 0 || digitsOfNumber[1] === 1) {
        readableNumber.push(tenTranslate(digitsOfNumber[1], digitsOfNumber[2]));
        return readableNumber.join(' ')
    }

    if (digitsOfNumber[1] === 0)
        readableNumber.push(numberTranslate(digitsOfNumber[2]));


    return readableNumber.join(' ');
}


function numberTranslate(n) {
    switch (n) {
        case 1:
            return 'one'
        case 2:
            return 'two'
        case 3:
            return 'three'
        case 4:
            return 'four'
        case 5:
            return 'five'
        case 6:
            return 'six'
        case 7:
            return 'seven'
        case 8:
            return 'eight'
        case 9:
            return 'nine'
    }
}

function tenTranslate(tens, n) {
    switch (tens) {
        case 2:
            return 'twenty'
        case 3:
            return 'thirty'
        case 4:
            return 'forty'
        case 5:
            return 'fifty'
        case 6:
            return 'sixty'
        case 7:
            return 'seventy'
        case 8:
            return 'eighty'
        case 9:
            return 'ninety'
        case 1:
            switch (n) {
                case 0:
                    return 'ten'
                case 1:
                    return 'eleven'
                case 2:
                    return 'twelve'
                case 3:
                    return 'thirteen'
                case 4:
                    return 'fourteen'
                case 5:
                    return 'fifteen'
                case 6:
                    return 'sixteen'
                case 7:
                    return 'seventeen'
                case 8:
                    return 'eighteen'
                case 9:
                    return 'nineteen'
            }

    }
}

