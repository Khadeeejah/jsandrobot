# JavaScript & Rockets

**Description:** Challenge for Adjust Frontend Developer

**Owner:** [adjust](https://github.com/adjust)

**Contacts:** frontend-hiring@adjust.com

---

## Welcome to our little coding exercise! 👋

Here you will be given the opportunity to play with JavaScript and Rockets in the same project. For this, we recommend you to block 1-2 hours of your time to complete it.

**Please make sure you have read this page entirely, before starting the challenge**. If you have any doubts, please reach out to us by [opening an issue][opening-an-issue] as described at the bottom of this page.

**Importantly**, we would like to give all candidates taking this test the same opportunity to solve the exercise in their own way. Because of this, **please do not fork or share this repo (nor your solution) with anybody 🙏🏻**

<img align="center" src="https://i.imgur.com/ekyJNd9.jpg" width="600">

## Instructions

1. You **MUST [clone this repo](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)** to a location of your choosing where you can work on your solution
2. Write your solution inside of **`src/solution.js`** file, making sure the provided tests are green. **Please do not modify anything inside of `src/tests`**
3. Push your solution to a **private repo** in your **personal GitHub account**
4. When you are ready for us to take a look, please add [adjust-frontend-hiring][adjust-frontend-hiring] as collaborator

## Important rules

Your challenge submission will be disqualified and automatically rejected if any of the following happens:

- Your **repo was not properly cloned** as specified on step #1 of Instructions. [See how to clone a repository here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). **Note:** If you cloned the repo properly, previous commits from this (original) repo, must be showing on your git history.
- Your **tests are not passing** (green) as specified on step #2 of Instructions. **Note:** You can run tests with command `npm run test src` or `yarn test src` (according to the package manager you are using).
- You **have modified any of the files inside of `src/tests`** as specified on step #2 of Instructions.
- Your **repo visibility is not set to private** as specified on step #3 of Instructions. [See how to make a repository private here](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility).

---

## Exercise

Using the past launches endpoint from the [SpaceX API][spacex-api] consolidate a list of all the missions that were launched in 2018 that carried a payload belonging to NASA. Missions should appear in inverse chronological order, with the exception of those that carried more payloads should appear first.

Display the outcome of your solution by rendering the list to the screen as JSON while keeping an indentation of 2 spaces. To make the evaluation process simpler we only care to see the flight number, the mission name, and the amount of payloads carried by each mission.

## Expected output

Your solution is expected to render the following:

```json
[
  {
    "flight_number": 62,
    "mission_name": "Iridium NEXT Mission 6",
    "payloads_count": 2
  },
  {
    "flight_number": 72,
    "mission_name": "CRS-16",
    "payloads_count": 1
  },
  {
    "flight_number": 64,
    "mission_name": "CRS-15",
    "payloads_count": 1
  },
  {
    "flight_number": 60,
    "mission_name": "TESS",
    "payloads_count": 1
  },
  {
    "flight_number": 59,
    "mission_name": "CRS-14",
    "payloads_count": 1
  }
]
```

## Clarifications

- You can use any **utility** library you see fit (please don't use React, Angular or Vue)
- You are not allowed to use any of the filter parameters provided by the [SpaceX API docs][spacex-api-docs]
- It doesn't matter to which NASA program each payload belongs to as long as NASA is the customer
- Payloads are carried in the second stage of a rocket and they can belong to multiple customers

## How to request help

If you have any doubts, you can reach out to us by simply [creating a GitHub issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-repository) in your private repo.

Describe your question(s) and [mention](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams) [adjust-frontend-hiring][adjust-frontend-hiring] in your comments (don't forget to add user as collaborator). We will then receive a notification and get back to you as soon as possible.

## Helpful links

- [SpaceX API Docs][spacex-api-docs]
- [Inviting collaborators to a personal repository][github-collaborators]

[spacex-api]: https://api.spacexdata.com/v3/launches/past
[spacex-api-docs]: https://docs.spacexdata.com/?version=latest#fce450d6-e064-499a-b88d-34cc22991bcc
[github-collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
[adjust-frontend-hiring]: https://github.com/adjust-frontend-hiring
[opening-an-issue]: https://github.com/adjust/js-and-rockets#how-to-request-help
