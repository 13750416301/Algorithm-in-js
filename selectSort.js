function selectSort(arr) {
    var temp, min;   //min存储最小值的索引
    for(var i = 0; i < arr.length - 1; i++) {
        min = i;
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min != i) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    return arr;
}