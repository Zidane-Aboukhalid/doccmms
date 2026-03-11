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
        // ── Meters ──────────────────────────────────────────────
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

        // ── Triggers ─────────────────────────────────────────────
        {
          type: 'category',
          label: 'Triggers',
          items: [
            { type: 'doc', id: 'maintenance/triggers/about' },
            { type: 'doc', id: 'maintenance/triggers/how-to-create-a-meter-trigger' },
            { type: 'doc', id: 'maintenance/triggers/how-to-duplicate-a-meter-trigger' },
            { type: 'doc', id: 'maintenance/triggers/how-to-edit-a-meter-trigger' },
            { type: 'doc', id: 'maintenance/triggers/how-to-delete-a-meter-trigger' },
            { type: 'doc', id: 'maintenance/triggers/how-to-create-a-time-trigger' },
            { type: 'doc', id: 'maintenance/triggers/how-to-duplicate-a-time-trigger' },
            { type: 'doc', id: 'maintenance/triggers/how-to-edit-a-time-trigger' },
            { type: 'doc', id: 'maintenance/triggers/how-to-delete-a-time-trigger' },
          ],
        },

        // ── Procedure Templates ──────────────────────────────────
        {
          type: 'category',
          label: 'Procedure Templates',
          items: [
            { type: 'doc', id: 'maintenance/procedure-templates/about' },
            { type: 'doc', id: 'maintenance/procedure-templates/how-to-create-a-procedure-template' },
            { type: 'doc', id: 'maintenance/procedure-templates/how-to-duplicate-a-procedure-template' },
            { type: 'doc', id: 'maintenance/procedure-templates/how-to-edit-a-procedure-template' },
            { type: 'doc', id: 'maintenance/procedure-templates/how-to-delete-a-procedure-template' },
          ],
        },

        // ── Work Orders ──────────────────────────────────────────
        {
          type: 'category',
          label: 'Work Orders',
          items: [
            { type: 'doc', id: 'maintenance/work-orders/about' },
            { type: 'doc', id: 'maintenance/work-orders/how-to-create-a-work-order' },
            { type: 'doc', id: 'maintenance/work-orders/how-to-duplicate-a-work-order' },
            { type: 'doc', id: 'maintenance/work-orders/how-to-edit-a-work-order' },
            { type: 'doc', id: 'maintenance/work-orders/how-to-delete-a-work-order' },
            { type: 'doc', id: 'maintenance/work-orders/how-to-change-work-order-status' },
            { type: 'doc', id: 'maintenance/work-orders/how-to-add-a-procedure-to-a-work-order' },
            { type: 'doc', id: 'maintenance/work-orders/how-to-add-parts-and-supplies' },
            { type: 'doc', id: 'maintenance/work-orders/how-to-log-additional-costs' },
          ],
        },

        // ── Work Requests ────────────────────────────────────────
        {
          type: 'category',
          label: 'Work Requests',
          items: [
            { type: 'doc', id: 'maintenance/work-requests/about' },
            { type: 'doc', id: 'maintenance/work-requests/how-to-create-a-work-request' },
            { type: 'doc', id: 'maintenance/work-requests/how-to-edit-a-work-request' },
            { type: 'doc', id: 'maintenance/work-requests/how-to-approve-a-work-request' },
            { type: 'doc', id: 'maintenance/work-requests/how-to-decline-a-work-request' },
            { type: 'doc', id: 'maintenance/work-requests/how-to-delete-a-work-request' },
          ],
        },

        // ── Regular Maintenance ──────────────────────────────────
        {
          type: 'category',
          label: 'Regular Maintenance (PM)',
          items: [
            { type: 'doc', id: 'maintenance/regular-maintenance/about' },
            { type: 'doc', id: 'maintenance/regular-maintenance/how-to-create-a-pm-schedule' },
            { type: 'doc', id: 'maintenance/regular-maintenance/how-to-edit-a-pm-schedule' },
            { type: 'doc', id: 'maintenance/regular-maintenance/how-to-delete-a-pm-schedule' },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
