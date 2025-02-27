"use client";

import ActiveStaffDisplay from "../staff_display/ActiveStaffDisplay";
import TitleBanner from "./TitleBanner";
import { useShiftWorkers } from "../../hooks/useShiftWorkers";
import styles from "./styles/TopBar.module.css";

const TopBar = () => {
  const shiftWorkers = useShiftWorkers();

  return (
    <div className={styles.topBar}>
      {/* Left Section - Title and Tagline */}
      <TitleBanner />

      {/* Right Section - Active Staff Display */}
      <ActiveStaffDisplay shiftWorkers={shiftWorkers} />
    </div>
  );
};

export default TopBar;