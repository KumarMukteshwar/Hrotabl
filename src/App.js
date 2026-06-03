// import React from "react";
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   Input,
//   Button,
//   DropdownTrigger,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Chip,
//   User,
//   Pagination,
// } from "@heroui/react";

// // ─── Data ────────────────────────────────────────────────────────────────────
// export const statusOptions = [
//   { name: "Active", uid: "active" },
//   { name: "Paused", uid: "paused" },
//   { name: "Vacation", uid: "vacation" },
// ];

// export const users = [
//   { id: 1,  name: "Tony Reichert",   role: "CEO",        team: "Management",  status: "active",   age: "29", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", email: "tony.reichert@example.com" },
//   { id: 2,  name: "Zoey Lang",       role: "Tech Lead",  team: "Development", status: "paused",   age: "25", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", email: "zoey.lang@example.com" },
//   { id: 3,  name: "Jane Fisher",     role: "Sr. Dev",    team: "Development", status: "active",   age: "22", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d", email: "jane.fisher@example.com" },
//   { id: 4,  name: "William Howard",  role: "C.M.",       team: "Marketing",   status: "vacation", age: "28", avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d", email: "william.howard@example.com" },
//   { id: 5,  name: "Kristen Copper",  role: "S. Manager", team: "Sales",       status: "active",   age: "24", avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d", email: "kristen.cooper@example.com" },
//   { id: 6,  name: "Brian Kim",       role: "P. Manager", team: "Management",  status: "active",   age: "29", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", email: "brian.kim@example.com" },
//   { id: 7,  name: "Michael Hunt",    role: "Designer",   team: "Design",      status: "paused",   age: "27", avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d", email: "michael.hunt@example.com" },
//   { id: 8,  name: "Samantha Brooks", role: "HR Manager", team: "HR",          status: "active",   age: "31", avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d", email: "samantha.brooks@example.com" },
//   { id: 9,  name: "Frank Harrison",  role: "F. Manager", team: "Finance",     status: "vacation", age: "33", avatar: "https://i.pravatar.cc/150?img=4",                email: "frank.harrison@example.com" },
//   { id: 10, name: "Emma Adams",      role: "Ops Manager",team: "Operations",  status: "active",   age: "35", avatar: "https://i.pravatar.cc/150?img=5",                email: "emma.adams@example.com" },
//   { id: 11, name: "Brandon Stevens", role: "Jr. Dev",    team: "Development", status: "active",   age: "22", avatar: "https://i.pravatar.cc/150?img=8",                email: "brandon.stevens@example.com" },
//   { id: 12, name: "Megan Richards",  role: "P. Manager", team: "Product",     status: "paused",   age: "28", avatar: "https://i.pravatar.cc/150?img=10",               email: "megan.richards@example.com" },
//   { id: 13, name: "Oliver Scott",    role: "S. Manager", team: "Security",    status: "active",   age: "37", avatar: "https://i.pravatar.cc/150?img=12",               email: "oliver.scott@example.com" },
//   { id: 14, name: "Grace Allen",     role: "M. Specialist",team: "Marketing", status: "active",   age: "30", avatar: "https://i.pravatar.cc/150?img=16",               email: "grace.allen@example.com" },
//   { id: 15, name: "Noah Carter",     role: "IT Specialist",team: "I. Technology",status: "paused",age: "31", avatar: "https://i.pravatar.cc/150?img=15",               email: "noah.carter@example.com" },
//   { id: 16, name: "Ava Perez",       role: "Manager",    team: "Sales",       status: "active",   age: "29", avatar: "https://i.pravatar.cc/150?img=20",               email: "ava.perez@example.com" },
//   { id: 17, name: "Liam Johnson",    role: "Data Analyst",team: "Analysis",   status: "active",   age: "28", avatar: "https://i.pravatar.cc/150?img=33",               email: "liam.johnson@example.com" },
//   { id: 18, name: "Sophia Taylor",   role: "QA Analyst", team: "Testing",     status: "active",   age: "27", avatar: "https://i.pravatar.cc/150?img=29",               email: "sophia.taylor@example.com" },
//   { id: 19, name: "Lucas Harris",    role: "Administrator",team: "Information Technology",status: "paused",age: "32", avatar: "https://i.pravatar.cc/150?img=50",      email: "lucas.harris@example.com" },
//   { id: 20, name: "Mia Robinson",    role: "Coordinator",team: "Operations",  status: "active",   age: "26", avatar: "https://i.pravatar.cc/150?img=45",               email: "mia.robinson@example.com" },
// ];

// export function capitalize(s) {
//   return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
// }

// // ─── Icons ───────────────────────────────────────────────────────────────────
// export const PlusIcon = ({ size = 24, width, height, ...props }) => (
//   <svg aria-hidden="true" fill="none" focusable="false" height={size || height} role="presentation" viewBox="0 0 24 24" width={size || width} {...props}>
//     <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
//       <path d="M6 12h12" /><path d="M12 18V6" />
//     </g>
//   </svg>
// );

// export const VerticalDotsIcon = ({ size = 24, width, height, ...props }) => (
//   <svg aria-hidden="true" fill="none" focusable="false" height={size || height} role="presentation" viewBox="0 0 24 24" width={size || width} {...props}>
//     <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor" />
//   </svg>
// );

// export const SearchIcon = (props) => (
//   <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" {...props}>
//     <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
//     <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
//   </svg>
// );

// export const ChevronDownIcon = ({ strokeWidth = 1.5, ...otherProps }) => (
//   <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" {...otherProps}>
//     <path d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={strokeWidth} />
//   </svg>
// );

// const DragHandleIcon = () => (
//   <svg width="10" height="14" viewBox="0 0 10 14" fill="none" style={{ flexShrink: 0, opacity: 0.4 }}>
//     <circle cx="3" cy="3"  r="1.2" fill="currentColor" />
//     <circle cx="7" cy="3"  r="1.2" fill="currentColor" />
//     <circle cx="3" cy="7"  r="1.2" fill="currentColor" />
//     <circle cx="7" cy="7"  r="1.2" fill="currentColor" />
//     <circle cx="3" cy="11" r="1.2" fill="currentColor" />
//     <circle cx="7" cy="11" r="1.2" fill="currentColor" />
//   </svg>
// );

// // ─── Constants ────────────────────────────────────────────────────────────────
// const statusColorMap = { active: "success", paused: "danger", vacation: "warning" };

// // Columns config with defaultWidth — first 3 are sticky, last is actions (always sticky)
// const BASE_COLUMNS = [
//   { name: "NAME",    uid: "name",    sortable: true,  defaultWidth: 240, sticky: true  },
//   { name: "ROLE",    uid: "role",    sortable: true,  defaultWidth: 160, sticky: true  },
//   { name: "STATUS",  uid: "status",  sortable: true,  defaultWidth: 120, sticky: true  },
//   { name: "TEAM",    uid: "team",    sortable: false, defaultWidth: 140, sticky: false },
//   { name: "AGE",     uid: "age",     sortable: true,  defaultWidth: 80,  sticky: false },
//   { name: "EMAIL",   uid: "email",   sortable: false, defaultWidth: 220, sticky: false },
//   { name: "ACTIONS", uid: "actions", sortable: false, defaultWidth: 80,  sticky: true, isActions: true },
// ];

