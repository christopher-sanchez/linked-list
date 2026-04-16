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
        pop(){
         if(!this.head){
            console.log("list is empty");
            return null;
         }   
         if(!this.head.nextNode){
            const removed = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return removed;
         }
         let current = this.head;
         while(current.nextNode.nextNode){
            current = current.nextNode;
         }
         const removed = current.nextNode;
         current.nextNode = null;
         this.tail = current;
         this.size--;
         return removed;

        }
        contains(value){
            let current = this.head;
             let has = false;
            while(current){
                if(value === current.value){
                    has=true
                }
                current = current.nextNode;
            }
            
             console.log(has);
             return has;
        }
        findIndex(value){
            let current = this.head;
            let index = 0;
            while(current){
                if (value === current.value){
                    console.log(index);
                    return index;
                  
                }
                current = current.nextNode;
                index++;
            }
            console.log(-1);
            return -1;
        }

    prepend(value){
        const newNode = new Node(value,this.head);
        this.head = newNode;
        if(!this.tail) this.tail = newNode;
        this.size++;
    }
}

