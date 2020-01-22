import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/common/Home';
import Login from './components/User/Login';
import Register from './components/User/Register';
import NoteList from './components/Note/NoteList';
import NoteNew from './components/Note/NoteNew';
import NoteEdit from './components/Note/NoteEdit';
import CategoryList from './components/Category/CategoryList';
import CategoryNew from './components/Category/CategoryNew';
import CategoryEdit from './components/Category/CategoryEdit';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Notes App</h1>
        <hr />

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/user/register" component={Register} />
          <Route path="/user/login" component={Login} />
          <Route path="/notes" component={NoteList} exact={true} />
          <Route path="/notes/new" component={NoteNew} />
          <Route path="/notes/:id" component={NoteEdit} />
          <Route path="/categories" component={CategoryList} exact={true} />
          <Route path="/categories/new" component={CategoryNew} />
          <Route path="/categories/:id" component={CategoryEdit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;