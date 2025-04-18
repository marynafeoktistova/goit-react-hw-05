import s from './MovieReviewsItem.module.css';
const MovieReviewsItem = ({
  dataReviews: {
    author,
    author_details: { username },
    content,
  },
}) => {
  return (
    <div className={s.reviewItem}>
      <h2 className={s.reviewItemTitle}>{author ? author : 'Anonymous'}</h2>
      <p className={s.reviewItemUserName}>
        <span className={s.reviewItemSpan}>Username</span>: {username ? username : 'N/A'}
      </p>
      <p className={s.reviewItemContent}>{content ? content : 'No content available'}</p>
    </div>
  );
};

export default MovieReviewsItem;
