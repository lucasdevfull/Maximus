import { Outlet } from "react-router-dom";
//import Sidebar from "../components/partials/Sidebar";
export function DefaultLayout() {
    return(
        
            <div className="container">
                <main className="min-h-screen">
                    {/* Isso será o Feed ou qualquer outro componente chamado dentro do Route do DefaultLayout em Router.tsx */}
                    <Outlet />
                </main>
            </div>
    )
}