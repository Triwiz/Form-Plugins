import { type PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
	controlName: '__pluginControlName__',
	groupName: '__pluginGroupName__',
	fallbackDisableSubmit: false,
	description: 'Hello World',
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
		displayLegend: {
			type: 'boolean',
			title: 'Display Legend',
		},
	},
	standardProperties: {
		fieldLabel: false,
		description: false,
		defaultValue: false,
		readOnly: false,
	},
};
