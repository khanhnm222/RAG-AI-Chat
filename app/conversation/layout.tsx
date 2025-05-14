import MainLayout from "@/layouts/MainLayout/MainLayout";

const ConversationLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <MainLayout>{children}</MainLayout>
};
export default ConversationLayout