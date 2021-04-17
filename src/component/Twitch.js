import { TwitchEmbed } from "react-twitch-embed";

function Twitch() {
  return (
    <div>
      <TwitchEmbed
        channel="dypeapp"
        id="dypeapp"
        theme="dark"
        withChat="true"
        onVideoPause={() => console.log(":(")}
        width="100%"
        height={500}
      />
    </div>
  );
}

export default Twitch;
