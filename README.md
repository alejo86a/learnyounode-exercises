# learnyounode Exercises

Solutions to the exercises from [`learnyounode`](https://github.com/workshopper/learnyounode), the NodeSchool.io interactive workshop for learning Node.js fundamentals.

This is a personal practice/learning repository, not an application — each file is a standalone solution to one workshop exercise.

## Tech Stack

- Node.js (core modules only: `fs`, `http`, `net`, `path`, no external dependencies)

## Exercises included

| File | Topic |
|---|---|
| `hello-world.js` | Basic console output |
| `baby-steps.js` | Command-line arguments / basic arithmetic |
| `my-first-io.js` | Synchronous file I/O |
| `my-first-async-io.js` | Asynchronous file I/O |
| `filtered-ls.js` | Reading a directory and filtering by file extension |
| `make-it-modular.js` | Extracting logic into a reusable module |
| `mymodule.js` | Module used by `make-it-modular.js` |
| `juggling-async.js` | Coordinating multiple async operations |
| `http-client.js` | Making HTTP requests as a client |
| `http-collect.js` | Collecting data from an HTTP response |
| `http-json-api-server.js` | Serving a JSON API over HTTP |
| `http-file-server.js` | Serving file contents over HTTP |
| `http-uppercaserer.js` | Streaming request body transformation over HTTP |
| `time-server.js` | A TCP time server |

## How to run

Each file is self-contained. Run any exercise directly with Node:

```bash
node hello-world.js
node baby-steps.js 1 2 3
```

Some exercises (the `http-*` and `time-server.js` files) start a server — check the top of each file or the corresponding `learnyounode` exercise description for expected usage and arguments.

## Context

This is a self-study exercise set completed while working through the learnyounode workshop — kept here as a record of early Node.js learning, not as a production codebase.
