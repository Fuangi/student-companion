import { Header, Footer } from ".";

function AppLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
