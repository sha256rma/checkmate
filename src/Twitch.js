import logo from "./logo.svg";
import "./App.css";
import {
  TwitchEmbed,
  TwitchChat,
  TwitchClip,
  TwitchPlayer,
} from "react-twitch-embed";

function Twitch() {
  // function openChat() {
  //   <TwitchChat channel="kevtaelim" theme="dark" />;
  // }
  return (
    <div>
      <TwitchEmbed
        channel="kevtaelim"
        id="moonstar_x"
        theme="dark"
        withChat="false"
        onVideoPause={() => console.log(":(")}
        width="100%"
      />
      {/* <TwitchPlayer channel="kevtaelim" /> */}
      {/* <button onClick={openChat}>Show chat</button> */}
      {/* <TwitchChat channel="kevtaelim" theme="dark" /> */}
      {/* <TwitchClip clip="WealthyBumblingKimchiItsBoshyTime" parent={['mycoolsite.com, anotherawesomesite.net']} />
      <TwitchPlayer video="333014765" /> */}
    </div>
  );
}

export default Twitch;