// const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "team", "age", "email", "actions"];
// const STICKY_COUNT = 3; // first N non-actions columns are sticky left
// const CHECKBOX_COL_WIDTH = 44;

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function App() {
//   const [filterValue, setFilterValue]     = React.useState("");
//   const [selectedKeys, setSelectedKeys]   = React.useState(new Set([]));
//   const [statusFilter, setStatusFilter]   = React.useState("all");
//   const [rowsPerPage, setRowsPerPage]     = React.useState(5);
//   const [sortDescriptor, setSortDescriptor] = React.useState({ column: "age", direction: "ascending" });
//   const [page, setPage]                   = React.useState(1);

//   // Column order — only non-actions columns; actions always last
//   const [columnOrder, setColumnOrder]     = React.useState(
//     BASE_COLUMNS.filter(c => !c.isActions).map(c => c.uid)
//   );
//   // Column widths map: uid -> px width
//   const [colWidths, setColWidths]         = React.useState(
//     () => Object.fromEntries(BASE_COLUMNS.map(c => [c.uid, c.defaultWidth]))
//   );

//   // Visible columns (controlled by Columns dropdown)
//   const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));

//   // Drag-and-drop state
//   const [dragOverUid, setDragOverUid]     = React.useState(null);
//   const dragSourceUid                     = React.useRef(null);

//   // Build ordered columns list (respecting user-defined order + visibility + actions pinned last)
//   const orderedColumns = React.useMemo(() => {
//     const visible = Array.from(visibleColumns);
//     const nonActionOrdered = columnOrder
//       .filter(uid => visible.includes(uid))
//       .map(uid => BASE_COLUMNS.find(c => c.uid === uid))
//       .filter(Boolean);
//     // Actions always last if visible
//     const actionsCol = BASE_COLUMNS.find(c => c.isActions);
//     if (visible.includes("actions") && actionsCol) {
//       return [...nonActionOrdered, actionsCol];
//     }
//     return nonActionOrdered;
//   }, [columnOrder, visibleColumns]);

//   // ── Filtering & Pagination ─────────────────────────────────────────────────
//   const hasSearchFilter = Boolean(filterValue);

//   const filteredItems = React.useMemo(() => {
//     let result = [...users];
//     if (hasSearchFilter) {
//       result = result.filter(u => u.name.toLowerCase().includes(filterValue.toLowerCase()));
//     }
//     if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
//       result = result.filter(u => Array.from(statusFilter).includes(u.status));
//     }
//     return result;
//   }, [filterValue, statusFilter]);

//   const pages = Math.ceil(filteredItems.length / rowsPerPage);

//   const pageItems = React.useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     return filteredItems.slice(start, start + rowsPerPage);
//   }, [page, filteredItems, rowsPerPage]);

//   const sortedItems = React.useMemo(() => {
//     return [...pageItems].sort((a, b) => {
//       const first = a[sortDescriptor.column];
//       const second = b[sortDescriptor.column];
//       const cmp = first < second ? -1 : first > second ? 1 : 0;
//       return sortDescriptor.direction === "descending" ? -cmp : cmp;
//     });
//   }, [sortDescriptor, pageItems]);

//   // ── Resize Handlers ────────────────────────────────────────────────────────
//   const onResizeMouseDown = React.useCallback((e, uid) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const startX     = e.clientX;
//     const startWidth = colWidths[uid];

//     const onMove = (ev) => {
//       const delta = ev.clientX - startX;
//       const newWidth = Math.max(60, startWidth + delta);
//       setColWidths(prev => ({ ...prev, [uid]: newWidth }));
//     };
//     const onUp = () => {
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mouseup", onUp);
//     };
//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mouseup", onUp);
//   }, [colWidths]);

//   // ── Drag-and-Drop Handlers ─────────────────────────────────────────────────
//   const onDragStart = React.useCallback((e, uid) => {
//     // Don't allow dragging sticky columns or actions
//     const col = BASE_COLUMNS.find(c => c.uid === uid);
//     if (col?.sticky || col?.isActions) { e.preventDefault(); return; }
//     dragSourceUid.current = uid;
//     e.dataTransfer.effectAllowed = "move";
//     // Invisible ghost
//     const ghost = document.createElement("div");
//     ghost.style.cssText = "position:fixed;top:-100px;left:-100px;width:1px;height:1px;";
//     document.body.appendChild(ghost);
//     e.dataTransfer.setDragImage(ghost, 0, 0);
//     setTimeout(() => document.body.removeChild(ghost), 0);
//   }, []);

//   const onDragOver = React.useCallback((e, uid) => {
//     e.preventDefault();
//     const col = BASE_COLUMNS.find(c => c.uid === uid);
//     if (col?.sticky || col?.isActions) return;
//     if (uid !== dragSourceUid.current) setDragOverUid(uid);
//   }, []);

//   const onDragLeave = React.useCallback(() => {
//     setDragOverUid(null);
//   }, []);

//   const onDrop = React.useCallback((e, targetUid) => {
//     e.preventDefault();
//     const sourceUid = dragSourceUid.current;
//     if (!sourceUid || sourceUid === targetUid) {
//       dragSourceUid.current = null;
//       setDragOverUid(null);
//       return;
//     }
//     setColumnOrder(prev => {
//       const next    = [...prev];
//       const fromIdx = next.indexOf(sourceUid);
//       const toIdx   = next.indexOf(targetUid);
//       if (fromIdx < 0 || toIdx < 0) return prev;
//       next.splice(fromIdx, 1);
//       next.splice(toIdx, 0, sourceUid);
//       return next;
//     });
//     dragSourceUid.current = null;
//     setDragOverUid(null);
//   }, []);

//   const onDragEnd = React.useCallback(() => {
//     dragSourceUid.current = null;
//     setDragOverUid(null);
//   }, []);

//   // ── Compute sticky left positions ──────────────────────────────────────────
//   // stickyLeftOf(colIndex) = sum of widths of all columns to the left (including checkbox)
//   const getStickyLeft = React.useCallback((colIndex) => {
//     let left = CHECKBOX_COL_WIDTH;
//     for (let i = 0; i < colIndex; i++) {
//       left += colWidths[orderedColumns[i].uid] ?? 100;
//     }
//     return left;
//   }, [orderedColumns, colWidths]);

//   // ── renderCell ─────────────────────────────────────────────────────────────
//   const renderCell = React.useCallback((user, columnKey) => {
//     const cellValue = user[columnKey];
//     switch (columnKey) {
//       case "name":
//         return (
//           <User
//             avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
//             classNames={{ description: "text-default-500" }}
//             description={user.email}
//             name={cellValue}
//           >
//             {user.email}
//           </User>
//         );
//       case "role":
//         return (
//           <div className="flex flex-col">
//             <p className="text-bold text-small capitalize">{cellValue}</p>
//             <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p>
//           </div>
//         );
//       case "status":
//         return (
//           <Chip className="capitalize border-none gap-1 text-default-600" color={statusColorMap[user.status]} size="sm" variant="dot">
//             {cellValue}
//           </Chip>
//         );
//       case "actions":
//         return (
//           <Dropdown className="bg-background border-1 border-default-200">
//             <DropdownTrigger>
//               <Button isIconOnly radius="full" size="sm" variant="light">
//                 <VerticalDotsIcon className="text-default-400" />
//               </Button>
//             </DropdownTrigger>
//             <DropdownMenu>
//               <DropdownItem key="view">View</DropdownItem>
//               <DropdownItem key="edit">Edit</DropdownItem>
//               <DropdownItem key="delete">Delete</DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
//         );
//       default:
//         return cellValue;
//     }
//   }, []);

//   // ── Callbacks ──────────────────────────────────────────────────────────────
//   const onRowsPerPageChange = React.useCallback((e) => {
//     setRowsPerPage(Number(e.target.value));
//     setPage(1);
//   }, []);

//   const onSearchChange = React.useCallback((value) => {
//     setFilterValue(value ?? "");
//     setPage(1);
//   }, []);

//   // ── Top content ────────────────────────────────────────────────────────────
//   const topContent = React.useMemo(() => (
//     <div className="flex flex-col gap-4">
//       <div className="flex justify-between gap-3 items-end">
//         <Input
//           isClearable
//           classNames={{ base: "w-full sm:max-w-[44%]", inputWrapper: "border-1" }}
//           placeholder="Search by name..."
//           size="sm"
//           startContent={<SearchIcon className="text-default-300" />}
//           value={filterValue}
//           variant="bordered"
//           onClear={() => setFilterValue("")}
//           onValueChange={onSearchChange}
//         />
//         <div className="flex gap-3">
//           <Dropdown>
//             <DropdownTrigger className="hidden sm:flex">
//               <Button endContent={<ChevronDownIcon className="text-small" />} size="sm" variant="flat">Status</Button>
//             </DropdownTrigger>
//             <DropdownMenu
//               disallowEmptySelection
//               aria-label="Status Filter"
//               closeOnSelect={false}
//               selectedKeys={statusFilter}
//               selectionMode="multiple"
//               onSelectionChange={setStatusFilter}
//             >
//               {statusOptions.map(s => (
//                 <DropdownItem key={s.uid} className="capitalize">{capitalize(s.name)}</DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//           <Dropdown>
//             <DropdownTrigger className="hidden sm:flex">
//               <Button endContent={<ChevronDownIcon className="text-small" />} size="sm" variant="flat">Columns</Button>
//             </DropdownTrigger>
//             <DropdownMenu
//               disallowEmptySelection
//               aria-label="Table Columns"
//               closeOnSelect={false}
//               selectedKeys={visibleColumns}
//               selectionMode="multiple"
//               onSelectionChange={setVisibleColumns}
//             >
//               {BASE_COLUMNS.map(col => (
//                 <DropdownItem key={col.uid} className="capitalize">{capitalize(col.name)}</DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//           <Button className="bg-foreground text-background" endContent={<PlusIcon />} size="sm">Add New</Button>
//         </div>
//       </div>
//       <div className="flex justify-between items-center">
//         <span className="text-default-400 text-small">Total {users.length} users</span>
//         <label className="flex items-center text-default-400 text-small">
//           Rows per page:
//           <select className="bg-transparent outline-none text-default-400 text-small ml-1" onChange={onRowsPerPageChange}>
//             <option value="5">5</option>
//             <option value="10">10</option>
//             <option value="15">15</option>
//           </select>
//         </label>
//       </div>
//     </div>
//   ), [filterValue, statusFilter, visibleColumns, onSearchChange, onRowsPerPageChange]);

//   const bottomContent = React.useMemo(() => (
//     <div className="py-2 px-2 flex justify-between items-center">
//       <Pagination
//         showControls
//         classNames={{ cursor: "bg-foreground text-background" }}
//         color="default"
//         isDisabled={hasSearchFilter}
//         page={page}
//         total={pages}
//         variant="light"
//         onChange={setPage}
//       />
//       <span className="text-small text-default-400">
//         {selectedKeys === "all"
//           ? "All items selected"
//           : `${selectedKeys.size} of ${pageItems.length} selected`}
//       </span>
//     </div>
//   ), [selectedKeys, pageItems.length, page, pages, hasSearchFilter]);

//   // ── Render ─────────────────────────────────────────────────────────────────
//   // We render HeroUI's Table but override its internal <table> layout by injecting
//   // a custom colgroup + sticky/resizable behaviour via classNames and a wrapper style.
//   // The key insight: HeroUI Table accepts `classNames` for every part, and we use
//   // a CSS-variable trick + a ResizeObserver-free approach where each <th> becomes a
//   // position:sticky element via inline styles injected through a custom wrapper.

//   return (
//     <>
//       {/* Inject global styles for this table */}
//       <style>{`
//         .adv-table-wrap {
//           overflow-x: auto;
//           overflow-y: auto;
//           max-height: 480px;
//           position: relative;
//           border: 1px solid hsl(var(--heroui-divider));
//           border-radius: 12px;
//         }
//         /* Make HeroUI's table take natural width so columns can be wider than container */
//         .adv-table-wrap table {
//           border-collapse: separate;
//           border-spacing: 0;
//           table-layout: fixed;
//           width: max-content;
//           min-width: 100%;
//         }
//         .adv-table-wrap thead tr th {
//           position: sticky !important;
//           top: 0 !important;
//           z-index: 10;
//           background: hsl(var(--heroui-default-100)) !important;
//           overflow: visible !important;
//           user-select: none;
//           white-space: nowrap;
//         }
//         /* Sticky left columns — applied via data attribute */
//         .adv-table-wrap thead tr th[data-sticky-left],
//         .adv-table-wrap tbody tr td[data-sticky-left] {
//           position: sticky !important;
//           z-index: 15;
//           background: hsl(var(--heroui-background)) !important;
//         }
//         .adv-table-wrap thead tr th[data-sticky-left] {
//           z-index: 20 !important;
//           background: hsl(var(--heroui-default-100)) !important;
//         }
//         /* Sticky right actions column */
//         .adv-table-wrap thead tr th[data-sticky-right],
//         .adv-table-wrap tbody tr td[data-sticky-right] {
//           position: sticky !important;
//           right: 0 !important;
//           z-index: 15;
//           background: hsl(var(--heroui-background)) !important;
//           box-shadow: -2px 0 6px rgba(0,0,0,0.08);
//         }
//         .adv-table-wrap thead tr th[data-sticky-right] {
//           z-index: 20 !important;
//           background: hsl(var(--heroui-default-100)) !important;
//         }
//         /* Last sticky-left column shadow */
//         .adv-table-wrap [data-sticky-left-last] {
//           box-shadow: 4px 0 8px -2px rgba(0,0,0,0.10) !important;
//         }
//         /* Drag over indicator */
//         .adv-table-wrap [data-drag-over="true"] {
//           border-left: 2px solid hsl(var(--heroui-primary)) !important;
//           background: hsl(var(--heroui-primary-50)) !important;
//         }
//         /* Drag source dimming */
//         .adv-table-wrap [data-dragging="true"] {
//           opacity: 0.4;
//         }
//         /* Resize handle */
//         .col-resize-handle {
//           position: absolute;
//           right: -5px;
//           top: 0;
//           width: 10px;
//           height: 100%;
//           cursor: col-resize;
//           z-index: 30;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .col-resize-handle::after {
//           content: '';
//           display: block;
//           width: 2px;
//           height: 55%;
//           border-radius: 1px;
//           background: hsl(var(--heroui-divider));
//           transition: background 0.15s;
//         }
//         .col-resize-handle:hover::after {
//           background: hsl(var(--heroui-primary));
//         }
//         /* Drag hint in header */
//         .col-drag-grip {
//           opacity: 0;
//           transition: opacity 0.15s;
//           cursor: grab;
//           margin-right: 4px;
//           flex-shrink: 0;
//         }
//         th:hover .col-drag-grip {
//           opacity: 1;
//         }
//         /* Scrollbar */
//         .adv-table-wrap::-webkit-scrollbar { width: 6px; height: 6px; }
//         .adv-table-wrap::-webkit-scrollbar-track { background: hsl(var(--heroui-default-100)); }
//         .adv-table-wrap::-webkit-scrollbar-thumb { background: hsl(var(--heroui-default-300)); border-radius: 3px; }
//         .adv-table-wrap::-webkit-scrollbar-thumb:hover { background: hsl(var(--heroui-default-400)); }
//         .adv-table-wrap::-webkit-scrollbar-corner { background: hsl(var(--heroui-default-100)); }
//       `}</style>

//       {/* Top controls (outside scroll container) */}
//       <div className="mb-4">{topContent}</div>

//       {/* Scrollable table wrapper */}
//       <div className="adv-table-wrap">
//         <Table
//           isCompact
//           removeWrapper      /* <-- removes HeroUI's default wrapper div so OUR wrapper controls overflow */
//           aria-label="Team members table with sticky columns, resize, and drag-to-reorder"
//           bottomContentPlacement="outside"
//           checkboxesProps={{
//             classNames: {
//               wrapper: "after:bg-foreground after:text-background text-background",
//             },
//           }}
//           classNames={{
//             th: "bg-transparent text-default-500 border-b border-divider",
//             td: [
//               "first:group-data-[first=true]/tr:before:rounded-none",
//               "last:group-data-[first=true]/tr:before:rounded-none",
//               "group-data-[middle=true]/tr:before:rounded-none",
//               "first:group-data-[last=true]/tr:before:rounded-none",
//               "last:group-data-[last=true]/tr:before:rounded-none",
//             ],
//           }}
//           selectedKeys={selectedKeys}
//           selectionMode="multiple"
//           sortDescriptor={sortDescriptor}
//           onSelectionChange={setSelectedKeys}
//           onSortChange={setSortDescriptor}
//         >
//           <TableHeader>
//             {orderedColumns.map((col, colIndex) => {
//               const isSticky     = col.sticky && !col.isActions;
//               const isLastSticky = isSticky && (colIndex === STICKY_COUNT - 1 || orderedColumns[colIndex + 1]?.isActions || !orderedColumns[colIndex + 1]?.sticky);
//               const isActions    = col.isActions;
//               const isDraggable  = !isSticky && !isActions;
//               const stickyLeft   = isSticky ? getStickyLeft(colIndex) : undefined;
//               const isDraggingThis = dragSourceUid.current === col.uid;
//               const isDragTarget   = dragOverUid === col.uid;

//               return (
//                 <TableColumn
//                   key={col.uid}
//                   align={col.uid === "actions" ? "center" : "start"}
//                   allowsSorting={col.sortable}
//                   // We pass extra props via data attributes using a wrapper trick
//                   // HeroUI forwards unknown props to the <th>
//                   style={{
//                     width: colWidths[col.uid] ?? col.defaultWidth,
//                     minWidth: colWidths[col.uid] ?? col.defaultWidth,
//                     maxWidth: colWidths[col.uid] ?? col.defaultWidth,
//                     // sticky positioning
//                     ...(isSticky && { left: stickyLeft }),
//                     // actions sticky right
//                     ...(isActions && { right: 0 }),
//                     // drag visual
//                     ...(isDragTarget && { borderLeft: "2px solid hsl(var(--heroui-primary))", background: "hsl(var(--heroui-primary-50))" }),
//                     ...(isDraggingThis && { opacity: 0.4 }),
//                     position: (isSticky || isActions) ? "sticky" : undefined,
//                     zIndex: isSticky ? 20 : isActions ? 20 : 10,
//                     boxShadow: isLastSticky
//                       ? "4px 0 8px -2px rgba(0,0,0,0.10)"
//                       : isActions
//                       ? "-2px 0 6px rgba(0,0,0,0.08)"
//                       : undefined,
//                     overflow: "visible",
//                     cursor: isDraggable ? "grab" : "default",
//                   }}
//                   draggable={isDraggable}
//                   onDragStart={isDraggable ? (e) => onDragStart(e, col.uid) : undefined}
//                   onDragOver={isDraggable ? (e) => onDragOver(e, col.uid) : undefined}
//                   onDragLeave={isDraggable ? onDragLeave : undefined}
//                   onDrop={isDraggable ? (e) => onDrop(e, col.uid) : undefined}
//                   onDragEnd={isDraggable ? onDragEnd : undefined}
//                 >
//                   {/* Inner wrapper for drag grip + label + resize handle */}
//                   <div style={{ display: "flex", alignItems: "center", position: "relative", height: "100%", paddingRight: 8 }}>
//                     {isDraggable && (
//                       <span className="col-drag-grip" title="Drag to reorder">
//                         <DragHandleIcon />
//                       </span>
//                     )}
//                     <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                       {col.name}
//                     </span>
//                     {/* Resize handle — not on actions column */}
//                     {!isActions && (
//                       <span
//                         className="col-resize-handle"
//                         onMouseDown={(e) => onResizeMouseDown(e, col.uid)}
//                         onClick={(e) => e.stopPropagation()}
//                         onDragStart={(e) => e.stopPropagation()}
//                         title="Drag to resize"
//                       />
//                     )}
//                   </div>
//                 </TableColumn>
//               );
//             })}
//           </TableHeader>

//           <TableBody emptyContent="No users found" items={sortedItems}>
//             {(item) => (
//               <TableRow key={item.id}>
//                 {(columnKey) => {
//                   const colIndex = orderedColumns.findIndex(c => c.uid === columnKey);
//                   const col = orderedColumns[colIndex];
//                   const isSticky   = col?.sticky && !col?.isActions;
//                   const isActions  = col?.isActions;
//                   const isLastSticky = isSticky && (colIndex === STICKY_COUNT - 1 || !orderedColumns[colIndex + 1]?.sticky);
//                   const stickyLeft = isSticky ? getStickyLeft(colIndex) : undefined;
//                   const isDragTarget = dragOverUid === columnKey;

//                   return (
//                     <TableCell
//                       style={{
//                         width: colWidths[columnKey] ?? 100,
//                         minWidth: colWidths[columnKey] ?? 100,
//                         maxWidth: colWidths[columnKey] ?? 100,
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                         whiteSpace: "nowrap",
//                         ...(isSticky && { position: "sticky", left: stickyLeft, zIndex: 5, background: "hsl(var(--heroui-background))" }),
//                         ...(isActions && { position: "sticky", right: 0, zIndex: 5, background: "hsl(var(--heroui-background))", boxShadow: "-2px 0 6px rgba(0,0,0,0.06)" }),
//                         ...(isLastSticky && { boxShadow: "4px 0 8px -2px rgba(0,0,0,0.10)" }),
//                         ...(isDragTarget && { borderLeft: "2px solid hsl(var(--heroui-primary))", background: "hsl(var(--heroui-primary-50))" }),
//                       }}
//                     >
//                       {renderCell(item, columnKey)}
//                     </TableCell>
//                   );
//                 }}
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Bottom pagination outside scroll area */}
//       <div className="mt-2">{bottomContent}</div>

