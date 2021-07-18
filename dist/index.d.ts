import { VitalsCreateAppOption } from './vitalsInterfaces';
import TrackEventClass from './interfaces';
/**
 * Main class for vitals event tracking
 */
declare class VitalsTrackEvent implements TrackEventClass {
    constructor(sentryDsn: string, scope: VitalsCreateAppOption);
}
export default VitalsTrackEvent;
