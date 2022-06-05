import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
      <img id="logo" src="https://i.imgur.com/rxpimtc.png"  alt="" />
        <h1>SHEEESH</h1>
      </Link>

      <Link to="/teams">Teams</Link>
      <Link to="/players">Players</Link>
      <Link to="/games">Games</Link>

      {/* <img id="confused-nick-young" src="https://i.imgur.com/0lT6fzV.png" alt="confused-nick-young" /> */}
    </nav>
  );
}

export default Navbar;