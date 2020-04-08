import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import { booksRequest } from './store/modules/books/actions';

export default function Routes() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  if (!books) dispatch(booksRequest());

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:group?" exact component={Home} />

        <Route path="/book/:name" component={BookDetails} />
      </Switch>
    </BrowserRouter>
  );
}
