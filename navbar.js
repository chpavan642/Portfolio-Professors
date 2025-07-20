fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        const links = document.querySelectorAll('#navbar a');
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('underline', 'font-semibold', 'text-gray-300');
            }
        });
    });
