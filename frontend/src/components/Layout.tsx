// import Header from "./Header";

import NavBar from "./NavBar";

interface LayoutProps {
    title?: string;
    children: React.ReactNode;
}

function Layout({ title, children }: LayoutProps) {

    title = title || "Track Deals!";
    
    return (
        <>
            {/* <Header title={title} /> */}
            <NavBar />
            <div className="container max-w-5xl mx-auto my-5">
                {children}
            </div>
        </>
    );
}

export default Layout;