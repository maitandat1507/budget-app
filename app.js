// BUDGET CONTROLLER
var budgetController = (function() {
	//
})();


// UI CONTROLLER
var UIController = (function () {

	return {
		getinput: function() {
			return {
				type: document.querySelector('.add__type').value,
				description: document.querySelector('.add__description').value,
				value: document.querySelector('.add__value').value,
			}
		}
	}

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

	var ctrlAddItem = function() {

		// 1. Get input data
		var input = UICtrl.getinput();
		console.log(input);

		// 2. Add item to budget controller

		// 3. Add item to UI

		// 4. Calculate budget

		// 5. Display the budget on UI

	}
	
	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event) {

		if (event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();
		}

	});

})(budgetController, UIController);