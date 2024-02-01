import Top from "./(components)/Top";
import Main from "./(components)/Main";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <div className="App
      flex flex-col h-[100dvh] p-2 bg-black
    ">
      <Top />
      <Main />
      <Footer />
    </div>
  );
}
