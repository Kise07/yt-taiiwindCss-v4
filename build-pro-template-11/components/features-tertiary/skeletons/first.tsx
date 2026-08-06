"use client";
import {
  CogIcon,
  ErrorIcon,
  FileIcon,
  HubspotIcon,
  SalesforceIcon,
  SheetsIcon,
} from "@/icons";
import {
  FifthIcon,
  FirstIcon,
  FourthIcon,
  RecentActityIcon,
  SecondIcon,
  SeventhIcon,
  SixthIcon,
  ThirdIcon,
} from "@/icons/bento-icons";
import { cn } from "@/lib/utils";
import { IconClock } from "@tabler/icons-react";
import React from "react";
import { motion } from "motion/react";

export const SkeletonOne = () => {
  const cardItems = [
    {
      icon: <FirstIcon />,
      iconClassName: "bg-blue-500",
      title: "Personalized Email",
      description: "Personalized Email sent to ••••• @gmail.com",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-neutral-200 px-1 py-0.5">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-neutral-500">15s</p>
        </div>
      ),
    },
    {
      icon: <SecondIcon />,
      iconClassName: "bg-red-500",
      title: "Peer Review",
      description:
        "Reviewed and approved 2 outputs from Content Drafting Agent",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-red-200 bg-red-100 px-1 py-0.5">
          <p className="text-[10px] font-bold text-red-500">FAILED</p>
        </div>
      ),
    },
    {
      icon: <ThirdIcon />,
      iconClassName: "bg-orange-500",
      title: "Content Drafting",
      description: "Generated draft campaign brief",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-orange-200 bg-orange-100 px-1 py-0.5">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
    {
      icon: <FourthIcon />,
      iconClassName: "bg-black",
      title: "Admin Approval",
      description: "Final approval of marketing copy before publishing",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-orange-200 bg-orange-100 px-1 py-0.5">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
    {
      icon: <FifthIcon />,
      iconClassName: "bg-purple-500",
      title: "Weekly Campaign Report",
      description: "Generated campaign performance report",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-neutral-200 px-1 py-0.5">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-neutral-500">2m</p>
        </div>
      ),
    },
    {
      icon: <SixthIcon />,
      iconClassName: "bg-red-500",
      title: "SEO Audit",
      description:
        "Reviewed and approved 2 outputs from Content Drafting Agent",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-red-200 bg-red-100 px-1 py-0.5">
          <p className="text-[10px] font-bold text-red-500">FAILED</p>
        </div>
      ),
    },
    {
      icon: <SeventhIcon />,
      iconClassName: "bg-orange-500",
      title: "Price Monitoring Agent",
      description: "Generated draft campaign brief",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-orange-200 bg-orange-100 px-1 py-0.5">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
  ];
  return (
    <div className="absolute inset-x-10 inset-y-2 mx-auto flex h-full w-full flex-1 flex-col gap-2 rounded-t-3xl border border-neutral-200 bg-neutral-100 px-2 pt-2">
      <Card>
        {cardItems.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="w-full"
          >
            <CardItem
              index={idx}
              key={item.title}
              icon={item.icon}
              iconClassName={item.iconClassName}
              title={item.title}
              description={item.description}
              badge={item.badge}
            />
          </motion.div>
        ))}
      </Card>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col items-start gap-4 rounded-tl-[16px] border border-transparent bg-white ring-1 shadow-black/10 ring-black/10">
      <div className="flex w-full items-center gap-2 border-b px-4 py-2">
        <RecentActityIcon />
        <p className="text-sm font-bold text-neutral-800">Recent Activity</p>
      </div>
      {children}
    </div>
  );
};

const CardItem = ({
  icon,
  iconClassName,
  title,
  badge,
  description,
  index,
}: {
  icon: React.ReactNode;
  iconClassName?: string;
  title: string;
  description: string;
  badge: React.ReactNode;
  index: number;
}) => {
  const randomColors = [
    "var( --color-blue-500 )",
    "var( --color-green-500 )",
    "var( --color-red-500 )",
  ];
  return (
    <div className="relative flex w-full items-center justify-between overflow-hidden pl-4">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex size-5 items-center justify-center rounded-sm bg-blue-500 text-white",
            iconClassName,
          )}
        >
          {icon}
        </div>
        <p className="text-sm text-neutral-600">{title}</p>
        {badge}
      </div>
      <motion.p className="w-full max-w-[16rem] flex-nowrap text-left text-sm whitespace-nowrap text-neutral-500">
        {description.split("").map((item, idx) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.01 + index * 0.1 }}
            key={idx}
          >
            {item}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-sm border border-neutral-100 px-1 py-0.5 text-sm">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
