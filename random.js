window.addEventListener('load', function () {
    $.getJSON('https://api.github.com/users/clouza/repos', function (data) {
        // console.log(data[1].name);
        $.each(data, function (i, v) {
            let repo = [data[i].name];
            window.location.href = 'https://github.com/clouza/' + repo[Math.floor(Math.random() * repo.length)];
        });
    });
});