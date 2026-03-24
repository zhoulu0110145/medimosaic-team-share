import {
  FileUp,
  LayoutDashboard,
  NotebookPen,
  Send,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import { useAppMode } from "../app/useAppMode";

const items: Array<{ to: string; label: string; icon: LucideIcon }> = [
  { to: "/dashboard", label: "Home", icon: LayoutDashboard },
  { to: "/upload", label: "Upload", icon: FileUp },
  { to: "/timeline", label: "Timeline", icon: Workflow },
  { to: "/notes", label: "Notes", icon: NotebookPen },
  { to: "/share", label: "Share", icon: Send },
];

export const BottomNav = () => {
  const { to } = useAppMode();

  return (
    <nav className="absolute inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 px-2 pb-[calc(env(safe-area-inset-bottom)+0.55rem)] pt-2 backdrop-blur">
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-semibold transition ${
                isActive ? "bg-primary-50 text-primary-800" : "text-slate-500 hover:bg-slate-50"
              }`
            }
            key={item.to}
            to={to(item.to)}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
