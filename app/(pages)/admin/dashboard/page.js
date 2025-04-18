// admin/dashboard/page.js
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
