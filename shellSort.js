/*
希尔排序
https://www.cnblogs.com/liyongshuai/p/7197962.html
*/
function shellSort(arr) {
    var temp, gap = 1;
    while(gap < arr.length / 5) { //动态定义间隔区间
        gap = gap * 5 + 1;
    }
    for(gap; gap > 0; gap = Math.floor(gap / 5)) {
        for(var i = gap; i < arr.length; i++) {
            temp = arr[i];
            for(var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}