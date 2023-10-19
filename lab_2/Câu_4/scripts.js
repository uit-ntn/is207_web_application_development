function calculateTotal() {
    event.preventDefault();
    const date = document.getElementById("date-time").value;
    const filmSelect = document.getElementById("film");
    const film = filmSelect.options[filmSelect.selectedIndex].textContent;
    const showtimeSelect = document.getElementById("showtime");
    const showtime = showtimeSelect.options[showtimeSelect.selectedIndex].textContent;
    const cinemaSelect = document.getElementById("cinema");
    const cinema = cinemaSelect.options[cinemaSelect.selectedIndex].textContent;
    const selectedSeats = Array.from(document.getElementById("seat").selectedOptions).map(option => option.textContent);

    if (!date || !film || !showtime || !cinema || selectedSeats.length === 0) {
        alert("Vui lòng điền đầy đủ thông tin và chọn ít nhất một ghế.");
        return;
    }

    const formattedDate = new Date(date).toLocaleDateString("vi-VN", { year: 'numeric', month: '2-digit', day: '2-digit' });
    const totalPrice = parseFloat(showtimeSelect.value) * parseFloat(cinemaSelect.value) * selectedSeats.length;

    const selectedSeatsInfo = selectedSeats.map(seat => `
    <tr class ="seat-box">
    <td>${seat}</td>
    <td>${parseFloat(showtimeSelect.value)} đ</td>
    </tr>`).join('');

    const ticketInfo = `
    <table>
        <tr>
            <th colspan="2">Thông tin vé</th>
        </tr>
        <tr>
            <td>Khách hàng</td>
            <td>Nhân Nguy Hiểm</td>
        </tr>
        <tr>
            <td>Ngày chiếu</td>
            <td>${formattedDate}</td>
        </tr>
        <tr>
            <td>Phim</td>
            <td>${film}</td>
        </tr>
        <tr>
            <td>Suất chiếu</td>
            <td>${showtime}</td>
        </tr>
        <tr>
            <td>Phòng chiếu</td>
            <td>${cinema}</td>
        </tr>
        <tr class = "seat-box">
        <td>Ghế</th>
        <td>Giá vé</th>
        </tr class="seat-box">
        ${selectedSeatsInfo}
        <tr>
            <th>Tổng tiền</td>
            <th>${totalPrice} đ</th>
        </tr>
    </table>
`;

    document.querySelector('.ticket-info').innerHTML = ticketInfo;
}
