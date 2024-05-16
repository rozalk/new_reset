// import About from "./pages/About";
// import { Contact, ContactForm } from "./pages/Contact";
import Home from "./pages/Home";

// function App() {
//   return (
//     <>
//       <Home isGoal={2} />
//       <About title="About Rowszal" description="Rowszal is a good boy" />
//       <Contact />
//       <ContactForm />
//     </>
//   );
// }

function App() {
  const users = [{ name: "raktim" }, { name: "dev" }, { name: "rahul" }];
  return (
    <>
      <Home data={users} />
    </>
  );
}

export default App;
