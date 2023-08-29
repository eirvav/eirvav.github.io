# Task 5 Web Page README, CANDIATE NUMBER 184

This project is based on the Graphic Design module, where the objective is to recreate and improve the design submitted as a PDF during the module using HTML, CSS, and JavaScript. The main goal is to implement an interactive web page that closely resembles the original design while adding missing functionalities, if any.

## Overview

In this project, I have made an interactive web page that displays data for multiple study programs, presenting both visual and raw data, and providing filters for data selection.

## Features

- I have a web page design that closely resembles the original PDF submission
- I support (and show) multiple graph types
- I have a presentation of statistical data and student feedback data
- I have filters for data selection through radio buttons and a range slider
- I support both visual and raw data presentation
- I can navigate between the different pages for data via dropdown menus and bootstrap Modals
- I use advanced web widgets and containers, such as the Bootstrap library, jQuery and HighCharts

## Problems I encountered

### Problem 1

Very late thursday 13.04 I encountered a problem I was not able to fix. When the "Students answer!" Modal is open, and the Radio buttons "Raw Data" and "End of Studies" or "One year after graduation" is selected; the graphs from "End of studies" (when "End of studies" is selected") or "One year after graduation" (when "One year after graduation" is selected) SOMETIMES shows up under the raw data content. It has something to do with the functions updateGraphsContent2Display() and showSelectedContent().

### Problem 2

I was not able to make the dropdowns as they were in my original design. Creating a dropdown inside a dropdown and to follow the original design was not something I was capable doing, even with the help of ChatGPT. So that resulted in the creating Modals with Bootstrap.

### Problem 3

I was not able to show the Raw Data in a more structured manner. I originally wanted to show the data like this:

                    2017	2018	2019	2020
    value           3.5	    3.5	    3.5	    3.5
    career          3.8	    3.8 	3.8	    3.8
    difficulty      3.5 	3.0 	3.5	    3.0

But I was not able too do so which resulted in the increased amount of tables. This would be fixed in a later iteration of the web page.

## Comments

### Comment 1

In my original PDF I submitted a front page that led me too my "Program Analysis Tool". I chose not to create it, just due to the fact that I did not have the time. It felt uneccessary, but with the use of Locofy.ai, I was able to create it in 10 minutes. I chose to not add it as it had thousands of lines of code.

### Comment 2

The "filtering" on the right side of the page is something that I chose not to put so much effort into it, and could rather think of it as a tool that could work in the next iteration of the website. It works by checking of boxes that shows up at the top of the page as "tags".

### Comment 3

I had issues extracting specific data from the API without sabotaging for other functions, so I chose to "hardcode" the data that lies under the div "aboutreq" which got created using Locofy.ai to save time.

### Comment 4

In my original PDF, there was also a clear page that showed a side by side comparison of Raw numbers. My idea of the website/design was to make it more like it is in the real world, where you search for a study/course, and you get information regarding it. But to follow the requirements of the exam, I had to implement certain interactions/viewpoints that fulfilled those. I chose to remove the Modal popup that was in Figma, and rather use the Highcharts to display the differences. You are able in Highcharts to toggle which of the charts you want to see, and therefore fulfilling the requirement of comparison. If you want to compare Raw Numbers between the studies, you can click the hamburgermenu in the top right of the charts, and at the bottom select "View Data Table". Depending on what courses you have toggled for the chart, the data will show up comparing each other.

## Acknowledgements

- [How I got started with Highcharts](https://www.highcharts.com/docs/getting-started/your-first-chart)
- [How I implemented range selectors to view data for different years](https://www.highcharts.com/docs/stock/range-selector)
