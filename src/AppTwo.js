// // "use client";

// // import { useCallback, useEffect, useRef, useState } from "react";
// // import { createPortal } from "react-dom";

// // const allUsers = [
// //   { email: "kate@acme.com",     id: 1,  name: "Kate Moore",       role: "CEO",               status: "Active",   department: "Executive",   location: "New York",      joined: "2018-03-01" },
// //   { email: "john@acme.com",     id: 2,  name: "John Smith",       role: "CTO",               status: "Active",   department: "Engineering", location: "San Francisco", joined: "2019-01-15" },
// //   { email: "sara@acme.com",     id: 3,  name: "Sara Johnson",     role: "CMO",               status: "On Leave", department: "Marketing",   location: "Chicago",       joined: "2020-06-10" },
// //   { email: "michael@acme.com",  id: 4,  name: "Michael Brown",    role: "CFO",               status: "Active",   department: "Finance",     location: "Boston",        joined: "2017-09-20" },
// //   { email: "emily@acme.com",    id: 5,  name: "Emily Davis",      role: "Product Manager",   status: "Inactive", department: "Product",     location: "Austin",        joined: "2021-02-28" },
// //   { email: "davis@acme.com",    id: 6,  name: "Davis Wilson",     role: "Lead Designer",     status: "Active",   department: "Design",      location: "Seattle",       joined: "2020-11-05" },
// //   { email: "olivia@acme.com",   id: 7,  name: "Olivia Martinez",  role: "Frontend Engineer", status: "Active",   department: "Engineering", location: "Denver",        joined: "2022-03-14" },
// //   { email: "james@acme.com",    id: 8,  name: "James Taylor",     role: "Backend Engineer",  status: "Active",   department: "Engineering", location: "Portland",      joined: "2021-07-19" },
// //   { email: "sophia@acme.com",   id: 9,  name: "Sophia Anderson",  role: "QA Engineer",       status: "On Leave", department: "Engineering", location: "Miami",         joined: "2022-01-03" },
// //   { email: "liam@acme.com",     id: 10, name: "Liam Thomas",      role: "DevOps Engineer",   status: "Active",   department: "Engineering", location: "Atlanta",       joined: "2020-08-22" },
// //   { email: "lucas@acme.com",    id: 11, name: "Lucas Martinez",   role: "Product Manager",   status: "Active",   department: "Product",     location: "Dallas",        joined: "2021-05-17" },
// //   { email: "emma@acme.com",     id: 12, name: "Emma Johnson",     role: "Frontend Engineer", status: "Active",   department: "Engineering", location: "Phoenix",       joined: "2022-09-01" },
// //   { email: "noah@acme.com",     id: 13, name: "Noah Davis",       role: "Backend Engineer",  status: "Active",   department: "Engineering", location: "Las Vegas",     joined: "2023-01-10" },
// //   { email: "ava@acme.com",      id: 14, name: "Ava Wilson",       role: "Lead Designer",     status: "Active",   department: "Design",      location: "Nashville",     joined: "2021-11-30" },
// //   { email: "oliver@acme.com",   id: 15, name: "Oliver Martinez",  role: "Frontend Engineer", status: "Active",   department: "Engineering", location: "Minneapolis",   joined: "2022-06-15" },
// //   { email: "isabella@acme.com", id: 16, name: "Isabella Johnson", role: "Backend Engineer",  status: "Active",   department: "Engineering", location: "Detroit",       joined: "2023-03-22" },
// //   { email: "mia@acme.com",      id: 17, name: "Mia Davis",        role: "Lead Designer",     status: "Active",   department: "Design",      location: "San Diego",     joined: "2020-04-08" },
// //   { email: "william@acme.com",  id: 18, name: "William Wilson",   role: "Frontend Engineer", status: "Active",   department: "Engineering", location: "Philadelphia",  joined: "2022-12-01" },
// // ];

// // const ITEMS_PER_PAGE  = 6;
// // const ROW_HEIGHT      = 56;
// // const HEADER_HEIGHT   = 48;
// // const STICKY_COUNT    = 3;
// // const CHECKBOX_WIDTH  = 44;
// // const ACTION_WIDTH    = 68;

// // const BASE_COLUMNS = [
// //   { id: "name",       label: "Name",       defaultWidth: 170 },
// //   { id: "role",       label: "Role",       defaultWidth: 170 },
// //   { id: "status",     label: "Status",     defaultWidth: 130 },
// //   { id: "email",      label: "Email",      defaultWidth: 210 },
// //   { id: "department", label: "Department", defaultWidth: 150 },
// //   { id: "location",   label: "Location",   defaultWidth: 140 },
// //   { id: "joined",     label: "Joined",     defaultWidth: 130 },
// // ];

// // const getBadgeStyle = (status) => {
// //   if (status === "Active")   return { background: "#dcfce7", color: "#16a34a", border: "1px solid #bbf7d0" };
// //   if (status === "Inactive") return { background: "#fee2e2", color: "#dc2626", border: "1px solid #fecaca" };
// //   return { background: "#fef9c3", color: "#ca8a04", border: "1px solid #fef08a" };
// // };

// // const CheckboxIcon = ({ checked }) => (
// //   <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
// //     <rect x="0.5" y="0.5" width="13" height="13" rx="3.5"
// //       stroke={checked ? "#6366f1" : "#d4d4d8"} fill={checked ? "#6366f1" : "#ffffff"} />
// //     {checked && <path d="M3 7l2.5 2.5L11 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
// //   </svg>
// // );

// // const MENU_ITEMS = [
// //   {
// //     key: "view", label: "View", color: "#3b82f6", hoverBg: "#eff6ff",
// //     icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><ellipse cx="6.5" cy="6.5" rx="5.5" ry="3.5" stroke="currentColor" strokeWidth="1.3"/><circle cx="6.5" cy="6.5" r="1.5" fill="currentColor"/></svg>,
// //   },
// //   {
// //     key: "edit", label: "Edit", color: "#f59e0b", hoverBg: "#fffbeb",
// //     icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M9.5 1.5l2 2L4 11H2v-2L9.5 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>,
// //   },
// //   {
// //     key: "delete", label: "Delete", color: "#ef4444", hoverBg: "#fef2f2",
// //     icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 3.5h9M4.5 3.5V2.5h4v1M5 6v3.5M8 6v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><rect x="2.5" y="3.5" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.3"/></svg>,
// //   },
// // ];

// // // ── Portal Dropdown ───────────────────────────────────────────────────────────
// // function DropdownPortal({ anchorRef, open, onClose, userName, userId, onAction }) {
// //   const [pos, setPos] = useState({ top: 0, left: 0 });
// //   const menuRef = useRef(null);

// //   // Recompute position whenever opened
// //   useEffect(() => {
// //     if (!open || !anchorRef.current) return;
// //     const rect = anchorRef.current.getBoundingClientRect();
// //     setPos({
// //       top:  rect.bottom + window.scrollY + 6,
// //       left: rect.right  + window.scrollX - 144, // 144 = minWidth of dropdown
// //     });
// //   }, [open, anchorRef]);

// //   // Close on outside click
// //   useEffect(() => {
// //     if (!open) return;
// //     const handler = (e) => {
// //       if (
// //         menuRef.current   && !menuRef.current.contains(e.target) &&
// //         anchorRef.current && !anchorRef.current.contains(e.target)
// //       ) onClose();
// //     };
// //     document.addEventListener("mousedown", handler);
// //     return () => document.removeEventListener("mousedown", handler);
// //   }, [open, onClose, anchorRef]);

// //   // Close on scroll inside the table
// //   useEffect(() => {
// //     if (!open) return;
// //     const handler = () => onClose();
// //     window.addEventListener("scroll", handler, true);
// //     return () => window.removeEventListener("scroll", handler, true);
// //   }, [open, onClose]);

// //   if (!open) return null;

// //   return createPortal(
// //     <div
// //       ref={menuRef}
// //       onClick={e => e.stopPropagation()}
// //       style={{
// //         position: "absolute",
// //         top: pos.top,
// //         left: Math.max(8, pos.left),
// //         zIndex: 99999,
// //         background: "#ffffff",
// //         border: "1px solid #e4e4e7",
// //         borderRadius: 10,
// //         boxShadow: "0 8px 24px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)",
// //         minWidth: 144,
// //         overflow: "hidden",
// //         animation: "dropdownIn 0.14s ease",
// //       }}
// //     >
// //       {/* Name label */}
// //       <div style={{
// //         padding: "8px 12px 6px",
// //         fontSize: 10, fontWeight: 600, letterSpacing: "0.06em",
// //         color: "#a1a1aa", textTransform: "uppercase",
// //         borderBottom: "1px solid #f4f4f5",
// //         fontFamily: "'IBM Plex Mono', monospace",
// //       }}>
// //         {userName.split(" ")[0]}
// //       </div>

// //       {MENU_ITEMS.map((item, idx) => (
// //         <button
// //           key={item.key}
// //           onClick={() => { onAction(item.key, userId, userName); onClose(); }}
// //           style={{
// //             display: "flex", alignItems: "center", gap: 9,
// //             width: "100%", padding: "9px 12px",
// //             border: "none", background: "transparent",
// //             cursor: "pointer", fontFamily: "inherit",
// //             fontSize: 13, fontWeight: 500,
// //             color: item.key === "delete" ? item.color : "#18181b",
// //             borderTop: idx > 0 && item.key === "delete" ? "1px solid #f4f4f5" : "none",
// //             transition: "background 0.1s, color 0.1s",
// //             textAlign: "left",
// //           }}
// //           onMouseEnter={e => { e.currentTarget.style.background = item.hoverBg; e.currentTarget.style.color = item.color; }}
// //           onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = item.key === "delete" ? item.color : "#18181b"; }}
// //         >
// //           <span style={{ color: item.color, display: "flex", alignItems: "center", flexShrink: 0 }}>
// //             {item.icon}
// //           </span>
// //           {item.label}
// //         </button>
// //       ))}
// //     </div>,
// //     document.body
// //   );
// // }

// // // ── Three-dot Action Menu ─────────────────────────────────────────────────────
// // function ActionMenu({ userId, userName, onAction }) {
// //   const [open, setOpen] = useState(false);
// //   const btnRef = useRef(null);

// //   const close = useCallback(() => setOpen(false), []);

