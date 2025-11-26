"use client";
import { User } from "@/lib/definitions";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import Link from "next/link";

export function UsersTable({ users }: { users: User[] }) {
  const columns: ColumnDef<User>[] = [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Foto",
      cell: ({ row }) => (
        <img
          src={row.original.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full mx-auto"
        />
      ),
    },
    {
      header: "Nombre",
      cell: ({ row }) => (
        <span>
          {row.original.first_name} {row.original.last_name}
        </span>
      ),
    },
    {
      header: "Email",
      accessorKey: "email",
    },

    {
      header: "Posts",
      cell: ({ row }) => (
        <Link
          href={`/posts?userId=${row.original.id}`}
          className="text-blue-500 hover:underline"
        >
          Ver publicaciones
        </Link>
      ),
    },
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="min-w-full border border-gray-200 mt-4">
      <thead className="bg-gray-100">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="p-2 border-b">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="text-center">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2 border-b">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
