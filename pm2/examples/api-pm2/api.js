var pm2 = require('../..');

// pm2.list(function (err, list) {
//   console.log(list)
// });

pm2.start('/Users/chenxiaokang/WorkSpace/project/GithubProject/reading-and-annotate-pm2-4.5.6/pm2/examples/api-pm2/http.js', function (err, app) {
  if (err) {
    console.error(err);
    return pm2.disconnect();
  }

  pm2.list(function (err, list) {
    console.log(list)
  });

  console.log(23131231)
});

// pm2.delete('all', function (err) {
//   if (err) {
//     console.error(err);
//     return pm2.disconnect();
//   }

  // pm2.start('http.js', function (err, app) {
  //   if (err) {
  //     console.error(err);
  //     return pm2.disconnect();
  //   }

  //   console.log('Process HTTP has been started');

  //   pm2.restart('http', function (err, app) {
  //     if (err) {
  //       console.error(err);
  //       return pm2.disconnect();
  //     }

  //     console.log('Process Restarted');
  //     return pm2.disconnect();
  //   });
  // });
// });
