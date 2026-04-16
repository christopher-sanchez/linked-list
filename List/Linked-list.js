class Node{
    constructor(value,nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
} 

export class LinkedList{
    constructor(){
    this.head = null;
    this.size = 0;
    this.tail = null;
    }

     append(value){
        const newnode = new Node(value)
        this.size++;
        if(!this.head)
        {
            this.head=newnode
            return
        }
        let current=this.head 
        while(current.nextNode)
        {
            current=current.nextNode
        }
        current.nextNode=newnode
        }
        printList(){
            let current = this.head
            let results =""
            while(current)
            {
                results+=current.value+'->'
                current=current.nextNode
            }
            console.log(results+'null')
        }
        Size(){
            let current = this.head
            let size = 0
            while(current){
                size++
                current=current.nextNode
            }
            console.log(size)
        }
        Head(){

            console.log(this.head.value)
        }

    prepend(value){
    }
}

