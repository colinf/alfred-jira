import alfy from 'alfy'
import alfredNotifier from 'alfred-notifier'

const formats = [{
  title: 'to jira',
  arg: 'jira',
}, {
  title: 'to markdown',
  arg: 'markdown',
}]

const output = alfy.inputMatches(formats, 'title')
alfredNotifier()
alfy.output(output)