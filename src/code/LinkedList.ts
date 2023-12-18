type LinkedNode<T> = {
    value:T,
    prev?:LinkedNode<T>,
    next?:LinkedNode<T>
}
export default class DoublyLinkedList<T>{
    public length:number;
    private head?: LinkedNode<T>
    private tail?: LinkedNode<T>


    constructor(){
        this.length = 0
        this.head = undefined
        this.tail = undefined
    }
    prepend(item:T):void{
        const node = {value:item} as LinkedNode<T>
        this.length++;
        if(!this.head){
            this.head = this.tail = node
            return 
        }
        node.next = this.head
        this.head.prev = node
        this.head = node
    }
    insertAt(item:T,idx:number):void{
        if(idx>this.length){
            throw new Error("Error")
        }else if (idx==this.length){
            this.append(item)
            return
        }else if (idx===0){
            this.prepend(item)
            return 
        }

        let curr = this.head 
        for (let i=0;curr && i<idx;++i){
            curr = curr.next
        }
        curr = curr as LinkedNode<T>
        const node = {value:item} as LinkedNode<T>
        node.next = curr 
        node.prev = curr.prev
        curr.next = node

        if(curr.prev){
            curr.prev.next = curr
        }

    }

    append(item:T):void{
        this.length++;
        const node = {value:item} as LinkedNode<T>

        if(!this.tail){
            this.head = this.tail = node
            return
        }
        node.prev= this.tail
        this.tail.next= node 
        this.tail = node
    }

    remove(item:T):T | undefined{
        let curr = this.head
        for (let i = 0;curr && i<this.length;++i){
            if(curr.value === item){
                break
            }
            curr = curr.next
        }
        if(!curr){
            return
        }
        this.length--;
        if(this.length ===0){
            const out = this.head?.value
            this.head = this.tail = undefined
            return out
        }

        if(curr.prev){
            curr.prev = curr.next
        }
        if(curr.next){
            curr.next = curr.prev
        }

        // curr.prev = curr.next = undefined
        if(curr === this.head){
            this.head = curr.next
        }
        if(curr === this.tail){
            this.tail = curr.prev
        }
        curr.prev = curr.next = undefined
        return curr.value
    }

    get(idx:number):LinkedNode<T> | undefined{
        const node = this.getAt(idx)
        return node
    }

    removeAt(idx:number):LinkedNode<T> | undefined{
        const node = this.getAt(idx);
        if(!node){
            return undefined
        }
    }


    private getAt(idx:number):LinkedNode<T> | undefined{
        let curr = this.head 
        for(let i=0;curr && i<this.length;++i){
            curr = curr.next
        }
        return curr
    }


}