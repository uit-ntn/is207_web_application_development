const solve = () => {
    const a = parseFloat(document.querySelector('input[name="a"]').value);
    const b = parseFloat(document.querySelector('input[name="b"]').value);
    const c = parseFloat(document.querySelector('input[name="c"]').value);
    const result = document.getElementById("result");

    if (a === 0) {
        if (b === 0) {
            result.innerHTML = "Phương trình vô nghiệm";
        } else {
            const x = -c / b;
            result.innerHTML = `Phương trình có 1 nghiệm x = ${x}`;
        }
    } else {
        const delta = b ** 2 - 4 * a * c;
        if (delta < 0) {
            result.innerHTML = "Phương trình vô nghiệm";
        } else if (delta === 0) {
            const x = -b / (2 * a);
            result.innerHTML = `Phương trình có nghiệm kép x1 = x2 = ${x}`;
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            result.innerHTML = `Phương trình có 2 nghiệm phân biệt x1 = ${x1} và x2 = ${x2}`;
        }
    }
}
