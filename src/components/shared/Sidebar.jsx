import { NavLink } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Bell, HelpCircle, Settings, Bitcoin, Coins, Wallet, CreditCard, LayoutDashboard, Newspaper, ChartSpline, NotepadText, ChartNoAxesColumnIncreasing } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-screen justify-between bg-white border-r border-slate-200 shadow-sm rounded-xl m-4 mr-0 w-94">
      <nav className="py-8 px-6">
        <div className="mb-8 flex flex-row items-center justify-center">
          <Bitcoin className="w-15 h-14 text-amber-500" />
          <span className="text-2xl font-bold text-slate-700 tracking-wide">
            financesApp
          </span>
        </div>
        <ul className="space-y-2">
          <li>
<NavLink
  to="/dashboard"
  end
              className={({ isActive }) =>
                `flex px-3 py-2 rounded-lg transition-colors cursor-pointer font-medium flex-row items-center justify-betwen gap-4 ${
                  isActive
                    ? "bg-teal-50 text-slate-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
>
<LayoutDashboard />  Dashboard
</NavLink>
          </li>
          <li>
            <NavLink
              to="/spending-insight"
              className={({ isActive }) =>
                `flex px-3 py-2 rounded-lg transition-colors cursor-pointer font-medium flex-row items-center justify-betwen gap-4 ${
                  isActive
                    ? "bg-teal-50 text-slate-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
             <ChartSpline /> Spending Insight
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `flex px-3 py-2 rounded-lg transition-colors cursor-pointer font-medium flex-row items-center justify-betwen gap-4 ${
                  isActive
                    ? "bg-teal-50 text-slate-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
             <NotepadText /> Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex px-3 py-2 rounded-lg transition-colors cursor-pointer font-medium flex-row items-center justify-betwen gap-4 ${
                  isActive
                    ? "bg-teal-50 text-slate-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
           <ChartNoAxesColumnIncreasing />   Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bills"
              className={({ isActive }) =>
                `flex px-3 py-2 rounded-lg transition-colors cursor-pointer font-medium flex-row items-center justify-betwen gap-4 ${
                  isActive
                    ? "bg-teal-50 text-slate-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
            <CreditCard />  Bills & Subscriptions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/budget"
              className={({ isActive }) =>
                `flex px-3 py-2 rounded-lg transition-colors cursor-pointer font-medium flex-row items-center justify-betwen gap-4 ${
                  isActive
                    ? "bg-teal-50 text-slate-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
            <Coins />  Budget & Goal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wallets"
              className={({ isActive }) =>
                `flex px-3 py-2 rounded-lg transition-colors cursor-pointer font-medium flex-row items-center justify-betwen gap-4 ${
                  isActive
                    ? "bg-teal-50 text-slate-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
            <Wallet />  Wallets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `flex px-3 py-2 rounded-lg transition-colors cursor-pointer font-medium flex-row items-center justify-betwen gap-4 ${
                  isActive
                    ? "bg-teal-50 text-slate-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
            <Newspaper />  Reports
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="px-6 pb-8">
        <Separator className="mb-4 bg-slate-200" />
        <ul className="space-y-2 text-slate-600">
          <li className="flex items-center gap-2 hover:text-slate-800 cursor-pointer rounded-lg px-2 py-1 transition-colors">
            <Bell className="w-4 h-4" /> Notifications
          </li>
          <li className="flex items-center gap-2 hover:text-slate-800 cursor-pointer rounded-lg px-2 py-1 transition-colors">
            <HelpCircle className="w-4 h-4" /> Help
          </li>
          <li className="flex items-center gap-2 hover:text-slate-800 cursor-pointer rounded-lg px-2 py-1 transition-colors">
            <Settings className="w-4 h-4" /> Settings
          </li>
        </ul>
      </div>
    </aside>
  );
}
