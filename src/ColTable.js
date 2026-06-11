import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@heroui/react";

// ─── Static data ───────────────────────────────────────────────────────────────
export const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

// ─── Column definitions ────────────────────────────────────────────────────────
const INITIAL_COLUMNS = [
  { uid: "name",    label: "NAME",    sortable: true,  w: 240 },
  { uid: "role",    label: "ROLE",    sortable: true,  w: 160 },
  { uid: "status",  label: "STATUS",  sortable: true,  w: 130 },
  { uid: "team",    label: "TEAM",    sortable: false, w: 150 },
  { uid: "age",     label: "AGE",     sortable: true,  w: 80  },
  { uid: "email",   label: "EMAIL",   sortable: false, w: 230 },
  { uid: "actions", label: "ACTIONS", sortable: false, w: 80, stickyRight: true },
];

// Default sticky-left columns
const DEFAULT_STICKY = new Set(["name"]);

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

// ─── Icons ─────────────────────────────────────────────────────────────────────
export const EyeIcon = (props) => (
  <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
    <path d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
    <path d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
  </svg>
);

export const DeleteIcon = (props) => (
  <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
    <path d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
    <path d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
    <path d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
    <path d="M8.60834 13.75H11.3833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
    <path d="M7.91669 10.4167H12.0834" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
  </svg>
);

export const EditIcon = (props) => (
  <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
    <path d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5}/>
    <path d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5}/>
    <path d="M2.5 18.3333H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5}/>
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

const PinIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/>
  </svg>
);

