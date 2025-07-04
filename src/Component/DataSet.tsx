import React from 'react';
import { useTable, type Column } from 'react-table';
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
const emptyRows: DataRow[] = new Array(20).fill({
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
        Header: 'Job Request',
        accessor: 'jobRequest',
      },
      {
        Header: 'Submitted',
        accessor: 'submitted',
      },
      {
        Header: 'Status',
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
        Header: 'Submitter',
        accessor: 'submitter',
      },
      {
        Header: 'URL',
        accessor: 'url',
        Cell: ({ value }) =>
          value ? (
            <a href={`https://${value}`} target="_blank" rel="noreferrer" className="text-black underline text-sm">
              {value}
            </a>
          ) : null,
      },
    ],
  },
  {
    Header: 'ABC ...',
    columns: [
      {
        Header: 'Assigned',
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
                // assign color based on group header label
                const groupBgColor =
                  column.Header === 'ABC ...'
                    ? 'bg-[#a3b8a9] '
                    : column.Header === 'Answer a question ...'
                      ? 'bg-purple-300'
                      : column.Header === 'Extract ...'
                        ? 'bg-[#e39686]'
                        : column.Header === 'Due Date' ? 'bg-purple-200'
                          : column.Header === 'Est. Value' ? "bg-[#f0d4ce]"
                            : column.Header === 'Priority' ? "bg-purple-200 "
                              : column.Header === "Assigned" ? "bg-[#c5dbcc]"
                                : column.Header === "+" ? "bg-gray-200" : "";
                return (
                  <th
                    {...column.getHeaderProps()}
                    className={`px-4 py-2 border border-gray-200 text-left font-medium text-sm ${groupBgColor}`}
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
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
};

export default DataTable;
