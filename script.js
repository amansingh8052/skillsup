// Typed.js Initialization
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Graphic Designer', 'Content Creator'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});

// Blog Search and Filter Functionality
const blogSearchInput = document.getElementById('blogSearch');
const blogFilterSelect = document.getElementById('blogFilter');
const blogItems = document.querySelectorAll('.blog-item');

function filterBlogPosts() {
    const searchText = blogSearchInput.value.toLowerCase();
    const selectedCategory = blogFilterSelect.value;

    blogItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const category = item.getAttribute('data-category');

        const matchesSearch = title.includes(searchText);
        const matchesCategory = (selectedCategory === 'all') || (category === selectedCategory);

        if (matchesSearch && matchesCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add event listeners for search and filter inputs
blogSearchInput.addEventListener('input', filterBlogPosts);
blogFilterSelect.addEventListener('change', filterBlogPosts);
