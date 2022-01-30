const reload = document.getElementById('reload');
const root = document.getElementById('root');
const pesan = document.getElementById('pesan');


let data = fetch('https://cuaca-gempa-rest-api.vercel.app/quake')
    .then(response => response.json())
    .then(response => {
        const data = response.data;
        root.innerHTML = `
                        <ul class="list-group mt-3">
<li class="list-group-item text-center text-danger"><h2 class="fs-5">${data.wilayah}</h2></li>
<li class="list-group-item"><b class="text-uppercase">Tanggal</b> : ${data.tanggal}</li>
<li class="list-group-item"><b class="text-uppercase">jam</b> : ${data.jam}</li><li class="list-group-item"><b class="text-uppercase">datetime</b> : ${data.datetime}</li><li class="list-group-item"><b class="text-uppercase">koordinan</b> : ${data.coordinates}</li><li class="list-group-item"><b class="text-uppercase">lintang</b> : ${data.lintang}</li><li class="list-group-item"><b class="text-uppercase">bujur</b> : ${data.bujur}</li><li class="list-group-item"><b class="text-uppercase">magnitude</b> : ${data.magnitude}</li><li class="list-group-item"><b class="text-uppercase">kedalaman</b> : ${data.kedalaman}</li><li class="list-group-item"><b class="text-uppercase">potensi</b> : ${data.potensi}</li>
          </ul>`
    });


reload.addEventListener('click', () => {
    location.reload();
});


