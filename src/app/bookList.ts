import { Book } from '../models/book';

export var BookList: Book[] = [
    {
        id: Math.random() * 10000,
        title: "Lord of the Rings",
        author: "J. R. R. Tolkien",
        tag: ["Adventure", 'Myth'],
    },
    {
        id: Math.random() * 10000,
        title: 'Sherlock Holmes',
        author: 'Sir Arthur Conan Doyle',
        tag: ['Detective', 'Horror'],
    },
    {
        id: Math.random() * 10000,
        title: 'Nếu còn có ngày mai',
        author: 'Sidney Sheldon',
        tag: ['Novel', 'Adventure'],
    }
]