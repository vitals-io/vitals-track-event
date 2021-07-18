"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imort core
const node_1 = __importDefault(require("@sentry/node"));
const os_1 = __importDefault(require("os"));
/**
 * Main class for vitals event tracking
 */
class VitalsTrackEvent {
    constructor(sentryDsn, scope) {
        /**
         * Initial sentry with provided key
         */
        console.log('======= SENTRY BEFORE INIT KEY: ==========', sentryDsn);
        node_1.default.init({
            dsn: sentryDsn,
        });
        /**
         * Set machine and env variables for sentry event
         */
        console.log('======= SENTRY SCOPE: ==========', scope);
        node_1.default.configureScope(function (sentryScope) {
            const tags = {
                os_type: os_1.default.type(),
                os_platform: os_1.default.platform(),
                os_release: os_1.default.release(),
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
exports.default = VitalsTrackEvent;
//# sourceMappingURL=index.js.map