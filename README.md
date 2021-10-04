jaet is **J**ust **A**nother **E**xpense **T**racker. The intent is to provide
an all-in-one solution for managing a budget and expenses.

Roadmap
-------

These are the features that will be implemented, roughly in order:

- Add/Edit/Remove Expenses
- Login to persist sessions
- Download data as CSV or ledger file
- monthly envelope-based budget
- Add photo to any expense (for receipt)
- (this may be later) OCR of receipt
    - provide suggestions for recognized text
    - use machine learning to improve suggestions
- link to bank account for auto-import
    - auto-link recipts to auto-imported expenses

Design
------

One of my goals for this project is to become proficient with JavaScript in
general, and React.js in particular. Therefore, I'll be using the React
framework, specifically "React with hooks". I like the functional-style that
React hooks allows.

Further, I will attempt to keep the React and JavaScript parts of the project
strictly for the front-end: for any backend functionality I may need, I'll plan
to use Rust since I've recently started learning it and it seems like a very
cool language.

Other than that, I'd like to dabble with AWS, so I'll look at using some of the
AWS serverless features. If that becomes too difficult, or if it turns out to be
a bad fit for this project, I'll still use AWS but a different service.
