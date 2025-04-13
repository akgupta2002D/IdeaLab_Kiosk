// components/SidebarButton.jsx
import Link from 'next/link';
import "./styles/SidebarButton.css"
const SidebarButton = ({ href, label }) => {
  return (
    <li className="sidebar-button">
      <Link href={href}>
        <p>{label}</p>
      </Link>
    </li>
  );
};

export default SidebarButton;
