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
