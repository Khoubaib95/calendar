import Header from "./Header";
import Footer from "./Footer";

// Component
function PageLayout({ children }: any) {
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