// //   return (
// //     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
// //       <button
// //         ref={btnRef}
// //         onClick={(e) => { e.stopPropagation(); setOpen(v => !v); }}
// //         style={{
// //           width: 30, height: 30, borderRadius: 6,
// //           border: open ? "1px solid #c7d2fe" : "1px solid transparent",
// //           background: open ? "#eef2ff" : "transparent",
// //           cursor: "pointer", display: "flex", alignItems: "center",
// //           justifyContent: "center", flexDirection: "column", gap: 3,
// //           transition: "all 0.15s", padding: 0,
// //         }}
// //         onMouseEnter={e => { if (!open) { e.currentTarget.style.background = "#f4f4f5"; e.currentTarget.style.border = "1px solid #e4e4e7"; } }}
// //         onMouseLeave={e => { if (!open) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.border = "1px solid transparent"; } }}
// //         title="Actions"
// //       >
// //         {[0,1,2].map(i => (
// //           <span key={i} style={{
// //             width: 3.5, height: 3.5, borderRadius: "50%",
// //             background: open ? "#6366f1" : "#71717a",
// //             display: "block", flexShrink: 0, transition: "background 0.15s",
// //           }} />
// //         ))}
// //       </button>

// //       <DropdownPortal
// //         anchorRef={btnRef}
// //         open={open}
// //         onClose={close}
// //         userName={userName}
// //         userId={userId}
// //         onAction={onAction}
// //       />
// //     </div>
// //   );
// // }

// // // ── Confirmation Modal ────────────────────────────────────────────────────────
// // function ConfirmModal({ from, to, onConfirm, onCancel }) {
// //   return (
// //     <div style={{
// //       position: "fixed", inset: 0, zIndex: 1000,
// //       display: "flex", alignItems: "center", justifyContent: "center",
// //       background: "rgba(0,0,0,0.25)", backdropFilter: "blur(3px)",
// //       animation: "fadeIn 0.15s ease",
// //     }}>
// //       <div style={{
// //         background: "#ffffff", borderRadius: 14,
// //         boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
// //         width: 380, padding: "28px 28px 24px",
// //         animation: "slideUp 0.18s ease",
// //       }}>
// //         <div style={{
// //           width: 44, height: 44, borderRadius: 12,
// //           background: "#eef2ff", display: "flex", alignItems: "center", justifyContent: "center",
// //           marginBottom: 16,
// //         }}>
// //           <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
// //             <path d="M3 7h16M3 11h10M3 15h7" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round"/>
// //             <path d="M16 13l4 4m0 0l-4 4m4-4H13" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
// //           </svg>
// //         </div>
// //         <div style={{ fontSize: 16, fontWeight: 700, color: "#18181b", marginBottom: 6 }}>Move Column</div>
// //         <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.6, marginBottom: 22 }}>
// //           Move <strong style={{ color: "#18181b" }}>"{from.label}"</strong> to position{" "}
// //           <strong style={{ color: "#18181b" }}>#{to.index + 1}</strong>
// //           {" "}(before <strong style={{ color: "#18181b" }}>"{to.label}"</strong>)?
// //           <br />This will reorder the visible columns.
// //         </div>
// //         <div style={{
// //           background: "#f8f8fb", border: "1px solid #e4e4e7",
// //           borderRadius: 8, padding: "10px 12px", marginBottom: 22,
// //           display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
// //         }}>
// //           <span style={{ fontSize: 11, color: "#a1a1aa", marginRight: 2 }}>Moving:</span>
// //           <span style={{ background: "#6366f1", color: "#fff", borderRadius: 6, padding: "2px 10px", fontSize: 12, fontWeight: 600 }}>{from.label}</span>
// //           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
// //             <path d="M3 7h8M8 4l3 3-3 3" stroke="#a1a1aa" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
// //           </svg>
// //           <span style={{ fontSize: 11, color: "#52525b" }}>before</span>
// //           <span style={{ background: "#f4f4f5", color: "#52525b", border: "1px solid #e4e4e7", borderRadius: 6, padding: "2px 10px", fontSize: 12, fontWeight: 500 }}>{to.label}</span>
// //         </div>
// //         <div style={{ display: "flex", gap: 8 }}>
// //           <button onClick={onCancel} style={{
// //             flex: 1, padding: "9px 0", borderRadius: 8, border: "1px solid #e4e4e7",
// //             background: "#ffffff", color: "#52525b", fontSize: 13, fontWeight: 500,
// //             cursor: "pointer", fontFamily: "inherit", transition: "background 0.12s",
// //           }}
// //             onMouseEnter={e => e.currentTarget.style.background = "#f4f4f5"}
// //             onMouseLeave={e => e.currentTarget.style.background = "#ffffff"}
// //           >Cancel</button>
// //           <button onClick={onConfirm} style={{
// //             flex: 1, padding: "9px 0", borderRadius: 8, border: "none",
// //             background: "#6366f1", color: "#ffffff", fontSize: 13, fontWeight: 600,
// //             cursor: "pointer", fontFamily: "inherit", transition: "background 0.12s",
// //           }}
// //             onMouseEnter={e => e.currentTarget.style.background = "#4f46e5"}
// //             onMouseLeave={e => e.currentTarget.style.background = "#6366f1"}
// //           >Confirm Move</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ── Toast ─────────────────────────────────────────────────────────────────────
// // function Toast({ message, onDone }) {
// //   useEffect(() => {
// //     const t = setTimeout(onDone, 2400);
// //     return () => clearTimeout(t);
// //   }, [onDone]);
// //   return (
// //     <div style={{
// //       position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
// //       zIndex: 2000, background: "#18181b", color: "#fff",
// //       borderRadius: 8, padding: "10px 18px", fontSize: 13, fontWeight: 500,
// //       boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
// //       animation: "slideUp 0.18s ease", whiteSpace: "nowrap",
// //     }}>
// //       {message}
// //     </div>
// //   );
// // }

// // // ── Main Component ────────────────────────────────────────────────────────────
// // export default function App() {
// //   const [items, setItems]               = useState(() => allUsers.slice(0, ITEMS_PER_PAGE));
// //   const [isLoading, setIsLoading]       = useState(false);
// //   const [selectedRows, setSelectedRows] = useState(new Set());
// //   const [hoveredRow, setHoveredRow]     = useState(null);
// //   const [toast, setToast]               = useState(null);
// //   const isLoadingRef = useRef(false);
// //   const hasMore      = items.length < allUsers.length;
// //   const scrollRef    = useRef(null);

// //   const [columns, setColumns]     = useState(BASE_COLUMNS);
// //   const [colWidths, setColWidths] = useState(BASE_COLUMNS.map(c => c.defaultWidth));

// //   const dragCol      = useRef(null);
// //   const [dragOver, setDragOver]     = useState(null);
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [pendingMove, setPendingMove] = useState(null);

// //   // Infinite scroll
// //   const loadMore = useCallback(() => {
// //     if (!hasMore || isLoadingRef.current) return;
// //     isLoadingRef.current = true;
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       setItems(prev => allUsers.slice(0, prev.length + ITEMS_PER_PAGE));
// //       setIsLoading(false);
// //       requestAnimationFrame(() => { isLoadingRef.current = false; });
// //     }, 1500);
// //   }, [hasMore]);

// //   useEffect(() => {
// //     const el = scrollRef.current;
// //     if (!el) return;
// //     const handler = () => { if (el.scrollTop + el.clientHeight >= el.scrollHeight - 8) loadMore(); };
// //     el.addEventListener("scroll", handler);
// //     return () => el.removeEventListener("scroll", handler);
// //   }, [loadMore]);

// //   // Resize
// //   const resizingCol = useRef(null);
// //   const onResizeMouseDown = (e, ci) => {
// //     e.preventDefault(); e.stopPropagation();
// //     resizingCol.current = { index: ci, startX: e.clientX, startWidth: colWidths[ci] };
// //     const onMove = (ev) => {
// //       if (!resizingCol.current) return;
// //       const delta = ev.clientX - resizingCol.current.startX;
// //       const nw = Math.max(60, resizingCol.current.startWidth + delta);
// //       setColWidths(prev => { const next = [...prev]; next[resizingCol.current.index] = nw; return next; });
// //     };
// //     const onUp = () => {
// //       resizingCol.current = null;
// //       window.removeEventListener("mousemove", onMove);
// //       window.removeEventListener("mouseup", onUp);
// //     };
// //     window.addEventListener("mousemove", onMove);
// //     window.addEventListener("mouseup", onUp);
// //   };

// //   const stickyLeftOf = (ci) => {
// //     let left = CHECKBOX_WIDTH;
// //     for (let i = 0; i < ci; i++) left += colWidths[i];
// //     return left;
// //   };

// //   const totalScrollWidth = colWidths.reduce((a, b) => a + b, 0);

// //   // Row selection
// //   const toggleRow = (id) => setSelectedRows(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
// //   const allSelected = items.length > 0 && items.every(u => selectedRows.has(u.id));
// //   const toggleAll = () => setSelectedRows(prev => {
// //     const next = new Set(prev);
// //     if (allSelected) items.forEach(u => next.delete(u.id));
// //     else             items.forEach(u => next.add(u.id));
// //     return next;
// //   });

// //   // Drag-and-drop
// //   const onDragStart = (e, ci) => {
// //     dragCol.current = ci; setIsDragging(true);
// //     e.dataTransfer.effectAllowed = "move";
// //     const ghost = document.createElement("div");
// //     ghost.style.cssText = "position:fixed;top:-100px;left:-100px;width:1px;height:1px;";
// //     document.body.appendChild(ghost);
// //     e.dataTransfer.setDragImage(ghost, 0, 0);
// //     setTimeout(() => document.body.removeChild(ghost), 0);
// //   };
// //   const onDragOver  = (e, ci) => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; if (ci !== dragCol.current) setDragOver(ci); };
// //   const onDragLeave = () => setDragOver(null);
// //   const onDrop = (e, ci) => {
// //     e.preventDefault();
// //     const fromIdx = dragCol.current;
// //     if (fromIdx === null || fromIdx === ci) { onDragEnd(); return; }
// //     setPendingMove({ fromIdx, toIdx: ci });
// //     setDragOver(null); setIsDragging(false); dragCol.current = null;
// //   };
// //   const onDragEnd = () => { dragCol.current = null; setDragOver(null); setIsDragging(false); };

// //   const applyMove = () => {
// //     if (!pendingMove) return;
// //     const { fromIdx, toIdx } = pendingMove;
// //     setColumns(prev => { const next = [...prev]; const [m] = next.splice(fromIdx, 1); next.splice(toIdx, 0, m); return next; });
// //     setColWidths(prev => { const next = [...prev]; const [m] = next.splice(fromIdx, 1); next.splice(toIdx, 0, m); return next; });
// //     setPendingMove(null);
// //   };

// //   const handleAction = (action, userId, userName) => {
// //     const msgs = { view: `👁  Viewing ${userName}`, edit: `✏️  Editing ${userName}`, delete: `🗑  Deleted ${userName}` };
// //     setToast(msgs[action] || action);
// //   };

// //   const containerHeight = HEADER_HEIGHT + ROW_HEIGHT * 6 + 20;
// //   const totalWidth = CHECKBOX_WIDTH + totalScrollWidth + ACTION_WIDTH;

