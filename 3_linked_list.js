class Node {
    constructor (value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor () {
        this.headNode = null;
        this.listLength = 0;
    }

    pushNode (value) {
        const pushedNode = new Node (value); 
        let focusNode = this.headNode;
        // If the list is empty, we add new node as a head node
        if (!focusNode) {
            this.headNode = pushedNode;
            this.listLength++;
            return pushedNode;
        }
        // If the list isn't empty, we search for the end of it...
        while (focusNode.next) focusNode = focusNode.next;
        // ...and append a new node to the last one
        focusNode.next = pushedNode;
        this.listLength++;
        return pushedNode;
    }

    insertNode (targetIndex, value) {
        // TBD / TODO
    }

    searchNode (index) {
        let foundNode = this.headNode;
        let counter = 0;
        const errResponse = "No such node in the list";
        // Check if the searched index is present in the list and throw an error if not...
        if (this.listLength === 0 || index < 1 || index > this.listLength) throw new Error(errResponse);
        // ...or find the necessary index in the list
        while (counter < index) {
            foundNode = foundNode.next;
            counter++;
        }
        return foundNode;
    }

    deleteNode (index) {
        let deletedNode = this.headNode;
        let precedingNode = null;
        let returnedData = null;
        let counter = 0;
        const errResponse = "No such node in the list";
        // Check if the deleted index is present in the list and throw an error if not
        if (this.listLength === 0 || index < 0 || index > this.listLength) throw new Error(errResponse);
        // If the deleted index is the head of the list, delete it and reassign the head to the next node
        if (index === 0) {
            this.headNode = deletedNode.next;
            returnedData = deletedNode;
            deletedNode = null;
            this.listLength--;
            return returnedData;
        }
        // In all other cases, find the deleted node, reassign the pointer of the preceding node the next node, null the deleted node and return it's data
        while (counter < index) {
            precedingNode = deletedNode;
            deletedNode = deletedNode.next;
            counter++;
        }
        precedingNode.next = deletedNode.next;
        returnedData = deletedNode;
        deletedNode = null;
        this.listLength--;
        return returnedData;
    }

    sortList () {
        // TBD / TODO
        // https://blog.theodorejb.me/linked-list-sorting/
        // https://www.reddit.com/r/javascript/comments/5s91i0/sorting_a_linked_list/
    }
}

// Testing the LinkedList
const newList = new LinkedList ();
newList.pushNode(35);
newList.pushNode(40);
newList.pushNode(45);
console.log(newList.searchNode(1));
console.log(newList.deleteNode(2));
console.log(newList.listLength);