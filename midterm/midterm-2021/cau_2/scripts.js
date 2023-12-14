$(document).ready(() => {
    const cart = [];
    const cartTable = $("#cart-info");
    const updateTable = () => {
        cartTable.empty();
        cart.forEach(item => {
            cartTable.append(`
                <tr>
                    <td>${item.name}</td>
                    <td>${item.value}</td>
                    <td>${item.amount}</td>
                    <td><button class="delete-btn" data-name="${item.name}">Xóa</button></td>
                </tr>
            `);
        });
    };

    $(".buy-btn").click(function (event) {
        event.preventDefault();
        const productName = $(this).prev("img").attr("name");
        const productValue = parseFloat($(this).prev("img").attr("value"));
        const existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.amount++;
            existingItem.value = existingItem.amount * productValue;
        } else {
            cart.push({ name: productName, value: productValue, amount: 1 });
        }

        updateTable();
        if (cart.length > 0) {
            showCheckoutButton();
        }
    });

    $(document).on("click", ".delete-btn", function (event) {
        event.preventDefault();
        const nameToDelete = $(this).data("name");
        const itemIndex = cart.findIndex(item => item.name === nameToDelete);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
        }
        updateTable();
        if (cart.length === 0) {
            hideCheckoutButton();
        }
    });
    function showCheckoutButton() {
        cartTable.append(`<tr> 
        <td> 
        <button class="checkout-btn"> Thanh toán
        </td>
        </tr>`)
        $(".checkout-btn").click(function (event) {
            event.preventDefault();
            const total = cart.reduce((total, item) => total += item.amount * item.value, 0);
            cartTable.append(<tr><td>Tổng tiền: ${total}</td></tr>);
        });
    }
    function hideCheckoutButton() {
        $(".checkout-btn").remove();
    }

})