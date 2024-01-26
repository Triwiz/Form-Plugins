/* eslint-disable no-new */
/* eslint-disable import/no-extraneous-dependencies */
import { type PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Chart, registerables } from 'chart.js';
import { config } from './chart-bar.config';
import { styles } from './chart-bar.styles';

@customElement('plugin-elementname')
export class BarChart extends LitElement {
	static getMetaConfig = (): Promise<PluginContract> | PluginContract => config;

	static override styles = styles;

	@property({ type: String })
	declare chartData: string;

	@property({ type: String })
	declare backgroundColor: string;

	@property({ type: String })
	declare datasetLabel: string;

	private chartContainer?: HTMLCanvasElement;

	private chartInstance?: Chart<'bar', number[], unknown>;

	override updated(changedProperties: Map<keyof this, unknown>): void {
		super.updated(changedProperties);

		if (
			changedProperties.has('chartData') ||
			changedProperties.has('backgroundColor')
		) {
			this.updateChart();
		}
	}

	private updateChart() {
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
			this.chartInstance = new Chart<'bar', number[], unknown>(
				this.chartContainer.getContext('2d') as CanvasRenderingContext2D,
				{
					type: 'bar',
					data: {
						labels: data.map((item) => item.label),
						datasets: [
							{
								label: 'Dataset Label', // Adjust this label
								data: data.map((item) => item.value),
								backgroundColor: this.backgroundColor
									? this.getCustomColors(data.length)
									: this.getDefaultColors(data.length),
								borderColor: this.backgroundColor
									? this.getCustomColors(data.length)
									: this.getDefaultColors(data.length),
								borderWidth: 1,
							},
						],
					},
					options: {
						plugins: {
							legend: {
								display: false,
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
					label: this.datasetLabel,
					data: data.map((item) => item.value),
					backgroundColor: this.backgroundColor
						? this.getCustomColors(data.length)
						: this.getDefaultColors(data.length),
					borderColor: this.backgroundColor
						? this.getCustomColors(data.length)
						: this.getDefaultColors(data.length),
					borderWidth: 1,
				},
			];
			this.chartInstance.update();
		}
	}

	// eslint-disable-next-line class-methods-use-this
	private getDefaultColors(count: number): string[] {
		// You can customize this array with your default colors
		const defaultColors = ['#FF0000', '#00FF00', '#FFFF00', '#0000FF'];
		// Repeat the default colors if there are more data points than colors
		return Array.from(
			{ length: count },
			(_, index) => defaultColors[index % defaultColors.length]
		);
	}

	private getCustomColors(count: number): string[] {
		const temp = this.backgroundColor;
		const defaultColors = temp.split(',').map((color) => color.trim());
		// Repeat the default colors if there are more data points than colors
		return Array.from(
			{ length: count },
			(_, index) => defaultColors[index % defaultColors.length]
		);
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
