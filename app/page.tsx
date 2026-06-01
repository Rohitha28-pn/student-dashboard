import Sidebar from "../components/Sidebar";
import BentoGrid from "../components/BentoGrid";
import { supabase } from "@/lib/supabase";

export default async function Page() {
  const { data, error } = await supabase.from("courses").select("*");

  if (error) {
    return <p className="text-red-500">Error loading data</p>;
  }

  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />

      {/* IMPORTANT: flex-1 gives space */}
      <div className="flex-1">
        <BentoGrid courses={data || []} />
      </div>
    </div>
  );
}