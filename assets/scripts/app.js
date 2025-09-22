// Filter custom select
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('filterInput');
    const optionsBox = document.querySelector('.custom-options');
    const searchInput = document.querySelector('.custom-options input[name="search-options"]');

    //hide or show the options box on input click
    input.addEventListener('click', () => {
        const open = optionsBox.style.display === 'block';
        optionsBox.style.display = optionsBox.style.display === open ? 'none' : 'block';

        if (!open) {
            // wait a tick so it's visible, then focus
            setTimeout(() => searchInput.focus(), 0);
        }
    });


    // manage the selection
    optionsBox.addEventListener('click', (e) => {
        if (e.target.dataset.value) {
            input.value = e.target.dataset.value;
            optionsBox.style.display = 'none';
        }
    });

    // hide the options box when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-filter-wrapper')) {
            optionsBox.style.display = 'none';
        }
    });

    // search functionality
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const options = optionsBox.querySelectorAll('div[data-value]');

        options.forEach(option => {
            if (option.dataset.value.toLowerCase().includes(searchTerm)) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        });
    });
});
