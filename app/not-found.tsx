import RootLayout from '@/layouts';
import { NotFoundComp } from '@/components/notfound-comp';

export default function NotFound() {
  return (
    <RootLayout simple={true}>
      <NotFoundComp />
    </RootLayout>
  );
}
