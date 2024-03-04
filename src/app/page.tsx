"use client";

import { useStore } from "./index";

import Block from "./component/Block&sub/Block";
import BlockMaker from "./component/Block&sub/BlockMaker/BlockMaker";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Tabs from "./component/Tabs";

export default function Home() {
  // const [pick, setPick] = useState(1);
  // const [showModal, setShowModal] = useState(false);
  // const [showModal2, setShowModal2] = useState(false);

  const pick = useStore((state) => state.pick);
  const showModal = useStore((state) => state.showModal);
  const showModal2 = useStore((state) => state.showModal2);
  const setShowModal = useStore((state) => state.setShowModal);
  const setShowModal2 = useStore((state) => state.setShowModal2);

  const onClose = () => {
    setShowModal(false);
  };

  const onClose2 = () => {
    setShowModal2(false);
  };
  return (
    <main className="overflow-hidden bg-base-100">
      <Navbar />
      <Tabs />
      {pick == 1 ? (
        <Block
          setShowModal={setShowModal}
          onClose={onClose}
          onClose2={onClose2}
          showModal2={showModal2}
          setShowModal2={setShowModal2}
        />
      ) : (
        <BlockMaker />
      )}
      <Footer />

      {/* <label>
        First name
        <input
          // Update the "firstName" state
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
        <input
          // Update the "firstName" state
          onChange={(e) => updateLastName(e.currentTarget.value)}
          value={lastName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p> */}
    </main>
  );
}
