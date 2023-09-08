type Props = {
  keyboard: string;
  title: string;
  style?: React.CSSProperties;
};

const AccessKey = ({ keyboard, title, style }: Props) => {
  return (
    <section className='access-key' style={style}>
      <a
        id={`access-key-${keyboard}`}
        accessKey={keyboard}
        href={`#access-key-${keyboard}`}
        title={title}
      >
        :::
      </a>
    </section>
  );
};

export default AccessKey;
