// `light` sits on dark backgrounds (white lettering), `dark` on light backgrounds (maroon lettering).
const LOGO_SRC = {
  light: '/media/logo-light.png',
  dark: '/media/logo-dark.png',
} as const;

type Props = {
  label?: string;
  tone?: 'dark' | 'light';
};

export default function BrandMark({ label = 'EA-Sports Network', tone = 'dark' }: Props) {
  return (
    <img
      src={LOGO_SRC[tone]}
      alt={label}
      width={1200}
      height={134}
      className="brandmark-img"
    />
  );
}
