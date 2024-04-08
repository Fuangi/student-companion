function ForumList({
  forumName = "Forum Name",
  forumPicture,
  forumDesc = "This forum's description",
}) {
  return (
    <div className="forum-intro">
      <img src={forumPicture} alt="Forum's Profile" />
      <div className="forum-info">
        <h3>{forumName}</h3>
        <p>{forumDesc}</p>
      </div>
    </div>
  );
}

export default ForumList;
