# ZAP Serverless

This is a small experiment to run [OWASP Zed Attack Proxy](https://github.com/zaproxy/zaproxy) in a serverless environment

## Usage

```sh
$ serverless deploy
```

## Results

- The results were not satisfying. The maximum run time for a Lambda is 15 minutes and as a result, the scanner does not have time to work properly 😕

- The best performance was obtained by running the scanner in the fastest profiles, as well as narrowing down the analysis to riskier failures (e.g. SQL Injection)

## License

This project is distributed under the [MIT license](LICENSE)
