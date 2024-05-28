import React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";

const TotalBalance = ({ totalCurrentBalance }: { totalCurrentBalance: number }) => {
  return (
    <section className="flex items-end justify-between gap-2">
      <div className="flex items-start flex-col gap-2">
        <p className="total-balance-label">Total Current Balance</p>
        <p className="total-balance-amount flex-center gap-2 ">
          <AnimatedCounter amount={totalCurrentBalance} />
        </p>
      </div>
      <Image src="/icons/send.svg" alt="send" width={30} height={30} />
    </section>
  );
};

const TaskBalance = ({ taskBalance }: { taskBalance: number }) => {
  return (
    <section className="flex items-end justify-between gap-2">
      <div className="flex items-start flex-col gap-2 w-[80%]">
        <p className="total-balance-label">Task Balance</p>
        <p className="total-balance-amount flex-center gap-2">
          <AnimatedCounter amount={taskBalance} />
        </p>
      </div>
      <Image src="/icons/send.svg" alt="send" width={30} height={30} />
    </section>
  );
};

const AffiliateBalance = ({ affiliateBalance }: { affiliateBalance: number }) => {
  return (
    <section className="flex items-end justify-between gap-2">
      <div className="flex items-start flex-col gap-2">
        <p className="total-balance-label">Affiliate Balance</p>
        <p className="total-balance-amount flex-center gap-2">
          <AnimatedCounter amount={affiliateBalance} />
        </p>
      </div>
      <Image src="/icons/send.svg" alt="send" width={30} height={30} />
    </section>
  );
};

export { TotalBalance, AffiliateBalance, TaskBalance };
