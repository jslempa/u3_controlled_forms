import { useState } from 'react'

const Bookshelf = (props) => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ])

    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    })  

    const handleChange = (event) => {
        setNewBook({...newBook, [event.target.name] : event.target.value}) //name instead of id?
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const currentBooks = books
        const createdBook = {
            ...newBook,
            title: newBook.title,
            author: newBook.author
        }
        currentBooks.push(createdBook)
        setBooks(currentBooks)
        setNewBook({title: '', author: ''})       
    }      

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* Form will go here */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor='Title'>Title</label>
                    <input type='text'
                           id='title'
                           value={newBook.title}
                           name={'title'}
                           placeholder={'title'}
                           onChange={handleChange} />
                    <label htmlFor='Author'>Author</label>
                    <input type='text'
                           id='author'
                           value={newBook.author}
                           name={'author'}
                           placeholder={'author'}
                           onChange={handleChange} />
                    <button>Submit</button>   
                </form>
            </div>
            <div className="bookCardsDiv">
                {   
                    books.map((book, index) => (
                        <div className="bookCard" key={index}>
                            <h5>{book.title}</h5>
                            <h5>{book.author}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Bookshelf