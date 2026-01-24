import { useEffect, useState } from "react";

function Suggestions() {
    const [profile, setProfile] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/profile")
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/suggestion")
            .then(response => response.json())
            .then(data => setSuggestions(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="p-3">
            <div className="w-100 mb-3">
                {profile ? (
                    <div className="d-flex align-items-center">
                        <img
                            className="dp rounded-circle me-2"
                            src={profile.avatar}
                            alt={profile.username}
                            width="40"
                            height="40"
                        />
                        <h6 className="mb-0">{profile.username}</h6>
                        <small className="ms-auto text-primary">Switch</small>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div className="d-flex align-items-center mb-2">
                <p className="mb-0 text-muted">Suggestions for You</p>
                <b className="ms-auto text-dark">See All</b>
            </div>

            <div>
                {suggestions.length > 0 ? (
                    suggestions.map((suggestion) => (
                        <div key={suggestion.id} className="d-flex align-items-center mb-2">
                            <img
                                className="dp rounded-circle me-2"
                                src={suggestion.avatar}
                                alt={suggestion.username}
                                width="40"
                                height="40"
                            />
                            <h6 className="mb-0">{suggestion.username}</h6>
                            <p className="ms-auto text-primary mb-0">Follow</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Suggestions;
