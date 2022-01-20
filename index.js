const open = require('open');

// Parsing CLI arguments
const args = process.argv.slice(2);

// Checking if the user has provided a URL
var url =
  args
    .find((arg) => arg.startsWith('url=') || arg.startsWith('u='))
    ?.split('=')[1] ?? 'https://www.google.com';
if (!url.startsWith('http')) {
  url = 'https://' + url;
}

// Checking if the user has provided a number of time to run a loop
const number_of_times =
  args
    .find((arg) => arg.startsWith('number_of_times=') || arg.startsWith('n='))
    ?.split('=')[1] ?? 1;

// Checking if the user has provided a browser
const browser =
  args
    .find((arg) => arg.startsWith('browser=') || arg.startsWith('b='))
    ?.split('=')[1] ?? 'chrome';

const help = args.find(
  (arg) => arg.startsWith('--help') || arg.startsWith('-h')
);

if (!help) {
  for (let index = 0; index < number_of_times; index++) {
    openUrl(url, browser);
    setTimeout(() => {}, 500);
    console.clear();
    console.log(
      'opening ' + url + ' in ' + browser + ' for the ' + (index + 1) + ' time'
    );
  }
} else {
  console.log(
    'enter `u={url}` or `url={url}` to open a url, e.g. `node index.js u=https://www.google.com`'
  );
  console.log(
    'enter `b={browser}` or `browser={browser}` to specify a browser, e.g. `node index.js b=chrome`'
  );
  console.log(
    'enter `n={number_of_times}` or `number_of_times={number_of_times}` to specify the number of times to open the url, e.g. `node index.js n=5`'
  );
}

function openUrl(url, browser) {
  switch (browser) {
    case 'chrome':
      console.log(`Opening ${url} in chrome`);
      open(url, {
        app: {
          name: open.apps.chrome,
          arguments: ['--incognito'],
        },
      });
      break;
    case 'firefox':
      open(url, {
        app: {
          name: open.apps.firefox,
          arguments: ['--incognito'],
        },
      });
      break;
    case 'edge':
      open(url, {
        app: {
          name: open.apps.edge,
          arguments: ['--incognito'],
        },
      });
      break;
  }
}
