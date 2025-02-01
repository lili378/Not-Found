setTimeout(() => {
    let spinner = document.querySelector('.spinner-container');
    console.log(spinner);
    spinner.style.display = 'none';

    let spinner_image = document.querySelector('.container img');
    console.log(spinner_image);
    spinner_image.style.display = 'flex';


}, 4000);

setTimeout(() => {
    let header = document.querySelector('.text');
    console.log(header);
    header.style.display = 'none';
}, -4000);

setTimeout(() => {
    let header = document.querySelector('.text');
    console.log(header);
    header.style.display = 'flex';
    header.style.flexDirection = 'column'



}, 4000);