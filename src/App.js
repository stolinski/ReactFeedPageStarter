import React from "react";
import { motion } from "framer-motion";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>

      <div className="layout">
        <h3>Blog Posts</h3>
        {posts.map((post) => (
          <div className="card" key={post}>
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
