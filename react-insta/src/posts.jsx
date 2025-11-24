import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then((response) => response.json())
            .then((results => setPosts(results)))
            .catch((error) => console.log(error));

    }, []);

    return (
        <>
            <div className="d-flext justify-content-center">
                {
                    posts.length > 0 ? (<div>
                        {
                            posts.map((posts) => {
                                return <div key={posts.id} className="my-3">
                                            <div className="d-flex">
                                                <img className="dp rounded-cricle" src={posts.user.avatar} alt="profile-picture" />
                                                <h6>{posts.user.username}</h6>
                            
                                            </div>
                                            <img className="images" src={posts.image} alt="post-picture" />
                                            <div>
                                                    <i className="bi bi-heart" style={{ fontSize: '1.5rem' }}></i> Like
                                                    <i className="bi bi-chat" style={{ fontSize: '1.5rem' }}></i> Comment
                                                    <i className="bi bi-share" style={{ fontSize: '1.5rem' }}></i> Share
                                            </div>
                                            <div>
                                                <b>{posts.likes}Likes</b>
                                            </div>
                                            <p>{posts.caption}</p>
                                    </div>
                            })
                        }
                    </div>) : (<div>
                        Loading...!!
                    </div>)
                }
            </div>
        </>
    )
}

export default Posts;