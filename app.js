var budgetController = (function () {

    var Expense = function (id, description, cost) {
        this.id = id;
        this.description = description;
        this.cost = cost;
    }

    var Income = function (id, description, cost) {
        this.id = id;
        this.description = description;
        this.cost = cost;
    }

    var allData = {
        allItems: {
            inc: [],
            dec: []
        },
        total: {
            inc: 0,
            exp: 0
        }
    }

    var addItem = function (type, title, cost) {
        var newItem, ID;
        if (allData.allItems[type].length > 0) {
            ID = allData.allItems[type].length;
        } else {
            ID = 0
        }
        if (type == 'inc') {
            newItem = new Income(ID, title, cost);
        } else {
            newItem = new Expense(ID, title, cost);
        }

        allData.allItems[type].push(newItem);

    }
    
    
    
    var test= function(){return allData};
    

    return {
        add: add,
        addItem: addItem,
        test : test,
        
    }

})();


var UIController = (function () {

    var getInput= function () {
            return {
                type: document.getElementById('type').value,
                title: document.getElementById('title').value,
                cost: parseFloat(document.getElementById('cost').value)
            }
    }
    
    var addToUI= function(input)
    {   
        var htmlINC="";
        console.log("Called");
        if(input.type == 'inc')
            {
             htmlINC="<tr class='$type$_row'><td>$title$</td><td>$cost$</td><td><button class='delete_btn'><i class='ion-ios-close-outline'</i></button></td></tr>";
                htmlINC=htmlINC.replace('$title$',input.title);
                htmlINC=htmlINC.replace('$cost$',input.cost);
                htmlINC=htmlINC.replace('$type$',input.type)
                document.getElementById('income_table').insertAdjacentHTML('beforeend',htmlINC);      
            }
    }
    return {
                getInput : getInput,
                addToUI : addToUI
            };
        
    
})();

var Controller = (function (bgt, ui) {

    //Initialize
    var init = function () {
        document.getElementById('add').addEventListener('click', addData);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                addData();
            }
        });
    }


    //Get Data
    var addData = function () {
        var input = ui.getInput();
        console.log(input);
        //Add Data to List
        bgt.addItem(input.type, input.title, input.cost)
        //Show Data on UI
        ui.addToUI(input);
    };

    
    

    init();

    
    
    



})(budgetController, UIController);
