/* eslint-disable no-new */
/* eslint-disable import/no-extraneous-dependencies */
import { type PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Chart, registerables } from 'chart.js';
import { config } from './chart-line.config';
import { styles } from './chart-line.styles';

@customElement('plugin-elementname')
export class LineChart extends LitElement {
	static getMetaConfig = (): Promise<PluginContract> => Promise.resolve(config);

	static override styles = styles;

	@property({ type: String })
	declare chartData: string;

	@property({ type: String })
	declare datasetlabel: string;

	@property({ type: Boolean })
	declare displayLegend: boolean;

	private chartContainer?: HTMLCanvasElement;

	private chartInstance?: Chart<'line', number[], unknown>;

	override updated(changedProperties: Map<keyof this, unknown>): void {
		super.updated(changedProperties);

		if (changedProperties.has('chartData')) {
			this.updateChart();
		}
	}

	private updateChart() {
		const legendDisplay =
			this.displayLegend !== undefined ? this.displayLegend : true;
		console.log(legendDisplay);
		const data = this.parseChartData();
		if (!data || data.length === 0) {
			return;
		}

		// Clear existing chart
		if (this.chartInstance) {
			this.chartInstance.destroy();
		}

		// Create a canvas element for the chart
		this.chartContainer = document.createElement('canvas');
		this.shadowRoot?.appendChild(this.chartContainer);

		// Initialize Chart.js if not already done
		if (!this.chartInstance) {
			Chart.register(...registerables);
			this.chartInstance = new Chart<'line', number[], unknown>(
				this.chartContainer.getContext('2d') as CanvasRenderingContext2D,
				{
					type: 'line',
					data: {
						labels: data.map((item) => item.label),
						datasets: [
							{
								label: this.datasetlabel,
								data: data.map((item) => item.value),
								fill: false,
							},
						],
					},
					options: {
						plugins: {
							legend: {
								display: legendDisplay,
							},
						},
					}, // Add any additional options here
				}
			);
		} else {
			// Update the chart data
			this.chartInstance.data.labels = data.map((item) => item.label);
			this.chartInstance.data.datasets = [
				{
					label: this.datasetlabel,
					data: data.map((item) => item.value),
					fill: false,
				},
			];
			this.chartInstance.update();
		}
	}

	private parseChartData(): { label: string; value: number }[] | null {
		let data;
		try {
			data = JSON.parse(this.chartData);
		} catch (error) {
			console.error('Error parsing JSON:', error);
			return null;
		}

		if (!Array.isArray(data) || data.length === 0) {
			return null;
		}

		// Assuming your JSON has a structure like [{ label: 'A', value: 10 }, { label: 'B', value: 20 }, ...]
		return data;
	}

	override render() {
		return html``;
	}
}
