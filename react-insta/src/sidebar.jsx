function Sidebar() {
    return (
        <div className="d-flex flex-column justify-content-between p-3 h-100 border-end">
            
            <div>
                <img 
                    className="logo-text mb-4" 
                    src="/Asserts/instagram-text.png" 
                    alt="Instagram Logo" 
                    style={{ width: "120px" }}
                />

                <div className="mb-3"><i className="bi bi-house-door-fill me-2"></i> Home</div>
                <div className="mb-3"><i className="bi bi-search me-2"></i> Search</div>
                <div className="mb-3"><i className="bi bi-compass me-2"></i> Explore</div>
                <div className="mb-3"><i className="bi bi-chat me-2"></i> Messages</div>
                <div className="mb-3"><i className="bi bi-heart me-2"></i> Notifications</div>
                <div className="mb-3"><i className="bi bi-plus-square me-2"></i> Create</div>
                <div className="mb-3"><i className="bi bi-person me-2"></i> Profile</div>
            </div>

            <div>
                <div className="mb-3"><i className="bi bi-box me-2"></i> Threads</div>
                <div><i className="bi bi-list me-2"></i> More</div>
            </div>

        </div>
    );
}

export default Sidebar;
