type Props = {
  song: {
    title: string;
    album: string;
    img: string;
    artist: string;
  };
};

export default function MusicCard(props: Props) {
  return (
    <article className="card-wrapper">
      <div className="record-sleeve" style={{ backgroundImage: `url(${props.song.img})` }}>
        <div className="record-content">
          <span className="song-artist">{props.song.artist}</span>
          <span className="song-title">{props.song.title}</span>
        </div>
      </div>
      <div className="record">
        <div className="record-image" style={{ backgroundImage: `url(${props.song.img})` }}></div>
        <div className="record-center"></div>
      </div>
    </article>
  );
}
