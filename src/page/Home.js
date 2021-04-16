import "../App.css";
import Twitch from "../Twitch";
import Shop from "../Shop";

function Home() {
  return (
    <div className="background">
      <Twitch />
      <Shop />
    </div>
  );
}

export default Home;
