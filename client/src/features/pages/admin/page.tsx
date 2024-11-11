import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check, X } from 'lucide-react';

export const transactions = [
  {
    id: 1,
    name: 'Sugeng No Pants',
    address: 'Cileungsi',
    postCode: '16820',
    income: '69.000',
    status: 'Waiting Approve',
  },
  {
    id: 2,
    name: 'Haris Gams',
    address: 'Serang',
    postCode: '42111',
    income: '30.000',
    status: 'Success',
  },
  {
    id: 3,
    name: 'Aziz Union',
    address: 'Bekasi',
    postCode: '13450',
    income: '28.000',
    status: 'Cancel',
  },
  {
    id: 4,
    name: 'Lae Tanjung Balai',
    address: 'Tanjung Balai',
    postCode: '21331',
    income: '30.000',
    status: 'On The Way',
  },
];

export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-600 mb-6">
        Income transaction
      </h1>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Post Code</TableHead>
              <TableHead>Income</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>{transaction.address}</TableCell>
                <TableCell>{transaction.postCode}</TableCell>
                <TableCell className="text-blue-600">
                  {transaction.income}
                </TableCell>
                <TableCell>
                  <span
                    className={`${
                      transaction.status === 'Success'
                        ? 'text-green-600'
                        : transaction.status === 'Cancel'
                        ? 'text-red-600'
                        : transaction.status === 'Waiting Approve'
                        ? 'text-yellow-600'
                        : 'text-blue-600'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </TableCell>
                <TableCell>
                  {transaction.status === 'Waiting Approve' ? (
                    <div className="flex gap-2">
                      <Button
                        variant="destructive"
                        size="sm"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Approve
                      </Button>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      {transaction.status === 'Success' ||
                      transaction.status === 'On The Way' ? (
                        <Check className="h-6 w-6 text-green-600" />
                      ) : (
                        <X className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
