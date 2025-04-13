'use client';
import GeneralPageLayout from '../../../components/admin/GeneralPageLayout';
import {useEffect, React} from 'react';


export default function StaffPage() {

    

    const pageContent = [
        {
          name: 'Staff Management',
          description: 'This page allows administrators to manage staff members, including adding, editing, and removing staff.'
        },
    ]
  return (
    <>
    <GeneralPageLayout pageContent={pageContent}/>
    
    </>

  );
}