//       {/* Hint bar */}
//       <div style={{ marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap", fontSize: 11, color: "hsl(var(--heroui-default-400))" }}>
//         <span>⠿ Drag non-sticky column headers to reorder</span>
//         <span>↔ Drag column edge to resize</span>
//         <span>📌 Name, Role, Status columns are pinned left · Actions pinned right</span>
//       </div>
//     </>
//   );
// }

// --------------------------------------------------?

/**
 * HeroUI Advanced Table
 * Features:
 *  1. Sticky checkbox column (no gap to Name)
 *  2. Sticky left columns (checkbox + Name, Role, Status) + sticky right Actions
 *  3. Full drag-and-drop reorder (ALL columns including sticky ↔ non-sticky)
 *  4. Pixel-perfect column resize (same feel as plain HTML table)
 *
 * Strategy: We use HeroUI's <Table removeWrapper> so we own the scroll container.
 * Sticky behaviour, widths, drag state are injected via inline `style` props on
 * TableColumn / TableCell (HeroUI forwards these to the real <th>/<td>).
 * The checkbox column is HeroUI's built-in selection column — we give it a fixed
 * width and sticky left:0 via CSS so it always stays in view.
 */

import React from "react";
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Input, Button,
  DropdownTrigger, Dropdown, DropdownMenu, DropdownItem,
  Chip, User, Pagination,
} from "@heroui/react";

