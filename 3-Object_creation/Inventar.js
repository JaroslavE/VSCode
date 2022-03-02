class Inventar{
    items = [];

    addNewItem(item){
        this.items.push(item);
    }

    deleteItem(itemName){
        for(let i = 0; i<this.items.length; i++){
            if(itemName.localeCompare(this.items[i].name) == 0) {
                console.log("Vymazavam Item: " + itemName);
                this.items.splice(i,1);
                break;
            }
        }
    }

    get_AllItems(){
        return this.items;
    }
}