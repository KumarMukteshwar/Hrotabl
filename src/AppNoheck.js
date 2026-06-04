/**
 * HeroUI Advanced Table
 * Features:
 *  1. Sticky left columns (Name, Role, Status) + sticky right Actions
 *  2. Full drag-and-drop reorder (ALL columns including sticky ↔ non-sticky)
 *  3. Pixel-perfect column resize
 *  4. Cell borders (box look)
 *  5. Blue table header
 *  6. No checkbox / selection column
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
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
    { name: "Vacation", uid: "vacation" },
];

export const users = [
    { id: 1, name: "Tony Reichert", role: "CEO", team: "Management", status: "active", age: "29", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", email: "tony.reichert@example.com" },
    { id: 2, name: "Zoey Lang", role: "Tech Lead", team: "Development", status: "paused", age: "25", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", email: "zoey.lang@example.com" },
    { id: 3, name: "Jane Fisher", role: "Sr. Dev", team: "Development", status: "active", age: "22", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d", email: "jane.fisher@example.com" },
    { id: 4, name: "William Howard", role: "C.M.", team: "Marketing", status: "vacation", age: "28", avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d", email: "william.howard@example.com" },
    { id: 5, name: "Kristen Copper", role: "S. Manager", team: "Sales", status: "active", age: "24", avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d", email: "kristen.cooper@example.com" },
    { id: 6, name: "Brian Kim", role: "P. Manager", team: "Management", status: "active", age: "29", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", email: "brian.kim@example.com" },
    { id: 7, name: "Michael Hunt", role: "Designer", team: "Design", status: "paused", age: "27", avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d", email: "michael.hunt@example.com" },
    { id: 8, name: "Samantha Brooks", role: "HR Manager", team: "HR", status: "active", age: "31", avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d", email: "samantha.brooks@example.com" },
    { id: 9, name: "Frank Harrison", role: "F. Manager", team: "Finance", status: "vacation", age: "33", avatar: "https://i.pravatar.cc/150?img=4", email: "frank.harrison@example.com" },
    { id: 10, name: "Emma Adams", role: "Ops Manager", team: "Operations", status: "active", age: "35", avatar: "https://i.pravatar.cc/150?img=5", email: "emma.adams@example.com" },
    { id: 11, name: "Brandon Stevens", role: "Jr. Dev", team: "Development", status: "active", age: "22", avatar: "https://i.pravatar.cc/150?img=8", email: "brandon.stevens@example.com" },
    { id: 12, name: "Megan Richards", role: "P. Manager", team: "Product", status: "paused", age: "28", avatar: "https://i.pravatar.cc/150?img=10", email: "megan.richards@example.com" },
    { id: 13, name: "Oliver Scott", role: "S. Manager", team: "Security", status: "active", age: "37", avatar: "https://i.pravatar.cc/150?img=12", email: "oliver.scott@example.com" },
    { id: 14, name: "Grace Allen", role: "M. Specialist", team: "Marketing", status: "active", age: "30", avatar: "https://i.pravatar.cc/150?img=16", email: "grace.allen@example.com" },
    { id: 15, name: "Noah Carter", role: "IT Specialist", team: "I. Technology", status: "paused", age: "31", avatar: "https://i.pravatar.cc/150?img=15", email: "noah.carter@example.com" },
    { id: 16, name: "Ava Perez", role: "Manager", team: "Sales", status: "active", age: "29", avatar: "https://i.pravatar.cc/150?img=20", email: "ava.perez@example.com" },
    { id: 17, name: "Liam Johnson", role: "Data Analyst", team: "Analysis", status: "active", age: "28", avatar: "https://i.pravatar.cc/150?img=33", email: "liam.johnson@example.com" },
    { id: 18, name: "Sophia Taylor", role: "QA Analyst", team: "Testing", status: "active", age: "27", avatar: "https://i.pravatar.cc/150?img=29", email: "sophia.taylor@example.com" },
    { id: 19, name: "Lucas Harris", role: "Administrator", team: "Information Technology", status: "paused", age: "32", avatar: "https://i.pravatar.cc/150?img=50", email: "lucas.harris@example.com" },
    { id: 20, name: "Mia Robinson", role: "Coordinator", team: "Operations", status: "active", age: "26", avatar: "https://i.pravatar.cc/150?img=45", email: "mia.robinson@example.com" },
];

export function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const PlusIcon = ({ size = 24, ...p }) => (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size} {...p}>
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
            <path d="M6 12h12" /><path d="M12 18V6" />
        </g>
    </svg>
);
const VerticalDotsIcon = ({ size = 24, ...p }) => (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size} {...p}>
        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor" />
    </svg>
);
const SearchIcon = (p) => (
    <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...p}>
        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 22L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const ChevronDownIcon = ({ strokeWidth = 1.5, ...p }) => (
    <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...p}>
        <path d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
);
const GripIcon = () => (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
        <circle cx="3" cy="2" r="1.3" fill="currentColor" />
        <circle cx="7" cy="2" r="1.3" fill="currentColor" />
        <circle cx="3" cy="7" r="1.3" fill="currentColor" />
        <circle cx="7" cy="7" r="1.3" fill="currentColor" />
        <circle cx="3" cy="12" r="1.3" fill="currentColor" />
        <circle cx="7" cy="12" r="1.3" fill="currentColor" />
    </svg>
);

// ─── Column definitions ────────────────────────────────────────────────────────
const INITIAL_COLUMNS = [
    { uid: "name", label: "NAME", sortable: true, w: 240, stickyLeft: true },
    { uid: "role", label: "ROLE", sortable: true, w: 160, stickyLeft: true },
    { uid: "status", label: "STATUS", sortable: true, w: 130, stickyLeft: true },
    { uid: "team", label: "TEAM", sortable: false, w: 150, stickyLeft: false },
    { uid: "age", label: "AGE", sortable: true, w: 80, stickyLeft: false },
    { uid: "email", label: "EMAIL", sortable: false, w: 230, stickyLeft: false },
    { uid: "actions", label: "ACTIONS", sortable: false, w: 100, stickyRight: true },
];

const statusColorMap = { active: "success", paused: "danger", vacation: "warning" };

// ─── Main component ────────────────────────────────────────────────────────────
export default function App() {
    // ── Table state ──────────────────────────────────────────────────────────────
    const [filterValue, setFilterValue] = React.useState("");
    const [visibleSet, setVisibleSet] = React.useState(new Set(INITIAL_COLUMNS.map(c => c.uid)));
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({ column: "age", direction: "ascending" });
    const [page, setPage] = React.useState(1);

    // ── Column order & widths ────────────────────────────────────────────────────
    const [columns, setColumns] = React.useState(INITIAL_COLUMNS);
    const [widths, setWidths] = React.useState(
        () => Object.fromEntries(INITIAL_COLUMNS.map(c => [c.uid, c.w]))
    );

    // ── Drag-and-drop ────────────────────────────────────────────────────────────
    const dragSrc = React.useRef(null);
    const [dragOver, setDragOver] = React.useState(null);
    const [draggingUid, setDraggingUid] = React.useState(null);

    const handleDragStart = React.useCallback((e, uid) => {
        dragSrc.current = uid;
        setDraggingUid(uid);
        const ghost = document.createElement("div");
        ghost.style.cssText = "position:fixed;top:-200px;left:-200px;width:1px;height:1px;opacity:0";
        document.body.appendChild(ghost);
        e.dataTransfer.setDragImage(ghost, 0, 0);
        e.dataTransfer.effectAllowed = "move";
        requestAnimationFrame(() => document.body.removeChild(ghost));
    }, []);

    const handleDragOver = React.useCallback((e, uid) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (uid !== dragSrc.current) setDragOver(uid);
    }, []);

    const handleDragLeave = React.useCallback((e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setDragOver(null);
    }, []);

    const handleDrop = React.useCallback((e, targetUid) => {
        e.preventDefault();
        const srcUid = dragSrc.current;
        if (!srcUid || srcUid === targetUid) {
            dragSrc.current = null; setDragOver(null); setDraggingUid(null); return;
        }

        setColumns(prev => {
            const next = [...prev];
            const srcIdx = next.findIndex(c => c.uid === srcUid);
            const tgtIdx = next.findIndex(c => c.uid === targetUid);
            if (srcIdx < 0 || tgtIdx < 0) return prev;
            if (next[srcIdx].stickyRight) return prev;
            if (next[tgtIdx].stickyRight) return prev;

            const [moved] = next.splice(srcIdx, 1);
            next.splice(tgtIdx, 0, moved);

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
    const isResizing = React.useRef(false);

    const handleResizeMouseDown = React.useCallback((e, uid) => {
        e.preventDefault();
        e.stopPropagation();
        isResizing.current = true;

        const startX = e.clientX;
        const startW = widths[uid] ?? 100;

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
    // No checkbox column now — sticky starts from left:0
    const getStickyLeft = React.useCallback((colIndex) => {
        let left = 0;
        for (let i = 0; i < colIndex; i++) {
            if (visibleColumns[i]?.stickyLeft) {
                left += widths[visibleColumns[i].uid] ?? 100;
            } else {
                break;
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
                        avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
                        classNames={{ description: "text-default-500" }}
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
                    <div style={{ display: "flex", justifyContent: "center" }}>
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
                    </div>
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
                    classNames={{ base: "w-full sm:max-w-[44%]", inputWrapper: "border-1" }}
                    placeholder="Search by name..."
                    size="sm"
                    startContent={<SearchIcon className="text-default-300" />}
                    value={filterValue}
                    variant="bordered"
                    onClear={() => setFilterValue("")}
                    onValueChange={onSearchChange}
                />
                <div className="flex gap-3">
                    <Dropdown>
                        <DropdownTrigger className="hidden sm:flex">
                            <Button endContent={<ChevronDownIcon className="text-small" />} size="sm" variant="flat">Status</Button>
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
                            <Button endContent={<ChevronDownIcon className="text-small" />} size="sm" variant="flat">Columns</Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection aria-label="Visible columns"
                            closeOnSelect={false} selectedKeys={visibleSet}
                            selectionMode="multiple" onSelectionChange={setVisibleSet}
                        >
                            {INITIAL_COLUMNS.map(c => <DropdownItem key={c.uid} className="capitalize">{capitalize(c.label)}</DropdownItem>)}
                        </DropdownMenu>
                    </Dropdown>
                    <Button className="bg-foreground text-background" endContent={<PlusIcon size={18} />} size="sm">Add New</Button>
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
                classNames={{ cursor: "bg-foreground text-background" }}
                color="default"
                isDisabled={hasSearch}
                page={page}
                total={totalPages}
                variant="light"
                onChange={setPage}
            />
            <span className="text-small text-default-400">
                {`${pageRows.length} rows shown`}
            </span>
        </div>
    ), [pageRows.length, page, totalPages, hasSearch]);

    // Add this computed value
const totalStickyWidth = React.useMemo(() =>
  visibleColumns
    .filter(c => c.stickyLeft)
    .reduce((sum, c) => sum + (widths[c.uid] ?? 0), 0),
  [visibleColumns, widths]
);

    // ─────────────────────────────────────────────────────────────────────────────
    // Render
    // ─────────────────────────────────────────────────────────────────────────────
    return (
        <>
            {/* ── Styles ────────────────────────────────────────────────────────── */}
            <style>{`
        /* Scroll container */
        .ht-wrap {
          overflow: auto;
          max-height: 500px;
          border: 1px solid #1d4ed8;
          border-radius: 12px;
        }

        /* Table fixed layout */
        .ht-wrap table {
          border-collapse: separate !important;
          border-spacing: 0 !important;
          table-layout: fixed !important;
          width: max-content !important;
          min-width: 100% !important;
        }

        /* ── Blue header ──────────────────────────────────────────────────── */
        .ht-wrap table thead tr th {
          position: sticky !important;
          top: 0 !important;
          z-index: 12;
          background: #1d4ed8 !important;
          color: #ffffff !important;
          white-space: nowrap;
          overflow: visible !important;
          border-right: 1px solid #2563eb !important;
          border-bottom: 2px solid #1e40af !important;
        }

        /* Last header cell — no right border */
        .ht-wrap table thead tr th:last-child {
          border-right: none !important;
        }

        /* Override HeroUI's default sort icon color in blue header */
        .ht-wrap table thead tr th * {
          color: #ffffff !important;
        }

        /* ── Cell borders (box look) ─────────────────────────────────────── */
        .ht-wrap table tbody tr td {
          border-right: 1px solid hsl(var(--heroui-divider)) !important;
          border-bottom: 1px solid hsl(var(--heroui-divider)) !important;
        }
        .ht-wrap table tbody tr td:last-child {
          border-right: none !important;
        }
        .ht-wrap table tbody tr:last-child td {
          border-bottom: none !important;
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
        }
        .ht-rh::after {
          content: '';
          width: 3px;
          height: 60%;
          border-radius: 2px;
          background: rgba(255,255,255,0.4);
          transition: background 0.15s, height 0.15s;
          display: block;
        }
        .ht-rh:hover::after,
        .ht-rh:active::after {
          background: #ffffff;
          height: 80%;
        }

        /* ── Drag handle (grip dots) ─────────────────────────────────────────── */
        .ht-grip {
          opacity: 0;
          transition: opacity 0.12s;
          cursor: grab;
          flex-shrink: 0;
          color: rgba(255,255,255,0.8);
          margin-right: 5px;
          display: flex;
          align-items: center;
        }
        th:hover .ht-grip { opacity: 1; }
        .ht-grip:active { cursor: grabbing; }

        /* ── Scrollbar ──────────────────────────────────────────────────────── */
        .ht-wrap::-webkit-scrollbar { width: 6px; height: 6px; }
        // .ht-wrap::-webkit-scrollbar-track { background: hsl(var(--heroui-default-100)); margin-left: 530px;}
        .ht-wrap::-webkit-scrollbar-track {
  background: hsl(var(--heroui-default-100));
  margin-left: ${totalStickyWidth}px;
}
        .ht-wrap::-webkit-scrollbar-thumb { background: #93c5fd; border-radius: 3px; }
        .ht-wrap::-webkit-scrollbar-thumb:hover { background: #60a5fa; border-radius: 3px;}
        .ht-wrap::-webkit-scrollbar-thumb:hover {
  background: #60a5fa;
}
        .ht-wrap::-webkit-scrollbar-corner { background: hsl(var(--heroui-default-100)); }

        /* Row hover highlight */
        .ht-wrap table tbody tr:hover td {
          background-color: #eff6ff !important;
        }
      `}</style>

            {/* ── Top toolbar ──────────────────────────────────────────────────── */}
            <div className="mb-4">{topContent}</div>

            {/* ── Table scroll wrapper ─────────────────────────────────────────── */}
            <div className="ht-wrap">
                <Table
                    isCompact
                    removeWrapper
                    aria-label="Users table"
                    classNames={{
                        th: [
                            "bg-transparent",
                            "border-b",
                            "border-divider",
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
                    sortDescriptor={sortDescriptor}
                    onSortChange={setSortDescriptor}
                >
                    {/* ── HEADER ───────────────────────────────────────────────────── */}
                    <TableHeader>
                        {visibleColumns.map((col, ci) => {
                            const isStickyL = col.stickyLeft;
                            const isStickyR = col.stickyRight;
                            const stickyLeft = isStickyL ? getStickyLeft(ci) : undefined;
                            const isLastStickyL = isStickyL && (!visibleColumns[ci + 1]?.stickyLeft || visibleColumns[ci + 1]?.stickyRight);
                            const isDragOver = dragOver === col.uid;
                            const isDraggingMe = draggingUid === col.uid;

                            return (
                                <TableColumn
                                    key={col.uid}
                                    align={col.uid === "actions" ? "center" : "start"}
                                    allowsSorting={col.sortable}
                                    draggable={!isStickyR}
                                    onDragStart={!isStickyR ? (e) => handleDragStart(e, col.uid) : undefined}
                                    onDragOver={!isStickyR ? (e) => handleDragOver(e, col.uid) : undefined}
                                    onDragLeave={!isStickyR ? handleDragLeave : undefined}
                                    onDrop={!isStickyR ? (e) => handleDrop(e, col.uid) : undefined}
                                    onDragEnd={handleDragEnd}
                                    style={{
                                        width: widths[col.uid],
                                        minWidth: widths[col.uid],
                                        maxWidth: widths[col.uid],
                                        position: (isStickyL || isStickyR) ? "sticky" : undefined,
                                        left: isStickyL ? stickyLeft : undefined,
                                        right: isStickyR ? 0 : undefined,
                                        zIndex: isStickyL ? 20 : isStickyR ? 20 : 12,
                                        /* Blue background for sticky headers */
                                        background: isDragOver
                                            ? "#1e40af"
                                            : "#1d4ed8",
                                        /* Shadow separators for sticky cols */
                                        boxShadow: isLastStickyL
                                            ? "4px 0 8px -2px rgba(0,0,0,0.2)"
                                            : isStickyR
                                                ? "-4px 0 8px -2px rgba(0,0,0,0.2)"
                                                : undefined,
                                        borderLeft: isDragOver
                                            ? "2px solid #93c5fd"
                                            : undefined,
                                        opacity: isDraggingMe ? 0.4 : 1,
                                        cursor: isStickyR ? "default" : "grab",
                                        overflow: "visible",
                                        transition: "background 0.1s, opacity 0.12s",
                                        color: "#ffffff",
                                    }}
                                >
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        position: "relative",
                                        height: "100%",
                                        padding: "0 12px",
                                        gap: 0,
                                        color: "#ffffff",
                                    }}>
                                        {/* Drag grip */}
                                        {!isStickyR && (
                                            <span
                                                className="ht-grip"
                                                title="Drag to reorder"
                                                onMouseDown={(e) => { if (isResizing.current) e.stopPropagation(); }}
                                            >
                                                <GripIcon />
                                            </span>
                                        )}

                                        {/* Column label */}
                                        <span style={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flex: 1,
                                            color: "#ffffff",
                                            fontWeight: 600,
                                            fontSize: "0.75rem",
                                            letterSpacing: "0.05em",
                                        }}>
                                            {col.label}
                                        </span>

                                        {/* Resize handle */}
                                        {!isStickyR && (
                                            <span
                                                className="ht-rh"
                                                title="Drag to resize"
                                                onMouseDown={(e) => handleResizeMouseDown(e, col.uid)}
                                                onClick={(e) => e.stopPropagation()}
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
                                    const ci = visibleColumns.findIndex(c => c.uid === columnKey);
                                    const col = visibleColumns[ci];
                                    if (!col) return <TableCell>{item[columnKey]}</TableCell>;

                                    const isStickyL = col.stickyLeft;
                                    const isStickyR = col.stickyRight;
                                    const stickyLeft = isStickyL ? getStickyLeft(ci) : undefined;
                                    const isLastStickyL = isStickyL && (!visibleColumns[ci + 1]?.stickyLeft || visibleColumns[ci + 1]?.stickyRight);
                                    const isDragOver = dragOver === col.uid;

                                    return (
                                        <TableCell
                                            style={{
                                                width: widths[columnKey],
                                                minWidth: widths[columnKey],
                                                maxWidth: widths[columnKey],
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                                position: (isStickyL || isStickyR) ? "sticky" : undefined,
                                                left: isStickyL ? stickyLeft : undefined,
                                                right: isStickyR ? 0 : undefined,
                                                zIndex: isStickyL ? 8 : isStickyR ? 8 : undefined,
                                                background: isDragOver
                                                    ? "#dbeafe"
                                                    : (isStickyL || isStickyR)
                                                        ? "hsl(var(--heroui-background))"
                                                        : undefined,
                                                boxShadow: isLastStickyL
                                                    ? "4px 0 8px -2px rgba(0,0,0,0.10)"
                                                    : isStickyR
                                                        ? "-4px 0 8px -2px rgba(0,0,0,0.08)"
                                                        : undefined,
                                                borderLeft: isDragOver
                                                    ? "2px solid #3b82f6"
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
                marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap",
                fontSize: 11, color: "hsl(var(--heroui-default-400))",
            }}>
                <span>⠿ Drag any column header to reorder (including sticky ↔ non-sticky)</span>
                <span>↔ Drag right edge of header to resize</span>
                <span>📌 Name + Role + Status pinned left · Actions pinned right</span>
            </div>
        </>
    );
}