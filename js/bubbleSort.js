function bubbleSort(numbers) {
    let orderedList = numbers;
    let length = numbers.length - 1;
    let swapped;
    do {
        swapped = false;

        for (let i = 0; i < length; i++) {
            if (orderedList[i] > orderedList[i + 1]) {
                let temp = orderedList[i];
                orderedList[i] = orderedList[i + 1];
                orderedList[i + 1] = temp;

                swapped = true;
            }
        }

        length--;
    } while (swapped)

    return orderedList;
}

module.exports = bubbleSort