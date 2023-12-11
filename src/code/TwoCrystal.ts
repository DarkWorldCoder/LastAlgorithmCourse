export default function TwoCrystalBalls(breaks:boolean[]){
    const jumpAmount = Math.floor(Math.sqrt(breaks.length))
    let i = jumpAmount
    for(;i<breaks.length;i+=jumpAmount){
        if(breaks[i]){
            break
        }
    }
    i -= jumpAmount
    for(let j=0;j<breaks.length && i<breaks.length;j++,i++){
        if(breaks[i]){
            return i
        }
       
    }
    return -1
}
