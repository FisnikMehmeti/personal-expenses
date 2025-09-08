import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DropDownAvatar from "./DropDownAvatar";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200 shadow-sm rounded-xl m-4 mb-0">
      <div className="text-2xl font-bold text-slate-800 tracking-tight">
        Hi, Fisnik!
        <p className="text-sm text-slate-600 font-medium">Welcome back, manage your finances effortlessly</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-3 pr-10 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 bg-slate-50 text-slate-700"
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
          <DropDownAvatar/>
      </div>
    </div>
  );
};

export default Header;
