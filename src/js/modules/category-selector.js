export function selectCategory() {
      
    const categoryLinks = document.querySelectorAll('.category-link');
    const allContent = document.querySelectorAll('.content');

    function handleCategoryClick(event) {
        event.preventDefault();
        const category = event.currentTarget.dataset.category;
        showContent(category);
    }

    function showContent(category) {
        allContent.forEach(content => {
            content.style.display = 'none';
        });

        const selectedContent = document.querySelector(`#${category}`);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }
    }

    categoryLinks.forEach(link => {
        link.addEventListener('click', handleCategoryClick);
    });
}   