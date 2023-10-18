const updateTotal = () => {
    const rows = document.querySelectorAll('tr:not(:first-child):not(:last-of-type)');
    let grandTotal = 0;

    rows.forEach(row => {
        const amount = parseInt(row.querySelector('.amount').value);
        const unitPrice = parseInt(row.querySelector('.unit-price').value);
        const total = amount * unitPrice;
        if (amount && unitPrice) {
            row.querySelector('.total-price').textContent = total;
            grandTotal += total;
        }
    });

    document.querySelector('.grand-total').textContent = grandTotal;
};

const removeRow = button => {
    button.parentNode.parentNode.remove();
    updateTotal();
};
