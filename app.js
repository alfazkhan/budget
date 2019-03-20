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
        if (allData.allItems[type] > 0) {
            ID = allData.allItems[type].length + 1;
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
        test : test
    }

})();


var UIController = (function () {

    return {

        getInput: function () {
            return {
                type: document.getElementById('type').value,
                title: document.getElementById('title').value,
                cost: document.getElementById('cost').value
            };
        }
    }
})();

var Controller = (function (bgt, ui) {

    //Initialize
    var init = function () {
        document.getElementById('add').addEventListener('click', addData);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                addData();
            }
        });
    }


    //Get Data
    var addData = function () {
        var input = ui.getInput();
        bgt.addItem(input.type, input.title, input.cost)
    };



    init();

    //Add Data to List

    //Show Data on UI

})(budgetController, UIController);
