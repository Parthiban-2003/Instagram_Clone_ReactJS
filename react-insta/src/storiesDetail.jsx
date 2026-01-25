import React from "react";
import './index.css'

function StoriesDetail({ story, onClose }) {
    if (!story) return null;

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between"
            style={{ backgroundColor: "rgba(0,0,0,0.9)", zIndex: 1000 }}
        >
            <div className="d-flex justify-content-between align-items-center p-3 text-white">
                <div className="d-flex align-items-center">
                    <img
                        src={story.avatar}
                        alt={story.username}
                        width="40"
                        height="40"
                        className="rounded-circle me-2"
                    />
                    <strong className="header-items">{story.username}</strong>
                </div>
                <button
                    className="btn btn-light btn-sm"
                    onClick={onClose}
                >
                    X
                </button>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-grow-1">
                <img
                    src={story.image}
                    alt="Story content"
                    style={{ maxHeight: "80%", maxWidth: "90%", objectFit: "contain" }}
                />
            </div>

            <div className="d-flex justify-content-between align-items-center p-3 text-white">
                <div className="header-items">Highlights</div>

                <div className="d-flex gap-3 header-items">
                    <i className="bi bi-heart fs-4"></i>
                    <i className="bi bi-chat fs-4"></i>
                    <i className="bi bi-send fs-4"></i>
                    <i className="bi bi-three-dots fs-4"></i>
                </div>
            </div>
        </div>
    );
}

export default StoriesDetail;
