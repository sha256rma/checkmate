import "../App.css";
import Twitch from "../component/Twitch";
import Shop from "../component/Shop";

function Home() {
  return (
    <div className="background">
      <Twitch />
      <Shop />
    </div>
  );
}

export default Home;
