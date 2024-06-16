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
2m24.831s in total
6.471781580946423 ms/page (22379 pages)
4.478416821273965 ms/page (32340 pages, including aliases)
4.459799846035412 ms/file (32475 files)
```

## Colors

| Color  | Description     |
| ------ | --------------- |
| Green  | speed <= `5ms`  |
| Blue   | speed <= `10ms` |
| Yellow | speed <= `20ms` |
| Red    | speed > `20ms`  |
