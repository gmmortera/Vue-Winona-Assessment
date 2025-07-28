# Vue assignment

## Introduction

Welcome to the Winona code assignment. Take your time and read the instructions carefully.
This assignment shouldn't take more than an hour and should give us a feeling for your problem solving abilities and also your technical expertise.

## Tasks

1. After starting the app you will see a very basic dashboard with a hard coded list of doctors. Make this list dynamic by fetching a list of doctors from `https://v23l6u6a3qrlk6k3sweaql3chm0iaayj.lambda-url.us-west-2.on.aws/`. Use the `Authentication` header with the following value: `Bearer dGhpcyBpcyBzdXBlciBzYWZlLiBqdXN0IHRydXN0IG1lLiBoZWhl`. Don't forget to handle authentication errors.

2. List the first names, last names and the state of each doctor.

3. Implement a small context menu as a drop down where it says `put actions here` that has a link called `Details`. When clicking at this button take the user to this doctors detail page that just displays all of their attributes.

4. Make the dark mode toggle in the header working and also add one to the footer.

5. If possble, add a test case for one component. It's on your discretion how detailed the test is implemented and which test suite to pick.

# Sending in the assignment
Please clone this repository and work with the copy as you would do in a real project. Finally push it to your Github or Gitlab account and send the HR representative the link to the repository.

# Tech Stack & notes

The main app is Vue 3.

We are using Tailwind v4 as a css framework.

We are using DaisyUI as a UI library. [They provide a theme toggle for dark mode out of the box.](https://daisyui.com/components/theme-controller/)

This setup comes with [Pinia as the statemanagement library](https://pinia.vuejs.org/), just in case you need it.
