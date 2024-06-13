#!/usr/bin/env node
import Build from './build'

const stdin = process.stdin
let raw = ''

stdin.setEncoding('utf8')

stdin.on('data', function (chunk) {
  raw += chunk.toString()
  console.log(chunk)
})

stdin.on('end', function () {
  const build = new Build(raw)
  console.log(build.toString())
})

stdin.on('error', console.error)
