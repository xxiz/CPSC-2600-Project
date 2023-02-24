import "../index.css";
import { Outlet } from "react-router-dom";

// import NavBar from "@/components/navigation/NavBar";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILayoutComponentProps { }

function Layout(props: ILayoutComponentProps) {
    return (
        <div>
          NavBar
            {/* <NavBar
        links={[
          {
            label: "Standings",
            link: "/standings",
          },
          {
            label: "Login",
            link: "/auth/login",
          },
        ]}
      /> */}

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
};

export default Layout;