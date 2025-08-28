

const ComicCard = ({id,title,thumb}) => {
  return (
    <div className="col-15">
      <div className="comic-card">
        <img src={thumb} alt={title} />
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default ComicCard
