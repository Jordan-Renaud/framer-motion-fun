import "./LinkIcon.css";

export default function LinkIcon({ iconLink, iconId }) {
  return (
    <div className="LinkIcon" key={iconId}>
      <a href={iconLink} target="_blank" rel="noreferrer">
        <i className={`fab ${iconId}`}></i>
      </a>
    </div>
  );
}
