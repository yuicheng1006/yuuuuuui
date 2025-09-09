import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        aria-hidden
        src="/logo.png"
        alt="yui logo"
        width={48}
        height={48}
      />
    </Link>
  );
};
