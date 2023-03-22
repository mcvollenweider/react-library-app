import { useState } from "react";
import BookModel from "../../models/BookModel";

export const BookCheckoutPage = () => {
  
  const [book, setBook] = useState<BookModel>();
  const [isLoadingBook, setIsLoadingBook] = useState(true);
  const [httpError, setHtttpError] = useState(null);

  {/*bookId is grabbing url ex: localhost:3000/checkout/<bookId> */}
  const bookId = (window.location.pathname).split('/')[2];

    return (
  <div>
<h3>Hi World!</h3>
  </div>);
};
