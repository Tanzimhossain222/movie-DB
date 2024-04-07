import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { getDictionary } from "./dictionaries";

export const metadata = {
    title: "Cine Rental",
    description: "Cine Rental is a platform for renting movies.",
};

export default async function MovieLayout({ children, params: { lang } }) {
    const dictionary = await getDictionary(lang);

    return (
        <>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    {children}
                </div>
                
            </main>
        </>
    );
}