// ─── Static data ──────────────────────────────────────────────────────────────
export const statusOptions = [
  { name: "Active",   uid: "active"   },
  { name: "Paused",   uid: "paused"   },
  { name: "Vacation", uid: "vacation" },
];

export const users = [
  { id:1,  name:"Tony Reichert",   role:"CEO",           team:"Management",           status:"active",   age:"29", avatar:"https://i.pravatar.cc/150?u=a042581f4e29026024d", email:"tony.reichert@example.com"   },
  { id:2,  name:"Zoey Lang",       role:"Tech Lead",     team:"Development",          status:"paused",   age:"25", avatar:"https://i.pravatar.cc/150?u=a042581f4e29026704d", email:"zoey.lang@example.com"        },
  { id:3,  name:"Jane Fisher",     role:"Sr. Dev",       team:"Development",          status:"active",   age:"22", avatar:"https://i.pravatar.cc/150?u=a04258114e29026702d", email:"jane.fisher@example.com"      },
  { id:4,  name:"William Howard",  role:"C.M.",          team:"Marketing",            status:"vacation", age:"28", avatar:"https://i.pravatar.cc/150?u=a048581f4e29026701d", email:"william.howard@example.com"   },
  { id:5,  name:"Kristen Copper",  role:"S. Manager",    team:"Sales",                status:"active",   age:"24", avatar:"https://i.pravatar.cc/150?u=a092581d4ef9026700d", email:"kristen.cooper@example.com"   },
  { id:6,  name:"Brian Kim",       role:"P. Manager",    team:"Management",           status:"active",   age:"29", avatar:"https://i.pravatar.cc/150?u=a042581f4e29026024d", email:"brian.kim@example.com"        },
  { id:7,  name:"Michael Hunt",    role:"Designer",      team:"Design",               status:"paused",   age:"27", avatar:"https://i.pravatar.cc/150?u=a042581f4e29027007d", email:"michael.hunt@example.com"     },
  { id:8,  name:"Samantha Brooks", role:"HR Manager",    team:"HR",                   status:"active",   age:"31", avatar:"https://i.pravatar.cc/150?u=a042581f4e27027008d", email:"samantha.brooks@example.com"  },
  { id:9,  name:"Frank Harrison",  role:"F. Manager",    team:"Finance",              status:"vacation", age:"33", avatar:"https://i.pravatar.cc/150?img=4",                  email:"frank.harrison@example.com"   },
  { id:10, name:"Emma Adams",      role:"Ops Manager",   team:"Operations",           status:"active",   age:"35", avatar:"https://i.pravatar.cc/150?img=5",                  email:"emma.adams@example.com"       },
  { id:11, name:"Brandon Stevens", role:"Jr. Dev",       team:"Development",          status:"active",   age:"22", avatar:"https://i.pravatar.cc/150?img=8",                  email:"brandon.stevens@example.com"  },
  { id:12, name:"Megan Richards",  role:"P. Manager",    team:"Product",              status:"paused",   age:"28", avatar:"https://i.pravatar.cc/150?img=10",                 email:"megan.richards@example.com"   },
  { id:13, name:"Oliver Scott",    role:"S. Manager",    team:"Security",             status:"active",   age:"37", avatar:"https://i.pravatar.cc/150?img=12",                 email:"oliver.scott@example.com"     },
  { id:14, name:"Grace Allen",     role:"M. Specialist", team:"Marketing",            status:"active",   age:"30", avatar:"https://i.pravatar.cc/150?img=16",                 email:"grace.allen@example.com"      },
  { id:15, name:"Noah Carter",     role:"IT Specialist", team:"I. Technology",        status:"paused",   age:"31", avatar:"https://i.pravatar.cc/150?img=15",                 email:"noah.carter@example.com"      },
  { id:16, name:"Ava Perez",       role:"Manager",       team:"Sales",                status:"active",   age:"29", avatar:"https://i.pravatar.cc/150?img=20",                 email:"ava.perez@example.com"        },
  { id:17, name:"Liam Johnson",    role:"Data Analyst",  team:"Analysis",             status:"active",   age:"28", avatar:"https://i.pravatar.cc/150?img=33",                 email:"liam.johnson@example.com"     },
  { id:18, name:"Sophia Taylor",   role:"QA Analyst",    team:"Testing",              status:"active",   age:"27", avatar:"https://i.pravatar.cc/150?img=29",                 email:"sophia.taylor@example.com"    },
  { id:19, name:"Lucas Harris",    role:"Administrator", team:"Information Technology",status:"paused",  age:"32", avatar:"https://i.pravatar.cc/150?img=50",                 email:"lucas.harris@example.com"     },
  { id:20, name:"Mia Robinson",    role:"Coordinator",   team:"Operations",           status:"active",   age:"26", avatar:"https://i.pravatar.cc/150?img=45",                 email:"mia.robinson@example.com"     },
];

