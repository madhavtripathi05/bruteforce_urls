const open = require('open');

const url = 'https://kutt-nft-api.vloggerstoolbox.com/TqH55L';
const number_of_times = 10;
for (let index = 0; index < number_of_times; index++) {
  open(url, {
    app: {
      name: open.apps.chrome,
      arguments: ['--incognito'],
    },
  });
}
