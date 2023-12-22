declare type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];

var list2:WeightedAdjacencyList = [];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
list2[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
list2[1] = [
    { to: 4, weight: 1 },
];
list2[2] = [
    { to: 3, weight: 7 },
];
list2[3] = [ ];
list2[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
list2[5] = [
    { to: 2, weight: 18 },
    { to: 6, weight: 19 },
];
list2[6] = [
    { to: 3, weight: 1 },
];
function walk(graph:WeightedAdjacencyList,curr:number,needle:number,seen:boolean[],path:number[]):boolean{
    if(seen[curr]){
        return false 
    }
    seen[curr] = true
    
    path.push(curr)
    if (curr === needle){
        return true
    }

    const list = graph[curr]

    for(let i =0;i<list.length;++i){
    const edge = list[i]

    if(walk(graph,edge.to,needle,seen,path)){
        return true
    }
    }

    path.pop()

    return false



}

export default function GraphDfs(
    graph:WeightedAdjacencyList,
    source:number,
    needle:number
):number[] | null {

    const seen:boolean[] = new Array(graph.length).fill(false)
    const path:number[] = []

    walk(graph,source,needle,seen,path)

    if(path.length ===0){
        return null
    }

    return path
}

console.log(GraphDfs(list2,0,6))