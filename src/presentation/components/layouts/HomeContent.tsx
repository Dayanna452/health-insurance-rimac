import { Header } from "../contents/Header";
import { Footer } from "../contents/Footer";
import { Wrapper } from "../contents/Wrapper";

export const HomeContent = () => {
  return (
    <Wrapper  blur>
      <Header />
      <div className="container">
        <main className="row">
          <section className="col-12 col-md-6">Image</section>
          <section className="col-12 col-md-6">Form</section>
        </main>
      </div>
      <Footer />
    </Wrapper>
  );
};
