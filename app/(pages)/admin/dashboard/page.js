// admin/dashboard/page.js
import GeneralPageLayout from '../../../components/admin/GeneralPageLayout';
// import "../../../components/admin/styles/AdminPage.css";

export default function DashboardPage() {

    const pageContent = [
        {
          name: 'Dashboard',
          description: 'This is an overview page for the usage and changes of Idealab Kiosk.'
        },
    ]
  return (
    <GeneralPageLayout pageContent={pageContent}/>
  );
}
