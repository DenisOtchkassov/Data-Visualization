# Data Visualization Dashboard


This is a simple data visualization web application that allows users to upload CSV files and get basic charts for their data.


## Features

- Upload and parse CSV files directly in the browser
- View data in a paginated table format
- Apply filters to focus on specific data points
- View statistical analysis (mean, median, sum, etc.)
- Generate different chart types:
  - Bar charts
  - Line charts
  - Pie charts
  - Scatter plots
  - Polar area charts
- Dark/light theme toggle
- Collapsible sections for a cleaner interface
- Sample dataset included for testing

## How to Use
1. Simply open the `standalone.html` file in your browser
2. Upload a CSV file or use the sample data
3. Explore your data through:
   - Scrollable data tables with pagination
   - Statistical analysis of numeric columns
   - Filtering capabilities to focus on specific data
   - Interactive chart generation

## Advanced Features

### Data Filtering
- Filter by exact match, contains, greater than, or less than
- Apply multiple filters simultaneously
- See count of filtered vs. total rows

### Statistics
- View key metrics for any numeric column
- Includes count, sum, mean, median, min, max, and standard deviation

### Visualization
- Select different chart types based on your data
- Configure X and Y axes
- Charts automatically update when data is filtered

## Technical Details

This application uses:
- PapaParse for CSV parsing
- Chart.js for visualization
- Pure JavaScript for all data processing
- CSS for styling and dark/light theme support

