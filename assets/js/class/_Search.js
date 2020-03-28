export default class Search
{
    constructor()
    {
        this.expanded = false;
        this.collapsedSize = '40px';
        this.expandedSize = '300px';
        this.searchInput = document.getElementById('bt-search');
        this.searchTrigger = document.getElementById('bt-search-trigger');
        this.searchButton = document.getElementById('bt-search-button');

        this.searchTrigger.addEventListener('click', this.onSearchTriggerClick.bind(this));
        this.searchInput.addEventListener('click', this.onSearchTriggerClick.bind(this));
        document.body.addEventListener('click', this.onOuterClick.bind(this));
    }

    onSearchTriggerClick(e)
    {
        this.expanded = getComputedStyle(this.searchInput).width === this.expandedSize;
        if (this.expanded && e.target === this.searchTrigger) {
            this.searchButton.dispatchEvent(new MouseEvent('click'));
        } else {
            this.resizeInput(this.expandedSize);
            this.searchInput.classList.add('box-shadow');
        }
    }

    onOuterClick(e)
    {
        if (e.target === this.searchTrigger || e.target === this.searchInput) {
            return;
        }
        this.resizeInput(this.collapsedSize);
        this.searchInput.classList.remove('box-shadow');
    }

    resizeInput(size)
    {
        let currentSize = parseInt(getComputedStyle(this.searchInput).width);
        let targetSize = parseInt(size);
        let speed = 10;
        if (currentSize === targetSize) {
            return;
        }
        let intervalId = setInterval(() => {
            if (targetSize > currentSize) {
                currentSize += speed;
                currentSize = currentSize > targetSize ? targetSize : currentSize;
            } else if (targetSize < currentSize) {
                currentSize -= speed;
                currentSize = currentSize < targetSize ? targetSize : currentSize;
            } else {
                clearInterval(intervalId);
            }
            this.searchInput.style.width = currentSize + 'px';
        }, 10);
        // this.searchInput.style.width = size;
    }
}