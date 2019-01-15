import React from 'react';
import { iconDownload, iconEdit, iconSettings } from 'carbon-icons';
import { Button, DataTable } from 'carbon-components-react';
const {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
} = DataTable;


const initialRows = [
  {
    id: 'a',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Kevins VM Groups',
    status: 'Disabled',
  },
  {
    id: 'b',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Maureens VM Groups',
    status: 'Starting',
  },
  {
    id: 'c',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
];

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'protocol',
    header: 'Protocol',
  },
  {
    key: 'port',
    header: 'Port',
  },
  {
    key: 'rule',
    header: 'Rule',
  },
  {
    key: 'attached_groups',
    header: 'Attached Groups',
  },
  {
    key: 'status',
    header: 'Status',
  },
];




export default () => (
  <DataTable
    className="my-data-table"
    rows={initialRows}
    headers={headers}
    render={({ rows, headers, getHeaderProps, getRowProps, onInputChange }) => (
      <TableContainer >
        <TableToolbar>
          <TableToolbarSearch onChange={onInputChange} className="data-table-search" />
          <TableToolbarContent>
            <TableToolbarAction
              icon={iconDownload}
              iconDescription="Download"
              onClick={null}
            />
            <TableToolbarAction
              icon={iconEdit}
              iconDescription="Edit"
              onClick={null}
            />
            <TableToolbarAction
              icon={iconSettings}
              iconDescription="Settings"
              onClick={null}
            />
            <Button onClick={null} small kind="primary" className="data-table-add-new">
              Add new
            </Button>
          </TableToolbarContent>
        </TableToolbar>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow {...getRowProps({ row })}>
                {row.cells.map(cell => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  />
);