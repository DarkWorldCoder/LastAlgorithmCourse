import { tree } from "../__tests__/tree"


type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};
export default function bfs(head:BinaryNode<number>,needle:number):boolean{

    const q = [head]
    while(q.length){
        const curr = q.shift() as BinaryNode<number>
        if (curr.value === needle){
            return true
        }

        if(curr.left){
            q.push(curr.left)
        }
        if(curr.right){
            q.push(curr.right)
        }
        // console.log(q)
    }
    return false

}

console.log(bfs(tree,2))