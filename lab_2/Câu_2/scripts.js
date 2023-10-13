document.querySelector('.calculate-bill-btn').addEventListener('click', () => {
    event.preventDefault();
    const selectedFood = Array.from(document.querySelector('select[name="food"]').selectedOptions).map(option => option.value);
    const selectedDrink = Array.from(document.querySelector('select[name="drink"]').selectedOptions).map(option => option.value);
    const selectedTime = document.querySelector('input[name="time"]:checked');
    const billInfo = document.querySelector('.bill-info');
    if (!selectedTime) {
        alert("Vui lòng chọn thời điểm.");
        return;
    }

    const orderSummary = document.getElementById("order-summary");
    const selectedItemsList = document.getElementById("selected-items");
    const totalCost = document.getElementById("total-cost");

    while (selectedItemsList.firstChild) {
        selectedItemsList.removeChild(selectedItemsList.firstChild);
    }

    const selectedItems = [...selectedFood, ...selectedDrink];
    let totalPrice = 0;

    selectedItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        selectedItemsList.appendChild(listItem);
        totalPrice += 10000;
    });

    totalCost.textContent = totalPrice + " đồng";
    orderSummary.style.display = "block";
    billInfo.style.display = "block";

})