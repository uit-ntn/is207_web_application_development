const calculateSalary = () => {
    event.preventDefault();
    const salary = parseFloat(document.querySelector('.salary-input').value);
    const coefficient = parseFloat(document.querySelector('.coefficient-input').value);
    const income = document.querySelector('.income');

    if (!isNaN(salary) && !isNaN(coefficient)) {
      income.textContent = `${salary * coefficient}`;
    } else {
      income.textContent = "nhập giá trị hợp lệ";
    }
  }
  document.querySelector('.calculate-salary-btn').addEventListener('click', calculateSalary);


