function getDateTime() {
    let today = new Date();
    const currentDay =
      today.getDay() + 1 !== 1 ? `Thứ ${today.getDay() + 1}` : "Chủ Nhật";
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  
    today = `${currentDay}, ${mm}/${dd}/${yyyy}, ${hours}:${minutes}`;
    return today;
  }
  
  function addFood(name, money) {
    str = "<tr class='foodName'><td class='foodName-name'>" + name + "</td>";
    str += "<td><input class = 'qnt' value='1'></td>";
    str += "<td><input class='foodMoney' value=" + money + ">" + "</td><td>";
    str += "<button class = 'btn-del'> Xoá </button></tr>";
    return str;
}

$(".menu__table-day").html(getDateTime());

var seatNumber;
$("#seat").change(function () {
    seatNumber = $("#seat").val();
});

$("#food").on("change", function () {
    var listFood,
        totalMoney,
        tableReceiptMeal,
        foodMoney = $("#food").val(),
        foodName = $("#food :selected").text();
    if (seatNumber == "Bàn 1") {
        totalMoney = $(".total-money-1");
        listFood = $(".receipt-meal-1 .foodName");
        tableReceiptMeal = $(".receipt-meal-1 tr:last");
    } else if (seatNumber == "Bàn 2") {
        totalMoney = $(".total-money-2");
        listFood = $(".receipt-meal-2 .foodName");
        tableReceiptMeal = $(".receipt-meal-2 tr:last");
    } else {
        totalMoney = $(".total-money-3");
        listFood = $(".receipt-meal-3 .foodName");
        tableReceiptMeal = $(".receipt-meal-3 tr:last");
    }

    var flag = 0;
    if (listFood.length != 0) {
        listFood.each(function () {
            if ($(this).find(".foodName-name").text() == foodName) {
                var valueQnt = $(this).find(".qnt"),
                    valueMoney = $(this).find(".foodMoney"); 
                valueQnt.val(Number(valueQnt.val()) + 1); 
                valueMoney.val(Number(valueMoney.val()) + Number(money));
                totalMoney.text(Number(totalMoney.text()) + Number(foodMoney));
                flag = 1;
            }
        });
    }
    if (flag == 0 || listFood.length == 0) {
        tableReceiptMeal.before(addFood(foodName, foodMoney));
        totalMoney.text(Number(totalMoney.text()) + Number(foodMoney));
    }
});

$(document).on("click", ".btn-del", function (event) {
    event.preventDefault();
    var moneyDel = $(this).parents(".foodName").find(".foodMoney").val(),
        newTotalMoney = $(this).parents(".receipt-meal").find(".total-money"),
        str = Number(newTotalMoney.text()) - Number(moneyDel);
    newTotalMoney.text(str);
    $(this).parent().parent().remove();
});

$(".btn-print").click(function (event) {
    event.preventDefault();
    localStorage.setItem("dateTime", getDateTime());
    localStorage.setItem("staffName", $(".menu__table-name").text());
    localStorage.setItem("seatNum", $(this).attr("name"));
    var htmlFoodList, listFood, totalMoney;
    if ($(this)[0].name == "Số 1") {
        listFood = $(".receipt-meal-1 .foodName");
        totalMoney = $(".total-money-1").text();
    } else if ($(this)[0].name == "Số 2") {
        listFood = $(".receipt-meal-2 .foodName");
        totalMoney = $(".total-money-2").text();
    } else {
        listFood = $(".receipt-meal-3 .foodName");
        totalMoney = $(".total-money-3").text();
    }
    listFood.each(function () {
        var name = $(this).find(".foodName-name").text(),
            money = $(this).find(".foodMoney").val(),
            qnt = $(this).find(".qnt").val();
        htmlFoodList += "<tr><td>" + name + "</td>" + "<td>" + qnt + "</td>" + "<td>" + money + "</td></tr>";
    });
    htmlFoodList += "<tr><th>Tổng tiền</th><th class='print-total-money' colspan='2'>" + totalMoney + " đ</th>'</tr>";
    localStorage.setItem("foodList", htmlFoodList);
    window.location.href = "./receipt_infor.html";
});