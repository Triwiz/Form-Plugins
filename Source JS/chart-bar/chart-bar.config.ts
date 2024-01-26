import { type PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
	controlName: '__pluginControlName__',
	groupName: '__pluginGroupName__',
	fallbackDisableSubmit: false,
	description: 'Creates a Bar chart',
	version: '1.0',
	properties: {
		chartData: {
			type: 'string',
			title: 'Data Array',
		},
		backgroundColor: {
			type: 'string',
			title: 'Background Color in comma separated format',
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
