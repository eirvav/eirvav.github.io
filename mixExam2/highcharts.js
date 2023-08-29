//Graphs for the "Statistics" modal. Not including the Graduation Rate graph because it has % values

//All of this is HighCharts, I used "https://www.highcharts.com/docs/getting-started/your-first-chart" to get started, and then I used
//this  URL to set up the range selector "https://www.highcharts.com/docs/stock/range-selector"
document.addEventListener("DOMContentLoaded", function () {
  // Function to create a chart with provided data and container ID
  function createChart(containerId, chartData) {
    const seriesData = Object.entries(chartData).map(([name, values]) => {
      const years = [2017, 2018, 2019, 2020, 2021, 2022];
      return {
        name: name,
        data: years.map((year, index) => [Date.UTC(year, 0), values[index]]),
      };
    });
    // This is to setup how the chart looks
    Highcharts.stockChart(containerId, {
      chart: {
        type: "line",
      },

      xAxis: {
        type: "datetime",
        min: Date.UTC(2019, 0),
        max: Date.UTC(2022, 0),
      },

      yAxis: {
        title: {
          text: "Values",
        },
      },

      legend: {
        enabled: true,
      },

      rangeSelector: {
        enabled: true,
        inputEnabled: true,
        inputDateFormat: "%Y",
        inputEditDateFormat: "%Y",
        inputDateParser: function (value) {
          return Date.UTC(parseInt(value), 0);
        },
        allButtonsEnabled: true,
        buttons: [
          {
            type: "year",
            count: 1,
            text: "1y",
          },
          {
            type: "year",
            count: 2,
            text: "2y",
          },
          {
            type: "year",
            count: 3,
            text: "3y",
          },
          {
            type: "year",
            count: 4,
            text: "4y",
          },
          {
            type: "year",
            count: 5,
            text: "5y",
          },
        ],
        buttonTheme: {
          width: 60,
        },
        selected: undefined,
      },

      series: seriesData,

      exporting: {
        enabled: true,
      },
    });
  }

  // First chart data
  const data1 = {
    IXD: [245, 1500, 245, 1500, 245, 1500],
    LAW: [2000, 2000, 2000, 2000, 2000, 2000],
    CS101: [120, 500, 500, 120, 500, 500],
  };

  // Second chart data
  const data2 = {
    IXD: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5],
    LAW: [3.8, 3.8, 3.8, 3.8, 3.8, 3.8],
    CS101: [3.5, 3.0, 3.5, 3.0, 3.5, 3.0],
  };

  // Third chart data
  const data3 = {
    IXD: [70000, 70000, 70000, 70000, 70000, 70000],
    LAW: [50000, 50000, 50000, 50000, 50000, 50000],
    CS101: [60000, 80000, 70000, 60000, 80000, 70000],
  };

  // Fourth chart data
  const data4 = {
    IXD: [50, 60, 50, 60, 50, 60],
    LAW: [500, 500, 500, 500, 500, 500],
    CS101: [100, 100, 100, 100, 100, 100],
  };

  // Create the charts
  createChart("applicantsGraph", data1);
  createChart("GPAGraph", data2);
  createChart("salaryGraph", data3);
  createChart("studyPlacesGraph", data4);
});

// Statistics graph with percentage
document.addEventListener("DOMContentLoaded", function () {
  // Function to create a chart with provided data and container ID
  function createChart(containerId, chartData, chartType) {
    const seriesData = Object.entries(chartData).map(([name, values]) => {
      const years = [2017, 2018, 2019, 2020, 2021, 2022];
      return {
        name: name,
        data: years.map((year, index) => [Date.UTC(year, 0), values[index]]),
      };
    });
    // This is to setup how the chart looks
    const chart = Highcharts.stockChart(containerId, {
      chart: {
        type: chartType,
      },

      xAxis: {
        type: "datetime",
        min: Date.UTC(2019, 0),
        max: Date.UTC(2022, 0),
      },

      yAxis: {
        title: {
          text: "Values (%)",
        },
        labels: {
          formatter: function () {
            return this.value + "%";
          },
        },
        tickInterval: 20,
        min: 0,
        max: 100,
      },

      legend: {
        enabled: true,
      },

      rangeSelector: {
        enabled: true,
        inputEnabled: true,
        inputDateFormat: "%Y",
        inputEditDateFormat: "%Y",
        inputDateParser: function (value) {
          return Date.UTC(parseInt(value), 0);
        },
        allButtonsEnabled: true,
        buttons: [
          {
            type: "year",
            count: 1,
            text: "1y",
          },
          {
            type: "year",
            count: 2,
            text: "2y",
          },
          {
            type: "year",
            count: 3,
            text: "3y",
          },
          {
            type: "year",
            count: 4,
            text: "4y",
          },
          {
            type: "year",
            count: 5,
            text: "5y",
          },
        ],
        buttonTheme: {
          width: 60,
        },
        selected: undefined,
      },

      series: seriesData,

      exporting: {
        enabled: true,
      },
    });

    return chart;
  }

  // Percentage chart data
  const percentageData = {
    IXD: [80, 85, 80, 85, 80, 85],
    LAW: [90, 90, 90, 90, 90, 90],
    CS101: [80, 80, 80, 80, 80, 80],
  };

  // Create the percentage column chart
  const percentageChart = createChart(
    "gradRateGraph",
    percentageData,
    "column"
  );
});

