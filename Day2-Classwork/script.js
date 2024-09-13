let rootElement = document.getElementById("root");

// async function getProfile(){
//     const responce = await fetch("https://randomuser.me/api?results=50");
//     const data = await responce.json();
//     showOnUi(data.results);
//     // return data.results;
//   }
 


// Navbar component

const NavBar = () => {
    return (
        <nav className = "nav">
            <h3>My Website</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

// Main component

const MainContent = () => {
    return (
        <div className = "main">
            <div className = "left">
                <h2>Welcome to My Website!</h2>
                <p>This is the main content area.</p>
            </div>
            <div className = "right">
                <div className="search-box">
                    <h3>Search Profiles</h3>
                    <input id = "search" type="text" placeholder="Search..." />
                </div>

                <div className="social-media">
                    <h3>Follow Us :</h3>
                    <div className = "social-media-icons">
                    <ul>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    </ul>
                    <div className="newsletter-box">You join with us</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// Footer component

const Footer = () => {
    return (
        <footer className = "footer">
            <p>�� 2022 My Website. All rights reserved.</p>
        </footer>
    )
}


const MyComponent = () => {
    return (
        <div>
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    )
}


// ReactDOM.render(<MyComponent />, rootElement); //Old Way to use ReactDOM.render with ReactDOM instead of ReactDOM.createRoot for performance reasons.
const root = ReactDOM.createRoot(rootElement);
root.render(<MyComponent />);
