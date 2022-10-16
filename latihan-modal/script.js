function showModal(){
    setTimeout(() => {
    const modal = document.querySelector('.modal_satu');
    modal.style.display = 'block';
    }, 200)
}

document.querySelector('.modal_satu').style.display = 'none';


function btnBatal(){
    setTimeout(()=> {
    const modal = document.querySelector('.modal_satu');
    modal.style.display = 'none';
    }, 200)
}