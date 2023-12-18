
function qs(arr:number[],lo:number,hi:number,flag:string){
    if(lo >= hi){
        return 
    }
    const pivotIdx = partition(arr,lo,hi,flag)
    qs(arr,lo,pivotIdx-1,"left")
    qs(arr,pivotIdx+1,hi,"right")

}

function partition(arr:number[],lo:number,hi:number,flag:string){
    const pivot = arr[hi]
    
    let idx = lo -1
    for (let i = lo;i<hi;++i){
        if(arr[i]<=pivot){
            idx++
            const tmp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = tmp
        }

    }
    idx ++ 
    arr[hi] = arr[idx]
    arr[idx] = pivot
    return idx

}
export default function quick_sort(
arr:number[]
):void{
qs(arr,0,arr.length-1,"neutral")
}
const array = [3,2,55,32,62,2,9,3,4,5,33] 

quick_sort(array)
console.log(array)