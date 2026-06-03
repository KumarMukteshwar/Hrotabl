import React from 'react'
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@heroui/react';
import HeroTable from './heroTable';

const VerticalDotsIcon = ({ size = 24, ...props }) => (
  <svg fill="none" height={size} viewBox="0 0 24 24" width={size} {...props}>
    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor" />
  </svg>
);

const NewTable = () => {

const statusColorMap = { active: "success", paused: "danger", vacation: "warning" };

const statusOptions = [
  { name: "Active",   uid: "active"   },
  { name: "Paused",   uid: "paused"   },
  { name: "Vacation", uid: "vacation" },
];

const COLUMNS = [
  {
    uid: "name", label: "NAME", zone: "left", sortable: true, width: 240,
    render: (row) => (
      <User
        avatarProps={{ radius: "full", size: "sm", src: row.avatar }}
        classNames={{ description: "text-default-500" }}
        description={row.email}
        name={row.name}
      />
    ),
  },
  {
    uid: "role", label: "ROLE", zone: "left", sortable: true, width: 160,
    render: (row) => (
      <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{row.role}</p>
        <p className="text-bold text-tiny capitalize text-default-500">{row.team}</p>
      </div>
    ),
  },
  {
    uid: "status", label: "STATUS", zone: "left", sortable: true, width: 130,
    render: (row) => (
      <Chip className="capitalize border-none gap-1 text-default-600" color={statusColorMap[row.status]} size="sm" variant="dot">
        {row.status}
      </Chip>
    ),
  },
  { uid: "team",  label: "TEAM",  zone: "mid", sortable: false, width: 160 },
  { uid: "age",   label: "AGE",   zone: "mid", sortable: true,  width: 80  },
  { uid: "email", label: "EMAIL", zone: "mid", sortable: false, width: 240 },
  {
    uid: "actions", label: "ACTIONS", zone: "right", sortable: false, width: 80,
    render: (_row) => (
      <Dropdown className="bg-background border-1 border-default-200">
        <DropdownTrigger>
          <Button isIconOnly radius="full" size="sm" variant="light">
            <VerticalDotsIcon className="text-default-400" size={20} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="view">View</DropdownItem>
          <DropdownItem key="edit">Edit</DropdownItem>
          <DropdownItem key="delete">Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    ),
  },
];

const USERS = [
  { id: 1, name: "Tony Reichert",   role: "CEO",        team: "Management",  status: "active",   age: "29", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", email: "tony.reichert@example.com" },
  { id: 2, name: "Zoey Lang",       role: "Tech Lead",  team: "Development", status: "paused",   age: "25", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", email: "zoey.lang@example.com" },
  { id: 3, name: "Jane Fisher",     role: "Sr. Dev",    team: "Development", status: "active",   age: "22", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d", email: "jane.fisher@example.com" },
  { id: 4, name: "William Howard",  role: "C.M.",       team: "Marketing",   status: "vacation", age: "28", avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d", email: "william.howard@example.com" },
  { id: 5, name: "Kristen Copper",  role: "S. Manager", team: "Sales",       status: "active",   age: "24", avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d", email: "kristen.cooper@example.com" },
  { id: 6, name: "Brian Kim",       role: "P. Manager", team: "Management",  status: "active",   age: "29", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", email: "brian.kim@example.com" },
  { id: 7, name: "Michael Hunt",    role: "Designer",   team: "Design",      status: "paused",   age: "27", avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d", email: "michael.hunt@example.com" },
  { id: 8, name: "Samantha Brooks", role: "HR Manager", team: "HR",          status: "active",   age: "31", avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d", email: "samantha.brooks@example.com" },
  { id: 9, name: "Frank Harrison",  role: "F. Manager", team: "Finance",     status: "vacation", age: "33", avatar: "https://i.pravatar.cc/150?img=4",                email: "frank.harrison@example.com" },
  { id: 10, name: "Emma Adams",     role: "Ops Manager",team: "Operations",  status: "active",   age: "35", avatar: "https://i.pravatar.cc/150?img=5",                email: "emma.adams@example.com" },
];


  return (
     <div className="p-6 max-w-[1200px] mx-auto">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <HeroTable
        columns={COLUMNS}
        data={USERS}
        searchKey="name"
        filterOptions={{ field: "status", options: statusOptions }}
        onAddNew={() => alert("Add new clicked!")}
        addNewLabel="Add New"
        totalLabel={`Total ${USERS.length} users`}
        defaultSortCol="age"
        defaultSortDir="ascending"
        rowsPerPageOptions={[5, 10, 15]}
      />
    </div>
  )
}

export default NewTable