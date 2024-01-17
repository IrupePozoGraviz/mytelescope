import React, { useEffect, useState } from 'react'; // UseEffect and use state are used to fetch data from the API
import { Link } from 'react-router-dom'; // We need to import Link because we will use it to link to the individual blog posts
import createClient from '../client.js'; // We import the sanityClient we created earlier in the tutorial
import '../css/blogAll.css'; // We import the CSS file for the blog component

// We use useState to store the data we fetch from the Sanity API
 // We use useEffect to fetch the data from Sanity API.
 //We use the setAllPosts method to store the data we fetch.
 //We use the catch method to catch any errors that might occur.


 export const AllPosts = () => {
    const [allPostsData, setAllPosts] = useState(null);
  
    useEffect(() => {
      // Fetching all posts data from Sanity API
      createClient
        .fetch(`*[_type == "post"]{title, slug, mainImage{asset->{_id, url}, alt}}`)
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, []);
  
    return (
      <main className="main-blog">
        <div>
        <h1 className="Head-Title">Our insight from using myTelescope </h1>
        </div>
        <div>
          {allPostsData &&
            allPostsData.map((post, index) => (
                <div className="The-Blogs">
              <Link 
              to={`/${post.slug.current}`} 
              key={post.slug.current} >
                {/* Linking to individual blog posts using the post's slug */}
                <span key={index}>
                  {/* Displaying the image for each blog post */}
                  <img className="Blog-Images" src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                  <span className="BlogTitles">
                    {/* Displaying the title for each blog post */}
                    <h3 className="post-titles">{post.title}</h3>
                   
                  </span>

                </span>
              </Link>
              </div>
            ))}
        </div>
      </main>
    );
  };