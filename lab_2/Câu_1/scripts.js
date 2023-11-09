// const calculateSalary = () => {
//     event.preventDefault();
//     const salary = parseFloat(document.querySelector('.salary-input').value);
//     const coefficient = parseFloat(document.querySelector('.coefficient-input').value);
//     const income = document.querySelector('.income');

//     if (!isNaN(salary) && !isNaN(coefficient)) {
//       income.textContent = `${salary * coefficient}`;
//     } else {
//       income.textContent = "nhập giá trị hợp lệ";
//     }
//   }
//   document.querySelector('.calculate-salary-btn').addEventListener('click', calculateSalary);

$(document).ready(() => {

  $(".calculate-salary-btn").on('click',() => {
    event.preventDefault();
    const salary = $('.salary-input').val();
    const coefficient = $('.coefficient-input').val();
    const income = $('.income');
    if (!isNaN(salary) && !isNaN(coefficient))
      income.text(`${salary * coefficient}`)
    else
      income.text("nhập giá trị hợp lệ");
  });
})