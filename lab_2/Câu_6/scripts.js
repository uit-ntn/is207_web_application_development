document.querySelector('.sign-up-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const date = new Date();
    const formatDateToVietnamese = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1; // do tháng bắt đầu từ 0;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    const formattedDate = formatDateToVietnamese(date);

    const name = document.querySelector('input[name="full-name"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const phoneNumber = document.querySelector('input[name="phone-number"]').value;
    const tourSelect = document.querySelector('select[name="tour"]');
    const tourIndex = tourSelect.selectedIndex;
    const amountChild = document.querySelector('input[name="amount-child"]').value;
    const amountAdult = document.querySelector('input[name="amount-adult"]').value;
    const note = document.querySelector('.note-input').value;
    const amountChildValue = amountChild > 0 ? amountChild : 0;
    const amountAdultValue = amountAdult > 0 ? amountAdult : 0;

    const selectedOption = tourSelect.options[tourIndex];

    const tourInfo = document.querySelector('.tour-info');
    const amountInfo = document.querySelector('.amount-info');

    tourInfo.innerHTML = `
    <table>
        <tr>
            <th colspan = 2>Thông tin đăng ký</th>
        </tr>
        <tr>
            <td>Ngày đăng ký:</td>
            <td>${formattedDate}</td>
        </tr>
        <tr>
            <td>Nhân viên:</td>
            <td>Nguyễn Thanh Nhân</td>
        </tr>
        <tr>
            <td>Họ tên khách:</td>
            <td>${name}</td>
        </tr>
        <tr>
            <td>Địa chỉ:</td>
            <td>${address}</td>
        </tr>
        <tr>
            <td>Tour:</td>
            <td>${selectedOption.text}</td>
        </tr>
        <tr>
            <td>Ghi chú:</td>
            <td>${note}</td>
        </tr>
    </table>
`;


    let totalMoney = 0;
    amountInfo.innerHTML = `
    <div class="amount-info-header">Số lượng đoàn khách</div>
        <div class="amount-info-title">
            <div class="amount-info-row header">
                <div>Loại</div>
                <div>Số lượng</div>
                <div>Đơn giá</div>
                <div>Thành tiền</div>
            </div>
    `;

    if (amountAdultValue > 0) {
        const adultMoney = amountAdultValue * selectedOption.value;
        amountInfo.innerHTML += `
            <div class="amount-info-row">
                <div>Người lớn</div>
                <div>${amountAdultValue}</div>
                <div>${selectedOption.value}</div>
                <div>${adultMoney}</div>
            </div>
        `;
        totalMoney += adultMoney;
    }

    if (amountChildValue > 0) {
        const childMoney = (amountChildValue * selectedOption.value) / 2;
        amountInfo.innerHTML += `
            <div class="amount-info-row">
                <div>Trẻ em</div>
                <div>${amountChildValue}</div>
                <div>${selectedOption.value / 2}</div>
                <div>${childMoney}</div>
            </div>
        `;
        totalMoney += childMoney;
    }

    amountInfo.innerHTML += `
        <div class="amount-info-row total">
            <div>Tổng tiền</div>
            <div></div>
            <div></div>
            <div>${totalMoney}</div>
        </div>
    </div>`;


    tourInfo.style.display = amountInfo.style.display = "block";
});
