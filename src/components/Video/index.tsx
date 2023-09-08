const Videos = () => {
  return (
    <article className='video'>
      <iframe
        className='video__iframe'
        src='https://www.youtube.com/embed/_SwYYhxjDFc?autoplay=1&mute=1'
        title='觀光局影片'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </article>
  );
};

export default Videos;
