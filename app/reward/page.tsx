"use client";
import Header from "@/components/Header";
import Image from "next/image";
import "./index.scss";
import { Button, Collapse, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import Footer from "@/components/Footer";
import SModal from "@/components/SModal";

export default function Reward() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");

  const cChild = (
    <div className="p-24px text-[#fff]">
      <p className="text-center text-[#00ff0a] text-5xl mb-24px">{title}</p>
      <p>
        1. Each user is only allowed to use one address account to participate
        in the inviter mechanism.
      </p>
      <p>
        2. The Trees Protocol will verify the authenticity of the invitation
        activity and any attempt to use improper means The behavior of obtaining
        rewards (such as bulk use of address invitations, mutual brushing of
        address invitations, etc.), Trees Protocol has the right to obtain
        reward eligibility for all consumer related addresses.
      </p>
      <p>
        3. If the points are the same, the ranking will be based on the
        timestamp when the corresponding points are reached.
      </p>
      <p>
        4. All invitation rewards will be airdropped to the recipient within 3
        working days after verifying the validity of the invitation The Sol
        address for the reward.
      </p>
      <p>
        5.The total amount of tokens airdropped as an invitation reward is
        3,810,000, if the ranking of points does not reach 500 people, the
        tokens that have not been airdropped will be permanently destroyed in
        the black hole address at the end of the token airdrop.
      </p>
    </div>
  );
  return (
    <div className="reward">
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
      <div className="m-auto t-content flex flex-row items-center justify-between relative">
        <div className="flex flex-col items-start justify-center		">
          <div className="flex flex-row items-baseline relative">
            <p className="text-[#fff] text-6xl">SEED Genesis NFT</p>
            <Image
              src="/images/g-cir.png"
              alt="Logo"
              className="absolute g-c"
              width={75}
              height={75}
              priority
              quality={100}
            />
          </div>
          <p className="text-[#00FF0A] text-8xl">Invitation Reward</p>
          <p className="text-[#fff] text-3xl leading-relaxed">
            Invite friends to earn more Trees XP
          </p>
          <div className="flex flex-row mt-10px">
            <Button
              className="bg-[#fff] text-[#131313] mr-24px text-lg leading-5"
              size="large"
            >
              <div className="flex items-center text-2xl leading-5">
                <Image
                  src="/images/x.png"
                  alt=""
                  width={18}
                  height={18}
                  className="mr-10px"
                  priority
                  quality={100}
                />
                Share on Twitter
              </div>
            </Button>
            <Button
              className="bg-[#fff] text-[#131313] text-lg leading-5"
              size="large"
            >
              <div className="flex items-center text-2xl leading-5">
                <Image
                  src="/images/t.png"
                  alt=""
                  width={18}
                  height={18}
                  className="mr-10px"
                  priority
                  quality={100}
                />
                Share on Telegram
              </div>
            </Button>
          </div>
        </div>

        <div className="hr relative">
          <Image
            src="/images/l-bg.png"
            alt="Logo"
            className="absolute hr-g-circle"
            width={150}
            height={150}
            priority
            quality={100}
          />
          <Image
            src="/images/l-bg.png"
            alt="Logo"
            className="absolute hr-g-rward-circle"
            width={250}
            height={250}
            priority
            quality={100}
          />
          <Image
            src="/images/rward-tm.png"
            alt="Logo"
            className="absolute hr-rward-tm"
            width={150}
            height={150}
            priority
            quality={100}
          />
          <div className="hr-ta flex flex-col p-24px">
            <p className="flex-1 text-5xl text-center text-[#00FF0A] hr-line">
              My trees XP
            </p>
            <p className="flex-1 text-5xl text-center text-[#00FF0A] flex flex-col justify-end">
              <span>1000</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-3xl">
        My invitation code: 4234234234{" "}
        <Image
          src="/images/copy.png"
          alt="Logo"
          className="ml-10px cursor-pointer"
          width={24}
          height={24}
          priority
          quality={100}
        />
      </div>
      <div className="inf relative m-auto flex flex-col items-center">
        <Image
          src="/images/l-bg.png"
          alt="l-bg"
          className="absolute g-circle-t"
          width={800}
          height={800}
          priority
          quality={100}
        />
        <div className="tables flex flex-row relative justify-between">
          <div className="ta-l flex-1">
            <p
              className="text-[#00FF0A] t-border t-h-text text-3xl"
              onClick={() => {
                setIsModalOpen(true);
                setTitle("Reward System");
              }}
            >
              Reward System
            </p>
            <div className="t-body t-border">
              <p className="ti text-5xl text-center">My invitation</p>
              <div className="flex flex-row">
                {["user", "time"].map((e, i) => {
                  return (
                    <div key={i} className="flex-1 line">
                      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, id) => {
                        return (
                          <p key={id} className="text-2xl text-center line-i">
                            {e}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <p className="more text-center text-2xl">MORE ……</p>
            </div>
          </div>
          <div className="ta-r flex-1">
            <p
              className="text-[#00FF0A] t-border t-h-text text-3xl"
              onClick={() => {
                setIsModalOpen(true);
                setTitle("Terms of participation");
              }}
            >
              Terms of participation
            </p>
            <div className="t-body t-border">
              <p className="ti text-5xl text-center">Leaderboard</p>
              <div className="flex flex-row">
                {["Rank", "User", "Invite", "XP"].map((e, i) => {
                  return (
                    <div key={i} className="flex-1 line">
                      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, id) => {
                        return (
                          <p key={id} className="text-2xl text-center line-i">
                            {e}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <p className="more text-center text-2xl">MORE ……</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <SModal
        isModalOpen={isModalOpen}
        child={cChild}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
}
