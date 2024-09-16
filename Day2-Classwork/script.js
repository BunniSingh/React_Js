const { useState, useEffect } = React;

let rootElement = document.getElementById("root");

// Navbar component
const NavBar = () => {
    return (
        <nav className="nav">
            <h3>My Website</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

// Profiles Component to fetch and display profiles
const ProfilesComponent = ({ searchQuery }) => {
    const [profiles, setProfiles] = useState([]); // State to store fetched profiles

    useEffect(() => {
        async function getProfile() {
            const response = await fetch("https://randomuser.me/api?results=50");
            const data = await response.json();
            setProfiles(data.results); // Update state with fetched profiles
        }
        getProfile();
    }, []); // Empty dependency array means this effect runs once on component mount

    // Filter profiles based on search query
    const filteredProfiles = profiles.filter((profile) =>
        profile.name.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.name.last.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="profiles">
            {filteredProfiles.length > 0 ? (
                filteredProfiles.map((profile, index) => (
                    <div className="profile" key={index}>
                        <img src={profile.picture.large} alt="Profile Pic" />
                        <div className="profile-info">
                        <h4>{profile.name.first} {profile.name.last}</h4>
                        <p>{profile.email}</p>
                        <p>{profile.location.city}, {profile.location.country}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No profiles found...</p>
            )}
        </div>
    );
};

// Main component
const MainContent = () => {
    const [searchQuery, setSearchQuery] = useState(""); // State to store search query

    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value); // Update search query as user types
    };

    return (
        <div className="main">
            <div className="left">
                <h2>Welcome to My Website!</h2>
                <p>This is the main content area.</p>
            </div>
            <div className="right">
                <div className="search-box">
                    <h3>Search Profiles</h3>
                    <input
                        id="search"
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchInput} // Update search query on input change
                    />
                </div>
                <div className="resultContainer">
                    <ProfilesComponent searchQuery={searchQuery} /> {/* Pass search query */}
                </div>
                <div className="social-media">
                    <h3>Follow Us:</h3>
                    <div className="social-media-icons">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                        <div className="newsletter-box">Join with us</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Footer component
const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2022 My Website. All rights reserved.</p>
        </footer>
    );
};

// Main App component
const MyComponent = () => {
    return (
        <div>
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    );
};

// Render the main component to the root
const root = ReactDOM.createRoot(rootElement);
root.render(<MyComponent />);
