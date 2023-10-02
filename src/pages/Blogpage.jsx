import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Blogpage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);
    
    return (
        <div>
            <h2>Our news</h2>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export default Blogpage