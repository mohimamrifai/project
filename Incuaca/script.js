const textInput = document.getElementById('text-input');
const btn = document.getElementById('cari');
const card = document.getElementById('card');
const root = document.getElementById('root');
const cardKecil = document.getElementById('cardKecil');
const box = document.getElementById('box');


 fetch('https://cuaca-gempa-rest-api.vercel.app/weather/indonesia')
    .then(response => response.json())
    .then(response => {
        const data = response.data;
        const domain = data.areas[0].domain;
        const params = data.areas[0].params;

        root.innerHTML = `<div class="row">
        <div class="col-4 offset-2">
            <div class="info" >
                <div class="card mt-5 p-4">
                    <img src="https://data.bmkg.go.id/include/assets/img/cuaca.svg" alt="" width="150">
                    <h5>${domain}</h5>
                    <h1>${params[5].times[0].celcius}</h1>
                    <h5><i></i>${params[6].times[0].name}</h5>
                </div>
            </div>
        </div>
        <div class="col-4 mt-5">
            <table class="table table-borderless">
                  <tbody>
                    <tr>
                        <th>Suhu udara min</th>
                        <td>${params[4].times[0].celcius}</td>
                    </tr>
                    <tr>
                      <th>suhu udara max</th>
                      <td>${params[2].times[0].celcius}</td>
                    </tr>
                    <tr>
                      <th>Kelembapan Udara</th>
                      <td>${params[0].times[0].value}</td>
                    </tr>
                    <tr>
                      <th>Kecepatan Angin</th>
                      <td>${params[8].times[1].kt} knot</td>
                    </tr>
                    <tr>
                      <th>Arah Angin</th>
                      <td>${params[7].times[1].deg} Deg</td>
                    </tr>
                  </tbody>
              </table>
        </div>
        
    </div>`;


    for( let i = 1; i < 33; i++){
        box.innerHTML += `
        <div class="card-kecil mt-5 p-4 col-3 text-center border">
            <img src="https://data.bmkg.go.id/include/assets/img/cuaca.svg" alt="" width="100" >
            <h5>${data.areas[i].domain}</h5>
            <h1>${data.areas[i].params[5].times[0].celcius}</h1>
            <h5><i></i>${data.areas[i].params[6].times[0].name}</h5>
        </div>`;
    }
    

        

    });
