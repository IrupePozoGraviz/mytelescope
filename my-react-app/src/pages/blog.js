import React from 'react';
import{ AllPosts } from '../components/AllPosts'
import { OnePost } from '../components/OnePost'
import '../css/blog.css';

export const Blog = () => (
  <div className="Blog">
    <header className="App-header">
      <AllPosts />
      <OnePost />

    </header>
  </div>
);