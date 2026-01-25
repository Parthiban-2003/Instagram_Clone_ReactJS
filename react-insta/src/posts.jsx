import './index.css';
import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-4">Loading... ⏳</div>;
    }

    return (
        <div className="d-flex justify-content-center">
            <div style={{ width: "500px" }}>
                {posts.map(post => (
                    <div key={post.id} className="my-4 border-bottom pb-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="d-flex align-items-center">
                                <img
                                    className="dp rounded-circle me-2"
                                    src={post.user.avatar}
                                    alt={`${post.user.username} profile`}
                                    width="40"
                                    height="40"
                                />
                                <h6 className="mb-0 header-items">{post.user.username}</h6>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <button className="btn btn-sm btn-primary header-items">Follow</button>
                                <h2 className="mb-0">⋮</h2>
                            </div>
                        </div>

                        <img
                            className="images w-100 mb-2"
                            src={post.image}
                            alt={post.caption || "Post image"}
                        />

                        <div className="d-flex gap-3 mb-2 fs-4">
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-share"></i>
                        </div>

                        <div className="mb-1">
                            <b>{post.likes} Likes</b>
                        </div>

                        <p className="mb-0">
                            <b>{post.user.username}</b> {post.caption}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;
