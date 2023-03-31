# Title -

## Regular Expression (Regex) Tutorial Matching an Email

## Description

- Regular Expressions (Regex) are a sequence of characters in a specific pattern that allows you to easily add, remove, find, and update any kind of text and data.
- Regex is used in a huge variety of ways such as matching a Username, Hex Value, URL, HTML tag, and for validating an Email Address. Utilization of regex can also include finding certain patterns of characters within a string and even be used to find and replace character sequences within a string.
- The application is using an online tool of Regular Expression (Regex) patterns to identify validation of an email.

### Summary

- In this tutor I will be examining the characters in a regex sequence for matching a valid email.

- /[-a-z0-9_ .]+@[a-z]+(.[a-z]{3}/i)/

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Summary](#summary)
- [Regex Components](#regex-components)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Author](#author)
- [Links](#links)
- [License](#license)

### Regex Components

- The components are included Anchors, Escaped chararctors, Grouping constructors, Lookaround, Quantifier, Alternation, Substitution & Flags & I have used some of them which are the listed below.

### Quantifiers

- Quantifiers indicate that the preceding token must be matched a certain number of times.
- Normally, Quantifiers are greedy, and will match as many characters as possible.
- If they are greedy then they will try to match the longest string possible, both + and {} which are used in my regex are greedy so they will act this way.
  While if a quantifier is lazy, it will match the shortest string possible.
- I have use quantifiers "{3}" to match the domain part of email on my application.

### Grouping Constructs

- /[-a-z0-9_ .]+@[da-z\-]+(.[a-z]{3}/i)/
- My expression is broken up into three major character sections of regex each grouped by a(). This allows us to check multiple parts of a string to make each group fulfill a desired requirement. Each group could also be referenced again later by using \1 or \2 for example but that isn't utilized in my expression, instead I just taking advantage of the grouping aspect. The three groups of our expression being:

- ([a-z0-9_ .]+) This is the expression for the users email name which as we covered above can have any number of characters ranging from a-z, 0-9 and can include \_, .

- • ([da-z\-]+) This section is for checking the domain name (e.g. Gmail, Yahoo mail, Hotmail) This group includes a \d character class which will be expanded on further below. As well as any character from a-z. OR these can be any amounts due to the +

- • ([a-z]{3}/i) And the final part is for the top-level domain (e.g. .com, .edu, .org) This final grouping has a range defined by the {} and can include any character from a-z etc...

### Character Classes

- /[-a-z0-9_ .]+@[da-z\-]+(.[a-z]{3}/i)/

- A character class defines a set of characters where any character can fulfill a match.
- For example, the bracket expressions discussed above are considered character class.
- But there exist common character classes such as \d. This matches a numeral digit, and equivalent to the bracket expression [0-9].
- An example I used in expression is \i which matches all alphabet [A-Z].
- A final example is dot (.), which matches any character except \n. This could cause problems as a lot of times we match. but on its own it defines a set of characters.

### Flags

- Flags are used for expression interpreted in Regex components.
- I used case insensive "i" at the end of charactor classes list for my application inorder to include all capital letters (A-Z).

### Author

- This tutorial has been created by Tesfa Weldemichael Junior developer student at UWA Boot-Camp
- [Tesfa's GitHub Profile Link](https://github.com/Tesfa8186/Tesfa-PortfolioWebpage)

### Links

- [The URL GitHub gist Repo Link](https://gist.github.com/Tesfa8186/199e852511265970bcf73b801b138383)

### License

- Covered by [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
