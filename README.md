# Akan Name Generator

## Project Name
Akan Name Generator

## Project Description

The Akan people name kids according to the day of the week they’re born, each day has its own male and female name.
This simpple web application takes your birth date and gender, calculates the day of the week using a formula, and shows you what your Akan name would be.
It's  basically just inputs, validation, some math and the result.

The application:
- Collects birth day, month, year and gender from the user.
- Validates the input values.
- Displays the corresponding Akan name and day name

## Author
- **Name**: Patricia  
- **GitHub**: ndungupatriciawanjiru-hub0
- **Email**: ndungu.patriciawanjiru@gmail.com

## Setup Instructions

### How to run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ndungupatriciawanjiru-hub0/Akan-Name-Generator.git

 2. cd akan-name-generator

3.Open the project in your browser:
Double-click index.html
or open it with VS Code → Live Server
 ***Live site***
You can view the deployed version here:
 https://ndungupatriciawanjiru-hub0.github.io/Akan-Name-Generator/

####  BDD (Behavior Driven Development)

Behavior (As a user...),Given...,When...,Then...
-I want to know my Akan name,I have entered valid birth date and gender,"I click ""Get Akan Name""",I see my day of the week and corresponding Akan name.
-I want to be prevented from submitting invalid data,I leave gender unselected,I click submit,"I see an alert: ""Please select your gender"""
I want to be warned about invalid month,I enter month < 1 or > 12,I click submit,"I see an alert: ""Month must be between 1 and 12"""
I want to be warned about invalid day,I enter day < 1 or > 31,I click submit,"I see an alert: ""Day must be between 1 and 31"""
I want to be warned about unrealistic years,I enter year < 1900 or > current year,I click submit,I see an alert asking for a valid year (1900–current)
I want to be prevented from entering future dates,I enter a birth date after today,I click submit,"I see an alert: ""Birth date cannot be in the future"""
I want the form to be cleared after success,I successfully get my Akan name,The result is displayed.

##### Technologies Used

-HTML5 
-CSS3
-JavaScript
-Git
-GitHub
-License-MIT 

