document.querySelector('.calculate-bill-btn').onclick = (event) => {
    event.preventDefault();
    const selectedFood = document.querySelector('select[name="food"]').selectedOptions; 
    // const selectedFood = document.querySelector('select[name="food"]] option:checked')
    const selectDrink = document.querySelector('select[name="drink"]').selectedOptions;
    const timeInput = document.querySelector('input[name="time"]:checked');
    const billInfo = document.querySelector('.bill-info-container');

    if (!selectedFood || !selectDrink || !timeInput) {
        alert('Nhập đầy đủ thông tin');
    } else {
        const selected = [...selectedFood, ...selectDrink];

        billInfo.innerHTML = `
            <table border="1">
                <thead>
                    <tr>
                        <th>Các món đã dùng</th>
                        <th>Tiền</th>
                    </tr>
                </thead>
                <tbody>
                    ${selected.map(option => `
                        <tr>
                            <td>${option.textContent}</td>
                            <td>${option.value}</td>
                        </tr>
                    `).join('')}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Tổng tiền</td>
                        <td>${Math.round(
            (selected.reduce((totalPrice, option) => totalPrice + parseInt(option.value), 0)
                * (timeInput.value === "ban_ngay" ? 1 : 1.1
                )))} đồng</td>
                    </tr>
                </tfoot>
            </table>
        `;
        billInfo.style.display = "block";
    }
}
