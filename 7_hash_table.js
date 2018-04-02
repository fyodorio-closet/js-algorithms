// Based on https://hackernoon.com/data-structures-in-javascript-pt-2-hash-tables-8a6cc8ae3bd3

class hashTable {
    constructor(size) {
        this.list = new Array(size);
        this.listLength = this.list.length;
    }

    hash(key) {
        let total = 0;
        for ( let i = 0; i < key.length; i++ ) {
            total += key.charCodeAt(i);
        }
        let index = total % this.listLength;
        return index;
    }
    
    insert(key, value) {
        let index = this.hash(key);
        if (!this.list[index]) {
            this.list[index] = new hashNode(key, value);
        } else if (this.list[index].key === key) {
            this.list[index].value = value;
        } else {
            let currentNode = this.list[index];
            while (currentNode.next) {
                if (currentNode.next.key === key) {
                    currentNode.next.value = value;
                    return;
                }
                currentNode = currentNode.next;
            }
            currentNode.next = new hashNode(key, value);
        }
    }

    get(key) {
        let index = this.hash(key);
        if (!this.list[index]) {
            return null;
        }
        let currentNode = this.list[index];
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    getAll() {
        let allNodes = [];
        for (let i = 0; i < this.listLength; i++) {
            let currentNode = this.list[i];
            while (currentNode) {
                allNodes.push(currentNode);
                currentNode = currentNode.next;
            }
        }
        return allNodes;
    }
}

class hashNode {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next || null;
    }
}

let myHashTable = new hashTable(30);
myHashTable.insert('Fyodor', 35);
myHashTable.insert('Maria', 30);
myHashTable.insert('Timothy', 8);
myHashTable.insert('Nathan', 5);
console.log('Maria is ', myHashTable.get('Maria'));
console.log('Nathan is ', myHashTable.get('Nathan'));
console.log('All of them are ', myHashTable.getAll());