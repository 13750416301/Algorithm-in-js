function bubbleSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        for(var j = 0; j < arr.length - i; j++) {
            var temp = 0;
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}