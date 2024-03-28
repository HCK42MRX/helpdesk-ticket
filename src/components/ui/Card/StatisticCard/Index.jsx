import React from "react";

// import components

import { Card, CardHeader, CardTitle, CardContent } from "../../card";



export default function StatisticCard({ title, children }) {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="text-center flex flex-col gap-y-3 w-56">
          <CardTitle>{title}</CardTitle>
          <CardContent>
            {children}
          </CardContent>
          </div>
        </CardHeader>
      </Card>
    </>
  )
}