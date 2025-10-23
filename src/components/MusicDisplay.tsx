import MusicCard from "./MusicCard";

type Props = {
  title: string;
  songs: {
    forYou: {
      title: string;
      album: string;
      img: string;
      artist: string;
    }[];
  };
};

export default function MusicDisplay(props: Props) {
  return (
    <section className="music-display">
      <h1 className="label">{props.title}</h1>
      <div className="cards">
        {props.songs.forYou.map((song) => (
          <MusicCard key={crypto.randomUUID()} song={song} />
        ))}
      </div>
    </section>
  );
}
