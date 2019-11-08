import { MongoClient, ObjectID } from 'mongodb'
import Book from "./model"
import mongoose from "mongoose"

//параметри бази
const url = 'mongodb://localhost:27017';
const dbName = 'bookDB';
mongoose.connect (url+'/'+dbName);

const bookControler = {
    //отримати всі
    get: function (request, response) {
        Book.find()
        .then(books=>{
                response.send(books);
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    }, //get
    //отримати одну з вказаним ІД
    get_id: function (request, response) {
        Book.findById(request.params.id)
        .then(book=>{
            if (book)
                response.send(book);
            else
                response.status(404).send("Не знайдено");  
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    }, //getById
    //додати нову
    post: function (request, response) {      
        const newBook = new Book(request.body);
        newBook.save()
        .then(book=>{
            response.send(book);    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },//post
    //вилучити із вказаним ІД
    delete_id: function (request, response) {
        Book.findByIdAndDelete(request.params.id).
        then(book=>{
            if (book)
                response.send(book);
            else
                response.status(404).send("Не знайдено");    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },//deleteById

}
//валідатор чи є в книги назва  і автор
function isValid(book) {
    return book && book.title && book.author;
}

export default bookControler;