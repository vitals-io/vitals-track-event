"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VitalsSupportedDatabase = exports.VitalsTemplate = void 0;
/**
 * Define list of avaible tempalte for vitals startup installation
 */
var VitalsTemplate;
(function (VitalsTemplate) {
    VitalsTemplate[VitalsTemplate["ecommerce"] = 0] = "ecommerce";
})(VitalsTemplate = exports.VitalsTemplate || (exports.VitalsTemplate = {}));
/**
 * Define avaible databsae conenction type for vitals admin CMS
 */
var VitalsSupportedDatabase;
(function (VitalsSupportedDatabase) {
    VitalsSupportedDatabase[VitalsSupportedDatabase["mySql"] = 0] = "mySql";
    VitalsSupportedDatabase[VitalsSupportedDatabase["mongoDb"] = 1] = "mongoDb";
})(VitalsSupportedDatabase = exports.VitalsSupportedDatabase || (exports.VitalsSupportedDatabase = {}));
//# sourceMappingURL=vitalsInterfaces.js.map