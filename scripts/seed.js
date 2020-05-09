const mongoose = require("mongoose");
const Book = require("../models/book");

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    family: 4
  }
);

const booksSeed = [
  {
    authors: ["Michaelann Martin"],
    _id: "5c3e29b2ecc3041a5ac64a11",
    googleId: "8lINUTi_GBYC",
    title: "Woman of Grace",
    subtitle: "A Bible Study for Married Women",
    link:
      "https://play.google.com/store/books/details?id=8lINUTi_GBYC&source=gbs_api",
    description:
      "Woman of Grace is an insightful and intimate Bible study written to help married women to grow in holiness in their day-to-day living. Drawing from her life experiences, Michaelann Martin offers ways that will help women improve their prayer lives, communicate with their family, and find fulfillment in their vocation. Each chapter includes questions that mine the rich teaching of Scripture and the Church to help women apply those principles in their own lives. Those who seek to grow in holiness as wives and mothers will benefit greatly from this study.",
    image:
      "http://books.google.com/books/content?id=8lINUTi_GBYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  }
];

async function seed() {
  await mongoose
    .connect(
      MONGODB_URI,
      options
    )
    .then(() => {
      console.log("Seed: Connected to Database");
    })
    .catch(err => {
      console.log("Seed: Not Connected to Database ERROR! ", err);
    });
  for (let book of booksSeed) {
    const { _id: bookId } = await new Book({
      title: book.title,
      subtitle: book.subtitle,
      authors: book.authors,
      link: book.link,
      description: book.description,
      image: book.image,
      googleId: book.googleId
    }).save();
  }

  mongoose.disconnect();

  console.info("Seed: Done!");
}

seed();
