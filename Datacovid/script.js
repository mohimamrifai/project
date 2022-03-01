const elBox = document.querySelector(".box");

const getData = async () => {
  const resp = await fetch(
    "https://apicovid19indonesia-v2.vercel.app/api/indonesia"
  );
  const data = await resp.json();

  const positif = parseFormat(data.positif);
  const diRawat = parseFormat(data.dirawat);
  const sembuh = parseFormat(data.sembuh);
  const meninggal = parseFormat(data.meninggal);

  elBox.innerHTML = `
  <div class="row mt-3">
                <div class="col-lg-3">
                    <div class="card shadow p-3 bg-primary text-white text-center mt-2">
                        <h2 class="uppercase">Positif</h2>
                        <h4>${positif} orang</h4>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card shadow p-3 bg-info text-white text-center mt-2">
                        <h2>Di rawat</h2>
                        <h4>${diRawat} orang</h4>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card shadow p-3 bg-success text-white text-center mt-2">
                        <h2>Sembuh</h2>
                        <h4>${sembuh} orang</h4>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card shadow p-3 bg-danger text-white text-center mt-2">
                        <h2>Meninggal</h2>
                        <h4>${meninggal} orang</h4>
                    </div>
                </div>
                <p class="text-center mt-3">last update: ${data.lastUpdate}</p>
            </div>
  `;
};

function parseFormat(data) {
  let number_string = data.toString(),
    sisa = number_string.length % 3,
    format = number_string.substr(0, sisa),
    formatrb = number_string.substr(sisa).match(/\d{3}/g);

  if (formatrb) {
    separator = sisa ? "." : "";
    format += separator + formatrb.join(".");
  }
  return format;
}
getData();