export function capitalize(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const PlusIcon = ({ size = 24, ...p }) => (
  <svg fill="none" height={size} viewBox="0 0 24 24" width={size} {...p}>
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <path d="M6 12h12"/><path d="M12 18V6"/>
    </g>
  </svg>
);
const VerticalDotsIcon = ({ size = 24, ...p }) => (
  <svg fill="none" height={size} viewBox="0 0 24 24" width={size} {...p}>
    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
  </svg>
);
const SearchIcon = (p) => (
  <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...p}>
    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 22L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronDownIcon = ({ strokeWidth = 1.5, ...p }) => (
  <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...p}>
    <path d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/>
  </svg>
);
const GripIcon = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
    <circle cx="3" cy="2"  r="1.3" fill="currentColor"/>
    <circle cx="7" cy="2"  r="1.3" fill="currentColor"/>
    <circle cx="3" cy="7"  r="1.3" fill="currentColor"/>
    <circle cx="7" cy="7"  r="1.3" fill="currentColor"/>
    <circle cx="3" cy="12" r="1.3" fill="currentColor"/>
    <circle cx="7" cy="12" r="1.3" fill="currentColor"/>
  </svg>
);

// ─── Column definitions ────────────────────────────────────────────────────────
// stickyIndex: -1 = checkbox (always left-0), 0..N = sticky columns, null = scrollable, "right" = actions
const CHECKBOX_W = 40; // matches HeroUI's built-in selection column width

