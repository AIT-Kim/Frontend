document.addEventListener('DOMContentLoaded', () => {
    function loadBooks() {
        const books = localStorage.getItem('books');
        return books ? JSON.parse(books) : [];
    }

    function saveBooks(books) {
        localStorage.setItem('books', JSON.stringify(books));
    }

    function displayBooks(books = loadBooks()) {
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = '';
        books.forEach((book, index) => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <p><strong>${book.title}</strong> (${book.year}) - ${book.author}</p>
                <button onclick="deleteBook(${index})">Удалить</button>
            `;
            bookList.appendChild(bookItem);
        });
    }

    window.deleteBook = (index) => {
        const books = loadBooks();
        books.splice(index, 1);
        saveBooks(books);
        displayBooks();
    }

    document.getElementById('add-book').addEventListener('click', () => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;

        if (title && author && year) {
            const books = loadBooks();
            books.push({ title, author, year });
            saveBooks(books);
            displayBooks();

            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('year').value = '';
        } else {
            alert('Пожалуйста, заполните все поля!');
        }
    });

    document.getElementById('apply-filters').addEventListener('click', () => {
        const searchQuery = document.getElementById('search').value.toLowerCase();
        const filterAuthor = document.getElementById('filter-author').value.toLowerCase();
        const filterYear = document.getElementById('filter-year').value;

        const filteredBooks = loadBooks().filter(book => {
            return (book.title.toLowerCase().includes(searchQuery) || searchQuery === '') &&
                   (book.author.toLowerCase().includes(filterAuthor) || filterAuthor === '') &&
                   (book.year.toString() === filterYear || filterYear === '');
        });

        displayBooks(filteredBooks);
    });

    document.getElementById('reset-filters').addEventListener('click', () => {
        document.getElementById('search').value = '';
        document.getElementById('filter-author').value = '';
        document.getElementById('filter-year').value = '';
        displayBooks();
    });    

    document.getElementById('sort-title').addEventListener('click', () => {
        const books = loadBooks().sort((a, b) => a.title.localeCompare(b.title));
        displayBooks(books);
    });

    document.getElementById('sort-author').addEventListener('click', () => {
        const books = loadBooks().sort((a, b) => a.author.localeCompare(b.author));
        displayBooks(books);
    });

    document.getElementById('sort-year').addEventListener('click', () => {
        const books = loadBooks().sort((a, b) => a.year - b.year);
        displayBooks(books);
    });

    displayBooks();
});
