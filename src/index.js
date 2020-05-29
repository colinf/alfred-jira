import cp from 'child_process'
import alfy from 'alfy'
import j2m from 'j2m'

function copy(output) {
  if (output) {
    output = output.trim()
    cp.spawnSync('pbcopy', {
      encoding: 'utf8',
      input: output,
    })
    console.log(JSON.stringify({
      content: output,
    }))
  }
}

function convert (toFormat) {

  const inputText = cp.spawnSync('pbpaste', {
    encoding: 'utf8',
  }).stdout

  let outputFn
  switch (toFormat) {
    case 'jira':
      outputFn = j2m.toJ
      break
    case 'markdown':
      outputFn = j2m.toM
      break
    default:
      console.log(toFormat)
  }

  return outputFn(inputText)
}

const input = alfy.input.toLowerCase()
const output = convert(input)

alfy.output([{
  title: `Converted to ${input}`,
  subtitle: 'Action this item to copy to clipboard',
  arg: output
}])
