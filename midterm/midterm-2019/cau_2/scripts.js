CalculateMoney = () => {
    event.preventDefault();
    const selectedDrinks = Array.from(document.getElementById('drink').selectedOptions);
    const time = document.querySelector('input[type="checkbox"]:checked');
    const bill_info = document.getElementById('bill-info');
    bill_info.innerHTML = `
            <tr>
                <th>STT</th>
                <th>Các món đã chọn</th>
                <th>Tiền</th>
            </tr>
            ${selectedDrinks.map((drink, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${drink.textContent}</td>
                    <td>${drink.value}</td>
                </tr>
            `).join('')}

            <tr>
            <td colspan="2">tổng tiền</td>
            <td> ${(selectedDrinks.reduce((total, drink) => total += parseFloat(drink.value), 0)) * (time.value == "ban-dem" ? 1.2 : 1)}</td>
            <tr>
    `;
}