// //   const BG_ROW_EVEN = "#ffffff", BG_ROW_ODD   = "#fafafa";
// //   const BG_STK_EVEN = "#f8f8fb", BG_STK_ODD   = "#f3f3f7";
// //   const BG_HOV_NORM = "#eff6ff", BG_HOV_STK   = "#e8f0fe";
// //   const BG_SEL_NORM = "#eef2ff", BG_SEL_STK   = "#e5e9ff";
// //   const BG_SEL_HOV_N = "#e0e7ff", BG_SEL_HOV_S = "#d9e0ff";
// //   const BG_HDR      = "#f4f4f5", BG_HDR_STK   = "#ececf0";
// //   const BORDER      = "#e4e4e7", BORDER_STK   = "#d4d4d8";
// //   const ACCENT      = "#6366f1";
// //   const TEXT_PRIMARY = "#18181b", TEXT_ROLE = "#52525b", TEXT_SEC = "#71717a", TEXT_MUTED = "#a1a1aa";

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Inter:wght@400;500;600&display=swap');
// //         @keyframes spin       { to { transform: rotate(360deg); } }
// //         @keyframes fadeIn     { from { opacity:0; } to { opacity:1; } }
// //         @keyframes slideUp    { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
// //         @keyframes rowIn      { from { opacity:0; transform:translateY(3px); } to { opacity:1; transform:none; } }
// //         @keyframes dropdownIn { from { opacity:0; transform:translateY(-6px) scale(0.97); } to { opacity:1; transform:none; } }
// //         .user-row { animation: rowIn 0.18s ease both; }
// //         .resize-handle-inner { width:2px; height:55%; border-radius:1px; background:#d4d4d8; transition:background 0.15s; }
// //         .resize-handle:hover .resize-handle-inner { background:#6366f1; }
// //         .drag-handle { opacity:0; transition:opacity 0.15s; cursor:grab; }
// //         th:hover .drag-handle { opacity:1; }
// //         .drag-handle:active { cursor:grabbing; }
// //         .tbl-scroll::-webkit-scrollbar        { width:6px; height:6px; }
// //         .tbl-scroll::-webkit-scrollbar-track  { background:#f4f4f5; }
// //         .tbl-scroll::-webkit-scrollbar-thumb  { background:#d4d4d8; border-radius:3px; }
// //         .tbl-scroll::-webkit-scrollbar-thumb:hover { background:#a1a1aa; }
// //         .tbl-scroll::-webkit-scrollbar-corner { background:#f4f4f5; }
// //       `}</style>

// //       {toast && <Toast message={toast} onDone={() => setToast(null)} />}

// //       {pendingMove && (
// //         <ConfirmModal
// //           from={{ label: columns[pendingMove.fromIdx].label }}
// //           to={{ index: pendingMove.toIdx, label: columns[pendingMove.toIdx].label }}
// //           onConfirm={applyMove}
// //           onCancel={() => setPendingMove(null)}
// //         />
// //       )}

// //       <div style={{
// //         fontFamily: "'Inter', sans-serif",
// //         background: "#ffffff", borderRadius: 12,
// //         border: `1px solid ${BORDER}`, overflow: "hidden", width: "100%",
// //         boxShadow: "0 1px 8px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)",
// //       }}>
// //         {/* Top bar */}
// //         <div style={{
// //           display: "flex", alignItems: "center", justifyContent: "space-between",
// //           padding: "12px 16px", borderBottom: `1px solid ${BORDER}`, background: BG_HDR,
// //         }}>
// //           <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// //             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
// //               <rect x="2" y="1" width="12" height="14" rx="2" stroke={ACCENT} strokeWidth="1.5"/>
// //               <path d="M5 5h6M5 8h6M5 11h4" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round"/>
// //               <rect x="5" y="0" width="6" height="3" rx="1" fill={ACCENT}/>
// //             </svg>
// //             <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 600, color: TEXT_PRIMARY }}>
// //               Team Directory
// //             </span>
// //             <span style={{ background: "#eef2ff", color: ACCENT, border: "1px solid #c7d2fe", borderRadius: 999, fontSize: 11, fontWeight: 600, padding: "1px 8px" }}>
// //               {allUsers.length}
// //             </span>
// //           </div>
// //           <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// //             <span style={{ fontSize: 11, color: TEXT_MUTED, fontFamily: "'IBM Plex Mono', monospace" }}>⠿ Drag headers to reorder</span>
// //             {["Filter", "Export"].map(label => (
// //               <button key={label} style={{
// //                 background: "#ffffff", border: `1px solid ${BORDER}`,
// //                 color: TEXT_SEC, borderRadius: 6, padding: "4px 10px",
// //                 fontSize: 12, cursor: "pointer", fontFamily: "inherit",
// //               }}>{label}</button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Table */}
// //         <div style={{ height: containerHeight }}>
// //           <div ref={scrollRef} className="tbl-scroll" style={{ height: "100%", overflowY: "auto", overflowX: "auto" }}>
// //             <table style={{
// //               borderCollapse: "separate", borderSpacing: 0,
// //               tableLayout: "fixed", width: totalWidth, minWidth: "100%",
// //             }}>
// //               <colgroup>
// //                 <col style={{ width: CHECKBOX_WIDTH }} />
// //                 {colWidths.map((w, i) => <col key={i} style={{ width: w }} />)}
// //                 <col style={{ width: ACTION_WIDTH }} />
// //               </colgroup>

// //               <thead>
// //                 <tr>
// //                   <th style={{
// //                     height: HEADER_HEIGHT, padding: "0 14px",
// //                     background: BG_HDR_STK, borderBottom: `1px solid ${BORDER}`,
// //                     borderRight: `1px solid ${BORDER_STK}`,
// //                     position: "sticky", top: 0, left: 0, zIndex: 31, cursor: "pointer",
// //                   }} onClick={toggleAll}>
// //                     <CheckboxIcon checked={allSelected} />
// //                   </th>

// //                   {columns.map((col, ci) => {
// //                     const isSticky       = ci < STICKY_COUNT;
// //                     const isLastSticky   = ci === STICKY_COUNT - 1;
// //                     const isBeingDragged = isDragging && dragCol.current === ci;
// //                     const isDropTarget   = dragOver === ci;
// //                     return (
// //                       <th key={col.id} draggable
// //                         onDragStart={e => onDragStart(e, ci)}
// //                         onDragOver={e  => onDragOver(e, ci)}
// //                         onDragLeave={onDragLeave}
// //                         onDrop={e      => onDrop(e, ci)}
// //                         onDragEnd={onDragEnd}
// //                         style={{
// //                           height: HEADER_HEIGHT, padding: "0 14px",
// //                           textAlign: "left", fontSize: 11, fontWeight: 600,
// //                           letterSpacing: "0.06em", textTransform: "uppercase",
// //                           color: isSticky ? "#52525b" : TEXT_MUTED,
// //                           background: isDropTarget ? "#eef2ff" : isBeingDragged ? "#f0f0ff" : isSticky ? BG_HDR_STK : BG_HDR,
// //                           borderBottom: `1px solid ${BORDER}`,
// //                           borderRight: isLastSticky ? `1px solid ${BORDER_STK}` : `1px solid ${BORDER}`,
// //                           borderLeft: isDropTarget ? `2px solid ${ACCENT}` : undefined,
// //                           position: "sticky", top: 0,
// //                           left: isSticky ? stickyLeftOf(ci) : undefined,
// //                           zIndex: isSticky ? 30 : 10,
// //                           userSelect: "none", whiteSpace: "nowrap", overflow: "hidden",
// //                           cursor: "grab", opacity: isBeingDragged ? 0.45 : 1,
// //                           transition: "background 0.12s, opacity 0.12s, border-left 0.1s",
// //                           ...(isLastSticky ? { boxShadow: "4px 0 8px -2px rgba(0,0,0,0.10), 2px 0 0 0 #e4e4e7" } : {}),
// //                         }}
// //                       >
// //                         <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 5, height: "100%" }}>
// //                           <span className="drag-handle" title="Drag to reorder" style={{ lineHeight: 0, marginRight: 2 }}>
// //                             <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
// //                               <circle cx="3" cy="3"  r="1.2" fill="#a1a1aa"/>
// //                               <circle cx="7" cy="3"  r="1.2" fill="#a1a1aa"/>
// //                               <circle cx="3" cy="7"  r="1.2" fill="#a1a1aa"/>
// //                               <circle cx="7" cy="7"  r="1.2" fill="#a1a1aa"/>
// //                               <circle cx="3" cy="11" r="1.2" fill="#a1a1aa"/>
// //                               <circle cx="7" cy="11" r="1.2" fill="#a1a1aa"/>
// //                             </svg>
// //                           </span>
// //                           <span style={{ overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'IBM Plex Mono', monospace" }}>{col.label}</span>
// //                           <div className="resize-handle"
// //                             onMouseDown={e => onResizeMouseDown(e, ci)}
// //                             onClick={e => e.stopPropagation()}
// //                             onDragStart={e => e.stopPropagation()}
// //                             style={{ position: "absolute", right: -6, top: 0, width: 12, height: "100%", cursor: "col-resize", zIndex: 20, display: "flex", alignItems: "center", justifyContent: "center" }}
// //                           >
// //                             <div className="resize-handle-inner" />
// //                           </div>
// //                         </div>
// //                       </th>
// //                     );
// //                   })}

// //                   {/* Actions header — sticky right */}
// //                   <th style={{
// //                     height: HEADER_HEIGHT, padding: "0 10px",
// //                     textAlign: "center", fontSize: 11, fontWeight: 600,
// //                     letterSpacing: "0.06em", textTransform: "uppercase",
// //                     color: TEXT_MUTED, background: BG_HDR_STK,
// //                     borderBottom: `1px solid ${BORDER}`,
// //                     borderLeft: `1px solid ${BORDER_STK}`,
// //                     position: "sticky", top: 0, right: 0, zIndex: 31,
// //                     userSelect: "none", whiteSpace: "nowrap",
// //                     boxShadow: "-4px 0 8px -2px rgba(0,0,0,0.10), -2px 0 0 0 #e4e4e7",
// //                     fontFamily: "'IBM Plex Mono', monospace",
// //                   }}>
// //                     Actions
// //                   </th>
// //                 </tr>
// //               </thead>

// //               <tbody>
// //                 {items.map((user, rowIndex) => {
// //                   const isSelected = selectedRows.has(user.id);
// //                   const isHovered  = hoveredRow === user.id;

