const UCLN = (a, b) => {
    while (a !== b) a > b ? a -= b : b -= a;
    return a;
}

document.getElementById("DONGIAN").addEventListener('click', (event) => {
    event.preventDefault();
    const tuso = parseInt(document.getElementById("IDTU").value);
    const mauso = parseInt(document.getElementById("IDMAU").value);
    if (!isNaN(tuso) && !isNaN(mauso) && mauso !== 0) {
        const ucln = UCLN(tuso, mauso);
        document.getElementById("IDKETQUA").innerHTML =
            `Phân số sau khi đơn giản là ${tuso / ucln} / ${mauso / ucln}`;
    }
});
