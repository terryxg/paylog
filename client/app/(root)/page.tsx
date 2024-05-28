import { TotalBalance, AffiliateBalance, TaskBalance } from "@/components/BalanceBox";
import HeaderBox from "@/components/HeaderBox";
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import PostPreview from "@/components/PostPreview";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Home = () => {
  const TASK_BALANCE = 272;
  const AFFILIATE_BALANCE = 658;
  const TOTAL_BALANCE = TASK_BALANCE + AFFILIATE_BALANCE;

  const views = [
    <TotalBalance totalCurrentBalance={TOTAL_BALANCE} />,
    <AffiliateBalance affiliateBalance={AFFILIATE_BALANCE} />,
    <TaskBalance taskBalance={TASK_BALANCE} />,
  ];

  const loggedIn = {
    firstName: "salvation",
    lastName: "imooje",
    email: "examplemail@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        {/* Header */}
        <header className="home-header">
          <HeaderBox
            title="welcome"
            user={loggedIn?.firstName}
            alert="Hey somethinig is goinig on here"
          />
        </header>

        {/* All balances carousel */}

        <section>
          <EmblaCarousel slides={SLIDES} views={views} options={OPTIONS} />
        </section>

        {/* Post preview */}

        <section className="border border-red">
          <PostPreview />
        </section>
      </div>
    </section>
  );
};

export default Home;
