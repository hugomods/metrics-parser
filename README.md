# Hugo Metrics Parser

A CLI tool that parses Hugo metrics, such as build speed.

[![License](https://flat.badgen.net/github/license/hugomods/metrics-parser)](https://github.com/hugomods/metrics-parser/blob/main/LICENSE)
[![Version](https://flat.badgen.net/npm/v/@hugomods/metrics-parser)](https://www.npmjs.com/package/@hugomods/metrics-parser)
[![Downloads](https://flat.badgen.net/npm/dt/@hugomods/metrics-parser)](https://www.npmjs.com/package/@hugomods/metrics-parser)

## Installation

```sh
npm i -g @hugomods/metrics-parser
```

## Usage

```sh
hugo | hugo-metrics-parser
...
9.54320987654321 ms/page
6.871111111111111 ms/page (including aliases)
4.294444444444444 ms/file (all pages and files)
```

## Colors

| Color  | Description    |
| ------ | -------------- |
| Green  | speed <= `5ms` |
| Blue   | speed > `5ms`  |
| Yellow | speed < `10ms` |
| Red    | speed < `20ms` |
