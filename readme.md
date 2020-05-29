![icon](icon.png)

# alfred-jira

> [Alfred 3](https://www.alfredapp.com) workflow to convert clipboard
> text between markdown and Jira markup


## Prerequisites

You need a recent version of [Node.js](https://nodejs.org) and
[Alfred 4](https://www.alfredapp.com) with the paid
[Powerpack](https://www.alfredapp.com/powerpack/) upgrade.


## Usage

- <kbd>cmd</kbd> + <kbd>C</kbd> to copy the markdown or jira markup to
  the clipboard
- Invoke Alfred, normally <kbd>cmd</kbd> + <kbd>space</kbd>
- Type `c2`
- Select the required task from or enter the letter m/j
  - Convert jira to **m**arkdown
  - Convert markdown to **j**ira
- <kbd>Return</kbd>
- When the text has been converted press <kbd>Return</kbd> to copy
- <kbd>cmd</kbd> + <kbd>V</kbd> to paste the converted text

## Install

```
$ npm i -g alfred-jira
```

## Acknowledgements
- Built using [Alfy](https://github.com/sindresorhus/alfy) to integrate Alfred with nodejs
- Jira conversion uses [J2M](https://github.com/FokkeZB/J2M)

## License

MIT © Colin Fallon
