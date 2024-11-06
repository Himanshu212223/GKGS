import "@/Css/Main.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className="main">
      <h1 className="headline">Welcome !</h1>
      <h2 className="main-paragraph">Select the corresponding options.</h2>

      <Link className="options" href={"/India"} >About India !</Link>
      
    </div>
  );
}
