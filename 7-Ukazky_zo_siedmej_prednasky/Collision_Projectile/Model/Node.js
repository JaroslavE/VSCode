class Node{

    constructor(){
        this.observerCollection = [];
    }

    addObs(obs){
        this.observerCollection.push(obs);
    }

    removeObs(obs){
        var index = this.observerCollection.indexOf(obs);
        delete this.observerCollection[index];
    }

    notify(event, argument){
        for(var index in this.observerCollection){
            var node = this.observerCollection[index];
            if(typeof(node[event]) == "function")
                node[event](argument);
        }
    }
}