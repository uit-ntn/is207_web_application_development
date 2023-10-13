document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const fullName = form.querySelector("input[type='text']").value;
        const address = form.querySelector("input.address").value;
        const phone = form.querySelector("input[type='text']").value;
        const selectedTour = form.querySelector("select[name='tour']").value;
        const adultCount = form.querySelectorAll("input[type='number']")[0].value;
        const childCount = form.querySelectorAll("input[type='number']")[1].value;
        const note = form.querySelector(".note input").value;

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString("vi-VN", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });

        const registrationInfo = `
            Ngày đăng ký: ${formattedDate}<br>
            Nhân Viên: Họ tên nhân viên<br>
            Họ tên khách: ${fullName}<br>
            Địa chỉ: ${address}<br>
            Tour: ${selectedTour}<br>
            Số lượng đoàn khách - Người lớn: ${adultCount}, Trẻ em: ${childCount}<br>
            Ghi chú: ${note}
        `;

        document.getElementById("registration-info").innerHTML = registrationInfo;
    });
});
