"use client";

import { useStore } from "./index";
// import { useState } from "react";

import Block from "./component/Block&sub/Block";
import BlockMaker from "./component/Block&sub/BlockMaker/BlockMaker";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Tabs from "./component/Tabs";

export default function Home() {
  const { pick } = useStore();

  return (
    <main className="overflow-hidden bg-base-100">
      <Navbar />
      <Tabs />
      {pick == 1 ? <Block /> : <BlockMaker />}
      <Footer />
    </main>
  );
}