// ─── Main component ─────────────────────────────────────────────────────────────
export default function App() {

  // ── Column order & widths ─────────────────────────────────────────────────────
  const [columns, setColumns] = React.useState(INITIAL_COLUMNS);
  const [widths, setWidths] = React.useState(
    () => Object.fromEntries(INITIAL_COLUMNS.map((c) => [c.uid, c.w]))
  );

  // ── Per-column sticky toggle ──────────────────────────────────────────────────
  const [stickySet, setStickySet] = React.useState(new Set(DEFAULT_STICKY));

  const toggleSticky = React.useCallback((uid) => {
    setStickySet((prev) => {
      const next = new Set(prev);
      next.has(uid) ? next.delete(uid) : next.add(uid);
      return next;
    });
  }, []);

  // ── Drag-and-drop ─────────────────────────────────────────────────────────────
  const dragSrc = React.useRef(null);
  const [dragOver, setDragOver] = React.useState(null);
  const [draggingUid, setDraggingUid] = React.useState(null);

  // Tracks whether a column is currently being resized (used to disable
  // the native HTML5 drag-and-drop on the <th> while resizing, so the
  // resize gesture isn't hijacked into a column-reorder drag).
  const [resizingUid, setResizingUid] = React.useState(null);

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
    setColumns((prev) => {
      const next = [...prev];
      const srcIdx = next.findIndex((c) => c.uid === srcUid);
      const tgtIdx = next.findIndex((c) => c.uid === targetUid);
      if (srcIdx < 0 || tgtIdx < 0) return prev;
      if (next[srcIdx].stickyRight) return prev; // Actions can't be dragged
      if (next[tgtIdx].stickyRight) return prev; // Can't drop onto Actions
      const [moved] = next.splice(srcIdx, 1);
      next.splice(tgtIdx, 0, moved);
      return next;
    });
    dragSrc.current = null; setDragOver(null); setDraggingUid(null);
  }, []);

  const handleDragEnd = React.useCallback(() => {
    dragSrc.current = null; setDragOver(null); setDraggingUid(null);
  }, []);

  // ── Resize ────────────────────────────────────────────────────────────────────
  const isResizing = React.useRef(false);

  const handleResizeMouseDown = React.useCallback((e, uid) => {
    e.preventDefault();
    e.stopPropagation();

    isResizing.current = true;
    // Disable native draggable on the <th> for the duration of the resize
    // so the browser doesn't start a column-reorder drag instead.
    setResizingUid(uid);

    const startX = e.clientX;
    const startW = widths[uid] ?? 100;

    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";

    const onMove = (ev) => {
      const delta = ev.clientX - startX;
      setWidths((prev) => ({ ...prev, [uid]: Math.max(60, startW + delta) }));
    };

    const onUp = () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      isResizing.current = false;
      setResizingUid(null);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [widths]);

  // ── visibleColumns (all columns, since this table has no hide/show toggle) ───
  const visibleColumns = columns;

  // ── Compute sticky left offset ────────────────────────────────────────────────
  const getStickyLeft = React.useCallback((colIndex) => {
    let left = 0;
    for (let i = 0; i < colIndex; i++) {
      const c = visibleColumns[i];
      if (c && stickySet.has(c.uid) && !c.stickyRight) {
        left += widths[c.uid] ?? 100;
      }
    }
    return left;
  }, [visibleColumns, widths, stickySet]);

  // ── renderCell (original first-table logic) ────────────────────────────────
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  // ─────────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Styles ──────────────────────────────────────────────────────────── */}
      <style>{`
        /* Scroll container */
        .ht-wrap {
          overflow: auto;
          border: 1px solid hsl(var(--heroui-divider));
          border-radius: 12px;
        }

        /* Fixed layout so widths are respected */
        .ht-wrap table {
          border-collapse: separate !important;
          border-spacing: 0 !important;
          table-layout: fixed !important;
          width: max-content !important;
          min-width: 100% !important;
        }

        /* ── All headers sticky top ─────────────────────────────────────────── */
        .ht-wrap table thead tr th {
          position: sticky !important;
          top: 0 !important;
          z-index: 12;
          background: hsl(var(--heroui-default-100)) !important;
          white-space: nowrap;
          overflow: visible !important;
          height: auto !important;
        }

        /* ── Sticky toggle checkbox row ─────────────────────────────────────── */
        .ht-sticky-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 3px 0 4px;
          border-top: 1px dashed hsl(var(--heroui-divider));
          margin-top: 4px;
        }
        .ht-sticky-toggle input[type="checkbox"] {
          width: 11px;
          height: 11px;
          cursor: pointer;
          accent-color: hsl(var(--heroui-primary));
          flex-shrink: 0;
        }
        .ht-sticky-toggle-label {
          font-size: 9px;
          color: hsl(var(--heroui-default-400));
          user-select: none;
          line-height: 1;
          cursor: pointer;
        }
        .ht-sticky-toggle-label.is-pinned {
          color: hsl(var(--heroui-primary));
          font-weight: 600;
        }

        /* ── Pin icon shown when column is sticky ────────────────────────────── */
        .ht-pin-icon {
          display: inline-flex;
          align-items: center;
          color: hsl(var(--heroui-primary));
          margin-left: 4px;
          opacity: 0;
          transition: opacity 0.15s;
          flex-shrink: 0;
        }
        .ht-pin-icon.visible { opacity: 1; }

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
          background: hsl(var(--heroui-divider));
          transition: background 0.15s, height 0.15s;
          display: block;
        }
        .ht-rh:hover::after,
        .ht-rh:active::after {
          background: hsl(var(--heroui-primary));
          height: 80%;
        }

        /* ── Drag grip ──────────────────────────────────────────────────────── */
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

        /* ── Scrollbar ──────────────────────────────────────────────────────── */
        .ht-wrap::-webkit-scrollbar { width: 6px; height: 6px; }
        .ht-wrap::-webkit-scrollbar-track { background: hsl(var(--heroui-default-100)); }
        .ht-wrap::-webkit-scrollbar-thumb { background: hsl(var(--heroui-default-300)); border-radius: 3px; }
        .ht-wrap::-webkit-scrollbar-thumb:hover { background: hsl(var(--heroui-default-400)); }
        .ht-wrap::-webkit-scrollbar-corner { background: hsl(var(--heroui-default-100)); }
      `}</style>

      {/* ── Table scroll wrapper ──────────────────────────────────────────────── */}
      <div className="ht-wrap">
        <Table
          aria-label="Example table with custom cells"
          removeWrapper
          classNames={{
            th: [
              "bg-transparent",
              "text-default-500",
              "border-b",
              "border-divider",
              "!px-0",
              "!py-0",
              "align-top",
            ],
          }}
        >

          {/* ── HEADER — using columns={visibleColumns} ──────────────────────── */}
          <TableHeader columns={visibleColumns}>
            {(col) => {
              const ci          = visibleColumns.findIndex((c) => c.uid === col.uid);
              const isSticky    = stickySet.has(col.uid) && !col.stickyRight;
              const isStickyR   = !!col.stickyRight;
              const stickyLeft  = isSticky ? getStickyLeft(ci) : undefined;

              const nextCol       = visibleColumns[ci + 1];
              const isLastStickyL = isSticky && (!nextCol || !stickySet.has(nextCol.uid) || nextCol.stickyRight);

              const isDragOver   = dragOver === col.uid;
              const isDraggingMe = draggingUid === col.uid;

              // While THIS column is being resized, disable its draggable
              // attribute so the browser's native drag-and-drop doesn't
              // intercept the mousedown/mousemove gesture.
              const isBeingResized = resizingUid === col.uid;
              const canDrag = !isStickyR && !isBeingResized;

              return (
                <TableColumn
                  key={col.uid}
                  align={col.uid === "actions" ? "center" : "start"}
                  draggable={canDrag}
                  onDragStart={canDrag ? (e) => handleDragStart(e, col.uid) : undefined}
                  onDragOver={!isStickyR  ? (e) => handleDragOver(e, col.uid)  : undefined}
                  onDragLeave={!isStickyR ? handleDragLeave                     : undefined}
                  onDrop={!isStickyR      ? (e) => handleDrop(e, col.uid)      : undefined}
                  onDragEnd={handleDragEnd}
                  style={{
                    width:    widths[col.uid],
                    minWidth: widths[col.uid],
                    maxWidth: widths[col.uid],
                    position: (isSticky || isStickyR) ? "sticky" : undefined,
                    left:     isSticky  ? stickyLeft : undefined,
                    right:    isStickyR ? 0          : undefined,
                    zIndex:   isSticky || isStickyR  ? 20 : 12,
                    boxShadow: isLastStickyL
                      ? "4px 0 8px -2px rgba(0,0,0,0.12)"
                      : isStickyR
                      ? "-4px 0 8px -2px rgba(0,0,0,0.12)"
                      : undefined,
                    background: isDragOver
                      ? "hsl(var(--heroui-primary-100))"
                      : undefined,
                    borderLeft: isDragOver
                      ? "2px solid hsl(var(--heroui-primary))"
                      : undefined,
                    opacity:    isDraggingMe ? 0.4 : 1,
                    cursor:     isStickyR    ? "default" : "grab",
                    overflow:   "visible",
                    transition: "background 0.1s, opacity 0.12s",
                    verticalAlign: "top",
                  }}
                >
                  {/* ── Header inner wrapper ─────────────────────────────── */}
                  <div style={{ display: "flex", flexDirection: "column", position: "relative", padding: "6px 12px 0" }}>

                    {/* Top row: grip + label + pin icon */}
                    <div style={{ display: "flex", alignItems: "center", gap: 0, minHeight: 22, paddingRight: 10 }}>

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
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, fontSize: 12 }}>
                        {col.label}
                      </span>

                      {/* Pin indicator icon */}
                      {!isStickyR && (
                        <span className={`ht-pin-icon ${isSticky ? "visible" : ""}`} title="Column is pinned">
                          <PinIcon />
                        </span>
                      )}
                    </div>

                    {/* ── Sticky toggle row ────────────────────────────────── */}
                    {!isStickyR && (
                      <div
                        className="ht-sticky-toggle"
                        onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onMouseDown={(e) => e.stopPropagation()}
                      >
                        <input
                          type="checkbox"
                          id={`sticky-toggle-${col.uid}`}
                          checked={isSticky}
                          onChange={() => toggleSticky(col.uid)}
                          title={isSticky ? "Unpin this column" : "Pin this column as sticky"}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <label
                          htmlFor={`sticky-toggle-${col.uid}`}
                          className={`ht-sticky-toggle-label ${isSticky ? "is-pinned" : ""}`}
                          onClick={(e) => e.stopPropagation()}
                          title={isSticky ? "Unpin this column" : "Pin this column as sticky"}
                        >
                          {isSticky ? "pinned" : "pin"}
                        </label>
                      </div>
                    )}

                    {/* ── Resize handle ────────────────────────────────────── */}
                    {!isStickyR && (
                      <span
                        className="ht-rh"
                        title="Drag to resize"
                        draggable={false}
                        onMouseDown={(e) => handleResizeMouseDown(e, col.uid)}
                        onClick={(e) => e.stopPropagation()}
                        onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      />
                    )}
                  </div>
                </TableColumn>
              );
            }}
          </TableHeader>

          {/* ── BODY ────────────────────────────────────────────────────────── */}
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => {
                  const ci  = visibleColumns.findIndex((c) => c.uid === columnKey);
                  const col = visibleColumns[ci];
                  if (!col) return <TableCell>{item[columnKey]}</TableCell>;

                  const isSticky   = stickySet.has(col.uid) && !col.stickyRight;
                  const isStickyR  = !!col.stickyRight;
                  const stickyLeft = isSticky ? getStickyLeft(ci) : undefined;

                  const nextCol       = visibleColumns[ci + 1];
                  const isLastStickyL = isSticky && (!nextCol || !stickySet.has(nextCol.uid) || nextCol.stickyRight);
                  const isDragOver    = dragOver === col.uid;

                  return (
                    <TableCell
                      style={{
                        width:        widths[columnKey],
                        minWidth:     widths[columnKey],
                        maxWidth:     widths[columnKey],
                        overflow:     "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace:   "nowrap",
                        position:     (isSticky || isStickyR) ? "sticky" : undefined,
                        left:         isSticky  ? stickyLeft : undefined,
                        right:        isStickyR ? 0          : undefined,
                        zIndex:       isSticky || isStickyR  ? 8 : undefined,
                        background:   isDragOver
                          ? "hsl(var(--heroui-primary-50))"
                          : (isSticky || isStickyR)
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

      {/* ── Hint bar ──────────────────────────────────────────────────────────── */}
      <div style={{ marginTop: 10, display: "flex", gap: 16, flexWrap: "wrap", fontSize: 11, color: "hsl(var(--heroui-default-400))" }}>
        <span>☑ Check the small <strong>pin</strong> checkbox under any column header to make it sticky</span>
        <span>⠿ Drag the grip icon on a header to reorder columns</span>
        <span>↔ Drag the right edge of a header to resize it</span>
        <span>📌 Actions column is always pinned to the right</span>
      </div>
    </>
  );
}







// ===================================================================
// import React from "react";
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   User,
//   Chip,
//   Tooltip,
// } from "@heroui/react";

// // ─── Static data ───────────────────────────────────────────────────────────────
// export const users = [
//   {
//     id: 1,
//     name: "Tony Reichert",
//     role: "CEO",
//     team: "Management",
//     status: "active",
//     age: "29",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//     email: "tony.reichert@example.com",
//   },
//   {
//     id: 2,
//     name: "Zoey Lang",
//     role: "Technical Lead",
//     team: "Development",
//     status: "paused",
//     age: "25",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
//     email: "zoey.lang@example.com",
//   },
//   {
//     id: 3,
//     name: "Jane Fisher",
//     role: "Senior Developer",
//     team: "Development",
//     status: "active",
//     age: "22",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
//     email: "jane.fisher@example.com",
//   },
//   {
//     id: 4,
//     name: "William Howard",
//     role: "Community Manager",
//     team: "Marketing",
//     status: "vacation",
//     age: "28",
//     avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
//     email: "william.howard@example.com",
//   },
//   {
//     id: 5,
//     name: "Kristen Copper",
//     role: "Sales Manager",
//     team: "Sales",
//     status: "active",
//     age: "24",
//     avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
//     email: "kristen.cooper@example.com",
//   },
// ];

// // ─── Column definitions ────────────────────────────────────────────────────────
// const INITIAL_COLUMNS = [
//   { uid: "name",    label: "NAME",    sortable: true,  w: 240 },
//   { uid: "role",    label: "ROLE",    sortable: true,  w: 160 },
//   { uid: "status",  label: "STATUS",  sortable: true,  w: 130 },
//   { uid: "team",    label: "TEAM",    sortable: false, w: 150 },
//   { uid: "age",     label: "AGE",     sortable: true,  w: 80  },
//   { uid: "email",   label: "EMAIL",   sortable: false, w: 230 },
//   { uid: "actions", label: "ACTIONS", sortable: false, w: 80, stickyRight: true },
// ];

// // Default sticky-left columns
// const DEFAULT_STICKY = new Set(["name"]);

// const statusColorMap = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

// // ─── Icons ─────────────────────────────────────────────────────────────────────
// export const EyeIcon = (props) => (
//   <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
//     <path d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
//     <path d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
//   </svg>
// );

// export const DeleteIcon = (props) => (
//   <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
//     <path d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
//     <path d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
//     <path d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
//     <path d="M8.60834 13.75H11.3833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
//     <path d="M7.91669 10.4167H12.0834" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
//   </svg>
// );

// export const EditIcon = (props) => (
//   <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
//     <path d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5}/>
//     <path d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5}/>
//     <path d="M2.5 18.3333H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5}/>
//   </svg>
// );

// const GripIcon = () => (
//   <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
//     <circle cx="3" cy="2"  r="1.3" fill="currentColor"/>
//     <circle cx="7" cy="2"  r="1.3" fill="currentColor"/>
//     <circle cx="3" cy="7"  r="1.3" fill="currentColor"/>
//     <circle cx="7" cy="7"  r="1.3" fill="currentColor"/>
//     <circle cx="3" cy="12" r="1.3" fill="currentColor"/>
//     <circle cx="7" cy="12" r="1.3" fill="currentColor"/>
//   </svg>
// );

// const PinIcon = () => (
//   <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//     <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/>
//   </svg>
// );

// // ─── Main component ─────────────────────────────────────────────────────────────
// export default function App() {

//   // ── Column order & widths ─────────────────────────────────────────────────────
//   const [columns, setColumns] = React.useState(INITIAL_COLUMNS);
//   const [widths, setWidths] = React.useState(
//     () => Object.fromEntries(INITIAL_COLUMNS.map((c) => [c.uid, c.w]))
//   );

//   // ── Per-column sticky toggle ──────────────────────────────────────────────────
//   const [stickySet, setStickySet] = React.useState(new Set(DEFAULT_STICKY));

//   const toggleSticky = React.useCallback((uid) => {
//     setStickySet((prev) => {
//       const next = new Set(prev);
//       next.has(uid) ? next.delete(uid) : next.add(uid);
//       return next;
//     });
//   }, []);

//   // ── Drag-and-drop ─────────────────────────────────────────────────────────────
//   const dragSrc = React.useRef(null);
//   const [dragOver, setDragOver] = React.useState(null);
//   const [draggingUid, setDraggingUid] = React.useState(null);

//   // Tracks whether a column is currently being resized (used to disable
//   // the native HTML5 drag-and-drop on the <th> while resizing, so the
//   // resize gesture isn't hijacked into a column-reorder drag).
//   const [resizingUid, setResizingUid] = React.useState(null);

//   const handleDragStart = React.useCallback((e, uid) => {
//     dragSrc.current = uid;
//     setDraggingUid(uid);
//     const ghost = document.createElement("div");
//     ghost.style.cssText = "position:fixed;top:-200px;left:-200px;width:1px;height:1px;opacity:0";
//     document.body.appendChild(ghost);
//     e.dataTransfer.setDragImage(ghost, 0, 0);
//     e.dataTransfer.effectAllowed = "move";
//     requestAnimationFrame(() => document.body.removeChild(ghost));
//   }, []);

//   const handleDragOver = React.useCallback((e, uid) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = "move";
//     if (uid !== dragSrc.current) setDragOver(uid);
//   }, []);

//   const handleDragLeave = React.useCallback((e) => {
//     if (!e.currentTarget.contains(e.relatedTarget)) setDragOver(null);
//   }, []);

//   const handleDrop = React.useCallback((e, targetUid) => {
//     e.preventDefault();
//     const srcUid = dragSrc.current;
//     if (!srcUid || srcUid === targetUid) {
//       dragSrc.current = null; setDragOver(null); setDraggingUid(null); return;
//     }
//     setColumns((prev) => {
//       const next = [...prev];
//       const srcIdx = next.findIndex((c) => c.uid === srcUid);
//       const tgtIdx = next.findIndex((c) => c.uid === targetUid);
//       if (srcIdx < 0 || tgtIdx < 0) return prev;
//       if (next[srcIdx].stickyRight) return prev; // Actions can't be dragged
//       if (next[tgtIdx].stickyRight) return prev; // Can't drop onto Actions
//       const [moved] = next.splice(srcIdx, 1);
//       next.splice(tgtIdx, 0, moved);
//       return next;
//     });
//     dragSrc.current = null; setDragOver(null); setDraggingUid(null);
//   }, []);

//   const handleDragEnd = React.useCallback(() => {
//     dragSrc.current = null; setDragOver(null); setDraggingUid(null);
//   }, []);

//   // ── Resize ────────────────────────────────────────────────────────────────────
//   const isResizing = React.useRef(false);
//   const wrapRef = React.useRef(null);

//   // Apply width to every <th> and <td> belonging to a given column index
//   // by writing directly to the DOM (fast, bypasses React re-render lag
//   // and any internal width caching done by react-aria/HeroUI).
//   const applyWidthToDom = React.useCallback((uid, widthPx) => {
//     const root = wrapRef.current;
//     if (!root) return;
//     const colIndex = visibleColumns.findIndex((c) => c.uid === uid);
//     if (colIndex < 0) return;

//     // Header cell for this column
//     const ths = root.querySelectorAll("thead tr th");
//     const th = ths[colIndex];
//     if (th) {
//       th.style.width = `${widthPx}px`;
//       th.style.minWidth = `${widthPx}px`;
//       th.style.maxWidth = `${widthPx}px`;
//     }

//     // Body cells for this column (one per row)
//     const rows = root.querySelectorAll("tbody tr");
//     rows.forEach((row) => {
//       const td = row.querySelectorAll("td")[colIndex];
//       if (td) {
//         td.style.width = `${widthPx}px`;
//         td.style.minWidth = `${widthPx}px`;
//         td.style.maxWidth = `${widthPx}px`;
//       }
//     });
//   }, [visibleColumns]);

//   const handleResizeMouseDown = React.useCallback((e, uid) => {
//     e.preventDefault();
//     e.stopPropagation();

//     isResizing.current = true;
//     // Disable native draggable on the <th> for the duration of the resize
//     // so the browser doesn't start a column-reorder drag instead.
//     setResizingUid(uid);

//     const startX = e.clientX;
//     const startW = widths[uid] ?? 100;
//     let liveW = startW;

//     document.body.style.cursor = "col-resize";
//     document.body.style.userSelect = "none";

//     const onMove = (ev) => {
//       const delta = ev.clientX - startX;
//       liveW = Math.max(60, startW + delta);
//       // Direct DOM update for immediate visual feedback
//       applyWidthToDom(uid, liveW);
//     };

//     const onUp = () => {
//       document.body.style.cursor = "";
//       document.body.style.userSelect = "";
//       isResizing.current = false;
//       setResizingUid(null);
//       // Commit final width to React state so it persists across re-renders
//       setWidths((prev) => ({ ...prev, [uid]: liveW }));
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mouseup", onUp);
//     };

//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mouseup", onUp);
//   }, [widths, applyWidthToDom]);

//   // ── visibleColumns (all columns, since this table has no hide/show toggle) ───
//   const visibleColumns = columns;

//   // ── Compute sticky left offset ────────────────────────────────────────────────
//   const getStickyLeft = React.useCallback((colIndex) => {
//     let left = 0;
//     for (let i = 0; i < colIndex; i++) {
//       const c = visibleColumns[i];
//       if (c && stickySet.has(c.uid) && !c.stickyRight) {
//         left += widths[c.uid] ?? 100;
//       }
//     }
//     return left;
//   }, [visibleColumns, widths, stickySet]);

//   // ── renderCell (original first-table logic) ────────────────────────────────
//   const renderCell = React.useCallback((user, columnKey) => {
//     const cellValue = user[columnKey];
//     switch (columnKey) {
//       case "name":
//         return (
//           <User
//             avatarProps={{ radius: "lg", src: user.avatar }}
//             description={user.email}
//             name={cellValue}
//           >
//             {user.email}
//           </User>
//         );
//       case "role":
//         return (
//           <div className="flex flex-col">
//             <p className="text-bold text-sm capitalize">{cellValue}</p>
//             <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
//           </div>
//         );
//       case "status":
//         return (
//           <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
//             {cellValue}
//           </Chip>
//         );
//       case "actions":
//         return (
//           <div className="relative flex items-center gap-2">
//             <Tooltip content="Details">
//               <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                 <EyeIcon />
//               </span>
//             </Tooltip>
//             <Tooltip content="Edit user">
//               <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                 <EditIcon />
//               </span>
//             </Tooltip>
//             <Tooltip color="danger" content="Delete user">
//               <span className="text-lg text-danger cursor-pointer active:opacity-50">
//                 <DeleteIcon />
//               </span>
//             </Tooltip>
//           </div>
//         );
//       default:
//         return cellValue;
//     }
//   }, []);

//   // ─────────────────────────────────────────────────────────────────────────────
//   // Render
//   // ─────────────────────────────────────────────────────────────────────────────
//   return (
//     <>
//       {/* ── Styles ──────────────────────────────────────────────────────────── */}
//       <style>{`
//         /* Scroll container */
//         .ht-wrap {
//           overflow: auto;
//           border: 1px solid hsl(var(--heroui-divider));
//           border-radius: 12px;
//         }

//         /* Fixed layout so widths are respected */
//         .ht-wrap table {
//           border-collapse: separate !important;
//           border-spacing: 0 !important;
//           table-layout: fixed !important;
//           width: max-content !important;
//           min-width: 100% !important;
//         }

//         /* ── All headers sticky top ─────────────────────────────────────────── */
//         .ht-wrap table thead tr th {
//           position: sticky !important;
//           top: 0 !important;
//           z-index: 12;
//           background: hsl(var(--heroui-default-100)) !important;
//           white-space: nowrap;
//           overflow: visible !important;
//           height: auto !important;
//         }

//         /* ── Sticky toggle checkbox row ─────────────────────────────────────── */
//         .ht-sticky-toggle {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 3px;
//           padding: 3px 0 4px;
//           border-top: 1px dashed hsl(var(--heroui-divider));
//           margin-top: 4px;
//         }
//         .ht-sticky-toggle input[type="checkbox"] {
//           width: 11px;
//           height: 11px;
//           cursor: pointer;
//           accent-color: hsl(var(--heroui-primary));
//           flex-shrink: 0;
//         }
//         .ht-sticky-toggle-label {
//           font-size: 9px;
//           color: hsl(var(--heroui-default-400));
//           user-select: none;
//           line-height: 1;
//           cursor: pointer;
//         }
//         .ht-sticky-toggle-label.is-pinned {
//           color: hsl(var(--heroui-primary));
//           font-weight: 600;
//         }

//         /* ── Pin icon shown when column is sticky ────────────────────────────── */
//         .ht-pin-icon {
//           display: inline-flex;
//           align-items: center;
//           color: hsl(var(--heroui-primary));
//           margin-left: 4px;
//           opacity: 0;
//           transition: opacity 0.15s;
//           flex-shrink: 0;
//         }
//         .ht-pin-icon.visible { opacity: 1; }

//         /* ── Resize handle ──────────────────────────────────────────────────── */
//         .ht-rh {
//           position: absolute;
//           top: 0;
//           right: -4px;
//           width: 8px;
//           height: 100%;
//           cursor: col-resize;
//           z-index: 40;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .ht-rh::after {
//           content: '';
//           width: 3px;
//           height: 60%;
//           border-radius: 2px;
//           background: hsl(var(--heroui-divider));
//           transition: background 0.15s, height 0.15s;
//           display: block;
//         }
//         .ht-rh:hover::after,
//         .ht-rh:active::after {
//           background: hsl(var(--heroui-primary));
//           height: 80%;
//         }

//         /* ── Drag grip ──────────────────────────────────────────────────────── */
//         .ht-grip {
//           opacity: 0;
//           transition: opacity 0.12s;
//           cursor: grab;
//           flex-shrink: 0;
//           color: hsl(var(--heroui-default-400));
//           margin-right: 5px;
//           display: flex;
//           align-items: center;
//         }
//         th:hover .ht-grip { opacity: 1; }
//         .ht-grip:active { cursor: grabbing; }

//         /* ── Scrollbar ──────────────────────────────────────────────────────── */
//         .ht-wrap::-webkit-scrollbar { width: 6px; height: 6px; }
//         .ht-wrap::-webkit-scrollbar-track { background: hsl(var(--heroui-default-100)); }
//         .ht-wrap::-webkit-scrollbar-thumb { background: hsl(var(--heroui-default-300)); border-radius: 3px; }
//         .ht-wrap::-webkit-scrollbar-thumb:hover { background: hsl(var(--heroui-default-400)); }
//         .ht-wrap::-webkit-scrollbar-corner { background: hsl(var(--heroui-default-100)); }
//       `}</style>

//       {/* ── Table scroll wrapper ──────────────────────────────────────────────── */}
//       <div className="ht-wrap">
//         <Table
//           aria-label="Example table with custom cells"
//           removeWrapper
//           classNames={{
//             th: [
//               "bg-transparent",
//               "text-default-500",
//               "border-b",
//               "border-divider",
//               "!px-0",
//               "!py-0",
//               "align-top",
//             ],
//           }}
//         >

//           {/* ── HEADER — using columns={visibleColumns} ──────────────────────── */}
//           <TableHeader columns={visibleColumns}>
//             {(col) => {
//               const ci          = visibleColumns.findIndex((c) => c.uid === col.uid);
//               const isSticky    = stickySet.has(col.uid) && !col.stickyRight;
//               const isStickyR   = !!col.stickyRight;
//               const stickyLeft  = isSticky ? getStickyLeft(ci) : undefined;

//               const nextCol       = visibleColumns[ci + 1];
//               const isLastStickyL = isSticky && (!nextCol || !stickySet.has(nextCol.uid) || nextCol.stickyRight);

//               const isDragOver   = dragOver === col.uid;
//               const isDraggingMe = draggingUid === col.uid;

//               // While THIS column is being resized, disable its draggable
//               // attribute so the browser's native drag-and-drop doesn't
//               // intercept the mousedown/mousemove gesture.
//               const isBeingResized = resizingUid === col.uid;
//               const canDrag = !isStickyR && !isBeingResized;

//               return (
//                 <TableColumn
//                   key={col.uid}
//                   align={col.uid === "actions" ? "center" : "start"}
//                   draggable={canDrag}
//                   onDragStart={canDrag ? (e) => handleDragStart(e, col.uid) : undefined}
//                   onDragOver={!isStickyR  ? (e) => handleDragOver(e, col.uid)  : undefined}
//                   onDragLeave={!isStickyR ? handleDragLeave                     : undefined}
//                   onDrop={!isStickyR      ? (e) => handleDrop(e, col.uid)      : undefined}
//                   onDragEnd={handleDragEnd}
//                   style={{
//                     width:    widths[col.uid],
//                     minWidth: widths[col.uid],
//                     maxWidth: widths[col.uid],
//                     position: (isSticky || isStickyR) ? "sticky" : undefined,
//                     left:     isSticky  ? stickyLeft : undefined,
//                     right:    isStickyR ? 0          : undefined,
//                     zIndex:   isSticky || isStickyR  ? 20 : 12,
//                     boxShadow: isLastStickyL
//                       ? "4px 0 8px -2px rgba(0,0,0,0.12)"
//                       : isStickyR
//                       ? "-4px 0 8px -2px rgba(0,0,0,0.12)"
//                       : undefined,
//                     background: isDragOver
//                       ? "hsl(var(--heroui-primary-100))"
//                       : undefined,
//                     borderLeft: isDragOver
//                       ? "2px solid hsl(var(--heroui-primary))"
//                       : undefined,
//                     opacity:    isDraggingMe ? 0.4 : 1,
//                     cursor:     isStickyR    ? "default" : "grab",
//                     overflow:   "visible",
//                     transition: "background 0.1s, opacity 0.12s",
//                     verticalAlign: "top",
//                   }}
//                 >
//                   {/* ── Header inner wrapper ─────────────────────────────── */}
//                   <div style={{ display: "flex", flexDirection: "column", position: "relative", padding: "6px 12px 0" }}>

//                     {/* Top row: grip + label + pin icon */}
//                     <div style={{ display: "flex", alignItems: "center", gap: 0, minHeight: 22, paddingRight: 10 }}>

//                       {/* Drag grip */}
//                       {!isStickyR && (
//                         <span
//                           className="ht-grip"
//                           title="Drag to reorder"
//                           onMouseDown={(e) => { if (isResizing.current) e.stopPropagation(); }}
//                         >
//                           <GripIcon />
//                         </span>
//                       )}

//                       {/* Column label */}
//                       <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, fontSize: 12 }}>
//                         {col.label}
//                       </span>

//                       {/* Pin indicator icon */}
//                       {!isStickyR && (
//                         <span className={`ht-pin-icon ${isSticky ? "visible" : ""}`} title="Column is pinned">
//                           <PinIcon />
//                         </span>
//                       )}
//                     </div>

//                     {/* ── Sticky toggle row ────────────────────────────────── */}
//                     {!isStickyR && (
//                       <div
//                         className="ht-sticky-toggle"
//                         onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
//                         onMouseDown={(e) => e.stopPropagation()}
//                       >
//                         <input
//                           type="checkbox"
//                           id={`sticky-toggle-${col.uid}`}
//                           checked={isSticky}
//                           onChange={() => toggleSticky(col.uid)}
//                           title={isSticky ? "Unpin this column" : "Pin this column as sticky"}
//                           onClick={(e) => e.stopPropagation()}
//                         />
//                         <label
//                           htmlFor={`sticky-toggle-${col.uid}`}
//                           className={`ht-sticky-toggle-label ${isSticky ? "is-pinned" : ""}`}
//                           onClick={(e) => e.stopPropagation()}
//                           title={isSticky ? "Unpin this column" : "Pin this column as sticky"}
//                         >
//                           {isSticky ? "pinned" : "pin"}
//                         </label>
//                       </div>
//                     )}

//                     {/* ── Resize handle ────────────────────────────────────── */}
//                     {!isStickyR && (
//                       <span
//                         className="ht-rh"
//                         title="Drag to resize"
//                         draggable={false}
//                         onMouseDown={(e) => handleResizeMouseDown(e, col.uid)}
//                         onClick={(e) => e.stopPropagation()}
//                         onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
//                       />
//                     )}
//                   </div>
//                 </TableColumn>
//               );
//             }}
//           </TableHeader>

//           {/* ── BODY ────────────────────────────────────────────────────────── */}
//           <TableBody items={users}>
//             {(item) => (
//               <TableRow key={item.id}>
//                 {(columnKey) => {
//                   const ci  = visibleColumns.findIndex((c) => c.uid === columnKey);
//                   const col = visibleColumns[ci];
//                   if (!col) return <TableCell>{item[columnKey]}</TableCell>;

//                   const isSticky   = stickySet.has(col.uid) && !col.stickyRight;
//                   const isStickyR  = !!col.stickyRight;
//                   const stickyLeft = isSticky ? getStickyLeft(ci) : undefined;

//                   const nextCol       = visibleColumns[ci + 1];
//                   const isLastStickyL = isSticky && (!nextCol || !stickySet.has(nextCol.uid) || nextCol.stickyRight);
//                   const isDragOver    = dragOver === col.uid;

//                   return (
//                     <TableCell
//                       style={{
//                         width:        widths[columnKey],
//                         minWidth:     widths[columnKey],
//                         maxWidth:     widths[columnKey],
//                         overflow:     "hidden",
//                         textOverflow: "ellipsis",
//                         whiteSpace:   "nowrap",
//                         position:     (isSticky || isStickyR) ? "sticky" : undefined,
//                         left:         isSticky  ? stickyLeft : undefined,
//                         right:        isStickyR ? 0          : undefined,
//                         zIndex:       isSticky || isStickyR  ? 8 : undefined,
//                         background:   isDragOver
//                           ? "hsl(var(--heroui-primary-50))"
//                           : (isSticky || isStickyR)
//                           ? "hsl(var(--heroui-background))"
//                           : undefined,
//                         boxShadow: isLastStickyL
//                           ? "4px 0 8px -2px rgba(0,0,0,0.10)"
//                           : isStickyR
//                           ? "-4px 0 8px -2px rgba(0,0,0,0.08)"
//                           : undefined,
//                         borderLeft: isDragOver
//                           ? "2px solid hsl(var(--heroui-primary))"
//                           : undefined,
//                         transition: "background 0.1s",
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

//       {/* ── Hint bar ──────────────────────────────────────────────────────────── */}
//       <div style={{ marginTop: 10, display: "flex", gap: 16, flexWrap: "wrap", fontSize: 11, color: "hsl(var(--heroui-default-400))" }}>
//         <span>☑ Check the small <strong>pin</strong> checkbox under any column header to make it sticky</span>
//         <span>⠿ Drag the grip icon on a header to reorder columns</span>
//         <span>↔ Drag the right edge of a header to resize it</span>
//         <span>📌 Actions column is always pinned to the right</span>
//       </div>
//     </>
//   );
// }