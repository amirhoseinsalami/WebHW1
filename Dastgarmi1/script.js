function evaluateFormulas() {
    document.querySelectorAll("formula").forEach(formula => {
        
            let expression = formula.getAttribute("evaluator");
            let inputs = document.querySelectorAll("input");
            
            inputs.forEach(input => {
                let id = input.id;
                let value = input.value.trim(); // Get input value
                // Check if value is a valid number
                
                if (!(value === "")){
                    if (isNaN(value)){
                        return;
                    }
                }
                else value=0
            
                
                value = parseFloat(value); // Convert to number
                const regex = new RegExp(`\\b${id}\\b`, "g");
                expression = expression.replaceAll(regex, value);
                console.log(expression)

            });

            

            let result = eval(expression); // Evaluate the expression
            formula.textContent = isFinite(result) ? Number(result.toPrecision(5)) : "Invalid Formula";
            if (formula.textContent == "Invalid Formula") formula.style.color= "#ff0000";
            else formula.style.color= "#000000";
        
    });
}

// Attach event listener to all input fields
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", evaluateFormulas);
});

// Initial evaluation on page load
evaluateFormulas();