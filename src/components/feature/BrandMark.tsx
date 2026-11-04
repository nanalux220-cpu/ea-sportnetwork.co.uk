const LOGO_SRC =
  'https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/47f951f81e4c7a333ebe5efa14661047.png';

type Props = {
  label?: string;
  tone?: 'dark' | 'light';
};

export default function BrandMark({ label = 'E.A Sport Graphics', tone = 'dark' }: Props) {
  return (
    <img
      src={LOGO_SRC}
      alt={label}
      width={1086}
      height={228}
      className={`brandmark-img brandmark-img--${tone}`}
    />
  );
}