![icon](icon.png)

# alfred-jira

> [Alfred 3](https://www.alfredapp.com) Alfred workflow to convert
> clipboard content between markdown and Jira markup


## Prerequisites

You need [Node.js 8.5+](https://nodejs.org) and
[Alfred 3](https://www.alfredapp.com) with the paid
[Powerpack](https://www.alfredapp.com/powerpack/) upgrade.


## Usage

### Copy the markdown or jira markup to clipboard

- <kbd>cmd</kbd> + <kbd>C</kbd>

### Convert

- Start to type `jira`
- Select the task `Convert between markdown and jira`
- <kbd>Return</kbd>
- Start to enter `jira` to convert clipboard text to Jira format, or `markdown` to convert to markdown
- <kbd>Return</kbd> <kbd>cmd</kbd> + <kbd>V</kbd> to paste the converted text

## Install

```
$ npm i -g alfred-jira
```

## Acknowledgements
- Built using [Alfy](https://github.com/sindresorhus/alfy) to integrate Alfred with nodejs
- Jira conversion uses [J2M](https://github.com/FokkeZB/J2M)

## License

MIT © Colin Fallon