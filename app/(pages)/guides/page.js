
/**
 * @file        guides/page.js
 * @description This file defines the GuidePage component, which serves as the main interface for displaying machine guides.
 * It includes a sidebar for selecting machines and a content area for displaying the selected machine's guide.
 *
 * @dependencies
 * - React (useState, custom hooks)
 * - useMachineGuide (custom hook for managing machine guide state)
 * - Sidebar (component for displaying the list of machines)
 * - GuideContent (component for displaying the guide of the selected machine)
 * - BackButton (component for navigating back to the previous page)
 * - TopBar (component for displaying the top navigation bar)
 * - CSS styles (GuidePage.module.css)
 *
 * @notes
 * - The `useMachineGuide` hook provides the list of machines, the currently selected machine, and a function to select a machine.
 * - The layout includes a back button, a title, a sidebar, and a content area for the guide.
 * - The TopBar component is included at the bottom of the page for additional navigation or branding.
 */

"use client"
import { useMachineGuide } from '../../hooks/useMachineGuide';
import Sidebar from '../../components/guide_page/Sidebar';
import GuideContent from '../../components/guide_page/GuideContent';
import styles from '../../components/guide_page/styles/GuidePage.module.css';
import BackButton from '@/app/components/general/BackButton';
import TopBar from '@/app/components/homepage/TopBar';

export default function GuidePage() {
  const { machines, selectedMachine, selectMachine } = useMachineGuide();

  return (
    <>
    <BackButton />
    <div className={styles.container}>
      <h1 className={styles.title}>Machine Guides</h1>
      <div className={styles.content}>
        <Sidebar 
          machines={machines} 
          onSelect={selectMachine} 
          selectedMachine={selectedMachine} 
        />
        <GuideContent machine={selectedMachine} />
      </div>
    </div>
    <TopBar />
    </>
  );
}
