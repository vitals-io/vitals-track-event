/**
 * Define list of avaible tempalte for vitals startup installation
 */
export enum VitalsTemplate {
  'ecommerce',
}

/**
 * Define avaible databsae conenction type for vitals admin CMS
 */
export enum VitalsSupportedDatabase {
  'mySql', // @todo
  'mongoDb',
}

/**
 * Vitals create app option list
 */
export interface VitalsCreateAppOption {
  /**
   * Root path of project
   */
  rootPath: string;

  /**
   * Project name - last part of rootPath
   */
  name: string;

  /**
   * Vitals.io version - admin.vtials version is the same of this package
   */
  vitalsVersion: string;

  /**
   * Enable debug log
   */
  debug?: boolean;

  /**
   * After setup run immeditlay application
   */
  quick?: boolean;

  /**
   * Installation temlate type - Just ecommerce for now
   */
  template: VitalsTemplate;

  /**
   * Set if use one string for connect to mongodb
   */
  mongoString?: boolean;

  /**
   * MongoDb single connection string
   */
  connectionString?: string;

  /**
   * Define extra requirements dependencies for package.json of admin.vitals.io & vitals.io (frontend)
   */
  packageDependencies: {
    /**
     * Define template import type for admin e frontend
     * Ecommerce template have requiremnts that blog dosen't haves
     */
    template: VitalsTemplate;
  };

  /**
   * Universally unique identifier for Debug
   * @package uuidv4 - uuid()
   */
  uuid: string;

  /**
   * Set if use Docker enviroments
   */
  docker?: boolean;

  /**
   * Machine unique device ID
   * @package node-machine-id - machineIdSync() - This function gets the OS native UUID/GUID synchronously, hashed by default.
   */
  deviceId: string;

  /**
   * Temporary path of project
   */
  tmpPath: string;

  /**
   * Set if user yarn or npm
   */
  useYarn: boolean;

  /**
   * Set if install node modules and misc dependencies
   */
  installDependencies: boolean;

  /**
   * List of base dependencies list to install
   */
  vitalsDependencies: string[];

  /**
   * List of addictional dependencies list to install
   */
  additionalsDependencies?: string[];
}
