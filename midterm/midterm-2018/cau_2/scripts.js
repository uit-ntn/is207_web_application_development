const billTable = document.getElementById('bill-info');
const bill_info = Array.from(document.querySelector('select[name="food"]').options)
    .map((foodOptions) => ({
        name: foodOptions.textContent,
        value: foodOptions.value,
        amount: 0
    }));

const UpdateFood = () => {
    event.preventDefault();
    const foodSelect = document.querySelector('select[name="food"]');
    const selectedOption = foodSelect.options[foodSelect.selectedIndex];
    const selectedFood = bill_info.find(food => food.name === selectedOption.textContent);
    selectedFood.amount++;
    updateBillTable();
};
function updateBillTable() {
    billTable.innerHTML = '';
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Tên món ăn</th><th>Giá</th><th>Số lượng</th>';
    billTable.appendChild(headerRow);
    bill_info.forEach(food => {
        if (food.amount) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${food.name}</td><td>${food.value}</td><td>${food.amount}</td>`;
            billTable.appendChild(row);
        }
    });
}
