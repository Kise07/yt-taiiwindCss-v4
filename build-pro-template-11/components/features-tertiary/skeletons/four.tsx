"use client";
import {
  CogIcon,
  ErrorIcon,
  FileIcon,
  HubspotIcon,
  SalesforceIcon,
  SheetsIcon,
} from "@/icons";
import { cn } from "@/lib/utils";
import {
  IconClipboardData,
  IconFeatherFilled,
  IconFileDotsFilled,
  IconFilter2Search,
  IconPointerUp,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export const SkeletonFour = () => {
  const items = [
    {
      title: "Brand & Style",
      icon: <IconClipboardData className="size-4 text-blue-500" />,
      className: "bg-blue-100 border border-blue-200",
      description:
        "Link CRMs, helpdesks, and APIs to give agents secure, rule-based access.",
      tags: [
        { text: "Salesforce", icon: <SalesforceIcon className="size-3" /> },
        { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Google Sheets", icon: <SheetsIcon className="size-3" /> },
      ],
    },
    {
      title: "Compliance & Policy",
      icon: <IconFileDotsFilled className="size-4 text-green-500" />,
      className: "bg-green-100 border border-green-200",
      description:
        "Ensure your AI agents follow company policies and regulatory requirements with built-in compliance controls.",
      tags: [
        { text: "Salesforce", icon: <SalesforceIcon className="size-3" /> },
        { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Google Sheets", icon: <SheetsIcon className="size-3" /> },
      ],
    },
    {
      title: "Content Safety Filters",
      icon: <IconFeatherFilled className="size-4 text-indigo-500" />,
      className: "bg-indigo-100 border border-indigo-200",
      description:
        "Ensure your AI agents follow company policies and regulatory requirements with built-in compliance controls.",
      tags: [
        { text: "Salesforce", icon: <SalesforceIcon className="size-3" /> },
        { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Google Sheets", icon: <SheetsIcon className="size-3" /> },
      ],
    },
    {
      title: "Approval Triggers",
      icon: <IconPointerUp className="size-4 text-neutral-500" />,
      className: "bg-neutral-100 border border-neutral-200",
      description:
        "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
      tags: [
        { text: "Salesforce", icon: <SalesforceIcon className="size-3" /> },
        { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Google Sheets", icon: <SheetsIcon className="size-3" /> },
      ],
    },
    {
      title: "Output Quality Checks",
      icon: <IconFilter2Search className="size-4 text-purple-500" />,
      className: "bg-purple-100 border border-purple-200",
      description:
        "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
      tags: [
        { text: "Salesforce", icon: <SalesforceIcon className="size-3" /> },
        { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Google Sheets", icon: <SheetsIcon className="size-3" /> },
      ],
    },
  ];

  const [selected, setSelected] = useState(items[0]);
  return (
    <div>
      <div className="mx-auto mb-4 flex max-w-lg flex-wrap items-center justify-center gap-4">
        {items.map((item, idx) => (
          <button
            onClick={() => setSelected(item)}
            key={idx}
            className={cn(
              "flex cursor-pointer items-center justify-center gap-1 rounded-sm px-2 py-1 text-xs opacity-50 transition duration-200 active:scale-98",
              selected.title === item.title && "opacity-100",
              item.className,
            )}
          >
            {" "}
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>
      <div className="absolute inset-x-0 mx-auto flex h-full w-full max-w-[20rem] flex-1 flex-col gap-2 rounded-t-3xl border border-neutral-200 bg-neutral-100 p-2 lg:max-w-sm">
        <Card
          topIcon={selected.icon}
          title={selected.title}
          description={selected.description}
          tags={selected.tags}
          className={selected.className}
        />
      </div>
    </div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
  className,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
  className?: string;
}) => {
  return (
    <motion.div
      key={title}
      className="flex flex-col items-start gap-4 rounded-[16px] border border-transparent bg-white p-4 ring-1 shadow-black/10 ring-black/10"
    >
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "mt-1 flex size-6 shrink-0 items-center justify-center rounded-full",
            className,
          )}
        >
          {topIcon}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, filter: `blur(10px)` }}
          animate={{ opacity: 1, filter: `blur(0px)` }}
          transition={{ delay: 0.1 }}
          className="text-lg font-bold text-neutral-800"
        >
          {title}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-base text-neutral-600">Tone Guidelines</p>
        <p className="mt-2 mb-4 rounded-sm border border-dashed border-neutral-200 px-2 py-1 text-sm text-neutral-600">
          {description}
        </p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * idx * 0.5 }}
            >
              <Tag key={tag.text + idx} text={tag.text} icon={tag.icon} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
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
