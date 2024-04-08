import React from 'react'

import FormLogin from '@/components/ui/Forms/FormLogin'

export default function Home () {
  return (
    <>
      <main className="py-5 h-screen bg-slate-200 flex justify-center items-center">
        <div className="container-custom">
          <FormLogin/>
        </div>
      </main>
    </>
  )
}
