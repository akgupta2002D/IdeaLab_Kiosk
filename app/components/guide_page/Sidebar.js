import React from 'react';
import styles from './styles/Sidebar.module.css';

const Sidebar = ({ machines, onSelect, selectedMachine }) => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.machineList}>
        {machines.map((machine) => (
          <li
            key={machine.id}
            className={`${styles.machineItem} ${selectedMachine.id === machine.id ? styles.active : ''}`}
            onClick={() => onSelect(machine.id)}
          >
            <img src={machine.avatar} alt={machine.name} className={styles.avatar} />
            <span>{machine.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
