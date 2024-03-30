import StatisticCard from "@/components/ui/Card/StatisticCard/Index";
import React from "react";

// utils 
import { genKey } from "../../utils/genereteKey";
import TitlePage from "@/components/ui/Dashboard/TitlePage";

const statisticItemData = [
  {
    key: genKey(),
    title: 'Ticket Dibuat',
    jumlah: 0
  },
  {
    key: genKey(),
    title: 'Ticket Dibuka',
    jumlah: 0
  },
  {
    key: genKey(),
    title: 'Ticket Ditutup',
    jumlah: 0
  },
]


export default function Dashboard() {
  return (
      <div className="flex gap-x-10">
        {statisticItemData.map(data => <StatisticCard key={data.key} title={data.title}>{data.jumlah}</StatisticCard>)}
      </div>
  )
}