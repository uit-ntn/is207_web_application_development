document.querySelector('.sign-up-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    const name = document.querySelector('input[name="full-name"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const phoneNumer = document.querySelector('input[name="phone-number"]').value;

    const selectionItems = [...name,...address];

    console.log(name,address,phoneNumer);
    console.log(selectionItems);
})