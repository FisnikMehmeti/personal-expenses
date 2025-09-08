import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, CreditCard, Wallet, PieChart } from "lucide-react";
import { ChartLineInteractive } from "../../components/shared/ChartLineInteractive";
import { ChartPieSimple } from "../../components/shared/ChartPieSimple";

const Dashboard = () => {
  return (
    <div className="p-8 bg-slate-50 min-h-screen text-slate-900">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white border-slate-200 rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-700 text-lg">
              Total Balance
            </CardTitle>
            <TrendingUp className="w-6 h-6 text-slate-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,450</div>
            <p className="text-xs text-slate-500 mt-1">This month</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-slate-200 rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-700 text-lg">
              Monthly Expenses
            </CardTitle>
            <CreditCard className="w-6 h-6 text-slate-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,354</div>
            <p className="text-xs text-slate-500 mt-1">This month</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-slate-200 rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-700 text-lg">Upcoming Bills</CardTitle>
            <Wallet className="w-6 h-6 text-slate-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,900</div>
            <p className="text-xs text-slate-500 mt-1">Balance</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-slate-200 rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-700 text-lg">
              Savning Progress
            </CardTitle>
            <PieChart className="w-6 h-6 text-slate-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32%</div>
            <p className="text-xs text-slate-500 mt-1">Of monthly budget</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartLineInteractive/>
        <ChartPieSimple/>
      </div>
    </div>
  );
};

export default Dashboard;
