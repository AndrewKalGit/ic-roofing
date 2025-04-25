import Header from "../app/header";
import Banner from "../app/banner";
// import Services from "../app/services";
import About from "../app/about";
import Footer from "../app/footer";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Header></Header>
      <Banner></Banner>
      {/* <Services></Services> */}
      <About></About>
      <Footer></Footer>
    </main>
  );
}
