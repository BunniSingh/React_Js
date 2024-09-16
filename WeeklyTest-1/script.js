const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Navbar component
function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="./logo.png" alt="logo-img" />
      </div>
      <div className="hamburger">
        <i className="fas fa-bars"></i>
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

// Main component
function Main() {
  const [length, setLength] = React.useState(8);
  const [includeUppercase, setIncludeUppercase] = React.useState(true);
  const [includeLowercase, setIncludeLowercase] = React.useState(true);
  const [includeNumbers, setIncludeNumbers] = React.useState(true);
  const [includeSymbols, setIncludeSymbols] = React.useState(true);
  const [password, setPassword] = React.useState("");

  function generatePassword() {
    if (length < 8 || length > 30) {
      alert("Length should be between 8 and 30 characters");
      return;
    }

    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = uppercase.toLowerCase();
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let res = "";
    if (includeUppercase) res += uppercase;
    if (includeLowercase) res += lowercase;
    if (includeNumbers) res += numbers;
    if (includeSymbols) res += symbols;

    if (res === "") {
      alert("Please select at least one character type");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * res.length);
      generatedPassword += res.charAt(idx);
    }

    setPassword(generatedPassword);
  }

  function copyPassword() {
    if (!password) {
      alert("No password to copy");
      return;
    }
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  }

  return (
    <div className="main">
      <h1>Random Password Generator</h1>
      <p>
        Generate a secure password with customizable length, character types, and symbols.
      </p>
      <div className="main-sub">
        <div className="controls">
          <p>
            Select Password length <span>(**8-30 characters**)</span>
          </p>
          <label htmlFor="length">Password Length:</label>
          <input
            type="number"
            id="length"
            min="8"
            max="30"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="check-control">
          <div>
            <input
              type="checkbox"
              id="include-uppercase"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <label htmlFor="include-uppercase">Include uppercase letters</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="include-lowercase"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            <label htmlFor="include-lowercase">Include lowercase letters</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="include-numbers"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <label htmlFor="include-numbers">Include numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="include-symbols"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <label htmlFor="include-symbols">Include symbols</label>
          </div>
        </div>
        <button onClick={generatePassword}>Generate Password</button>
        <div className="result">
          <p id="password">{password}</p>
          <button id="copy" onClick={copyPassword}>
            <i className="fa-regular fa-copy"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Random Password Generator. All rights reserved.</p>
      <div className="social">
        <a href="https://x.com/BANTIKUMAR80310" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/bunny0singh/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/BunniSingh/" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
}

// MainContent component to render Navbar, Main, and Footer
function MainContent() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

root.render(<MainContent />);
