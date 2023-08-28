// Get references to the HTML elements
const form = document.getElementById('sci-form');
const resultValue = document.getElementById('result-value');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get user inputs from the form
    const users = parseFloat(form.elements.users.value);
    const power = parseFloat(form.elements.power.value);
    const location = form.elements.location.value;
    const pageSize = parseFloat(form.elements['page-size'].value);
    const requests = parseFloat(form.elements.requests.value);
    const serverEfficiency = parseFloat(form.elements['server-efficiency'].value);
    const deviceType = form.elements['device-type'].value;
    const deviceConsumption = parseFloat(form.elements['device-consumption'].value);
    const loadTime = parseFloat(form.elements['load-time'].value);
    const carbonIntensity = parseFloat(form.elements['carbon-intensity'].value);

    // Calculate SCI value based on the new inputs
    const serverEnergyConsumption = serverEfficiency * pageSize; // kWh
    const deviceEnergyConsumption = deviceConsumption * pageSize * requests; // kWh
    const totalEnergyConsumption = serverEnergyConsumption + deviceEnergyConsumption; // kWh
    const totalCarbonEmissions = totalEnergyConsumption * carbonIntensity; // gCO2

    const sciValue = (totalCarbonEmissions / users).toFixed(2);

    // Update the result value on the page
    resultValue.textContent = sciValue + ' gCO2eq/user';

    // Optionally, you could send the data to a server for more accurate calculations
    // and store the data for future reference
});
