import Gnome from "./components/page-components/gnome";
import Hero from "./components/page-components/hero";

export default function Home() {
  return (
    <>
      <button className="btn btn-primary">Hello daisyUI!</button>
      <Hero />
      <Gnome />
    </>
  );
}
