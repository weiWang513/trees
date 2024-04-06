/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SModal from "@/components/SModal";
import "./index.scss";
import CompC from "../Footer/compC";

const Header = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Reward", path: "/reward" },
    { name: "Seed Mint", path: "/seedMint" },
    { name: "Whitepaper", path: "/whitepaper" },
    // { name: "Social", path: "/social" },
  ];

  const wallets = [
    {
      img: "/images/Metamask.png",
      name: "Metamask",
    },
    {
      img: "/images/TrustWallet.png",
      name: "Install TrustWallet",
    },
    {
      img: "/images/Binance.png",
      name: "Binance Web3 Wallet",
    },
    {
      img: "/images/Block.png",
      name: "Install Block Wallet",
    },
    {
      img: "/images/Gnosis.png",
      name: "Gnosis Safe App",
    },
    {
      img: "/images/Coinbase.png",
      name: "Coinbase Wallet",
    },
    {
      img: "/images/WalletConnect.png",
      name: "WalletConnect",
    },
    {
      img: "/images/ZenGo.png",
      name: "ZenGo",
    },
    {
      img: "/images/Venly.png",
      name: "Venly",
    },
    {
      img: "/images/Bitget.png",
      name: "Install Bitget Wallet",
    },
    {
      img: "/images/Crypto.png",
      name: "Install Crypto.com Wallet",
    },
    {
      img: "/images/Unstoppable.png",
      name: "Unstoppable Domains",
    },
  ];

  const chains = [
    {
      name: "Solana",
      img: "/images/Solana.png",
    },
    {
      name: "Bitcoin",
      img: "/images/Bitcoin.png",
    },
    {
      name: "Ethereum",
      img: "/images/Eth.png",
    },
    {
      name: "Polygon",
      img: "/images/Polygon.png",
    },
  ];

  const chainList = [
    {
      name: "Phantom",
      img: "/images/Phantom.png",
    },
    {
      name: "Magic Eden",
      img: "/images/MagicEden.png",
    },
  ];

  const [currentRoute, setCurrentRoute] = useState("");
  const [indexChain, setIndexChain] = useState(0);
  const [indexChainList, setIndexChainList] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [chainsOpen, setChainsOpen] = useState(false);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, []);

  const onCancel = () => {
    setIsModalOpen(false);
  };
  const onSocialCancel = () => {
    setSocialOpen(false);
  };

  const cModalChild = (
    <div className="flex flex-col items-center">
      <p className="text-center text-[#00ff0a] text-5xl">Connect Wallet</p>
      <p className="text-center text-[#fff] mt-24px">
        Connecting your wallet is like "logging in" on Web3. Select your wallet
        from the options to get started.nstalled MetaMask but can't connect? Go
        to the extension manager in your browser and on non-primarywallets, such
        as Phantom or Brave, click set the site access to 'on click
      </p>

      <div className="flex flex-row items-center justify-center flex-wrap walls">
        {wallets.map((e, i) => {
          return (
            <div key={i} className="walls-i flex flex-col items-center">
              <div className="img flex items-center justify-center">
                <Image
                  src={e.img}
                  alt=""
                  className="cursor-pointer"
                  width={32}
                  height={32}
                  priority
                  quality={100}
                />
              </div>
              <p className="text-center text-[#fff]">{e.name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-center h-24px">
        <p className="text-[#fff]">New to Polygon?</p>
        <p className="text-[#00FF0A] cursor-pointer">Learn about Wallets ↗</p>
      </div>
    </div>
  );

  const socialChild = (
    <div className="flex flex-col items-center py-24px relative">
      <p className="text-4xl text-[#00ff0a]">Social</p>
      <CompC />
      <Image
        src="/images/close.png"
        alt=""
        className="absolute cursor-pointer close-i"
        width={50}
        height={50}
        priority
        onClick={onSocialCancel}
      />
    </div>
  );

  const chainsChild = (
    <div className="flex flex-col p-24px">
      <div className="flex flex-row items-center justify-between">
        {chains.map((chain, i) => (
          <div
            key={i}
            className={`chain-i flex flex-row items-center justify-center ${
              indexChain === i ? "activeChain" : ""
            }`}
            onClick={() => setIndexChain(i)}
          >
            <Image
              src={chain.img}
              alt=""
              className="cursor-pointer"
              width={32}
              height={32}
              priority
            />
            <p className="text-center text-[#fff] text-3xl ml-10px">
              {chain.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex chain-l mt-48px">
        {chainList.map((chain, i) => (
          <div
            key={i}
            className={`chain-l-i flex-1 flex flex-row items-center justify-center ${
              indexChainList === i ? "active-chain-list" : ""
            }`}
            onClick={() => setIndexChainList(i)}
          >
            <Image
              src={chain.img}
              alt=""
              className="cursor-pointer"
              width={60}
              height={60}
              priority
            />
            <p className="text-center text-[#fff] text-3xl ml-10px flex flex-col items-start ml-24px">
              <span className="text-3xl">{chain.name}</span>
              {indexChainList === i && (
                <span className="text-xl">Connected</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="header flex px-240px items-center justify-between h-70px bg-opacity-90 bg-[#131313] fixed inset-x-0px top-0px">
      <Image
        src="/images/logo.png"
        alt="Logo"
        // className="dark:invert"
        width={122}
        height={18}
        priority
      />
      <nav className="flex items-center justify-between basis-647px h-24px">
        {routes.map((route) => (
          <Link key={route.name} href={route.path}>
            <div
              className={`mr-4 flex items-center text-lg ${
                currentRoute === route.path
                  ? "text-[#00FF0A]"
                  : "text-[#ffffff]"
              } hover:text-[#00FF0A] cursor-pointer`}
            >
              {currentRoute === route.path && (
                <Image
                  className="mr-10px"
                  src="/images/activeTab.png"
                  alt="r"
                  // className="dark:invert"
                  width={13}
                  height={10}
                  priority
                />
              )}
              {route.name}
            </div>
          </Link>
        ))}
        <div
          onClick={() => setSocialOpen(true)}
          className={`mr-4 flex items-center text-lg hover:text-[#00FF0A] cursor-pointer`}
        >
          Social
        </div>
        <div
          onClick={() => window.open("https://trees-protocol.gitbook.io/trees/")}
          className={`mr-4 flex items-center text-lg hover:text-[#00FF0A] cursor-pointer`}
        >
          Docs
        </div>
        <Button
          className="bg-[#05EB00] text-[#131313] text-lg leading-5"
          type="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Connect Wallet
        </Button>
      </nav>
      <SModal
        isModalOpen={isModalOpen}
        child={cModalChild}
        onCancel={onCancel}
      />
      <SModal
        isModalOpen={socialOpen}
        child={socialChild}
        onCancel={onSocialCancel}
        width={588}
      />
      <SModal
        isModalOpen={chainsOpen}
        child={chainsChild}
        onCancel={() => setChainsOpen(false)}
      />
    </div>
  );
};

export default Header;
