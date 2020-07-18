export default class Search
{
    constructor()
    {
        this.searchForm = document.getElementById('search-form');
        this.searchTrigger = document.getElementById('search-trigger');
        this.searchInput = document.getElementById('search-input');
        this.searchButton = document.getElementById('search-button');

        this.searchTrigger.addEventListener('click', this.onSearchTriggerClick.bind(this));
        document.body.addEventListener('click', this.onOuterClick.bind(this));
    }

    onSearchTriggerClick()
    {
        const hasSearchRequest = this.searchInput.value.length > 0;
        if (this.searchForm.classList.contains('expanded')) {
            if (hasSearchRequest) {
                this.searchButton.dispatchEvent(new MouseEvent('click'));
            } else {
                this.searchForm.classList.remove('expanded');
            }
        } else {
            this.searchForm.classList.add('expanded');
        }
    }

    onOuterClick(e)
    {
        if (e.target === this.searchTrigger || e.target === this.searchInput) {
            return;
        }
        this.searchForm.classList.remove('expanded');
        this.searchInput.value = '';
    }
}