// //                   const stickyBg = (() => {
// //                     if (isSelected && isHovered) return BG_SEL_HOV_S;
// //                     if (isSelected)              return BG_SEL_STK;
// //                     if (isHovered)               return BG_HOV_STK;
// //                     return rowIndex % 2 === 0 ? BG_STK_EVEN : BG_STK_ODD;
// //                   })();
// //                   const normalBg = (() => {
// //                     if (isSelected && isHovered) return BG_SEL_HOV_N;
// //                     if (isSelected)              return BG_SEL_NORM;
// //                     if (isHovered)               return BG_HOV_NORM;
// //                     return rowIndex % 2 === 0 ? BG_ROW_EVEN : BG_ROW_ODD;
// //                   })();

// //                   return (
// //                     <tr key={user.id} className="user-row"
// //                       style={{ height: ROW_HEIGHT, animationDelay: `${rowIndex * 0.04}s` }}
// //                       onMouseEnter={() => setHoveredRow(user.id)}
// //                       onMouseLeave={() => setHoveredRow(null)}
// //                     >
// //                       <td onClick={() => toggleRow(user.id)} style={{
// //                         padding: "0 14px", borderBottom: `1px solid ${BORDER}`,
// //                         borderRight: `1px solid ${BORDER_STK}`, background: stickyBg,
// //                         position: "sticky", left: 0, zIndex: 5,
// //                         cursor: "pointer", verticalAlign: "middle",
// //                       }}>
// //                         <CheckboxIcon checked={isSelected} />
// //                       </td>

// //                       {columns.map((col, ci) => {
// //                         const isSticky     = ci < STICKY_COUNT;
// //                         const isLastSticky = ci === STICKY_COUNT - 1;
// //                         const cellBg       = isSticky ? stickyBg : normalBg;
// //                         const isDropCol    = dragOver === ci;
// //                         return (
// //                           <td key={col.id} style={{
// //                             padding: "0 14px", fontSize: 13,
// //                             borderBottom: `1px solid ${BORDER}`,
// //                             borderRight: isLastSticky ? `1px solid ${BORDER_STK}` : `1px solid ${BORDER}`,
// //                             borderLeft: isDropCol ? `2px solid ${ACCENT}` : undefined,
// //                             overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
// //                             verticalAlign: "middle", background: cellBg,
// //                             position: isSticky ? "sticky" : undefined,
// //                             left: isSticky ? stickyLeftOf(ci) : undefined,
// //                             zIndex: isSticky ? 5 : undefined,
// //                             ...(isLastSticky ? { boxShadow: "4px 0 8px -2px rgba(0,0,0,0.10), 2px 0 0 0 #e4e4e7" } : {}),
// //                           }}>
// //                             {col.id === "status" ? (
// //                               <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 10px", borderRadius: 999, fontSize: 11, fontWeight: 500, ...getBadgeStyle(user.status) }}>{user.status}</span>
// //                             ) : (
// //                               <span style={{ fontWeight: col.id === "name" ? 600 : 400, color: col.id === "name" ? TEXT_PRIMARY : col.id === "role" ? TEXT_ROLE : TEXT_SEC }}>
// //                                 {user[col.id]}
// //                               </span>
// //                             )}
// //                           </td>
// //                         );
// //                       })}

// //                       {/* Actions cell — sticky right, overflow visible so portal dropdown renders above */}
// //                       <td style={{
// //                         padding: "0 10px",
// //                         borderBottom: `1px solid ${BORDER}`,
// //                         borderLeft: `1px solid ${BORDER_STK}`,
// //                         background: stickyBg,
// //                         position: "sticky", right: 0, zIndex: 6,
// //                         verticalAlign: "middle", textAlign: "center",
// //                         boxShadow: "-4px 0 8px -2px rgba(0,0,0,0.10), -2px 0 0 0 #e4e4e7",
// //                       }}>
// //                         <ActionMenu userId={user.id} userName={user.name} onAction={handleAction} />
// //                       </td>
// //                     </tr>
// //                   );
// //                 })}

