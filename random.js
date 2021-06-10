let repo = ['simple-change-theme', 'simple-change-theme', 'fcc-tribute-page', 'simple-autoloading'];

window.addEventListener('load', function () {
    // redirect 
    // window.open('https://github.com/clouza/' + repo[Math.floor(Math.random() * repo.length)]);

    window.location.href = 'https://github.com/clouza/' + repo[Math.floor(Math.random() * repo.length)];
});