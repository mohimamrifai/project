const boxContainer = document.getElementById('box-container');
const inputUang = document.getElementById('inputUang');
const hasil = document.getElementById('hasil');
const optionsSatu = document.getElementById('inputGroupSelect01'); 
const optionsDua = document.getElementById('inputGroupSelect02');
const btnUbah = document.getElementById('btnUbah');



fetch('https://api-exchange-rates.herokuapp.com/list-currency')
    .then(Response => Response.json())
    .then(Response => {
        const data = Response.data.results;
        for(let i = 0; i < data.length; i++){
            boxContainer.innerHTML += `<div class="col-lg-3 col-md-6">
            <div class="box card ps-2 py-3 mt-2">
                <h2>${data[i].currCode}</h2>
                <h4>${data[i].currName}</h4>
            </div>
        </div>`;
        }

    const [...arr] = data;
    
    optionsFu(arr);     
    })
    .catch(Response => console.log(Response));


const BtnDaftar = document.querySelector('.daftar');
const BtnUbah = document.querySelector('.ubah');
const elDaftar = document.querySelector('.daftar-el');
const calculateEl = document.querySelector('.calculateEl');


BtnUbah.addEventListener('click', () => {

    elDaftar.classList.add('non-active');
    calculateEl.classList.remove('non-active');
})

BtnDaftar.addEventListener('click', () => {
    elDaftar.classList.remove('non-active');
    calculateEl.classList.add('non-active');
});





function optionsFu(arr) {

    const result = [];
    const nameR = [];
    for(let i = 0; i < arr.length; i++){
        

        let optiontext = arr[i].currCode;
        let newName = arr[i].currName;
        result.push(optiontext);
        nameR.push(newName);
    }

    let option =  "<option value='IDR'>pounstreling</option>";

    for(let j =0; j < arr.length; j++){
        option += "<option value='"+result[j]+"'>"+nameR[j]+"</option>";
    }

    optionsSatu.innerHTML = option;
    optionsDua.innerHTML = option;

}



btnUbah.addEventListener('click', () => {

    // ambil value input uang
    // ambil value option
    const vUang = inputUang.value;
    const vOpS = optionsSatu.value;
    const vOpD = optionsDua.value;

    fetch(`https://api-exchange-rates.herokuapp.com/calculator?from=${vOpS}&to=${vOpD}&amount=${vUang}`)
    .then(Response => Response.json())
    .then(Response => {
        const result = Response.data;

        hasil.value = result.toResult;
    })

});


