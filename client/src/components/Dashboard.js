import React, { useContext, useState } from 'react'
import Header from './Header'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { LoginContext } from './contextProvider/Context'
import axios from 'axios'
import './dashboard.css'
import Footer from './Footer';


const Dashboard = () => {

    const [posts, setPosts] = useState([]);

    const { logindata, setLoginData } = useContext(LoginContext);
    // console.log(logindata.ValidUserOne.email);

    const history = useNavigate()

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch(`${window.location.origin}/validuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        const data = await res.json();
        // console.log(data);
        if (data.status == 401 || !data) {
            // console.log("Error page redirect");
            history("*")
        } else {
            console.log("user verified");
            setLoginData(data);
            history("/dash")
        }
    }
    useEffect(() => {
        DashboardValid();

    }, []);
    // for posts

    useEffect(() => {
        // Fetch 100 posts
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <>
            <Header />
            <div>
                <div>

                    {/* Display 100 posts */}
                    <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px" }}>All Posts</h2>
                    <div className="posts-container">
                        {/* Display 100 posts in card boxes with links to details page */}
                        {posts.map(post => (
                            <Link key={post.id} to={`/posts/${post.id}`} className="post-card">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Dashboard
