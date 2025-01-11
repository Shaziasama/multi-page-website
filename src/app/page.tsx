import Image from "next/image";
import Navbar from "../app/components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "../app/components/Progressor";
import Burger from "./components/Burger";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Menu from "./components/Menu";
import Offer from "./components/Offer";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";







export default function App() {
  return (
<div className="bg-gradient-to-r from-black to-slate-700 min-h-screen text-white">
<Carousel />
<Progressor />
<Burger />
<Banner />
<Product />
<Menu />
<Offer />
<Reservation />
<Footer />
</div>
);
}
