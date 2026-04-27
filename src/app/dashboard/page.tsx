import { AppShell } from "@/components/AppShell";import { Card } from "@/components/Card";
const metrics=[['Total outlets','3'],['Total models','3'],['Harvesting sessions','0'],['Practices harvested','0'],['Pending review','0']];
export default function DashboardPage(){return <AppShell title="Client workspace dashboard"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{metrics.map(([label,value])=><Card key={label}><div className="text-sm text-slate-500">{label}</div><div className="mt-2 text-3xl font-bold text-brand">{value}</div></Card>)}</div></AppShell>}
