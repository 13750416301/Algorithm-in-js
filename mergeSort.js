/*
二路归并
将两个按值有序序列合并成一个按值有序序列，则称之为二路归并排序
*/
function merge(left, right) {
    var result = [], il = 0, ir = 0;

    while(il < left.length && ir < right.length) {
        if(left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    while(left[il]) {
        result.push(left[il++]);
    }
    while(right[ir]) {
        result.push(right[ir++]);
    }
}

function mergeSort(a) {
    if(a.length == 1) {
        return a;
    }
    var mid = a.length / 2;
    var left = a.slice(0, mid);
    var right = a.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}