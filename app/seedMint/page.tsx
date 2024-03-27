"use client";
import Header from "@/components/Header";
import Image from "next/image";
import "./index.scss";
import { Button, Collapse, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function SeedMint() {
  return (
    <div className="seed-mint relative flex flex-col justify-between">
      <Header />
      <Image
        src="/images/l-bg.png"
        alt="Logo"
        className="absolute g-circle"
        width={600}
        height={600}
        priority
        quality={100}
      />
      <Image
        src="/images/l-bg.png"
        alt="Logo"
        className="absolute g-circle-r"
        width={400}
        height={400}
        priority
        quality={100}
      />
      <div className="main">
        <div className="seed pt-70px">
          <p className="text-center text-8xl text-[#00FF0A]">SEED</p>
          <p className="text-3xl text-center mt-24px">Total supply: 40000</p>
          <p className="text-center w-1100px text-2xl m-auto mt-24px relative">
            <span className="z-20 relative">
              Trees Protocol Inscription is an introduction that covers all
              developments within the ecosystem. Introducing Introducing,
              providing exclusive access to cutting-edge data and tools,
              ensuring.
            </span>
            <Image
              src="/images/mint-h.png"
              alt="Logo"
              className="m-auto mint-h absolute"
              width={104}
              height={104}
              priority
              quality={100}
            />
            <Image
              src="/images/l-bg.png"
              alt="Logo"
              className="absolute mint-h-circle"
              width={400}
              height={400}
              priority
              quality={100}
            />
          </p>
        </div>
        <Image
          src="/images/mint-m-im.png"
          alt="Logo"
          className="m-auto mint-m-im mt-48px relative"
          width={950}
          height={326}
          priority
          quality={100}
        />
        <div className="m-auto flex flex-col items-center">
          <p className="text-center text-3xl mt-48px">MINT FEE: 0.1SOL+GAS</p>
          <Button
            className="m-auto bg-[#05EB00] text-[#131313] text-2xl leading-5 connect"
            type="primary"
            size="large"
          >
            Connect Wallet
          </Button>
        </div>
      </div>
      <Footer inner={true} />
    </div>
  );
}
