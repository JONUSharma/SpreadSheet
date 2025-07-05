import React from 'react';
import { useTable, type Column } from 'react-table';
import { FaBriefcase } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropdownCircle } from "react-icons/io";

// Define row type
type DataRow = {
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
};

// Sample data
const data: DataRow[] = [
  {
    jobRequest: 'Launch social media campaign for product',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    estValue: '6,200,000 ₹',
  },
  {
    jobRequest: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhanprojects.com',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    estValue: '3,500,000 ₹',
  },
  {
    jobRequest: 'Finalize the user testing feedback for application',
    submitted: '5-12-2024',
    status: 'In-process',
    submitter: 'Mark Jhonson',
    url: 'www.markjhonson.com',
    assigned: 'Rachel lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    estValue: '6,200,000 ₹',
  },
  {
    jobRequest: 'Design the new features for website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen.com',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    estValue: '5,900,000 ₹',
  },
  {
    jobRequest: 'Prepare a financial report for for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    estValue: '2,800,000 ₹',
  },
];

// Add empty rows
const emptyRows: DataRow[] = new Array(50).fill({
  jobRequest: '',
  submitted: '',
  status: '',
  submitter: '',
  url: '',
  assigned: '',
  priority: '',
  dueDate: '',
  estValue: '',
});

// Combine actual data and empty rows
const finalData = [...data, ...emptyRows];

// Column definitions with groups
const columns: Column<DataRow>[] = [

  {
    Header: '#',
    Cell: ({ row }) => row.index + 1,
  },
  {
    Header: 'Q3 Financial Overview',
    columns: [
      {
        Header: () => (
          <div className='flex justify-between '>
            <span className='flex gap-3'>
              <FaBriefcase className='top-1 relative' />
              {"Job Request"}
            </span>
            <span className='relative text-2xl '><RiArrowDropDownLine /></span>

          </div>
        ),
        accessor: 'jobRequest',

      },
      {
        Header: () => (
          <div className='flex justify-between'>
            <span className='flex gap-3 '>
              <img src='/Images/Shape.png' className="h-[15px] relative top-1" alt="img" />
              Submitted
            </span>
            <span className='text-2xl'><RiArrowDropDownLine /></span>
          </div>
        ),
        accessor: 'submitted',
      },
      {
        Header: () => (
          <div className='flex justify-between'>
            <span className='flex gap-2 '>
              <IoMdArrowDropdownCircle className='relative top-1' />
              Status
            </span>
            <span className='text-2xl'><RiArrowDropDownLine /></span>
          </div>
        ),
        accessor: 'status',
        Cell: ({ value }) =>
          value ? (
            <span className={`px-2 py-1 rounded text-xs font-medium ${value === 'In-process'
              ? 'bg-yellow-100 text-yellow-800'
              : value === 'Need to start'
                ? 'bg-blue-100 text-blue-800'
                : value === 'Complete'
                  ? 'bg-green-100 text-green-800'
                  : value === 'Blocked'
                    ? 'bg-red-100 text-red-800'
                    : ''
              }`}>
              {value}
            </span>
          ) : null,
      },
      {
        Header: () => (
          <div className='flex justify-between gap-3'>
            <span className='flex gap-2 '>
              <img src="/Images/Person.png" className='h-[19px]' />
              Submitter
            </span>
            <span className='text-2xl'><RiArrowDropDownLine /></span>
          </div>
        ),
        accessor: 'submitter',
      },

    ],

  },

  {
    Header: () => (
      <div className='flex justify-between '>
        <span className='flex gap-2 '>
          <img src="/Images/Shape (1).png" className='h-[19px]' />
          URL
        </span>
        <span className='text-2xl'><RiArrowDropDownLine /></span>
      </div>
    ),
    accessor: 'url',
    Cell: ({ value }) =>
      value ? (
        <a href={`https://${value}`} target="_blank" rel="noreferrer" className="text-black underline text-sm">
          {value}
        </a>
      ) : null,
  },
  {
    Header: 'ABC ...',
    columns: [
      {
        Header: () => (
          <div className='flex justify-between'>
            <span className='flex gap-2 '>
              <img src="/Images/Shape (2).png" className='h-[19px]' />
              Assigned
            </span>
            <span className='text-2xl'><RiArrowDropDownLine /></span>
          </div>
        ),
        accessor: 'assigned',
      },
    ],
  },

  {
    Header: 'Answer a question ...',
    columns: [
      {
        Header: 'Priority',
        accessor: 'priority',
        Cell: ({ value }) =>
          value ? (
            <span className={`font-medium text-sm ${value === 'High'
              ? 'text-red-600'
              : value === 'Medium'
                ? 'text-yellow-600'
                : value === 'Low'
                  ? 'text-blue-600'
                  : ''
              }`}>
              {value}
            </span>
          ) : null,
      },
      {
        Header: 'Due Date',
        accessor: 'dueDate',
      },
    ],
  },

  {
    Header: 'Extract ...',
    columns: [
      {
        Header: 'Est. Value',
        accessor: 'estValue',
      },
    ],
  },
  {
    Header: "+",
    columns: [
      {
        Header: " ",

      }
    ]
  },

];

const DataTable: React.FC = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<DataRow>({ columns, data: finalData });

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full border border-gray-300 text-sm">
        <thead>
          {headerGroups.map((headerGroup) => (

            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                let thBgColor = 'bg-white';
                console.log('HeaderGroup:', headerGroup.headers)
                // Check if it's a group header (text string)
                if (typeof column.Header === 'string') {
                  thBgColor =
                    column.Header === 'Q3 Financial Overview'
                      ? 'bg-[#E2E2E2]'
                      : column.Header === 'ABC ...'
                        ? 'bg-[#D2E0D4]'
                        : column.Header === 'Answer a question ...'
                          ? 'bg-[#DCCFFC]'
                          : column.Header === 'Extract ...'
                            ? 'bg-[#FAC2AF]'
                            : column.Header === '+'
                              ? 'bg-[#EEEEEE]'
                              : column.Header === "Est. Value"
                                ? "bg-[#FFE9E0]"
                                : column.Header === "Priority"
                                  ? "bg-[#EAE3FC]"
                                  : column.Header === "Due Date"
                                    ? "bg-[#EAE3FC]"
                                    : column.Header === "Assigned"
                                      ? "bg-[#EAE3FC]"
                                      : 'bg-white';
                }

                // If it's a leaf column, check by accessor
                if ('accessor' in column && column.accessor) {
                  const accessor = typeof column.accessor as string;
                  thBgColor =
                    accessor === 'assigned'
                      ? 'bg-[#E8F0E9]'
                      : accessor === 'priority'
                        ? 'bg-[#EAE3FC]'
                        : accessor === 'dueDate'
                          ? 'bg-[#EAE3FC]'
                          : accessor === 'estValue'
                            ? 'bg-[#FFE9E0]'
                            : accessor === 'jobRequest' ||
                              accessor === 'submitted' ||
                              accessor === 'status' ||
                              accessor === 'submitter' ||
                              accessor === 'url'
                              ? 'bg-[#EEEEEE]'
                              : thBgColor; // preserve previous value if no match
                }

                return (
                  <th
                    {...column.getHeaderProps()}
                    className={`px-4 py-2 border border-gray-200 text-left font-medium text-sm ${thBgColor}`}
                  >
                    {column.render('Header')}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>




        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-2 border text-gray-800">
                    {cell.render('Cell')}
                  </td>
                ))}
                {/* <td><Plus/></td> */}
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
};

export default DataTable;