// //                 {hasMore && (
// //                   <tr>
// //                     <td colSpan={columns.length + 2} style={{
// //                       textAlign: "center", padding: "14px 0",
// //                       background: BG_HDR, borderTop: `1px solid ${BORDER}`,
// //                     }}>
// //                       {isLoading ? (
// //                         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, color: TEXT_MUTED, fontSize: 12 }}>
// //                           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
// //                             <circle cx="8" cy="8" r="6" stroke="#d4d4d8" strokeWidth="2"/>
// //                             <path d="M14 8a6 6 0 0 0-6-6" stroke={ACCENT} strokeWidth="2" strokeLinecap="round"/>
// //                           </svg>
// //                           Loading more…
// //                         </div>
// //                       ) : (
// //                         <span style={{ color: TEXT_MUTED, fontSize: 11 }}>↓ Scroll for more</span>
// //                       )}
// //                     </td>
// //                   </tr>
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <div style={{
// //           display: "flex", alignItems: "center", justifyContent: "space-between",
// //           padding: "10px 16px", borderTop: `1px solid ${BORDER}`, background: BG_HDR,
// //         }}>
// //           <span style={{ fontSize: 11, color: TEXT_MUTED, fontFamily: "'IBM Plex Mono', monospace" }}>
// //             {selectedRows.size > 0
// //               ? `${selectedRows.size} of ${items.length} selected`
// //               : `Showing ${items.length} of ${allUsers.length} members`}
// //           </span>
// //           <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
// //             <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
// //             <span style={{ fontSize: 11, color: TEXT_MUTED }}>
// //               {allUsers.filter(u => u.status === "Active").length} active
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }



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
//   { id:11, name:"Brandon Stevens", role:"Jr. Dev",       team:"Development",           status:"active",   age:"22", avatar:"https://i.pravatar.cc/150?img=8",                  email:"brandon.stevens@example.com"  },
//   { id:12, name:"Megan Richards",  role:"P. Manager",    team:"Product",               status:"paused",   age:"28", avatar:"https://i.pravatar.cc/150?img=10",                 email:"megan.richards@example.com"   },
//   { id:13, name:"Oliver Scott",    role:"S. Manager",    team:"Security",              status:"active",   age:"37", avatar:"https://i.pravatar.cc/150?img=12",                 email:"oliver.scott@example.com"     },
//   { id:14, name:"Grace Allen",     role:"M. Specialist", team:"Marketing",             status:"active",   age:"30", avatar:"https://i.pravatar.cc/150?img=16",                 email:"grace.allen@example.com"      },
//   { id:15, name:"Noah Carter",     role:"IT Specialist", team:"I. Technology",         status:"paused",   age:"31", avatar:"https://i.pravatar.cc/150?img=15",                 email:"noah.carter@example.com"      },
//   { id:16, name:"Ava Perez",       role:"Manager",       team:"Sales",                 status:"active",   age:"29", avatar:"https://i.pravatar.cc/150?img=20",                 email:"ava.perez@example.com"        },
//   { id:17, name:"Liam Johnson",    role:"Data Analyst",  team:"Analysis",              status:"active",   age:"28", avatar:"https://i.pravatar.cc/150?img=33",                 email:"liam.johnson@example.com"     },
//   { id:18, name:"Sophia Taylor",   role:"QA Analyst",    team:"Testing",               status:"active",   age:"27", avatar:"https://i.pravatar.cc/150?img=29",                 email:"sophia.taylor@example.com"    },
//   { id:19, name:"Lucas Harris",    role:"Administrator", team:"Information Technology",status:"paused",   age:"32", avatar:"https://i.pravatar.cc/150?img=50",                 email:"lucas.harris@example.com"     },
//   { id:20, name:"Mia Robinson",    role:"Coordinator",   team:"Operations",            status:"active",   age:"26", avatar:"https://i.pravatar.cc/150?img=45",                 email:"mia.robinson@example.com"     },
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
// // stickyLeft: col is pinned to left; stickyRight: col is pinned to right
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

// // ─── Blue header palette ───────────────────────────────────────────────────────
// const H_BG       = "#1e40af";
// const H_BG_HOVER = "#1a379c";
// const H_TEXT     = "#eff6ff";
// const H_BORDER   = "#1d3a8a";
// const H_SUBTEXT  = "rgba(219,234,254,0.7)";

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
//     const ghost = document.createElement("div");
//     ghost.style.cssText = "position:fixed;top:-200px;left:-200px;width:1px;height:1px;";
//     document.body.appendChild(ghost);
//     e.dataTransfer.setDragImage(ghost, 0, 0);
//     e.dataTransfer.effectAllowed = "move";
//     requestAnimationFrame(() => document.body.removeChild(ghost));
//   }, []);

//   const handleDragOver = React.useCallback((e, uid, thEl) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = "move";
//     if (uid === dragSrc.current) return;
//     setDragOver(uid);
//     if (thEl) {
//       const rect = thEl.getBoundingClientRect();
//       setDragSide(e.clientX < rect.left + rect.width / 2 ? "left" : "right");
//     }
//   }, []);

//   const handleDragLeave = React.useCallback((e) => {
//     if (!e.currentTarget.contains(e.relatedTarget)) setDragOver(null);
//   }, []);

//   const handleDrop = React.useCallback((e, targetUid) => {
//     e.preventDefault();
//     const srcUid = dragSrc.current;
//     if (!srcUid || srcUid === targetUid) { dragSrc.current = null; setDragOver(null); setDraggingUid(null); return; }
//     setColumns(prev => {
//       const next = [...prev];
//       const si = next.findIndex(c => c.uid === srcUid);
//       const ti = next.findIndex(c => c.uid === targetUid);
//       if (si < 0 || ti < 0) return prev;
//       if (next[si].stickyRight || next[ti].stickyRight) return prev;
//       const [moved] = next.splice(si, 1);
//       const newTi   = next.findIndex(c => c.uid === targetUid);
//       next.splice(dragSide === "right" ? newTi + 1 : newTi, 0, moved);
//       const numSticky = prev.filter(c => c.stickyLeft).length;
//       return next.map((c, i) => ({ ...c, stickyLeft: i < numSticky && !c.stickyRight }));
//     });
//     dragSrc.current = null; setDragOver(null); setDraggingUid(null);
//   }, [dragSide]);

//   const handleDragEnd = React.useCallback(() => {
//     dragSrc.current = null; setDragOver(null); setDraggingUid(null);
//   }, []);

//   // ── renderCell ───────────────────────────────────────────────────────────────
//   const renderCell = React.useCallback((user, key) => {
//     switch (key) {
//       case "name":
//         return (
//           <User
//             avatarProps={{ radius:"full", size:"sm", src:user.avatar }}
//             classNames={{ description:"text-default-500" }}
//             description={user.email}
//             name={user.name}
//           />
//         );
//       case "role":
//         return (
//           <div className="flex flex-col">
//             <p className="text-bold text-small capitalize">{user.role}</p>
//             <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p>
//           </div>
//         );
//       case "status":
//         return (
//           <Chip
//             className="capitalize border-none gap-1 text-default-600"
//             color={statusColorMap[user.status]}
//             size="sm"
//             variant="dot"
//           >
//             {user.status}
//           </Chip>
//         );
//       case "actions":
//         return (
//           <div style={{ display:"flex", justifyContent:"center" }}>
//             <Dropdown className="bg-background border-1 border-default-200">
//               <DropdownTrigger>
//                 <Button isIconOnly radius="full" size="sm" variant="light">
//                   <VerticalDotsIcon size={18}/>
//                 </Button>
//               </DropdownTrigger>
//               <DropdownMenu>
//                 <DropdownItem key="view">View</DropdownItem>
//                 <DropdownItem key="edit">Edit</DropdownItem>
//                 <DropdownItem key="delete" className="text-danger" color="danger">Delete</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </div>
//         );
//       default:
//         return <span className="text-small">{user[key]}</span>;
//     }
//   }, []);

//   // ── Callbacks ────────────────────────────────────────────────────────────────
//   const onRowsPerPageChange = React.useCallback((e) => { setRowsPerPage(Number(e.target.value)); setPage(1); }, []);
//   const onSearchChange      = React.useCallback((v) => { setFilterValue(v ?? ""); setPage(1); }, []);

//   // ── Top content ──────────────────────────────────────────────────────────────
//   const topContent = React.useMemo(() => (
//     <div className="flex flex-col gap-4">
//       <div className="flex justify-between gap-3 items-end">
//         <Input
//           isClearable
//           classNames={{ base:"w-full sm:max-w-[44%]", inputWrapper:"border-1" }}
//           placeholder="Search by name…"
//           size="sm"
//           startContent={<SearchIcon className="text-default-300"/>}
//           value={filterValue}
//           variant="bordered"
//           onClear={() => setFilterValue("")}
//           onValueChange={onSearchChange}
//         />
//         <div className="flex gap-3">
//           <Dropdown>
//             <DropdownTrigger className="hidden sm:flex">
//               <Button endContent={<ChevronDownIcon className="text-small"/>} size="sm" variant="flat">Status</Button>
//             </DropdownTrigger>
//             <DropdownMenu
//               disallowEmptySelection aria-label="Status filter"
//               closeOnSelect={false} selectedKeys={statusFilter}
//               selectionMode="multiple" onSelectionChange={setStatusFilter}
//             >
//               {statusOptions.map(s => <DropdownItem key={s.uid} className="capitalize">{capitalize(s.name)}</DropdownItem>)}
//             </DropdownMenu>
//           </Dropdown>
//           <Dropdown>
//             <DropdownTrigger className="hidden sm:flex">
//               <Button endContent={<ChevronDownIcon className="text-small"/>} size="sm" variant="flat">Columns</Button>
//             </DropdownTrigger>
//             <DropdownMenu
//               disallowEmptySelection aria-label="Visible columns"
//               closeOnSelect={false} selectedKeys={visibleSet}
//               selectionMode="multiple" onSelectionChange={setVisibleSet}
//             >
//               {INITIAL_COLUMNS.map(c => <DropdownItem key={c.uid} className="capitalize">{capitalize(c.label)}</DropdownItem>)}
//             </DropdownMenu>
//           </Dropdown>
//           <Button className="bg-foreground text-background" endContent={<PlusIcon size={18}/>} size="sm">Add New</Button>
//         </div>
//       </div>
//       <div className="flex justify-between items-center">
//         <span className="text-default-400 text-small">Total {users.length} users</span>
//         <label className="flex items-center text-default-400 text-small gap-1">
//           Rows per page:
//           <select className="bg-transparent outline-none text-default-400 text-small" onChange={onRowsPerPageChange}>
//             <option value="5">5</option>
//             <option value="10">10</option>
//             <option value="15">15</option>
//           </select>
//         </label>
//       </div>
//     </div>
//   ), [filterValue, statusFilter, visibleSet, onSearchChange, onRowsPerPageChange]);

//   // ── Bottom content ───────────────────────────────────────────────────────────
//   const bottomContent = React.useMemo(() => (
//     <div className="py-2 px-2 flex justify-between items-center">
//       <Pagination
//         showControls
//         classNames={{ cursor:"bg-foreground text-background" }}
//         color="default"
//         isDisabled={hasSearch}
//         page={page}
//         total={totalPages}
//         variant="light"
//         onChange={setPage}
//       />
//       <span className="text-small text-default-400">
//         {selectedKeys === "all" ? "All items selected" : `${selectedKeys.size} of ${pageRows.length} selected`}
//       </span>
//     </div>
//   ), [selectedKeys, pageRows.length, page, totalPages, hasSearch]);

//   // ─────────────────────────────────────────────────────────────────────────────
//   return (
//     <>
//       {/* ── Global styles ─────────────────────────────────────────────────── */}
//       <style>{`
//         /* ── Wrapper: horizontal + vertical scroll ────────────────────── */
//         .ht-wrap {
//           overflow: auto;
//           border: 1.5px solid #cbd5e1;
//           border-radius: 12px;
//           box-shadow: 0 2px 12px rgba(30,64,175,0.07), 0 1px 3px rgba(0,0,0,0.05);
//           background: #fff;
//         }
//         /* ── Force fixed layout so widths are respected ───────────────── */
//         .ht-wrap table {
//           border-collapse: separate !important;
//           border-spacing: 0 !important;
//           table-layout: fixed !important;
//           width: max-content !important;
//           min-width: 100% !important;
//         }
//         /* ── ALL cells get full borders (grid look) ───────────────────── */
//         .ht-wrap table thead tr th,
//         .ht-wrap table tbody tr td {
//           border-right: 1px solid #e2e8f0 !important;
//           border-bottom: 1px solid #e2e8f0 !important;
//         }
//         .ht-wrap table thead tr th:last-child,
//         .ht-wrap table tbody tr td:last-child {
//           border-right: none !important;
//         }
//         .ht-wrap table tbody tr:last-child td {
//           border-bottom: none !important;
//         }
//         /* ── Row hover ────────────────────────────────────────────────── */
//         .ht-wrap table tbody tr:hover td {
//           background: #f0f6ff !important;
//         }
//         /* ── HEADER: blue background ──────────────────────────────────── */
//         .ht-wrap table thead tr th {
//           position: sticky !important;
//           top: 0 !important;
//           z-index: 12;
//           background: ${H_BG} !important;
//           border-bottom: 2px solid ${H_BORDER} !important;
//           border-right: 1px solid ${H_BORDER} !important;
//           white-space: nowrap;
//           overflow: visible !important;
//           padding: 0 !important;
//         }
//         .ht-wrap table thead tr th:last-child {
//           border-right: none !important;
//         }
//         /* ── Checkbox header cell ─────────────────────────────────────── */
//         .ht-wrap table thead tr th:first-child {
//           position: sticky !important;
//           left: 0 !important;
//           z-index: 32 !important;
//           width: ${CHECKBOX_W}px !important;
//           min-width: ${CHECKBOX_W}px !important;
//           background: ${H_BG} !important;
//         }
//         /* ── Checkbox body cell ───────────────────────────────────────── */
//         .ht-wrap table tbody tr td:first-child {
//           position: sticky !important;
//           left: 0 !important;
//           z-index: 10 !important;
//           width: ${CHECKBOX_W}px !important;
//           min-width: ${CHECKBOX_W}px !important;
//           background: #fff;
//           box-shadow: 2px 0 5px rgba(0,0,0,0.04);
//         }
//         /* ── Resize handle ────────────────────────────────────────────── */
//         .ht-rh {
//           position: absolute;
//           top: 0; right: -4px;
//           width: 9px; height: 100%;
//           cursor: col-resize;
//           z-index: 40;
//           display: flex; align-items: center; justify-content: center;
//         }
//         .ht-rh::after {
//           content: '';
//           width: 3px; height: 55%;
//           border-radius: 2px;
//           background: rgba(147,197,253,0.5);
//           transition: background .15s, height .15s, width .1s;
//           display: block;
//         }
//         .ht-rh:hover::after, .ht-rh:active::after {
//           background: #93c5fd;
//           height: 75%; width: 3px;
//         }
//         /* ── Grip dots ────────────────────────────────────────────────── */
//         .ht-grip {
//           opacity: 0;
//           transition: opacity .15s;
//           cursor: grab;
//           flex-shrink: 0;
//           color: rgba(147,197,253,0.9);
//           margin-right: 5px;
//           display: flex; align-items: center;
//         }
//         .ht-th-inner:hover .ht-grip { opacity: 1; }
//         .ht-grip:active { cursor: grabbing; }
//         /* ── Drop-target side indicator ───────────────────────────────── */
//         .ht-drop-left  { box-shadow: inset  3px 0 0 #93c5fd !important; }
//         .ht-drop-right { box-shadow: inset -3px 0 0 #93c5fd !important; }
//         /* ── Scrollbar styling ────────────────────────────────────────── */
//         .ht-wrap::-webkit-scrollbar { width:6px; height:6px; }
//         .ht-wrap::-webkit-scrollbar-track { background: #f1f5f9; }
//         .ht-wrap::-webkit-scrollbar-thumb { background:#94a3b8; border-radius:3px; }
//         .ht-wrap::-webkit-scrollbar-thumb:hover { background:#64748b; }
//         .ht-wrap::-webkit-scrollbar-corner { background:#f1f5f9; }
//         /* ── Selected row tint ────────────────────────────────────────── */
//         .ht-wrap table tbody tr[data-selected="true"] td {
//           background: #eff6ff !important;
//         }
//         /* ── Drag-over left/right indicator on entire column ─────────── */
//         .ht-wrap table thead th.ht-drop-left,
//         .ht-wrap table thead th.ht-drop-right { transition: box-shadow .05s; }
//       `}</style>

//       {/* ── Toolbar ─────────────────────────────────────────────────────── */}
//       <div className="mb-4">{topContent}</div>

//       {/* ── Table scroll wrapper ─────────────────────────────────────────── */}
//       <div className="ht-wrap">
//         <Table
//           isCompact
//           removeWrapper
//           aria-label="Users table"
//           checkboxesProps={{ classNames: { wrapper:"after:bg-foreground after:text-background text-background" } }}
//           classNames={{
//             th: "!px-0 !py-0 bg-transparent overflow-visible",
//             td: "border-0",
//           }}
//           selectedKeys={selectedKeys}
//           selectionMode="multiple"
//           sortDescriptor={sortDescriptor}
//           onSelectionChange={setSelectedKeys}
//           onSortChange={setSortDescriptor}
//         >
//           {/* ── THEAD ─────────────────────────────────────────────────── */}
//           <TableHeader>
//             {visibleColumns.map((col, ci) => {
//               const isStickyL = col.stickyLeft;
//               const isStickyR = col.stickyRight;
//               const sLeft     = isStickyL ? getStickyLeft(ci) : undefined;
//               const isLastSL  = isStickyL && !visibleColumns[ci+1]?.stickyLeft;
//               const isDragMe  = draggingUid === col.uid;
//               const isDropOver= dragOver === col.uid;

//               return (
//                 <TableColumn
//                   key={col.uid}
//                   align={col.uid === "actions" ? "center" : "start"}
//                   allowsSorting={col.sortable}
//                   draggable={!isStickyR}
//                   onDragStart={!isStickyR ? (e) => handleDragStart(e, col.uid) : undefined}
//                   onDragOver={!isStickyR ? (e) => {
//                     // pass the th element for midpoint calculation
//                     handleDragOver(e, col.uid, e.currentTarget);
//                   } : undefined}
//                   onDragLeave={!isStickyR ? handleDragLeave : undefined}
//                   onDrop={!isStickyR ? (e) => handleDrop(e, col.uid) : undefined}
//                   onDragEnd={handleDragEnd}
//                   className={
//                     isDropOver
//                       ? (dragSide === "left" ? "ht-drop-left" : "ht-drop-right")
//                       : ""
//                   }
//                   style={{
//                     width: widths[col.uid], minWidth: widths[col.uid], maxWidth: widths[col.uid],
//                     position: (isStickyL || isStickyR) ? "sticky" : undefined,
//                     left:  isStickyL ? sLeft : undefined,
//                     right: isStickyR ? 0     : undefined,
//                     zIndex: isStickyL ? 22 : isStickyR ? 22 : 12,
//                     boxShadow: isLastSL
//                       ? "4px 0 8px -2px rgba(0,0,0,0.18)"
//                       : isStickyR
//                       ? "-4px 0 8px -2px rgba(0,0,0,0.18)"
//                       : undefined,
//                     opacity: isDragMe ? 0.4 : 1,
//                     transition: "opacity .12s",
//                     overflow: "visible",
//                     background: H_BG,
//                   }}
//                 >
//                   {/* Inner layout: grip + label + resize handle */}
//                   <div
//                     className="ht-th-inner"
//                     style={{
//                       display:"flex", alignItems:"center",
//                       padding:"0 10px", height:44, position:"relative",
//                       gap:0, cursor: isStickyR ? "default" : "grab",
//                     }}
//                   >
//                     {/* Grip handle */}
//                     {!isStickyR && (
//                       <span
//                         className="ht-grip"
//                         title="Drag to reorder"
//                         onMouseDown={e => { if (isResizing.current) e.stopPropagation(); }}
//                       >
//                         <GripDotsIcon/>
//                       </span>
//                     )}

//                     {/* Label */}
//                     <span style={{
//                       flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
//                       fontSize:11.5, fontWeight:700, color:H_TEXT,
//                       letterSpacing:"0.06em", textTransform:"uppercase",
//                       display:"flex", alignItems:"center", gap:4,
//                     }}>
//                       {col.label}
//                       {col.sortable && (
//                         <span style={{ display:"flex", flexDirection:"column", gap:1, opacity:.6 }}>
//                           <svg width="6" height="4" viewBox="0 0 6 4">
//                             <path d="M3 0L6 4H0L3 0Z" fill={
//                               sortDescriptor.column === col.uid && sortDescriptor.direction === "ascending"
//                                 ? "#93c5fd" : "rgba(147,197,253,0.5)"
//                             }/>
//                           </svg>
//                           <svg width="6" height="4" viewBox="0 0 6 4">
//                             <path d="M3 4L0 0H6L3 4Z" fill={
//                               sortDescriptor.column === col.uid && sortDescriptor.direction === "descending"
//                                 ? "#93c5fd" : "rgba(147,197,253,0.5)"
//                             }/>
//                           </svg>
//                         </span>
//                       )}
//                     </span>

//                     {/* Resize handle */}
//                     {!isStickyR && (
//                       <span
//                         className="ht-rh"
//                         title="Drag to resize"
//                         onMouseDown={e => handleResizeMouseDown(e, col.uid)}
//                         onClick={e => e.stopPropagation()}
//                         onDragStart={e => { e.preventDefault(); e.stopPropagation(); }}
//                       />
//                     )}
//                   </div>
//                 </TableColumn>
//               );
//             })}
//           </TableHeader>

//           {/* ── TBODY ─────────────────────────────────────────────────── */}
//           <TableBody emptyContent="No users found" items={sorted}>
//             {(item) => (
//               <TableRow key={item.id} data-selected={selectedKeys !== "all" && selectedKeys.has(String(item.id)) ? "true" : "false"}>
//                 {(columnKey) => {
//                   const ci       = visibleColumns.findIndex(c => c.uid === columnKey);
//                   const col      = visibleColumns[ci];
//                   if (!col) return <TableCell>{item[columnKey]}</TableCell>;

//                   const isStickyL  = col.stickyLeft;
//                   const isStickyR  = col.stickyRight;
//                   const sLeft      = isStickyL ? getStickyLeft(ci) : undefined;
//                   const isLastSL   = isStickyL && !visibleColumns[ci+1]?.stickyLeft;
//                   const isDropOver = dragOver === col.uid;

//                   return (
//                     <TableCell
//                       style={{
//                         width: widths[columnKey], minWidth: widths[columnKey], maxWidth: widths[columnKey],
//                         overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
//                         padding:"10px 12px",
//                         position: (isStickyL || isStickyR) ? "sticky" : undefined,
//                         left:  isStickyL ? sLeft : undefined,
//                         right: isStickyR ? 0     : undefined,
//                         zIndex: isStickyL ? 8 : isStickyR ? 8 : undefined,
//                         background: isDropOver
//                           ? "#dbeafe"
//                           : (isStickyL || isStickyR)
//                           ? "#fff"
//                           : undefined,
//                         boxShadow: isLastSL
//                           ? "4px 0 8px -2px rgba(0,0,0,0.10)"
//                           : isStickyR
//                           ? "-4px 0 8px -2px rgba(0,0,0,0.08)"
//                           : undefined,
//                         transition:"background .1s",
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

//       {/* ── Pagination ───────────────────────────────────────────────────── */}
//       <div className="mt-2">{bottomContent}</div>

//       {/* ── Hint bar ─────────────────────────────────────────────────────── */}
//       <div style={{
//         marginTop:10, display:"flex", gap:20, flexWrap:"wrap",
//         fontSize:11, color:"#94a3b8", alignItems:"center",
//       }}>
//         <span style={{ display:"flex", alignItems:"center", gap:5 }}>
//           <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
//             <circle cx="3" cy="2" r="1.3" fill="#94a3b8"/><circle cx="7" cy="2" r="1.3" fill="#94a3b8"/>
//             <circle cx="3" cy="7" r="1.3" fill="#94a3b8"/><circle cx="7" cy="7" r="1.3" fill="#94a3b8"/>
//             <circle cx="3" cy="12" r="1.3" fill="#94a3b8"/><circle cx="7" cy="12" r="1.3" fill="#94a3b8"/>
//           </svg>
//           Hover header → drag grip to reorder columns
//         </span>
//         <span>↔ Drag right edge of header to resize</span>
//         <span>📌 Checkbox · Name · Role · Status pinned left &nbsp;|&nbsp; Actions pinned right</span>
//       </div>
//     </>
//   );
// }





/**
 * HeroUI Partial-Scroll Table
 *
 * Architecture: 3 independent HeroUI Tables rendered side-by-side in a flex row.
 *
 *   ┌──────────────────────┬──────────────────────────┬───────────┐
 *   │  LEFT (sticky)       │  MIDDLE (overflow-x:auto)│  RIGHT    │
 *   │  checkbox · name     │  team · age · email      │  actions  │
 *   │  role · status       │  ← scrollbar here only → │           │
 *   └──────────────────────┴──────────────────────────┴───────────┘
 *
 * Each zone is its own removeWrapper HeroUI Table.
 * Row heights are synced across zones via a useLayoutEffect pass.
 * Drag-and-drop reorder + column resize work on the MIDDLE zone only.
 */

/**
 * HeroUI Partial-Scroll Table
 *
 * Architecture: 3 independent HeroUI Tables rendered side-by-side in a flex row.
 *
 *   ┌──────────────────────┬──────────────────────────┬───────────┐
 *   │  LEFT (sticky)       │  MIDDLE (overflow-x:auto)│  RIGHT    │
 *   │  checkbox · name     │  team · age · email      │  actions  │
 *   │  role · status       │  ← scrollbar here only → │           │
 *   └──────────────────────┴──────────────────────────┴───────────┘
 *
 * Each zone is its own removeWrapper HeroUI Table.
 * Row heights are synced across zones via a useLayoutEffect pass.
 * Drag-and-drop reorder + column resize work on the MIDDLE zone only.
 */

import React from "react";
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Input, Button,
  DropdownTrigger, Dropdown, DropdownMenu, DropdownItem,
  Chip, User, Pagination,
} from "@heroui/react";

