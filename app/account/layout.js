import SideNavigation from "../_components/SideNavigation";

export default function Layout({children}) {
    return (
        <div className="flex flex-col md:grid md:grid-cols-[16rem_1fr] h-full gap-4 md:gap-12">
            <SideNavigation />
            <div className="py-1">{children}</div>
        </div>
    )
}
