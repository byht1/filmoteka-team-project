// function loadData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000);
//   });
// }

// loadData().then(() => {
//   let preloaderEl = document.getElementById('preloader');
//   preloaderEl.classList.add('hidden');
//   preloaderEl.classList.remove('visible');
// });


document.addEventListener('DOMContentLoaded', () => {

    const mediaFiles = document.querySelectorAll('body');
    let i = 0


    Array.from(mediaFiles).forEach((file, index) => {
        file.onload = () => {
            i++

            percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)

            if(i === mediaFiles.length) {
                preloader.classList.add('preloader--hide') 
                percents.innerHTML = 100
            }
        }
    })
})