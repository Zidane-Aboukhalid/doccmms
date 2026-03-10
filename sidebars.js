/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'About UniCMMS',
    },
    {
      type: 'category',
      label: 'Maintenance',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Meters',
          items: [
            { type: 'doc', id: 'maintenance/meters/about' },
            { type: 'doc', id: 'maintenance/meters/how-to-create-a-meter' },
            { type: 'doc', id: 'maintenance/meters/how-to-duplicate-a-meter' },
            { type: 'doc', id: 'maintenance/meters/how-to-update-a-meter' },
            { type: 'doc', id: 'maintenance/meters/how-to-delete-a-meter' },
            { type: 'doc', id: 'maintenance/meters/how-to-record-a-meter-reading' },
            { type: 'doc', id: 'maintenance/meters/how-to-allow-backdated-meter-history-editing' },
          ],
        },
        {
          type: 'doc',
          id: 'maintenance/triggers',
          label: 'Triggers',
        },
        {
          type: 'doc',
          id: 'maintenance/procedure-templates',
          label: 'Procedure Templates',
        },
        {
          type: 'doc',
          id: 'maintenance/work-orders',
          label: 'Work Orders',
        },
        {
          type: 'doc',
          id: 'maintenance/work-requests',
          label: 'Work Requests',
        },
        {
          type: 'doc',
          id: 'maintenance/regular-maintenance',
          label: 'Regular Maintenance (PM)',
        },
      ],
    },
  ],
};

module.exports = sidebars;
