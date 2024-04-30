import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
       <Title subTitle = 'Our PROGRAM'  Title = 'What We Offer'/>
      <Programs />
      <About />
      <Title subTitle = 'Gallery'  Title = 'Campus Photos'/>
      <Campus />
      <Title subTitle = 'TESTIMONIALS'  Title = 'What Student Says'/>
      <Testimonials />
      <Title subTitle = 'Contact Us'  Title = 'Get in Touch'/>
       <Contact />
       <Footer />
     </div>
    </div>
  );
}

export default App;
