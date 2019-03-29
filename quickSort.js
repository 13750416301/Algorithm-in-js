/*
1、先从数列中取出一个数作为基准数

2、分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边

3、再对左右区间重复第二步，直到各区间只有一个数

https://blog.csdn.net/code_AC/article/details/74158681
*/
function quickSort(arr, l, r) {
    if(l < r) {
        var i = l, j = r, x = arr[i];
        while(i < j) {
            while(i < j && arr[j] > x) {
                j--;
            }
            if(i < j) {
                //这里用i++，被换过来的必然比x小，复制后直接让i自加，不用再比较，可以提高效率
                arr[i++] = arr[j];
            }
            while(i < j && arr[i] < x) {
                i++;
            }
            if(i < j) {
                //这里用j--，被换过来的必然比x大，赋值后直接让j自减，不用再比较，可以提高效率
                arr[j--] = arr[i];
            }
        }
        arr[i] = x;
        quickSort(arr, l, i - 1);
        quickSort(arr, i + 1, r);
    }
}