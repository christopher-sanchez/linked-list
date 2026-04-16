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
    prepend(value){
    }
}

