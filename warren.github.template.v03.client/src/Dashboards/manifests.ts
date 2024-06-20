import { ManifestDashboard } from "@umbraco-cms/backoffice/extension-registry";

const dashboard: ManifestDashboard = {
    alias: 'dashboard.dean',
    type: 'dashboard',
    name: 'Dean Dashboard',
    meta: {
        label: 'Dashboard for Dean',
        pathname: '/dashboard-dean',
    },
    js: () => import('./dashboard.chart.element.js'),
    conditions: [
        {
          "alias": "Umb.Condition.SectionAlias",
          "match": "Umb.Section.Content"
        }
    ]
    
}
export const manifests = [dashboard];