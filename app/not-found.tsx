import RootLayout from '@/layouts';
import { NotFoundComp } from '@/components/not-found-comp';

export default function NotFound() {
  return (
    <RootLayout simple={true}>
      <NotFoundComp />
    </RootLayout>
  );
}
