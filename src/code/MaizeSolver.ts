const dir = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1]
]

function walk(maize:string[],wall:string,curr:Point,end:Point,seen:boolean[][],path:Point[]):boolean{
    if(curr.x <0 || curr.x >= maize[0].length || curr.y <0 || curr.y > maize.length){
        return false
    }
    if(maize[curr.y][curr.x] === wall){
        return false 
    }
    if(curr.x === end.x && curr.y === end.y){
        path.push(end)
        return true
    }
    if(seen[curr.y][curr.x]){
        return false
    }
    seen[curr.y][curr.x] = true
    path.push(curr)
    for(let i=0;i<dir.length; ++i){
        const [x,y] = dir[i]
        if(walk(maize,wall,{
            x:curr.x + x,
            y:curr.y + y
        },end,seen,path)){
            return true
        }
    }
    path.pop()
    return false


}

export default function solve(maize:string[],wall:string,start:Point,end:Point){
    const seen:boolean[][] = []
    const path:Point[]= []
    for(let i=0;i<maize.length;i++){
        seen.push(new Array(maize[0].length).fill(false))
    }
    walk(maize,wall,start,end,seen,path)
    return path
}



