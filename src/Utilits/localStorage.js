const getBooksApplication = () =>{
    const seeBooks = localStorage.getItem('seen-books');
    if(seeBooks){
        return JSON.parse(seeBooks);
    }
    return [];
}
const setBooksApplication = id =>{
    const seenBooks = getBooksApplication();
    const exist = seenBooks.find(booksId => booksId === id);
    if(!exist){
        seenBooks.push(id);
        localStorage.setItem('seen-books', JSON.stringify(seenBooks));
    }
}
export {setBooksApplication, getBooksApplication}