//Graphs for the "Students Answer" modal
document.addEventListener("DOMContentLoaded", function () {
  // Function to create a chart with provided data and container ID
  function createChart(containerId, chartData, chartType) {
    const seriesData = Object.entries(chartData).map(([name, values]) => {
      const years = [2017, 2018, 2019, 2020, 2021, 2022];
      return {
        name: name,
        data: years.map((year, index) => [Date.UTC(year, 0), values[index]]),
      };
    });
    // This is to setup how the chart looks
    const chart = Highcharts.stockChart(containerId, {
      chart: {
        type: chartType,
      },

      xAxis: {
        type: "datetime",
        min: Date.UTC(2019, 0),
        max: Date.UTC(2022, 0),
      },

      yAxis: {
        title: {
          text: "1-5",
        },
        labels: {
          formatter: function () {
            return this.value;
          },
        },
        tickInterval: 1,
        min: 1,
        max: 5,
      },

      legend: {
        enabled: true,
      },

      rangeSelector: {
        enabled: true,
        inputEnabled: true,
        inputDateFormat: "%Y",
        inputEditDateFormat: "%Y",
        inputDateParser: function (value) {
          return Date.UTC(parseInt(value), 0);
        },
        allButtonsEnabled: true,
        buttons: [
          {
            type: "year",
            count: 1,
            text: "1y",
          },
          {
            type: "year",
            count: 2,
            text: "2y",
          },
          {
            type: "year",
            count: 3,
            text: "3y",
          },
          {
            type: "year",
            count: 4,
            text: "4y",
          },
          {
            type: "year",
            count: 5,
            text: "5y",
          },
        ],
        buttonTheme: {
          width: 60,
        },
        selected: undefined,
      },

      series: seriesData,

      exporting: {
        enabled: true,
      },
    });

    return chart;
  }

  //Value Data
  const valueData = {
    IXD: [5, 4, 5, 4, 5, 4],
    LAW: [5, 5, 5, 5, 5, 5],
    CS101: [4, 5, 4, 5, 4, 5],
  };
  const valueEndData = {
    IXD: [5, 4.5, 5, 4.5, 5, 4.5],
    LAW: [4, 4, 4, 4, 4, 4],
    CS101: [5, 5, 5, 5, 5, 5],
  };
  const valueAfterData = {
    IXD: [5, 5, 5, 5, 5, 5],
    LAW: [5, 5, 5, 5, 5, 5],
    CS101: [5, 5, 5, 5, 5, 5],
  };

  //Difficulty Data
  const difficultyData = {
    IXD: [5, 4, 5, 4, 5, 4],
    LAW: [5, 5, 5, 5, 5, 5],
    CS101: [4, 5, 4, 5, 4, 5],
  };

  const difficultyEndData = {
    IXD: [4, 4, 4, 4, 4, 4],
    LAW: [4, 4, 4, 4, 4, 4],
    CS101: [4, 4, 4, 4, 4, 4],
  };

  const difficultyAfterData = {
    IXD: [3, 4, 3, 4, 3, 4],
    LAW: [4, 4, 4, 4, 4, 4],
    CS101: [4, 4, 5, 4, 4, 5],
  };

  //Satisfaction Data
  const satiscationData = {
    IXD: [4, 4.5, 4, 4.5, 4, 4.5],
    LAW: [4, 4, 4, 4, 4, 4],
    CS101: [4, 4, 4, 4, 4, 4],
  };

  const satiscationEndData = {
    IXD: [4, 4.5, 4, 4.5, 4, 4.5],
    LAW: [4, 4, 4, 4, 4, 4],
    CS101: [5, 4, 4, 5, 4, 4],
  };

  const satiscationAfterData = {
    IXD: [5, 4, 5, 4, 5, 4],
    LAW: [4, 4, 4, 4, 4, 4],
    CS101: [4, 5, 4, 4, 5, 4],
  };

  //Career Data
  const careerData = {
    IXD: [4, 4, 4, 4, 4, 4],
    LAW: [4, 4, 4, 4, 4, 4],
    CS101: [4, 4, 4, 4, 4, 4],
  };

  const careerEndData = {
    IXD: [5, 5, 5, 5, 5, 5],
    LAW: [5, 5, 5, 5, 5, 5],
    CS101: [5, 5, 5, 5, 5, 5],
  };
  const careerAfterData = {
    IXD: [5, 5, 5, 5, 5, 5],
    LAW: [5, 5, 5, 5, 5, 5],
    CS101: [5, 5, 5, 5, 5, 5],
  };

  // Value Chart
  const answerGraph1 = createChart("valueGraph", valueData, "column");
  const answerGraph1End = createChart("valueEndGraph", valueEndData, "column");
  const answerGraph1After = createChart(
    "valueAfterGraph",
    valueAfterData,
    "column"
  );

  //Difficulty chart
  const answerGraph2 = createChart("difficultyGraph", difficultyData, "column");
  const answerGraph2End = createChart(
    "difficultyEndGraph",
    difficultyEndData,
    "column"
  );
  const answerGraph2After = createChart(
    "difficultyAfterGraph",
    difficultyAfterData,
    "column"
  );

  // Satisfaction chart
  const answerGraph3 = createChart(
    "satisfactionGraph",
    satiscationData,
    "column"
  );
  const answerGraph3End = createChart(
    "satisfactionEndGraph",
    satiscationEndData,
    "column"
  );
  const answerGraph3After = createChart(
    "satisfactionAfterGraph",
    satiscationAfterData,
    "column"
  );

  // Career chart
  const answerGraph4 = createChart("careerGraph", careerData, "column");
  const answerGraph4End = createChart(
    "careerEndGraph",
    careerEndData,
    "column"
  );
  const answerGraph4After = createChart(
    "careerAfterGraph",
    careerAfterData,
    "column"
  );
});
