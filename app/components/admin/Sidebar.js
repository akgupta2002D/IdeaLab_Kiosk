import SidebarButton from './SidebarButton';
import './styles/Sidebar.css';

const Sidebar = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Staff', href: '/admin/staff_management' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="sidebar">
        <h2>IdeaKiosk Admin</h2>
      <ul>
        {links.map((link, index) => (
          <SidebarButton key={index} href={link.href} label={link.label} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
