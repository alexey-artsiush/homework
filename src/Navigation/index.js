import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from "react";
import Login from "../components/Login"
import Posts from "../components/Posts"
import Post from "../components/Post"

export default function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/posts/:postId">
            <Post />
          </Route>

          <Route path="/posts">
            <Posts />
          </Route>

          <Route path="/">
            <Login />
          </Route>

          
        </Switch>
      </div>
    </Router>
  )
}