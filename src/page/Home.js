import "../App.css";
import Twitch from "../component/Twitch";
import Shop from "../component/Shop";
import Chat from "../component/Chat";

function Home() {
  return (
    <div className="background">
      <Twitch />
      <Chat />
      <Shop />
    </div>
  );
}

export default Home;
