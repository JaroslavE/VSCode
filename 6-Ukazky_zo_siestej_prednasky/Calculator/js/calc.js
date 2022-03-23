// Calculator app
class Calc extends App {
    constructor(element) {
        // Initialize the application
        super(element)

        this.decimalAdded = false
        this.operators = ['+', '-', 'x', '÷'];

        // Add GUI components

        // Add a container for the calculator buttons
        var container = new Widget(0, 0, this.width, this.height)
        this.add(container)

        // Add display
        this.display = new Label("", 30, 60, 115, 25)
        this.display.textAlign = "right"
        container.add(this.display)

        // Button action function to call onButtonPress
        var calc = this
        var buttonAction = function() {
            calc.onButtonPress(this)
        }

        // Generate number buttons
        var number = 1
        for (var y = 190; y >= 130; y = y - 30) {
            for (var x = 30; x <= 90; x = x + 30) {
                var button = new Button(number++, x, y, 25, 25)
                // Associate button action with the
                button.action = buttonAction
                container.add(button)
            }
        }

        // Other buttons
        var zeroButton = new Button("0", 30, 220, 55, 25)
        zeroButton.action = buttonAction
        container.add(zeroButton)

        var decButton = new Button(".", 90, 220, 25, 25)
        decButton.action = buttonAction
        container.add(decButton)

        var multiplyButton = new Button("*", 120, 130, 25, 25)
        multiplyButton.action = buttonAction
        container.add(multiplyButton)

        var subtractButton = new Button("-", 120, 160, 25, 25)
        subtractButton.action = buttonAction
        container.add(subtractButton)

        var addButton = new Button("+", 120, 190, 25, 25)
        addButton.action = buttonAction
        container.add(addButton)

        var equalsButton = new Button("=", 120, 220, 25, 25)
        equalsButton.action = buttonAction
        container.add(equalsButton)
    }

    // Handle keyboard event
    // @event - event information
    onkey(event) {
        var key = event.which
        this.onButtonPress({text: key})
    }

    // Handle button action
    // @button - button that was pressed
    onButtonPress(button) {
        // Get the input and button values
        var inputVal = this.display.text;
        var btnVal = button.text;

        // Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
        // If clear key is pressed, erase everything
        if (btnVal == 'C') {
            this.display.text = '';
            this.decimalAdded = false;
        }

        // If eval key is pressed, calculate and display the result
        else if (btnVal == '=') {
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];

            // Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            // Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
            if (this.operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');

            if (equation)
                this.display.text = String(eval(equation));

            this.decimalAdded = false;
        }

        // Basic functionality of the calculator is complete. But there are some problems like
        // 1. No two operators should be added consecutively.
        // 2. The equation shouldn't start from an operator except minus
        // 3. not more than 1 decimal should be there in a number

        // We'll fix these issues using some simple checks

        // indexOf works only in IE9+
        else if (this.operators.indexOf(btnVal) > -1) {
            // Operator is clicked
            // Get the last character from the equation
            var lastChar = inputVal[inputVal.length - 1];

            // Only add operator if input is not empty and there is no operator at the last
            if (inputVal != '' && this.operators.indexOf(lastChar) == -1)
                this.display.text += btnVal;

            // Allow minus if the string is empty
            else if (inputVal == '' && btnVal == '-')
                this.display.text += btnVal;

            // Replace the last operator (if exists) with the newly pressed operator
            if (this.operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                // Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
                this.display.text = inputVal.replace(/.$/, btnVal);
            }

            this.decimalAdded = false;
        }

        // Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
        else if (btnVal == '.') {
            if (!this.decimalAdded) {
                this.display.text += btnVal;
                this.decimalAdded = true;
            }
        }

        // if any other key is pressed, just append it
        else {
            this.display.text += btnVal;
        }
    }
}
