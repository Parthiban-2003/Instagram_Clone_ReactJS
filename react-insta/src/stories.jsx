import React, { useEffect, useState, useRef } from "react";
import StoriesDetail from "./storiesDetail";

function Stories() {
    const [stories, setStories] = useState([]);
    const [activeStory, setActiveStory] = useState(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:3000/suggestion")
            .then(res => res.json())
            .then(data => setStories(data))
            .catch(err => console.log(err));
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
    };

    const openStory = (story) => setActiveStory(story);
    const closeStory = () => setActiveStory(null);

    return (
        <>
            {activeStory && <StoriesDetail story={activeStory} onClose={closeStory} />}

            <div className="position-relative d-flex align-items-center my-3" style={{ height: "90px" }}>
                <button
                    onClick={scrollLeft}
                    className="btn btn-light shadow-sm border-0 d-flex align-items-center justify-content-center"
                    style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        position: "absolute",
                        left: 0,
                        zIndex: 10,
                        opacity: 0.7,
                        cursor: "pointer",
                    }}
                >
                    &lt;
                </button>

                <div ref={scrollRef} className="d-flex overflow-hidden w-100 px-2">
                    {stories.length > 0 ? (
                        stories.map(story => (
                            <div
                                key={story.id}
                                className="text-center mx-1"
                                style={{ cursor: "pointer" }}
                                onClick={() => openStory(story)}
                            >
                                <img
                                    className="rounded-circle border border-primary"
                                    src={story.avatar}
                                    alt={story.username}
                                    width="75"
                                    height="65"
                                />
                                <small className="d-block mt-1" style={{ fontSize: "0.7rem" }}>
                                    {story.username.length > 10
                                        ? story.username.slice(0, 10) + "..."
                                        : story.username}
                                </small>
                            </div>
                        ))
                    ) : (
                        <p>Loading stories...</p>
                    )}
                </div>

                <button
                    onClick={scrollRight}
                    className="btn btn-light shadow-sm border-0 d-flex align-items-center justify-content-center"
                    style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        position: "absolute",
                        right: 0,
                        zIndex: 10,
                        opacity: 0.7,
                        cursor: "pointer",
                    }}
                >
                    &gt;
                </button>
            </div>
        </>
    );
}

export default Stories;
