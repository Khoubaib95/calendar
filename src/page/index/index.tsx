import Calendar from "../../page-components/index/Calendar";
import PageLayout from "../../shared/PageLayout";

// Style
import "./index.scss";

// Component
function HomePage() {
  /* ******************************** RENDERING ******************************* */
  return (
    <PageLayout>
      <main className="home-page">
        <Calendar />
      </main>
    </PageLayout>
  );
}
export default HomePage;
