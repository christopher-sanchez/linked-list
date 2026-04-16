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
            this.head= newnode;
            this.tail= newnode;
            return;
        }
        let current=this.head;
        while(current.nextNode)
        {
            current=current.nextNode
        }
        current.nextNode=newnode
        this.tail = newnode;
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
        Tail(){
            console.log(this.tail.value)
        }
        at(index){
            if(index <0 || index >= this.size){
                console.log("Index is out of bounds")
            }
            let current = this.head
            let count = 0;
            while(current){
                if(count === index){
                    console.log(current.value)
                    return current;
                }
                current = current.nextNode;
                count++
            } 
            
        }

    prepend(value){
        const newNode = new Node(value,this.head);
        this.head = newNode;
        if(!this.tail) this.tail = newNode;
        this.size++;
    }
}

