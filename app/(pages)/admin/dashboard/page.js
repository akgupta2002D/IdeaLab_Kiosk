/**
 * @file        dashboard/page.js
 * @description This file defines the DashboardPage component, which serves as the admin dashboard page. 
 *              It displays general page layout and statistics for the IdeaLab.
 *
 * @dependencies
 * - GeneralPageLayout: A layout component for wrapping the page content.
 * - StatsForIdeaLab: A component for displaying statistics related to the IdeaLab.
 *
 * @notes
 * - The `pageContent` array is currently a placeholder and can be extended with meaningful content.
 * - The `Stats` object contains hardcoded statistics and may need to be dynamically fetched in the future.
 */

import GeneralPageLayout from '../../../components/admin/GeneralPageLayout';
import StatsForIdeaLab from '../../../components/admin/StatsForIdeaLab';

export default function DashboardPage() {

    const pageContent = [
        {
          name: '',
          description: ''
        },
    ]

    const Stats = {
      staffCount: 15,
      printerCount: 8,
      projectsCompleted: 120,
      activeUsers: 45,
    };

  return (
    <GeneralPageLayout pageContent={pageContent}>
      <StatsForIdeaLab stats={Stats} />
    </GeneralPageLayout>
  );
}
