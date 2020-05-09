import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: 'https://0d2ea8e19a3a4abe8dd270e5bcdee00b@o389955.ingest.sentry.io/5230449'
  });
}

function log(error) {
  Sentry.captureException(error);
  console.log(error);
}

// Interface of logService has two methods -- init and log
export default {
  init,
  log
};
