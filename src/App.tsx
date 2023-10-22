import { useState } from "react";
import Footer from "./Footer";
import Modal from "./Modal";
import { useLocalStorage } from "@uidotdev/usehooks";
import data from "./data.json";

export default function App() {
  const [confirmed, setConfirmed] = useLocalStorage("confirmed", false);

  interface DataSet {
    adj: string;
    img: string;
  }

  const getRandomData = (): DataSet => {
    const el = data[Math.floor(Math.random() * data.length)];
    if (el === randomData) {
      return getRandomData();
    }
    return el;
  };

  const [randomData, setRandomData] = useState(() => data[0]);

  return (
    <>
      <div
        style={confirmed ? { backgroundImage: `url(${randomData.img})` } : {}}
        className={`flex flex-col justify-center h-screen w-full ${
          confirmed ? "animate-wiggle bg-cover bg-center bg-no-repeat" : ""
        }`}
      >
        {confirmed ? (
          <h1
            className="font-abstract text-center text-7xl selection:text-white selection:bg-black animate-flashtext hover:cursor-pointer"
            onClick={() => setRandomData(getRandomData())}
          >
            nun too {randomData.adj}
          </h1>
        ) : null}
      </div>
      <Modal
        openModal={!confirmed}
        closeModal={() => {
          setConfirmed(true);
        }}
      >
        <div></div>
        <p className="text-center text-lg">
          Warning: This site contains flashing images.
        </p>
      </Modal>
      <Footer />
    </>
  );
}
