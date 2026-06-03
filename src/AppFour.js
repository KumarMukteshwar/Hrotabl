// import React from "react";
// import {
//   Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
//   Input, Button,
//   DropdownTrigger, Dropdown, DropdownMenu, DropdownItem,
//   Chip, User, Pagination,
// } from "@heroui/react";

// // ─── Data ─────────────────────────────────────────────────────────────────────
// export const statusOptions = [
//   { name: "Active",   uid: "active"   },
//   { name: "Paused",   uid: "paused"   },
//   { name: "Vacation", uid: "vacation" },
// ];

// export const users = [
//   { id:1,  name:"Tony Reichert",   role:"CEO",           team:"Management",            status:"active",   age:"29", avatar:"https://i.pravatar.cc/150?u=a042581f4e29026024d", email:"tony.reichert@example.com"   },
//   { id:2,  name:"Zoey Lang",       role:"Tech Lead",     team:"Development",           status:"paused",   age:"25", avatar:"https://i.pravatar.cc/150?u=a042581f4e29026704d", email:"zoey.lang@example.com"        },
//   { id:3,  name:"Jane Fisher",     role:"Sr. Dev",       team:"Development",           status:"active",   age:"22", avatar:"https://i.pravatar.cc/150?u=a04258114e29026702d", email:"jane.fisher@example.com"      },
//   { id:4,  name:"William Howard",  role:"C.M.",          team:"Marketing",             status:"vacation", age:"28", avatar:"https://i.pravatar.cc/150?u=a048581f4e29026701d", email:"william.howard@example.com"   },
//   { id:5,  name:"Kristen Copper",  role:"S. Manager",    team:"Sales",                 status:"active",   age:"24", avatar:"https://i.pravatar.cc/150?u=a092581d4ef9026700d", email:"kristen.cooper@example.com"   },
//   { id:6,  name:"Brian Kim",       role:"P. Manager",    team:"Management",            status:"active",   age:"29", avatar:"https://i.pravatar.cc/150?u=a042581f4e29026024d", email:"brian.kim@example.com"        },
//   { id:7,  name:"Michael Hunt",    role:"Designer",      team:"Design",                status:"paused",   age:"27", avatar:"https://i.pravatar.cc/150?u=a042581f4e29027007d", email:"michael.hunt@example.com"     },
//   { id:8,  name:"Samantha Brooks", role:"HR Manager",    team:"HR",                    status:"active",   age:"31", avatar:"https://i.pravatar.cc/150?u=a042581f4e27027008d", email:"samantha.brooks@example.com"  },
//   { id:9,  name:"Frank Harrison",  role:"F. Manager",    team:"Finance",               status:"vacation", age:"33", avatar:"https://i.pravatar.cc/150?img=4",                  email:"frank.harrison@example.com"   },
//   { id:10, name:"Emma Adams",      role:"Ops Manager",   team:"Operations",            status:"active",   age:"35", avatar:"https://i.pravatar.cc/150?img=5",                  email:"emma.adams@example.com"       },
// ];

// export function capitalize(s) {
//   return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
// }

// // ─── Icons ─────────────────────────────────────────────────────────────────────
// const PlusIcon = ({ size = 20 }) => (
//   <svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
//     <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
//       <path d="M6 12h12"/><path d="M12 18V6"/>
//     </g>
//   </svg>
// );
// const VerticalDotsIcon = ({ size = 20 }) => (
//   <svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
//     <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
//   </svg>
// );
// const SearchIcon = (p) => (
//   <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...p}>
//     <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 11.5 16.7467 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M22 22L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );
// const ChevronDownIcon = ({ strokeWidth = 1.5, ...p }) => (
//   <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...p}>
//     <path d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/>
//   </svg>
// );
// const GripDotsIcon = () => (
//   <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
//     <circle cx="3" cy="2"  r="1.3" fill="currentColor"/>
//     <circle cx="7" cy="2"  r="1.3" fill="currentColor"/>
//     <circle cx="3" cy="7"  r="1.3" fill="currentColor"/>
//     <circle cx="7" cy="7"  r="1.3" fill="currentColor"/>
//     <circle cx="3" cy="12" r="1.3" fill="currentColor"/>
//     <circle cx="7" cy="12" r="1.3" fill="currentColor"/>
//   </svg>
// );

// // ─── Column definitions ────────────────────────────────────────────────────────
// const CHECKBOX_W = 40;

// const INITIAL_COLUMNS = [
//   { uid:"name",    label:"NAME",    sortable:true,  w:240, stickyLeft:true,  stickyRight:false },
//   { uid:"role",    label:"ROLE",    sortable:true,  w:160, stickyLeft:true,  stickyRight:false },
//   { uid:"status",  label:"STATUS",  sortable:true,  w:130, stickyLeft:true,  stickyRight:false },
//   { uid:"team",    label:"TEAM",    sortable:false, w:160, stickyLeft:false, stickyRight:false },
//   { uid:"age",     label:"AGE",     sortable:true,  w:80,  stickyLeft:false, stickyRight:false },
//   { uid:"email",   label:"EMAIL",   sortable:false, w:230, stickyLeft:false, stickyRight:false },
//   { uid:"actions", label:"ACTIONS", sortable:false, w:90,  stickyLeft:false, stickyRight:true  },
// ];

