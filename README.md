#  Chart - Pie, Bar & Line
#  Element Name: chart-pie,chart-bar,chart-line respectively

- Version 1.0

The Form Plugins facilitates the rendering of charts. Within the package, both minified and source JS files are included. You can use the minified JS directly in your production. If you intend to modify the source code, please refer to the files in the "Source JS" folder. The file "chart-48d074a4.js" is essential for rendering any chart, so ensure it is placed in the same folder.

In Nintex Automation Cloud, depending on your requirements, you can upload all of either  of the three JS files: "chart-pie.js," "chart-bar.js," or "chart-line.js."

The plugins accept the following parameters:

chart-pie.js:
a. Data Array: Input data for chart rendering. An example of the array is:

[{ "label": "Category A", "value": 30 },
{ "label": "Category B", "value": 50 },
{ "label": "Category C", "value": 20 }]
A reference screenshot of this array is attached in the folder.

b. Background Color (comma-separated format): Color palette. An example input is:
#0a417a, #8464a0, #cea9bc, #2085ec

c. Display Legend: Specify whether you want to show the legend in the chart.

chart-bar.js:
a. Data Array: Input data for chart rendering. An example of the array is:

[{"label": "A", "value": 10},
{"label": "B", "value": 20},
{"label": "C", "value": 3},
{"label": "D", "value": 8}]
b. Background Color (comma-separated format): Color palette. An example input is:
#0a417a, #8464a0, #cea9bc, #2085ec

chart-line.js:
a. Data Array: Input data for chart rendering. An example of the array is:

[{"label": "A", "value": 10},
{"label": "B", "value": 20},
{"label": "C", "value": 3},
{"label": "D", "value": 8}]
b. Display Legend: Specify whether you want to show the legend in the chart.

c. Dataset Label: Name for the rendered dataset.