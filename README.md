# Title -

## RegEx Tutorial - Matching an Emial App

- An application to Check email validation based on Regex matching patterns.

## Table of Contents

- [Title](#title)
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Author](#author)
- [Links](#links)
- [License](#license)

### Description

- This application helps the user to check validation of an email with matching pattern.
- When you enter your email, the application will identify that the provided email is valid or invalid.
- Valid email should include combination of `Letters, Numbers, Underscore'_', Dot '.', @` and will be invalid if outside of these charactors.
- This application is using an online tool of Regular Expression (RegEx) patterns to identify validation of an email.

### User Story

- AS A web development student,
  I WANT a tutorial explaining a specific regex,
  SO THAT I can understand the search pattern the regex defines.

### Acceptance Criteria

- GIVEN a RegEx tutorial
- WHEN I open the tutorial,
  THEN I see a descriptive title and introductory paragraph explaining the purpose of the tutorial, a summary describing the regex featured in the tutorial, a table of contents linking to different sections that break down each component of the regex and explain what it does, and a section about the author with a link to the author’s GitHub profile.
- WHEN I click on the links in the table of contents,
  THEN I am taken to the corresponding sections of the tutorial.
- WHEN I read through each section of the tutorial,
  THEN I find a detailed explanation of what a specific component of the regex does.
- WHEN I reach the end of the tutorial,
  THEN I find a section about the author and a link to the author’s GitHub profile.

### Regex Components

- The components are included Anchors, Escaped chararctors, Grouping constructors, Lookaround, Quantifier, Alternation, Substitution & Flags & I have used some of the listed below.

### Quantifiers

- I have use quantifiers "{3}" to match the domain part of email on my application.

### Grouping Constructs

- Grouping constructors allow to combine a sequence of tokens to operate them together. I have used this pattern on my application to group letters, numbers & other charactors.

### Character Classes

- Character classes help to list the charactors inorder to make valid or invalid. The characters I used for this app listed on line 14 of the index.js file. These are `/[a-z0-9_]+@[a-z]+.[a-z]{3}/i`.

### Flags

- Flags are used for expression interpreted in Regex components.
- I used case insensive "i" at the end of charactor classes list for my application inorder to include all capital letters (A-Z).

### Author

- Tesfa Weldemichael - Junior developer student at UWA Boot-Camp
- [Tesfa's GitHub Profile Link](https://github.com/Tesfa8186/Tesfa-PortfolioWebpage)

### Links

- [The URL GitHub Repository Link](https://github.com/Tesfa8186/CS-Challenege-Regex-Email-Matching-Tutor)

### License

- Covered by [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
