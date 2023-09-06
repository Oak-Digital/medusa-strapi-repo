import pluginId from "../../../admin/src/pluginId";

export default {
  kind: 'collectionType',
  collectionName: 'payment_providers',
  info: {
    singularName: 'payment-provider',
    pluralName: 'payment-providers',
    displayName: 'Payment Provider',
    description: '',
  },
  options: {
    increments: true,
    timestamps: true,
    draftAndPublish: true,
    comment: '',
  },
  pluginOptions: {
    versions: {
      versioned: true,
    },
  },
  attributes: {
    medusa_id: {
      type: 'uid',
    },
    is_installed: {
      type: 'boolean',
      default: true,
      required: true,
    },
    regions: {
      type: 'relation',
      relation: 'oneToMany',
      target: `plugin::${pluginId}.region`,
      mappedBy: 'payment-provider',
    },
  },
};