// ─── Static data ───────────────────────────────────────────────────────────────
export const statusOptions = [
  { name: "Active",   uid: "active"   },
  { name: "Paused",   uid: "paused"   },
  { name: "Vacation", uid: "vacation" },
];

export const users = [
  { id:1,  name:"Tony Reichert",   role:"CEO",           team:"Management",            status:"active",   age:"29", avatar:"https://i.pravatar.cc/150?u=a042581f4e29026024d", email:"tony.reichert@example.com"   },
  { id:2,  name:"Zoey Lang",       role:"Tech Lead",     team:"Development",           status:"paused",   age:"25", avatar:"https://i.pravatar.cc/150?u=a042581f4e29026704d", email:"zoey.lang@example.com"        },
  { id:3,  name:"Jane Fisher",     role:"Sr. Dev",       team:"Development",           status:"active",   age:"22", avatar:"https://i.pravatar.cc/150?u=a04258114e29026702d", email:"jane.fisher@example.com"      },
  { id:4,  name:"William Howard",  role:"C.M.",          team:"Marketing",             status:"vacation", age:"28", avatar:"https://i.pravatar.cc/150?u=a048581f4e29026701d", email:"william.howard@example.com"   },
  { id:5,  name:"Kristen Copper",  role:"S. Manager",    team:"Sales",                 status:"active",   age:"24", avatar:"https://i.pravatar.cc/150?u=a092581d4ef9026700d", email:"kristen.cooper@example.com"   },
  { id:6,  name:"Brian Kim",       role:"P. Manager",    team:"Management",            status:"active",   age:"29", avatar:"https://i.pravatar.cc/150?u=a042581f4e29026024d", email:"brian.kim@example.com"        },
  { id:7,  name:"Michael Hunt",    role:"Designer",      team:"Design",                status:"paused",   age:"27", avatar:"https://i.pravatar.cc/150?u=a042581f4e29027007d", email:"michael.hunt@example.com"     },
  { id:8,  name:"Samantha Brooks", role:"HR Manager",    team:"HR",                    status:"active",   age:"31", avatar:"https://i.pravatar.cc/150?u=a042581f4e27027008d", email:"samantha.brooks@example.com"  },
  { id:9,  name:"Frank Harrison",  role:"F. Manager",    team:"Finance",               status:"vacation", age:"33", avatar:"https://i.pravatar.cc/150?img=4",                  email:"frank.harrison@example.com"   },
  { id:10, name:"Emma Adams",      role:"Ops Manager",   team:"Operations",            status:"active",   age:"35", avatar:"https://i.pravatar.cc/150?img=5",                  email:"emma.adams@example.com"       },
  { id:11, name:"Brandon Stevens", role:"Jr. Dev",       team:"Development",           status:"active",   age:"22", avatar:"https://i.pravatar.cc/150?img=8",                  email:"brandon.stevens@example.com"  },
  { id:12, name:"Megan Richards",  role:"P. Manager",    team:"Product",               status:"paused",   age:"28", avatar:"https://i.pravatar.cc/150?img=10",                 email:"megan.richards@example.com"   },
  { id:13, name:"Oliver Scott",    role:"S. Manager",    team:"Security",              status:"active",   age:"37", avatar:"https://i.pravatar.cc/150?img=12",                 email:"oliver.scott@example.com"     },
  { id:14, name:"Grace Allen",     role:"M. Specialist", team:"Marketing",             status:"active",   age:"30", avatar:"https://i.pravatar.cc/150?img=16",                 email:"grace.allen@example.com"      },
  { id:15, name:"Noah Carter",     role:"IT Specialist", team:"I. Technology",         status:"paused",   age:"31", avatar:"https://i.pravatar.cc/150?img=15",                 email:"noah.carter@example.com"      },
  { id:16, name:"Ava Perez",       role:"Manager",       team:"Sales",                 status:"active",   age:"29", avatar:"https://i.pravatar.cc/150?img=20",                 email:"ava.perez@example.com"        },
  { id:17, name:"Liam Johnson",    role:"Data Analyst",  team:"Analysis",              status:"active",   age:"28", avatar:"https://i.pravatar.cc/150?img=33",                 email:"liam.johnson@example.com"     },
  { id:18, name:"Sophia Taylor",   role:"QA Analyst",    team:"Testing",               status:"active",   age:"27", avatar:"https://i.pravatar.cc/150?img=29",                 email:"sophia.taylor@example.com"    },
  { id:19, name:"Lucas Harris",    role:"Administrator", team:"Information Technology",status:"paused",   age:"32", avatar:"https://i.pravatar.cc/150?img=50",                 email:"lucas.harris@example.com"     },
  { id:20, name:"Mia Robinson",    role:"Coordinator",   team:"Operations",            status:"active",   age:"26", avatar:"https://i.pravatar.cc/150?img=45",                 email:"mia.robinson@example.com"     },
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

// ─── Zone column definitions ──────────────────────────────────────────────────
// LEFT_COLS: always sticky (rendered in left zone)
// MID_COLS_INIT: scrollable (rendered in middle zone, reorderable)
// RIGHT_COLS: always sticky right (rendered in right zone)

const LEFT_COLS = [
  // Note: the selection column is HeroUI's built-in — we only declare the data cols here.
  // The checkbox is injected automatically by selectionMode="multiple".
  { uid: "name",   label: "NAME",   sortable: true,  w: 240 },
  { uid: "role",   label: "ROLE",   sortable: true,  w: 160 },
  { uid: "status", label: "STATUS", sortable: true,  w: 130 },
];

const MID_COLS_INIT = [
  { uid: "team",  label: "TEAM",  sortable: false, w: 160 },
  { uid: "age",   label: "AGE",   sortable: true,  w: 80  },
  { uid: "email", label: "EMAIL", sortable: false, w: 240 },
];

const RIGHT_COLS = [
  { uid: "actions", label: "ACTIONS", sortable: false, w: 80 },
];

const statusColorMap = { active: "success", paused: "danger", vacation: "warning" };

// ─── Main component ────────────────────────────────────────────────────────────
export default function App() {

  // ── Shared table state ───────────────────────────────────────────────────────
  const [filterValue,    setFilterValue]    = React.useState("");
  const [selectedKeys,   setSelectedKeys]   = React.useState(new Set([]));
  const [statusFilter,   setStatusFilter]   = React.useState("all");
  const [rowsPerPage,    setRowsPerPage]     = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({ column: "age", direction: "ascending" });
  const [page,           setPage]           = React.useState(1);

  // ── Column widths (shared across all zones) ──────────────────────────────────
  const allCols = [...LEFT_COLS, ...MID_COLS_INIT, ...RIGHT_COLS];
  const [widths, setWidths] = React.useState(
    () => Object.fromEntries(allCols.map(c => [c.uid, c.w]))
  );

  // ── Middle zone column order (drag-and-drop reorder only in middle zone) ─────
  const [midOrder, setMidOrder] = React.useState(() => MID_COLS_INIT.map(c => c.uid));
  const midCols = React.useMemo(
    () => midOrder.map(uid => MID_COLS_INIT.find(c => c.uid === uid)),
    [midOrder]
  );

  // ── Drag state (middle zone only) ───────────────────────────────────────────
  const dragSrc      = React.useRef(null);
  const isResizing   = React.useRef(false);
  const [dragOver,   setDragOver]   = React.useState(null);
  const [draggingUid, setDraggingUid] = React.useState(null);

  const handleDragStart = React.useCallback((e, uid) => {
    if (isResizing.current) { e.preventDefault(); return; }
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
    setMidOrder(prev => {
      const next = [...prev];
      const si = next.indexOf(srcUid);
      const ti = next.indexOf(targetUid);
      if (si < 0 || ti < 0) return prev;
      next.splice(si, 1);
      next.splice(ti, 0, srcUid);
      return next;
    });
    dragSrc.current = null; setDragOver(null); setDraggingUid(null);
  }, []);

  const handleDragEnd = React.useCallback(() => {
    dragSrc.current = null; setDragOver(null); setDraggingUid(null);
  }, []);

  // ── Resize ───────────────────────────────────────────────────────────────────
  const handleResizeMouseDown = React.useCallback((e, uid) => {
    e.preventDefault(); e.stopPropagation();
    isResizing.current = true;
    const startX = e.clientX;
    const startW = widths[uid] ?? 100;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    const onMove = (ev) => {
      setWidths(prev => ({ ...prev, [uid]: Math.max(60, startW + (ev.clientX - startX)) }));
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

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));

  const pageRows = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [page, filtered, rowsPerPage]);

  const sorted = React.useMemo(() =>
    [...pageRows].sort((a, b) => {
      const fa = a[sortDescriptor.column], fb = b[sortDescriptor.column];
      const c = fa < fb ? -1 : fa > fb ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -c : c;
    }),
    [sortDescriptor, pageRows]
  );

  // ── Row-height sync: make every row the same height across all 3 zone tables ─
  // We read heights from left zone (widest cells) and apply to mid + right.
  const leftRef  = React.useRef(null);
  const midRef   = React.useRef(null);
  const rightRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const sync = () => {
      const zones = [leftRef.current, midRef.current, rightRef.current].filter(Boolean);
      if (zones.length < 2) return;

      // Sync header heights
      const headers = zones.map(z => z.querySelector("thead tr:first-child"));
      const headerH = Math.max(...headers.map(h => h?.getBoundingClientRect().height ?? 0));
      headers.forEach(h => { if (h) h.style.height = headerH + "px"; });

      // Sync body row heights row-by-row
      const bodies = zones.map(z => Array.from(z.querySelectorAll("tbody tr")));
      const rowCount = Math.max(...bodies.map(b => b.length));
      for (let i = 0; i < rowCount; i++) {
        const rowH = Math.max(
          ...bodies.map(b => b[i]?.getBoundingClientRect().height ?? 0)
        );
        bodies.forEach(b => { if (b[i]) b[i].style.height = rowH + "px"; });
      }
    };

    sync();
    // Re-sync on resize
    const ro = new ResizeObserver(sync);
    [leftRef, midRef, rightRef].forEach(r => { if (r.current) ro.observe(r.current); });
    return () => ro.disconnect();
  }, [sorted, widths, midOrder]);

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
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[user.status]}
            size="sm"
            variant="dot"
          >
            {user.status}
          </Chip>
        );
      case "actions":
        return (
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
        );
      default:
        return user[key];
    }
  }, []);

  // ── Shared column header builder ──────────────────────────────────────────────
  const buildColumnHeader = React.useCallback((col, { draggable = false } = {}) => {
    const isDragOver   = dragOver   === col.uid;
    const isDraggingMe = draggingUid === col.uid;

    return (
      <TableColumn
        key={col.uid}
        align={col.uid === "actions" ? "center" : "start"}
        allowsSorting={col.sortable}
        draggable={draggable}
        onDragStart={draggable ? (e) => handleDragStart(e, col.uid) : undefined}
        onDragOver={draggable  ? (e) => handleDragOver(e, col.uid)  : undefined}
        onDragLeave={draggable ? handleDragLeave                     : undefined}
        onDrop={draggable      ? (e) => handleDrop(e, col.uid)       : undefined}
        onDragEnd={draggable   ? handleDragEnd                       : undefined}
        style={{
          width:    widths[col.uid],
          minWidth: widths[col.uid],
          maxWidth: widths[col.uid],
          background: isDragOver ? "hsl(var(--heroui-primary-100))" : undefined,
          borderLeft: isDragOver ? "2px solid hsl(var(--heroui-primary))" : undefined,
          opacity:    isDraggingMe ? 0.4 : 1,
          overflow:   "visible",
          padding:    0,
          transition: "background 0.1s, opacity 0.12s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", position: "relative", height: "100%", padding: "0 12px", gap: 0 }}>
          {draggable && (
            <span
              style={{ opacity: 0, transition: "opacity 0.12s", cursor: "grab", flexShrink: 0, color: "hsl(var(--heroui-default-400))", marginRight: 5, display: "flex", alignItems: "center" }}
              className="ht-grip"
              title="Drag to reorder"
            >
              <GripIcon />
            </span>
          )}
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
            {col.label}
          </span>
          {/* Resize handle (on all non-actions cols) */}
          {col.uid !== "actions" && (
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
  }, [dragOver, draggingUid, widths, handleDragStart, handleDragOver, handleDragLeave, handleDrop, handleDragEnd, handleResizeMouseDown]);

  // ── Shared cell builder ───────────────────────────────────────────────────────
  const buildCell = React.useCallback((user, col) => {
    const isDragOver = dragOver === col.uid;
    return (
      <TableCell
        key={col.uid}
        style={{
          width:        widths[col.uid],
          minWidth:     widths[col.uid],
          maxWidth:     widths[col.uid],
          overflow:     "hidden",
          textOverflow: "ellipsis",
          whiteSpace:   "nowrap",
          background:   isDragOver ? "hsl(var(--heroui-primary-50))" : undefined,
          borderLeft:   isDragOver ? "2px solid hsl(var(--heroui-primary))" : undefined,
          transition:   "background 0.1s",
        }}
      >
        {renderCell(user, col.uid)}
      </TableCell>
    );
  }, [dragOver, widths, renderCell]);

  // ── Shared table class names ──────────────────────────────────────────────────
  const sharedClassNames = {
    // border-b / border-divider removed — handled globally in the <style> block below
    th: ["bg-transparent", "text-default-500", "!px-0"],
    td: [
      "first:group-data-[first=true]/tr:before:rounded-none",
      "last:group-data-[first=true]/tr:before:rounded-none",
      "group-data-[middle=true]/tr:before:rounded-none",
      "first:group-data-[last=true]/tr:before:rounded-none",
      "last:group-data-[last=true]/tr:before:rounded-none",
    ],
  };

  // ── Toolbar ───────────────────────────────────────────────────────────────────
  const [visibleMidSet, setVisibleMidSet] = React.useState(
    new Set(MID_COLS_INIT.map(c => c.uid))
  );

  const visibleMidCols = React.useMemo(
    () => midCols.filter(c => visibleMidSet.has(c.uid)),
    [midCols, visibleMidSet]
  );

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value)); setPage(1);
  }, []);
  const onSearchChange = React.useCallback((v) => {
    setFilterValue(v ?? ""); setPage(1);
  }, []);

  const topContent = (
    <div className="flex flex-col gap-4 mb-4">
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
              <Button endContent={<ChevronDownIcon className="text-small" />} size="sm" variant="flat">
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Status filter"
              closeOnSelect={false}
              selectedKeys={statusFilter}
              selectionMode="multiple"
              onSelectionChange={setStatusFilter}
            >
              {statusOptions.map(s => (
                <DropdownItem key={s.uid} className="capitalize">{capitalize(s.name)}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          {/* Column visibility only applies to scrollable middle columns */}
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button endContent={<ChevronDownIcon className="text-small" />} size="sm" variant="flat">
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Visible middle columns"
              closeOnSelect={false}
              selectedKeys={visibleMidSet}
              selectionMode="multiple"
              onSelectionChange={setVisibleMidSet}
            >
              {MID_COLS_INIT.map(c => (
                <DropdownItem key={c.uid} className="capitalize">{capitalize(c.label)}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <Button
            className="bg-foreground text-background"
            endContent={<PlusIcon size={18} />}
            size="sm"
          >
            Add New
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">Total {users.length} users</span>
        <label className="flex items-center text-default-400 text-small gap-1">
          Rows per page:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            onChange={onRowsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  );

  const bottomContent = (
    <div className="py-2 px-2 flex justify-between items-center mt-2">
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
        {selectedKeys === "all"
          ? "All items selected"
          : `${selectedKeys.size} of ${pageRows.length} selected`}
      </span>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        /* ── Resize handle ───────────────────────────────── */
        .ht-rh {
          position: absolute;
          top: 0; right: -4px;
          width: 8px; height: 100%;
          cursor: col-resize;
          z-index: 40;
          display: flex; align-items: center; justify-content: center;
        }
        .ht-rh::after {
          content: '';
          width: 3px; height: 60%;
          border-radius: 2px;
          background: hsl(var(--heroui-divider));
          transition: background 0.15s, height 0.15s;
          display: block;
        }
        .ht-rh:hover::after, .ht-rh:active::after {
          background: hsl(var(--heroui-primary)); height: 80%;
        }
        /* ── Drag grip (visible on th hover) ─────────────── */
        th:hover .ht-grip { opacity: 1 !important; }

        /* ── Zone layout ─────────────────────────────────── */
        .ht-zones {
          display: flex;
          align-items: stretch;
          border: 1px solid hsl(var(--heroui-divider));
          border-radius: 12px;
          overflow: hidden;           /* clip corners */
        }

        /* LEFT sticky zone — no scrollbar, no flex shrink */
        .ht-zone-left {
          flex: 0 0 auto;
          overflow: hidden;           /* NO horizontal scroll */
          border-right: 1px solid hsl(var(--heroui-divider));
          /* right-side shadow to visually separate from scrollable area */
          box-shadow: 4px 0 8px -2px rgba(0,0,0,0.10);
          z-index: 2;
        }

        /* MIDDLE scrollable zone — horizontal scroll ONLY here */
        .ht-zone-mid {
          flex: 1 1 auto;
          min-width: 0;
          overflow-x: auto;           /* ← THE scrollbar lives here */
          overflow-y: hidden;
        }
        .ht-zone-mid::-webkit-scrollbar { height: 6px; }
        .ht-zone-mid::-webkit-scrollbar-track  { background: hsl(var(--heroui-default-100)); }
        .ht-zone-mid::-webkit-scrollbar-thumb  { background: hsl(var(--heroui-default-300)); border-radius: 3px; }
        .ht-zone-mid::-webkit-scrollbar-thumb:hover { background: hsl(var(--heroui-default-400)); }

        /* RIGHT sticky zone — no scrollbar */
        .ht-zone-right {
          flex: 0 0 auto;
          overflow: hidden;           /* NO horizontal scroll */
          border-left: 1px solid hsl(var(--heroui-divider));
          box-shadow: -4px 0 8px -2px rgba(0,0,0,0.08);
          z-index: 2;
        }

        /* Tables inside zones: fixed layout, no wrapping */
        .ht-zone-left  table,
        .ht-zone-mid   table,
        .ht-zone-right table {
          border-collapse: separate !important;
          border-spacing: 0 !important;
          table-layout: fixed !important;
          /* each table is exactly as wide as its columns */
          width: max-content !important;
        }

        /* Middle zone table can expand beyond container (that's the point) */
        .ht-zone-mid table { min-width: 100%; }

        /* ── Cell borders: full grid on every th and td ─── */
        .ht-zone-left  table th,
        .ht-zone-mid   table th,
        .ht-zone-right table th {
          border-right:  1px solid hsl(var(--heroui-divider)) !important;
          border-bottom: 1px solid hsl(var(--heroui-divider)) !important;
        }
        .ht-zone-left  table td,
        .ht-zone-mid   table td,
        .ht-zone-right table td {
          border-right:  1px solid hsl(var(--heroui-divider)) !important;
          border-bottom: 1px solid hsl(var(--heroui-divider)) !important;
        }
        /* Remove duplicate right border on the last cell of each zone
           (the zone border itself already provides that edge) */
        .ht-zone-left  table th:last-child,
        .ht-zone-left  table td:last-child,
        .ht-zone-mid   table th:last-child,
        .ht-zone-mid   table td:last-child,
        .ht-zone-right table th:last-child,
        .ht-zone-right table td:last-child {
          border-right: none !important;
        }
        /* Remove bottom border on the very last row to avoid double border
           with the outer container edge */
        .ht-zone-left  table tbody tr:last-child td,
        .ht-zone-mid   table tbody tr:last-child td,
        .ht-zone-right table tbody tr:last-child td {
          border-bottom: none !important;
        }

        /* Sticky headers within each zone */
        .ht-zone-left  thead tr th,
        .ht-zone-mid   thead tr th,
        .ht-zone-right thead tr th {
          position: sticky !important;
          top: 0 !important;
          z-index: 10;
          background: hsl(var(--heroui-default-100)) !important;
          white-space: nowrap;
          overflow: visible !important;
        }

        /* Body cell backgrounds */
        .ht-zone-left  tbody tr td,
        .ht-zone-mid   tbody tr td,
        .ht-zone-right tbody tr td {
          background: hsl(var(--heroui-background));
        }

        /* Scrollbar gutter in right corner */
        .ht-zone-mid::-webkit-scrollbar-corner { background: hsl(var(--heroui-default-100)); }
      `}</style>

      {topContent}

      {/*
        ── 3-zone layout ──────────────────────────────────────────────────────
        LEFT zone   : HeroUI Table with selectionMode, LEFT_COLS
        MIDDLE zone : HeroUI Table (no selection), visible MID_COLS — scrolls horizontally
        RIGHT zone  : HeroUI Table (no selection), RIGHT_COLS (actions)
      */}
      <div className="ht-zones">

        {/* ── LEFT zone ── sticky, checkbox + name + role + status ─────── */}
        <div className="ht-zone-left" ref={leftRef}>
          <Table
            isCompact
            removeWrapper
            aria-label="Users table - sticky left columns"
            checkboxesProps={{
              classNames: { wrapper: "after:bg-foreground after:text-background text-background" },
            }}
            classNames={sharedClassNames}
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
          >
            <TableHeader>
              {LEFT_COLS.map(col => buildColumnHeader(col, { draggable: false }))}
            </TableHeader>
            <TableBody emptyContent="No users found" items={sorted}>
              {(item) => (
                <TableRow key={item.id}>
                  {LEFT_COLS.map(col => buildCell(item, col))}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* ── MIDDLE zone ── scrollable, team + age + email (reorderable) ─ */}
        <div className="ht-zone-mid" ref={midRef}>
          <Table
            isCompact
            removeWrapper
            aria-label="Users table - scrollable columns"
            classNames={sharedClassNames}
            sortDescriptor={sortDescriptor}
            onSortChange={setSortDescriptor}
          >
            <TableHeader>
              {visibleMidCols.map(col => buildColumnHeader(col, { draggable: true }))}
            </TableHeader>
            <TableBody emptyContent=" " items={sorted}>
              {(item) => (
                <TableRow key={item.id}>
                  {visibleMidCols.map(col => buildCell(item, col))}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* ── RIGHT zone ── sticky, actions ───────────────────────────── */}
        <div className="ht-zone-right" ref={rightRef}>
          <Table
            isCompact
            removeWrapper
            aria-label="Users table - sticky right columns"
            classNames={sharedClassNames}
          >
            <TableHeader>
              {RIGHT_COLS.map(col => buildColumnHeader(col, { draggable: false }))}
            </TableHeader>
            <TableBody emptyContent=" " items={sorted}>
              {(item) => (
                <TableRow key={item.id}>
                  {RIGHT_COLS.map(col => buildCell(item, col))}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

      </div>

      {bottomContent}

      <div style={{
        marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap",
        fontSize: 11, color: "hsl(var(--heroui-default-400))",
      }}>
        <span>⠿ Drag grip in TEAM/AGE/EMAIL headers to reorder middle columns</span>
        <span>↔ Drag right edge of any header to resize</span>
        <span>📌 Checkbox · Name · Role · Status pinned left &nbsp;·&nbsp; Actions pinned right</span>
        <span>↔ Scroll bar appears only under middle columns</span>
      </div>
    </>
  ); 
}