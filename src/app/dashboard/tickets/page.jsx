import TitlePage from '@/components/ui/Dashboard/TitlePage'
import React from 'react'

// component
import BtnModal from '@/components/ui/Button/BtnModal'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { IoFilterOutline } from 'react-icons/io5'
import InputOption from '@/components/ui/Input/InputOption'
import BtnAction from '@/components/ui/Button/BtnAction'

const tickets = [
  {
    number: 'INC001',
    Title: 'Printer not working',
    Priority: 'High',
    Department: 'IT',
    Author: 'John Doe',
    Date: '2024-03-31'
  },
  {
    number: 'INC002',
    Title: 'Software installation issue',
    Priority: 'Medium',
    Department: 'IT',
    Author: 'Jane Smith',
    Date: '2024-03-30'
  },
  {
    number: 'INC003',
    Title: 'Network connectivity problem',
    Priority: 'High',
    Department: 'IT',
    Author: 'Mike Johnson',
    Date: '2024-03-29'
  },
  {
    number: 'INC004',
    Title: 'Email not syncing on mobile devices',
    Priority: 'Low',
    Department: 'IT',
    Author: 'Emily Brown',
    Date: '2024-03-28'
  }
]

export default function Ticket () {
  return (
    <>
      <TitlePage title='Tickets' description='Here you go can see ticket from staff' />
      <BtnModal btnClose={true} className='mt-8 w-32 justify-center' btnName='Filter' headingModal='Filter Data' icon={<IoFilterOutline />}>
        <div className="flex gap-x-5">
          <InputOption label='Departement :' className='mt-5'>
            <option value='odong odong'>odong odng</option>
            <option value="hello world">Hello world</option>
          </InputOption>
          <InputOption label='Departement :' className='mt-5'>
            <option value='odong odong'>odong odng</option>
            <option value="hello world">Hello world</option>
          </InputOption>
          <InputOption label='Departement :' className='mt-5'>
            <option value='odong odong'>odong odng</option>
            <option value="hello world">Hello world</option>
          </InputOption>
        </div>
        <BtnAction className='bg-blue-800 mt-8 text-white' btnName='Submit' />
      </BtnModal>

      {/* Data Table Tickets */}
      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead>Number</TableHead>
            <TableHead className="w-80">Title</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map(ticket =>
            <TableRow key={ticket.number}>
              <TableCell>{ticket.number}</TableCell>
              <TableCell>{ticket.Title}</TableCell>
              <TableCell>{ticket.Priority}</TableCell>
              <TableCell>{ticket.Department}</TableCell>
              <TableCell>{ticket.Author}</TableCell>
              <TableCell>{ticket.Date}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}
