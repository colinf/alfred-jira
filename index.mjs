import cp from 'child_process'
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

function convert () {

  const markdown = cp.spawnSync('pbpaste', {
    encoding: 'utf8',
  }).stdout

  copy(j2m.toJ(markdown))
}

convert()
