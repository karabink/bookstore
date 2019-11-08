import mongoose from "mongoose"
import Author from "./model"
mongoose.connect("mongodb://localhost:27017/bookDB");

const authorControler = {
    getAll: (req, res) => {
        Author.find().
            then((authorsList) => {
                res.send(authorsList);
            }).catch(
                (error) => {
                    res.send(error);
                }
            );
    },

    getQuery: (req, res) => {
        if (req.query.year) {
            Author.find({
                Year: {
                    $gt: req.query.year
                }
            }).then((authorsList) => {

                res.send(authorsList);
            })
        } else {
            Author.find().
                then((authorsList) => {
                    res.send(authorsList);
                }).catch(
                    (error) => {
                        res.send(error);
                    }
                );
        }
    },


    crateNew: (req, res) => {
        let newAuthor = new Author(req.body);
        newAuthor.save().then(
            (author) => {
                res.send(author);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        );
    },

    deleteById: (req, res) => {
        if (req.params.id) {
            Author.findByIdAndDelete(req.params.id).
                then((deleted) => {
                    res.send(deleted);
                }).catch(
                    (error) => {
                        res.send(error);
                    }
                );
        }
    },
    findBornAfterYear: (req, res) => {
        if (req.params.year) {
            Author.find({
                Year: {
                    $gt: req.params.year
                }
            }).then((authorsList) => {

                res.send(authorsList);
            })
        }
    }
}

export default authorControler;