import { BlogPostView } from "./BlogPostView";
import { useEffect, useState } from "react";
import axios from "axios";

interface BlogPost {
    _id: string
    title: string
    body: string
    author: string
    date: Date
}

// interface BlogPost {
//     title: string
//     body: string
//     author: string
//     date: Date
// }

export const BlogPostController = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

    const fetchBlogPosts = async () => {
        try{
            const { data } = await axios.get(`http://localhost:3001/blog-posts`);
            const blogPostsFromAPI: BlogPost[] = data
            setBlogPosts(blogPostsFromAPI)
        } catch(e)
        {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchBlogPosts()
    }, [])

    return (
        <>
            { 
                blogPosts.length !== 0
                ? blogPosts.map((post, index) => {
                    return(
                        <BlogPostView
                            key={index}
                            id={post._id}
                            title={post.title}
                            body={post.body}
                            author={post.author}
                            date={post.date}
                        />
                    )
                })
                : <div style={{fontSize: '30px', marginTop: '10px'}}> No Blogs Posts </div>
            }
        </>
    )
}