const INITIAL_COLUMNS = [
  { uid:"name",    label:"NAME",    sortable:true,  w:240, stickyLeft:true  },
  { uid:"role",    label:"ROLE",    sortable:true,  w:160, stickyLeft:true  },
  { uid:"status",  label:"STATUS",  sortable:true,  w:130, stickyLeft:true  },
  { uid:"team",    label:"TEAM",    sortable:false, w:150, stickyLeft:false },
  { uid:"age",     label:"AGE",     sortable:true,  w:80,  stickyLeft:false },
  { uid:"email",   label:"EMAIL",   sortable:false, w:230, stickyLeft:false },
  { uid:"actions", label:"ACTIONS", sortable:false, w:80,  stickyRight:true },
];

const statusColorMap = { active:"success", paused:"danger", vacation:"warning" };

// ─── Main component ────────────────────────────────────────────────────────────
export default function App() {
  // ── Table state ──────────────────────────────────────────────────────────────
  const [filterValue,      setFilterValue]      = React.useState("");
  const [selectedKeys,     setSelectedKeys]      = React.useState(new Set([]));
  const [visibleSet,       setVisibleSet]        = React.useState(new Set(INITIAL_COLUMNS.map(c => c.uid)));
  const [statusFilter,     setStatusFilter]      = React.useState("all");
  const [rowsPerPage,      setRowsPerPage]       = React.useState(5);
  const [sortDescriptor,   setSortDescriptor]    = React.useState({ column:"age", direction:"ascending" });
  const [page,             setPage]              = React.useState(1);

  // ── Column order & widths ────────────────────────────────────────────────────
  // columns = ordered array of column defs (we mutate order via drag-and-drop)
  const [columns, setColumns] = React.useState(INITIAL_COLUMNS);
  const [widths,  setWidths]  = React.useState(
    () => Object.fromEntries(INITIAL_COLUMNS.map(c => [c.uid, c.w]))
  );

  // ── Drag-and-drop ────────────────────────────────────────────────────────────
  // We use a ref-based approach so drag events don't re-render the whole table.
  const dragSrc  = React.useRef(null); // uid being dragged
  const [dragOver, setDragOver] = React.useState(null); // uid of current drop target
  // Track whether we're mid-drag for visual dimming
  const [draggingUid, setDraggingUid] = React.useState(null);

  const handleDragStart = React.useCallback((e, uid) => {
    dragSrc.current = uid;
    setDraggingUid(uid);
    // Invisible ghost image so we can render our own drag preview
    const ghost = document.createElement("div");
    ghost.style.cssText = "position:fixed;top:-200px;left:-200px;width:1px;height:1px;opacity:0";
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 0, 0);
    e.dataTransfer.effectAllowed = "move";
    // Cleanup ghost after drag starts
    requestAnimationFrame(() => document.body.removeChild(ghost));
  }, []);

  const handleDragOver = React.useCallback((e, uid) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (uid !== dragSrc.current) setDragOver(uid);
  }, []);

  const handleDragLeave = React.useCallback((e) => {
    // Only clear if leaving the th entirely (not entering a child)
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDragOver(null);
    }
  }, []);

  const handleDrop = React.useCallback((e, targetUid) => {
    e.preventDefault();
    const srcUid = dragSrc.current;
    if (!srcUid || srcUid === targetUid) { dragSrc.current = null; setDragOver(null); setDraggingUid(null); return; }

    setColumns(prev => {
      const next = [...prev];
      const srcIdx = next.findIndex(c => c.uid === srcUid);
      const tgtIdx = next.findIndex(c => c.uid === targetUid);
      if (srcIdx < 0 || tgtIdx < 0) return prev;

      // Prevent dropping actions anywhere other than last
      if (next[srcIdx].stickyRight) return prev;
      // Prevent dropping onto actions
      if (next[tgtIdx].stickyRight) return prev;

      // Reorder
      const [moved] = next.splice(srcIdx, 1);

      // When a non-sticky col is dropped onto a sticky col position, it becomes sticky
      // When a sticky col is dropped onto a non-sticky position, it loses sticky
      // Rule: a col dropped to left of all sticky cols border becomes sticky;
      // dropped to right of last sticky becomes non-sticky.
      // Simpler: we just physically reorder and INHERIT the sticky status from position:
      // The first N cols (before the first non-sticky) stay sticky = we recalculate.
      next.splice(tgtIdx, 0, moved);

      // Recompute stickyLeft: everything before the first non-sticky-original is sticky,
      // but user can drag any column into sticky zone. We decide: after drop, all columns
      // up to (and including) the last column that was originally sticky AND is in the leading
      // block remain sticky. Instead, simpler UX: the sticky boundary is the first gap.
      // Actually the best UX (matching your reference): sticky = columns in the leading
      // contiguous block that have stickyLeft. After drag, re-scan from left:
      // Any col that lands at index < (number of cols that had stickyLeft before drag) is sticky.
      // But even simpler: if you drag a non-sticky into the sticky zone, it becomes sticky;
      // if you drag a sticky into the non-sticky zone, it loses sticky.
      const numOriginallySticky = prev.filter(c => c.stickyLeft).length;
      return next.map((c, i) => ({
        ...c,
        stickyLeft: i < numOriginallySticky && !c.stickyRight,
      }));
    });

    dragSrc.current = null;
    setDragOver(null);
    setDraggingUid(null);
  }, []);

  const handleDragEnd = React.useCallback(() => {
    dragSrc.current = null;
    setDragOver(null);
    setDraggingUid(null);
  }, []);

  // ── Resize ───────────────────────────────────────────────────────────────────
  // isResizing ref prevents drag-and-drop from firing during resize
  const isResizing = React.useRef(false);

  const handleResizeMouseDown = React.useCallback((e, uid) => {
    e.preventDefault();
    e.stopPropagation();
    isResizing.current = true;

    const startX = e.clientX;
    const startW = widths[uid] ?? 100;

    // Show a global resize cursor so cursor doesn't flicker when leaving the handle
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";

    const onMove = (ev) => {
      const delta = ev.clientX - startX;
      setWidths(prev => ({ ...prev, [uid]: Math.max(60, startW + delta) }));
    };
    const onUp = () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      isResizing.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [widths]);

  // ── Computed visible ordered columns ─────────────────────────────────────────
  const visibleColumns = React.useMemo(() =>
    columns.filter(c => visibleSet.has(c.uid)),
    [columns, visibleSet]
  );

  // ── Compute sticky left offset for each column ────────────────────────────────
  // checkbox is always left:0 width=CHECKBOX_W; sticky cols start from CHECKBOX_W
  const getStickyLeft = React.useCallback((colIndex) => {
    // Sum widths of all sticky-left columns before this one + checkbox width
    let left = CHECKBOX_W;
    for (let i = 0; i < colIndex; i++) {
      if (visibleColumns[i]?.stickyLeft) {
        left += widths[visibleColumns[i].uid] ?? 100;
      } else {
        break; // stop at first non-sticky
      }
    }
    return left;
  }, [visibleColumns, widths]);

  // ── Data processing ───────────────────────────────────────────────────────────
  const hasSearch = Boolean(filterValue);

  const filtered = React.useMemo(() => {
    let res = [...users];
    if (hasSearch) res = res.filter(u => u.name.toLowerCase().includes(filterValue.toLowerCase()));
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      res = res.filter(u => Array.from(statusFilter).includes(u.status));
    }
    return res;
  }, [filterValue, statusFilter]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);

  const pageRows = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [page, filtered, rowsPerPage]);

  const sorted = React.useMemo(() => [...pageRows].sort((a, b) => {
    const fa = a[sortDescriptor.column], fb = b[sortDescriptor.column];
    const c = fa < fb ? -1 : fa > fb ? 1 : 0;
    return sortDescriptor.direction === "descending" ? -c : c;
  }), [sortDescriptor, pageRows]);

  // ── renderCell ────────────────────────────────────────────────────────────────
  const renderCell = React.useCallback((user, key) => {
    switch (key) {
      case "name":
        return (
          <User
            avatarProps={{ radius:"full", size:"sm", src:user.avatar }}
            classNames={{ description:"text-default-500" }}
            description={user.email}
            name={user.name}
          />
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user.role}</p>
            <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize border-none gap-1 text-default-600" color={statusColorMap[user.status]} size="sm" variant="dot">
            {user.status}
          </Chip>
        );
      case "actions":
        return (
          <Dropdown className="bg-background border-1 border-default-200">
            <DropdownTrigger>
              <Button isIconOnly radius="full" size="sm" variant="light">
                <VerticalDotsIcon className="text-default-400" size={20}/>
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="view">View</DropdownItem>
              <DropdownItem key="edit">Edit</DropdownItem>
              <DropdownItem key="delete">Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      default:
        return user[key];
    }
  }, []);

  // ── Top / bottom content ──────────────────────────────────────────────────────
  const onRowsPerPageChange = React.useCallback((e) => { setRowsPerPage(Number(e.target.value)); setPage(1); }, []);
  const onSearchChange = React.useCallback((v) => { setFilterValue(v ?? ""); setPage(1); }, []);

  const topContent = React.useMemo(() => (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          classNames={{ base:"w-full sm:max-w-[44%]", inputWrapper:"border-1" }}
          placeholder="Search by name..."
          size="sm"
          startContent={<SearchIcon className="text-default-300"/>}
          value={filterValue}
          variant="bordered"
          onClear={() => setFilterValue("")}
          onValueChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button endContent={<ChevronDownIcon className="text-small"/>} size="sm" variant="flat">Status</Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection aria-label="Status filter"
              closeOnSelect={false} selectedKeys={statusFilter}
              selectionMode="multiple" onSelectionChange={setStatusFilter}
            >
              {statusOptions.map(s => <DropdownItem key={s.uid} className="capitalize">{capitalize(s.name)}</DropdownItem>)}
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button endContent={<ChevronDownIcon className="text-small"/>} size="sm" variant="flat">Columns</Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection aria-label="Visible columns"
              closeOnSelect={false} selectedKeys={visibleSet}
              selectionMode="multiple" onSelectionChange={setVisibleSet}
            >
              {INITIAL_COLUMNS.map(c => <DropdownItem key={c.uid} className="capitalize">{capitalize(c.label)}</DropdownItem>)}
            </DropdownMenu>
          </Dropdown>
          <Button className="bg-foreground text-background" endContent={<PlusIcon size={18}/>} size="sm">Add New</Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">Total {users.length} users</span>
        <label className="flex items-center text-default-400 text-small gap-1">
          Rows per page:
          <select className="bg-transparent outline-none text-default-400 text-small" onChange={onRowsPerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  ), [filterValue, statusFilter, visibleSet, onSearchChange, onRowsPerPageChange]);

  const bottomContent = React.useMemo(() => (
    <div className="py-2 px-2 flex justify-between items-center">
      <Pagination
        showControls
        classNames={{ cursor:"bg-foreground text-background" }}
        color="default"
        isDisabled={hasSearch}
        page={page}
        total={totalPages}
        variant="light"
        onChange={setPage}
      />
      <span className="text-small text-default-400">
        {selectedKeys === "all" ? "All items selected" : `${selectedKeys.size} of ${pageRows.length} selected`}
      </span>
    </div>
  ), [selectedKeys, pageRows.length, page, totalPages, hasSearch]);

  // ─────────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Styles ────────────────────────────────────────────────────────── */}
      <style>{`
        /* Scroll container owns overflow */
        .ht-wrap {
          overflow: auto;
          max-height: 500px;
          border: 1px solid hsl(var(--heroui-divider));
          border-radius: 12px;
        }
        /* Table uses fixed layout so our widths are respected */
        .ht-wrap table {
          border-collapse: separate !important;
          border-spacing: 0 !important;
          table-layout: fixed !important;
          width: max-content !important;
          min-width: 100% !important;
        }
        /* ── Checkbox column: always sticky left:0, tight to Name ─────────── */
        /* HeroUI renders the selection <th>/<td> as the very first cell */
        .ht-wrap table thead tr th:first-child,
        .ht-wrap table tbody tr td:first-child {
          position: sticky !important;
          left: 0 !important;
          z-index: 22 !important;
          width: ${CHECKBOX_W}px !important;
          min-width: ${CHECKBOX_W}px !important;
          max-width: ${CHECKBOX_W}px !important;
          background: hsl(var(--heroui-background)) !important;
        }
        .ht-wrap table thead tr th:first-child {
          background: hsl(var(--heroui-default-100)) !important;
          z-index: 32 !important;
        }
        /* ── All headers sticky top ─────────────────────────────────────────── */
        .ht-wrap table thead tr th {
          position: sticky !important;
          top: 0 !important;
          z-index: 12;
          background: hsl(var(--heroui-default-100)) !important;
          white-space: nowrap;
          overflow: visible !important;
        }
        /* ── Resize handle ──────────────────────────────────────────────────── */
        .ht-rh {
          position: absolute;
          top: 0;
          right: -4px;
          width: 8px;
          height: 100%;
          cursor: col-resize;
          z-index: 40;
          display: flex;
          align-items: center;
          justify-content: center;
          /* widen hit area without widening visual bar */
        }
        .ht-rh::after {
          content: '';
          width: 3px;
          height: 60%;
          border-radius: 2px;
          background: hsl(var(--heroui-divider));
          transition: background 0.15s, height 0.15s;
          display: block;
        }
        .ht-rh:hover::after,
        .ht-rh:active::after {
          background: hsl(var(--heroui-primary));
          height: 80%;
        }
        /* ── Drag handle (grip dots) ─────────────────────────────────────────── */
        .ht-grip {
          opacity: 0;
          transition: opacity 0.12s;
          cursor: grab;
          flex-shrink: 0;
          color: hsl(var(--heroui-default-400));
          margin-right: 5px;
          display: flex;
          align-items: center;
        }
        th:hover .ht-grip { opacity: 1; }
        .ht-grip:active { cursor: grabbing; }
        /* ── Drop target indicator ──────────────────────────────────────────── */
        .ht-drop-target th,
        .ht-drop-target td {
          border-left: 2px solid hsl(var(--heroui-primary)) !important;
        }
        /* ── Scrollbar ──────────────────────────────────────────────────────── */
        .ht-wrap::-webkit-scrollbar { width: 6px; height: 6px; }
        .ht-wrap::-webkit-scrollbar-track { background: hsl(var(--heroui-default-100)); }
        .ht-wrap::-webkit-scrollbar-thumb { background: hsl(var(--heroui-default-300)); border-radius: 3px; }
        .ht-wrap::-webkit-scrollbar-thumb:hover { background: hsl(var(--heroui-default-400)); }
        .ht-wrap::-webkit-scrollbar-corner { background: hsl(var(--heroui-default-100)); }
      `}</style>

      {/* ── Top toolbar ──────────────────────────────────────────────────── */}
      <div className="mb-4">{topContent}</div>

      {/* ── Table scroll wrapper ─────────────────────────────────────────── */}
      <div className="ht-wrap">
        <Table
          isCompact
          removeWrapper
          aria-label="Users table"
          checkboxesProps={{ classNames: { wrapper:"after:bg-foreground after:text-background text-background" } }}
          classNames={{
            th: [
              "bg-transparent",
              "text-default-500",
              "border-b",
              "border-divider",
              // remove HeroUI's built-in padding so we control it in the inner div
              "!px-0",
            ],
            td: [
              "first:group-data-[first=true]/tr:before:rounded-none",
              "last:group-data-[first=true]/tr:before:rounded-none",
              "group-data-[middle=true]/tr:before:rounded-none",
              "first:group-data-[last=true]/tr:before:rounded-none",
              "last:group-data-[last=true]/tr:before:rounded-none",
            ],
          }}
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          sortDescriptor={sortDescriptor}
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
        >
          {/* ── HEADER ───────────────────────────────────────────────────── */}
          <TableHeader>
            {visibleColumns.map((col, ci) => {
              const isStickyL    = col.stickyLeft;
              const isStickyR    = col.stickyRight;
              const stickyLeft   = isStickyL ? getStickyLeft(ci) : undefined;
              const isLastStickyL = isStickyL && (!visibleColumns[ci + 1]?.stickyLeft || visibleColumns[ci + 1]?.stickyRight);
              const isDragOver   = dragOver === col.uid;
              const isDraggingMe = draggingUid === col.uid;

              return (
                <TableColumn
                  key={col.uid}
                  align={col.uid === "actions" ? "center" : "start"}
                  allowsSorting={col.sortable}
                  draggable={!isStickyR} // actions can't be dragged
                  onDragStart={!isStickyR ? (e) => handleDragStart(e, col.uid) : undefined}
                  onDragOver={!isStickyR ? (e) => handleDragOver(e, col.uid) : undefined}
                  onDragLeave={!isStickyR ? handleDragLeave : undefined}
                  onDrop={!isStickyR ? (e) => handleDrop(e, col.uid) : undefined}
                  onDragEnd={handleDragEnd}
                  style={{
                    /* Fixed width */
                    width:    widths[col.uid],
                    minWidth: widths[col.uid],
                    maxWidth: widths[col.uid],
                    /* Sticky positioning */
                    position: (isStickyL || isStickyR) ? "sticky" : undefined,
                    left:     isStickyL ? stickyLeft : undefined,
                    right:    isStickyR ? 0 : undefined,
                    zIndex:   isStickyL ? 20 : isStickyR ? 20 : 12,
                    /* Shadow separators */
                    boxShadow: isLastStickyL
                      ? "4px 0 8px -2px rgba(0,0,0,0.12)"
                      : isStickyR
                      ? "-4px 0 8px -2px rgba(0,0,0,0.12)"
                      : undefined,
                    /* Drop target highlight */
                    background: isDragOver
                      ? "hsl(var(--heroui-primary-100))"
                      : undefined,
                    borderLeft: isDragOver
                      ? "2px solid hsl(var(--heroui-primary))"
                      : undefined,
                    /* Dragging this col */
                    opacity: isDraggingMe ? 0.4 : 1,
                    cursor: isStickyR ? "default" : "grab",
                    overflow: "visible",
                    transition: "background 0.1s, opacity 0.12s",
                  }}
                >
                  {/* Inner div: grip + label + resize handle */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    height: "100%",
                    padding: "0 12px",
                    gap: 0,
                  }}>
                    {/* Drag grip — show on hover (CSS handles opacity) */}
                    {!isStickyR && (
                      <span
                        className="ht-grip"
                        title="Drag to reorder"
                        onMouseDown={(e) => { if (isResizing.current) e.stopPropagation(); }}
                      >
                        <GripIcon/>
                      </span>
                    )}

                    {/* Column label */}
                    <span style={{ overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", flex:1 }}>
                      {col.label}
                    </span>

                    {/* Resize handle — not on actions */}
                    {!isStickyR && (
                      <span
                        className="ht-rh"
                        title="Drag to resize"
                        onMouseDown={(e) => handleResizeMouseDown(e, col.uid)}
                        onClick={(e) => e.stopPropagation()}
                        // prevent drag events from bubbling to <th> during resize
                        onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      />
                    )}
                  </div>
                </TableColumn>
              );
            })}
          </TableHeader>

          {/* ── BODY ─────────────────────────────────────────────────────── */}
          <TableBody emptyContent="No users found" items={sorted}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => {
                  const ci         = visibleColumns.findIndex(c => c.uid === columnKey);
                  const col        = visibleColumns[ci];
                  if (!col) return <TableCell>{item[columnKey]}</TableCell>;

                  const isStickyL    = col.stickyLeft;
                  const isStickyR    = col.stickyRight;
                  const stickyLeft   = isStickyL ? getStickyLeft(ci) : undefined;
                  const isLastStickyL = isStickyL && (!visibleColumns[ci + 1]?.stickyLeft || visibleColumns[ci + 1]?.stickyRight);
                  const isDragOver   = dragOver === col.uid;

                  return (
                    <TableCell
                      style={{
                        width:    widths[columnKey],
                        minWidth: widths[columnKey],
                        maxWidth: widths[columnKey],
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        /* Sticky */
                        position: (isStickyL || isStickyR) ? "sticky" : undefined,
                        left:    isStickyL ? stickyLeft : undefined,
                        right:   isStickyR ? 0 : undefined,
                        zIndex:  isStickyL ? 8 : isStickyR ? 8 : undefined,
                        background: isDragOver
                          ? "hsl(var(--heroui-primary-50))"
                          : (isStickyL || isStickyR)
                          ? "hsl(var(--heroui-background))"
                          : undefined,
                        boxShadow: isLastStickyL
                          ? "4px 0 8px -2px rgba(0,0,0,0.10)"
                          : isStickyR
                          ? "-4px 0 8px -2px rgba(0,0,0,0.08)"
                          : undefined,
                        borderLeft: isDragOver
                          ? "2px solid hsl(var(--heroui-primary))"
                          : undefined,
                        transition: "background 0.1s",
                      }}
                    >
                      {renderCell(item, columnKey)}
                    </TableCell>
                  );
                }}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* ── Pagination ────────────────────────────────────────────────────── */}
      <div className="mt-2">{bottomContent}</div>

      {/* ── Hint bar ─────────────────────────────────────────────────────── */}
      <div style={{
        marginTop: 8, display:"flex", gap:16, flexWrap:"wrap",
        fontSize: 11, color:"hsl(var(--heroui-default-400))",
      }}>
        <span>⠿ Drag any column header to reorder (including sticky ↔ non-sticky)</span>
        <span>↔ Drag right edge of header to resize</span>
        <span>📌 Checkbox + Name + Role + Status pinned left · Actions pinned right</span>
      </div>
    </>
  );
}