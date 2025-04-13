// admin/dashboard/page.js
import Sidebar from './Sidebar';
import "./styles/GeneralPageLayout.css";

export default function GeneralPageLayout({pageContent, children}) {

  const {name, description} = pageContent[0]
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <h1>{name}</h1>
        <p>{description}</p>
        {children}
      </main>
    </div>
  );
}
