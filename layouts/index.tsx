import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
import SimpleFooter from '@/layouts/simple-footer';
import AppSidebar from '@/layouts/header/ham/app-sidebar';

export default async function RootLayout({
  simple = false,
  children,
}: {
  simple?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full">
      <Header />
      <AppSidebar />
      <div className="relative max-w-screen overflow-hidden">{children}</div>
      {simple ? <SimpleFooter/> : <Footer />}
    </div>
  );
}
