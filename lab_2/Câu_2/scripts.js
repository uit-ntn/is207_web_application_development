document.querySelector(".calculate-bill-btn").onclick = (e) => {
    e.preventDefault();

    const foodSelect = document.querySelector('select[name="food"]');
    const drinkSelect = document.querySelector('select[name="drink"]');
    const timeRadio = document.querySelector('input[name="time"]:checked');

    const selectItems = [...foodSelect.options, ...drinkSelect.options];
    for (item in selectItems) {

    }
    console.log(foodSelect);
    console.log(drinkSelect);
    console.log(timeRadio);
    console.log(selectItems);

};