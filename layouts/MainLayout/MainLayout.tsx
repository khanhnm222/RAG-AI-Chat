import NavigationBar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavigationBar />
      <Sidebar />
      {children}
    </>
  );
};
export default MainLayout;