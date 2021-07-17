// Imort core
import sentry from '@sentry/node';
import os from 'os';

// Imoport custom
import { VitalsCreateAppOption } from './vitalsInterfaces';
import TrackEventClass from './interfaces';
/**
 * Main class for vitals event tracking
 */
class VitalsTrackEvent implements TrackEventClass {
  constructor(sentryDsn: string, scope: VitalsCreateAppOption) {
    /**
     * Initial sentry with provided key
     */
    console.log('======= SENTRY BEFORE INIT KEY: ==========', sentryDsn);
    sentry.init({
      dsn: sentryDsn,
    });

    /**
     * Set machine and env variables for sentry event
     */
    console.log('======= SENTRY SCOPE: ==========', scope);
    sentry.configureScope(function (sentryScope) {
      const tags = {
        os_type: os.type(),
        os_platform: os.platform(),
        os_release: os.release(),
        vitals_version: scope.vitalsVersion,
        node_version: process.version,
        docker: scope.docker,
      };

      Object.keys(tags).forEach((tag) => {
        sentryScope.setTag(tag, tags[tag]);
      });
    });
  }
}

export default VitalsTrackEvent;
