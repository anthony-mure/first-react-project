

const ComicCard = ({id,title,thumb}) => {
  return (
    <div className="col-15">
      <div className="comic-card">
        <img src={comic.thumb} alt={comic.title} />
        <h4>{comic.title}</h4>
      </div>
    </div>
  );
};

export default ComicCard
