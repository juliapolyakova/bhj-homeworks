const book = document.querySelector('.book');
const fontSize = Array.from(document.querySelectorAll('.font-size'));



for (let i=0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', function(event) {
        event.preventDefault();
        for (let j=0; j < fontSize.length; j++) {
            
            if (book.classList.contains('book_fs-big')) {
                fontSize[j].classList.remove('font-size_active');
                book.classList.remove('book_fs-big');
            } else if (book.classList.contains('book_fs-small')) {
                fontSize[j].classList.remove('font-size_active');
                book.classList.remove('book_fs-small');
            } else if (fontSize[j].classList.contains('font-size_active')) {
                fontSize[j].classList.remove('font-size_active');
            }

        }
        
        fontSize[i].classList.add('font-size_active');

        if (fontSize[i].classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        } else if (fontSize[i].classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        }

        
    });
}

const bookColor = document.querySelectorAll('.book__control_color a.color')

for (let i=0; i < bookColor.length; i++) {
    bookColor[i].addEventListener('click', function(event) {
        event.preventDefault();

        for (let j=0; j < bookColor.length; j++) {
            
            if (book.classList.contains('book_color-gray')) {
                bookColor[j].classList.remove('color_active');
                book.classList.remove('book_color-gray');
            } else if (book.classList.contains('book_color-whitesmoke')) {
                bookColor[j].classList.remove('color_active');
                book.classList.remove('book_color-whitesmoke');
             } else if (bookColor[j].classList.contains('color_active')) {
                bookColor[j].classList.remove('color_active');
             }

        }

        bookColor[i].classList.add('color_active');
        if (bookColor[i].classList.contains('color_gray')) {
            book.classList.add('book_color-gray');
        } else if (bookColor[i].classList.contains('color_whitesmoke')) {
            book.classList.add('book_color-whitesmoke');
        }
    })
}

// const bookBg = document.querySelectorAll('.book__control_background a.color');

// for (let i=0; i < bookBg.length; i++) {
//     bookBg[i].addEventListener('click', function(event) {
//         event.preventDefault();

//         for (let j=0; j < bookBg.length; j++) {
            
//             if (book.classList.contains('book_bg-gray')) {
//                 bookBg[j].classList.remove('color_active');
//                 book.classList.remove('book_bg-gray');
//             } else if (book.classList.contains('book_bg-white')) {
//                 bookBg[j].classList.remove('color_active');
//                 book.classList.remove('book_bg-white');
//              } else if (bookBg[j].classList.contains('color_active')) {
//                 bookBg[j].classList.remove('color_active');
//              }

//         }

//         bookBg[i].classList.add('color_active');
//         if (bookBg[i].classList.contains('color_gray')) {
//             book.classList.add('book_bg-gray');
//         } else if (bookBg[i].classList.contains('color_black')) {
//             book.classList.add('book_bg-white');
//         }
//     })
// }
