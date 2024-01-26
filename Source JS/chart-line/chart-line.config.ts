import { type PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
	controlName: '__pluginControlName__',
	groupName: '__pluginGroupName__',
	fallbackDisableSubmit: false,
	description: 'Creates a lines chart',
	version: '1.0',
	properties: {
		chartData: {
			type: 'string',
			title: 'Data Array',
		},
		displayLegend: {
			type: 'boolean',
			title: 'Display Legend',
		},
		datasetlabel: {
			type: 'string',
			title: 'Dataset Label',
		},
	},
	events: ['ntx-value-change'],
	standardProperties: {
		fieldLabel: true,
		description: true,
		defaultValue: true,
		readOnly: true,
		visibility: true,
	},
};