// const statusColorMap = { active:"success", paused:"danger", vacation:"warning" };

// // ─── Light/Clean Header Palette (Matches Image) ────────────────────────────────
// const H_BG       = "#ffffff";
// const H_TEXT     = "#475569"; // slate-600
// const H_BORDER   = "#e2e8f0"; // slate-200

// // ─── Main component ────────────────────────────────────────────────────────────
// export default function App() {
//   const [filterValue,    setFilterValue]    = React.useState("");
//   const [selectedKeys,   setSelectedKeys]   = React.useState(new Set([]));
//   const [visibleSet,     setVisibleSet]     = React.useState(new Set(INITIAL_COLUMNS.map(c => c.uid)));
//   const [statusFilter,   setStatusFilter]   = React.useState("all");
//   const [rowsPerPage,    setRowsPerPage]    = React.useState(5);
//   const [sortDescriptor, setSortDescriptor] = React.useState({ column:"age", direction:"ascending" });
//   const [page,           setPage]           = React.useState(1);

//   // Column order + widths
//   const [columns, setColumns] = React.useState(INITIAL_COLUMNS);
//   const [widths,  setWidths]  = React.useState(() => Object.fromEntries(INITIAL_COLUMNS.map(c => [c.uid, c.w])));

//   // Drag-and-drop state
//   const dragSrc              = React.useRef(null);
//   const [dragOver,  setDragOver]   = React.useState(null);
//   const [dragSide,  setDragSide]   = React.useState("left"); // "left"|"right"
//   const [draggingUid, setDraggingUid] = React.useState(null);
//   const isResizing           = React.useRef(false);

//   // ── Computed visible ordered columns ────────────────────────────────────────
//   const visibleColumns = React.useMemo(
//     () => columns.filter(c => visibleSet.has(c.uid)),
//     [columns, visibleSet]
//   );

//   // ── Sticky left offset calculator ───────────────────────────────────────────
//   const getStickyLeft = React.useCallback((colIndex) => {
//     let left = CHECKBOX_W;
//     for (let i = 0; i < colIndex; i++) {
//       if (visibleColumns[i]?.stickyLeft) left += (widths[visibleColumns[i].uid] ?? 100);
//       else break;
//     }
//     return left;
//   }, [visibleColumns, widths]);

//   // ── Data pipeline ────────────────────────────────────────────────────────────
//   const hasSearch = Boolean(filterValue);
//   const filtered = React.useMemo(() => {
//     let res = [...users];
//     if (hasSearch) res = res.filter(u => u.name.toLowerCase().includes(filterValue.toLowerCase()));
//     if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length)
//       res = res.filter(u => Array.from(statusFilter).includes(u.status));
//     return res;
//   }, [filterValue, statusFilter, hasSearch]);

//   const totalPages = Math.ceil(filtered.length / rowsPerPage);
//   const pageRows   = React.useMemo(() => filtered.slice((page-1)*rowsPerPage, page*rowsPerPage), [page, filtered, rowsPerPage]);
//   const sorted     = React.useMemo(() => [...pageRows].sort((a, b) => {
//     const fa = a[sortDescriptor.column], fb = b[sortDescriptor.column];
//     const c  = fa < fb ? -1 : fa > fb ? 1 : 0;
//     return sortDescriptor.direction === "descending" ? -c : c;
//   }), [sortDescriptor, pageRows]);

//   // ── Resize handler ───────────────────────────────────────────────────────────
//   const handleResizeMouseDown = React.useCallback((e, uid) => {
//     e.preventDefault(); e.stopPropagation();
//     isResizing.current = true;
//     const startX = e.clientX, startW = widths[uid] ?? 100;
//     document.body.style.cursor = "col-resize";
//     document.body.style.userSelect = "none";
//     const onMove = ev => setWidths(p => ({ ...p, [uid]: Math.max(60, startW + ev.clientX - startX) }));
//     const onUp   = () => {
//       document.body.style.cursor = "";
//       document.body.style.userSelect = "";
//       isResizing.current = false;
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mouseup", onUp);
//     };
//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mouseup", onUp);
//   }, [widths]);

//   // ── Drag-and-drop handlers ───────────────────────────────────────────────────
//   const handleDragStart = React.useCallback((e, uid) => {
//     if (isResizing.current) { e.preventDefault(); return; }
//     dragSrc.current = uid;
//     setDraggingUid(uid);

//     // 1. Clone the header cell to create a beautiful custom floating ghost image
//     const thElement = e.currentTarget;
//     const ghost = thElement.cloneNode(true);

//     // Style the ghost to match the image requested
//     ghost.style.position 