const LOGO_SRC = '/media/logo.png';

type Props = {
  label?: string;
  tone?: 'dark' | 'light';
};

export default function BrandMark({ label = 'E.A Sport Graphics', tone = 'dark' }: Props) {
  return (
    <img
      src={LOGO_SRC}
      alt={label}
      width={296}
      height={38}
      className={`brandmark-img brandmark-img--${tone}`}
    />
  );
}