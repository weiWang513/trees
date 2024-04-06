/* eslint-disable react/no-unescaped-entities */
"use client";
import Header from "@/components/Header";
import Image from "next/image";
import "./index.scss";
import { Button, Collapse, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const tables = [
    [
      <div key={"00"}>
        <p>Points</p>ranking
      </div>,
      "1",
      "2",
      "3",
      "4-10",
      "11-20",
      "21-100",
      "100-500",
    ],
    [
      <div key={"10"}>
        <p>Get</p>rewarded
      </div>,
      "100000",
      "60000",
      "40000",
      "30000",
      "20000",
      "10000",
      "6000",
    ],
  ];
  const qa = [
    {
      q: "What is TREES PROTOCOL?",
      a: "TREES PROTOCOL, which aims to provide users with the ability to launch projects, pledge assets, lend and borrow, bridge across chains and provide special asset liquidity. The protocol will use a combination of smart contracts and decentralized autonomous organizations (TREES DAO) to enable secure, efficient and transparent financial services, creating more value and opportunities for users.",
      h: 80,
    },
    {
      q: "What are the components of TREES PROTOCOL?",
      a: (
        <div>
          We propose Trees Protocol, a comprehensive DeFi protocol that includes
          the following core features:
          <p>
            1. Launch projects: Users can easily launch projects through our
            platform without complicated processes and procedures.
          </p>
          <p>
            2. Pledge Assets: Users can pledge their assets on our platform to
            get corresponding rewards and income.
          </p>
          <p>
            3. Borrowing and lending: Users can borrow and lend on our platform
            with low interest rate and easy operation.
          </p>
          <p>
            4. Cross-chain bridging: We provide cross-chain bridging service,
            users can freely transfer assets between different blockchains.
          </p>
          <p>
            5. Liquidity Provision: We provide liquidity for special assets,
            providing users with more trading opportunities.
          </p>
        </div>
      ),
      h: 196,
    },
    {
      q: "What is unique about Trees Protocol compared to other DEFI systems?",
      a: (
        <div>
          Our DeFi protocol has the following advantages:
          <p>
            1.Complete ecosystem to meet different financial needs of users.
          </p>
          <p>
            2. High security, safeguarding user assets through smart contracts
            and DAO.
          </p>
          <p>
            3. Low interest rate lending and borrowing, reducing users' cost of
            use.
          </p>
          <p>
            4. Convenient cross-chain operation, providing one-stop service.
          </p>
          <p>
            5. Design choices: One way to design an order book is as a separate
            chain of applications, although atomic composability needs to be
            weighed. Doing so enables customisability through the Solana Virtual
            Machine (SVM), without compromising Solana's speed and low cost.
          </p>
          <p>
            6. Scalability: Jump Crypto's second validator client, Firedancer,
            will be available on Solana, which will be interesting to watch as
            it may further increase Solana's performance by 10x or more. with 1
            million+ TPS in the test environment, Firedancer opens up new
            high-frequency trading and derivatives trading possibilities on the
            chain. Firedancer
          </p>
          <p>
            7.New Markets: New applications and asset classes can be used to
            create markets, such as specialised digital assets, and the
            opportunities are endless.
          </p>
        </div>
      ),
      h: 305,
    },
    {
      q: "What is Trees Protocol's token distribution model?",
      a: (
        <div>
          Total amount of tokens 1 billion The token distribution plan is as
          follows Pledge Mining (25%): 250,000,000 tokens Halve every 4 years,
          adjust mining rate according to the number of Genesis NFT pledges,
          decreasing mining rewards to incentivise early participation and
          Long-term holding. Team (10%): 90,000,000 tokens After 1 year of
          lock-up, 12 months linear release to ensure the team's long-term
          commitment and continuous contribution to the project. Liquidity
          Provision (LP) (10%): 100,000,000 tokens Supports the project's
          initial liquidity by injecting significant DEX and CEX liquidity pools
          in phases to facilitate trading and stabilise the token price.
          Marketing (20%): 100,000,000 tokens Used for marketing, KOL
          cooperation, social media activities, advertising and PR, etc. to
          drive project awareness and participation. Community Building and
          Governance (5%): 100,000,000 tokens Incentives for community
          participation, voting governance, proposal rewards, etc., to support
          the construction of an active and highly engaged community. Airdrop
          (2%): 20,000,000 tokens Airdrops to early community contributors to
          encourage and reward early community support. Funding (8%): 80,000,000
          tokens Locked up for 1 year followed by a 12 month linear release to
          ensure long term commitment and continued contribution to the project.
          Public Private Placement (20%): 200,000,000 tokens
        </div>
      ),
      h: 213,
    },
  ];
  const [activeKeys, setActiveKeys] = useState<number[]>([]);

  return (
    <div className="home">
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
      <div className="m-auto t-content flex flex-row items-center relative">
        <div className="flex flex-col items-start justify-center		">
          <div className="flex flex-row items-baseline relative">
            <p className="text-[#00FF0A] text-8xl">Trees Protocol</p>
            <p className="text-[#fff] text-6xl ml-10px">
              Powered by <span className="text-[#00FF0A]">Solana</span>
            </p>
            <Image
              src="/images/g-cir.png"
              alt="Logo"
              className="absolute g-c"
              width={200}
              height={200}
              quality={100}
              priority
            />
          </div>
          <p className="text-[#fff] text-6xl leading-relaxed">
            SEED Genesis NFT
          </p>
          <div className="flex flex-row mt-10px">
            <Button
              size="large"
              className="bg-[#fff] text-[#131313] mr-24px text-3xl leading-5"
            >
              Mint
            </Button>
            <Button
              className="bg-[#05EB00] text-[#131313] text-3xl leading-5"
              type="primary"
            >
              Get Reward
            </Button>
          </div>
        </div>

        {/* <Image
          src="/images/tAnimation.png"
          alt="Logo"
          className="t-a"
          width={484}
          height={489}
          priority
          quality={100}
        /> */}
        <div className="g-c-r absolute flex items-center justify-center">
          <Image
            src="/images/g-cir-a.png"
            alt="g-c"
            width={16}
            height={129}
            priority
            quality={100}
          />
        </div>
        <div className="a-main-i absolute">
          <div className="inner">
            <Image
              src="/images/a-main-i.png"
              alt=""
              className="a-main"
              width={384}
              height={391}
              priority
              quality={100}
            />
            <Image
              src="/images/light-line.png"
              alt=""
              className="a-main-line absolute"
              width={25}
              height={25}
              priority
              quality={100}
            />
            <Image
              src="/images/light.png"
              alt=""
              className="light0 absolute"
              width={20}
              height={20}
              priority
              quality={100}
            />
            <Image
              src="/images/light.png"
              alt=""
              className="light1 absolute"
              width={37}
              height={37}
              priority
              quality={100}
            />
            <Image
              src="/images/light.png"
              alt=""
              className="light2 absolute"
              width={12}
              height={12}
              priority
              quality={100}
            />
            <Image
              src="/images/light.png"
              alt=""
              className="light3 absolute"
              width={45}
              height={45}
              priority
              quality={100}
            />

            <div className="cir">
              <div className="cir-inner"></div>
            </div>
          </div>
        </div>
        {/* <Image
          src="/images/g-cir.png"
          alt="Logo"
          className="absolute g-c-r"
          width={336}
          height={336}
          priority
        /> */}
      </div>
      <div className="inf relative m-auto flex flex-col items-center">
        {/* <Image
          src="/images/b.png"
          alt="inf"
          className="absolute inset-x-0px top-0px z-0"
          width={1920}
          height={305}
          priority
          quality={100}
        /> */}
        <p className="m-auto text-[#00FF0A] text-center text-5xl relative">
          Trees Protocol
        </p>
        <p className="m-auto text-left w-1100px relative mt-48px text-xl">
          which aims to provide users with the ability to launch projects,
          pledge assets, lend and borrow, bridge across chains and provide
          special asset liquidity. The protocol will use a combination of smart
          contracts and decentralized autonomous organizations (TREES DAO) to
          enable secure, efficient and transparent financial services, creating
          more value and opportunities for users.
        </p>
        <Button
          className="bg-[#05EB00] text-[#131313] m-auto mt-48px text-2xl leading-5"
          type="primary"
        >
          Read Whitepaper
        </Button>
        <div className="m-auto locl relative flex flex-row items-center justify-between pt-48px">
          <Image
            src="/images/cBg.png"
            alt="inf"
            className="absolute top-0px"
            width={1099}
            height={602}
            priority
            quality={100}
          />
          {[1, 1, 1].map((_, i) => {
            const w = i !== 1 ? 329 : 6;
            const h = i !== 1 ? 211 : 175;
            return (
              <div className="locl-o" key={i}>
                <Image
                  src={`/images/line-${i}.png`}
                  alt="locl"
                  width={w}
                  height={h}
                  priority
                  quality={100}
                  className={`absolute locl-line-${i}`}
                />
                <div className="flex items-center justify-center locl-op-c relative">
                  <div
                    className={`relative z-10 cursor-pointer locl-op-${i}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="table-i flex flex-row relative m-auto items-end justify-between">
        <Image
          src="/images/l-bg.png"
          alt="l-bg"
          className="absolute g-circle-t"
          width={800}
          height={800}
          priority
          quality={100}
        />
        <div className="l relative">
          <p className="text-[#00FF0A] text-2xl leading-relaxed mb-10px text-5xl">
            MINT Rules
          </p>
          <p className="text-[#fff] leading-relaxed text-xl">
            SEED Genesis NFT Public Chain:
            <span className="text-[#00FF0A]">Solana</span>
          </p>
          <p className="text-[#fff] leading-relaxed text-xl">
            Genesis NFT Name: Seed
          </p>
          <p className="text-[#fff] leading-relaxed text-xl">
            Total number of Genesis NFT: 
            <span className="text-[#00FF0A]">2100</span>(1,000 whitelisted,
            1,000 public offerings, 100 team reservations)
          </p>
          <p className="text-[#fff] leading-relaxed text-xl">
            Single sheet: <span className="text-[#00FF0A]"> 2000 tokens</span>
          </p>
          <p className="text-[#fff] leading-relaxed text-xl">
            Single Mint fee: 
            <span className="text-[#00FF0A]">
              0.8 sol+sol real-time gas fee（WL）
            </span>
          </p>
          <p className="text-[#fff] leading-relaxed text-xl">
            Single Mint fee: 
            <span className="text-[#00FF0A]">
              1sol+sol real-time gas fee（PS）
            </span>
          </p>
          <div className="absolute rulers-line" />
          <Image
            src="/images/rulers-i.png"
            alt="rulers-i"
            className="absolute rulers-i"
            width={246}
            height={277}
            priority
            quality={100}
          />
        </div>
        <div className="r relative">
          <p className="text-[#00FF0A] text-2xl leading-relaxed mb-10px text-5xl text-right">
            Invite Reward:
          </p>
          <p className="text-[#fff] leading-relaxed text-xl text-right">
            lnvite reward:
          </p>
          <p className="text-[#fff] leading-relaxed text-xl text-right">
            Each successful invitation to a new user can earn 1 point.Obtain
            different levels of Trees token rewards based on the total
            pointsearned
          </p>
          {/* <p className="text-[#fff] leading-relaxed text-xl text-right">
            of seed lnscription rewards based on the total pointsearned
          </p> */}
          <div className="absolute rulers-line1" />
          <div className="tables flex flex-col ">
            {tables.map((table, i) => {
              return (
                <div className="line flex flex-row flex-1" key={i}>
                  {table.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="line-i flex flex-col flex-1 items-center justify-center"
                      >
                        {i > 0 && index > 0 && <i></i>}
                        {item}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="qa m-auto mt-48px">
        <div className="flex flex-row items-center justify-center text-[#00FF0A] text-5xl mb-48px">
          Q
          <Image
            src="/images/g-icon.png"
            alt="g-icon"
            width={32}
            height={54}
            priority
            quality={100}
            className="ml-10px mr-10px"
          />
          A
        </div>
        {qa.map((e, i) => {
          const isActive = activeKeys.includes(i);
          return (
            <div
              key={e.q}
              className={`qa-i p-24px mb-48px ${isActive ? "ac" : "deac"}`}
            >
              <p className="qa-q flex flex-row items-center justify-between h-48px">
                <span
                  className={`${
                    isActive ? "text-[#00FF0A]" : "text-[#fff]"
                  } text-2xl`}
                >
                  {e.q}
                </span>
                <Image
                  src={`/images/${!isActive ? "open" : "closed"}.png`}
                  alt=""
                  width={30}
                  height={30}
                  priority
                  quality={100}
                  className="cursor-pointer"
                  onClick={() => {
                    if (isActive) {
                      setActiveKeys(activeKeys.filter((k) => k !== i));
                    } else {
                      setActiveKeys([...activeKeys, i]);
                    }
                  }}
                />
              </p>
              <div
                className={`qa-a pt-24px text-xl ${
                  isActive ? "open" : "closed"
                }`}
                style={{ height: `${isActive ? e.h : 0}px` }}
              >
                {e.a}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
