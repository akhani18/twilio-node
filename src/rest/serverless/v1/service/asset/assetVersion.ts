/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * The access control that determines how the Asset Version resource can be accessed. Can be:  `public`, `protected`, or `private`.
 */
export type AssetVersionVisibility = "public" | "private" | "protected";

/**
 * Options to pass to each
 */
export interface AssetVersionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AssetVersionListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AssetVersionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AssetVersionContext {
  /**
   * Fetch a AssetVersionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssetVersionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AssetVersionInstance) => any
  ): Promise<AssetVersionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssetVersionContextSolution {
  serviceSid: string;
  assetSid: string;
  sid: string;
}

export class AssetVersionContextImpl implements AssetVersionContext {
  protected _solution: AssetVersionContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    serviceSid: string,
    assetSid: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(assetSid)) {
      throw new Error("Parameter 'assetSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, assetSid, sid };
    this._uri = `/Services/${serviceSid}/Assets/${assetSid}/Versions/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: AssetVersionInstance) => any
  ): Promise<AssetVersionInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssetVersionInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.assetSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface AssetVersionPayload extends TwilioResponsePayload {
  asset_versions: AssetVersionResource[];
}

interface AssetVersionResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  asset_sid: string;
  path: string;
  visibility: AssetVersionVisibility;
  date_created: Date;
  url: string;
}

export class AssetVersionInstance {
  protected _solution: AssetVersionContextSolution;
  protected _context?: AssetVersionContext;

  constructor(
    protected _version: V1,
    payload: AssetVersionResource,
    serviceSid: string,
    assetSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.assetSid = payload.asset_sid;
    this.path = payload.path;
    this.visibility = payload.visibility;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { serviceSid, assetSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Asset Version resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Asset Version resource.
   */
  accountSid: string;
  /**
   * The SID of the Service that the Asset Version resource is associated with.
   */
  serviceSid: string;
  /**
   * The SID of the Asset resource that is the parent of the Asset Version.
   */
  assetSid: string;
  /**
   * The URL-friendly string by which the Asset Version can be referenced. It can be a maximum of 255 characters. All paths begin with a forward slash (\'/\'). If an Asset Version creation request is submitted with a path not containing a leading slash, the path will automatically be prepended with one.
   */
  path: string;
  visibility: AssetVersionVisibility;
  /**
   * The date and time in GMT when the Asset Version resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The absolute URL of the Asset Version resource.
   */
  url: string;

  private get _proxy(): AssetVersionContext {
    this._context =
      this._context ||
      new AssetVersionContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.assetSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a AssetVersionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssetVersionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AssetVersionInstance) => any
  ): Promise<AssetVersionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      assetSid: this.assetSid,
      path: this.path,
      visibility: this.visibility,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AssetVersionSolution {
  serviceSid: string;
  assetSid: string;
}

export interface AssetVersionListInstance {
  _version: V1;
  _solution: AssetVersionSolution;
  _uri: string;

  (sid: string): AssetVersionContext;
  get(sid: string): AssetVersionContext;

  /**
   * Streams AssetVersionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssetVersionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: AssetVersionListInstanceEachOptions,
    callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of AssetVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AssetVersionPage) => any
  ): Promise<AssetVersionPage>;
  /**
   * Lists AssetVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssetVersionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AssetVersionInstance[]) => any
  ): Promise<AssetVersionInstance[]>;
  list(
    params: AssetVersionListInstanceOptions,
    callback?: (error: Error | null, items: AssetVersionInstance[]) => any
  ): Promise<AssetVersionInstance[]>;
  /**
   * Retrieve a single page of AssetVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssetVersionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AssetVersionPage) => any
  ): Promise<AssetVersionPage>;
  page(
    params: AssetVersionListInstancePageOptions,
    callback?: (error: Error | null, items: AssetVersionPage) => any
  ): Promise<AssetVersionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AssetVersionListInstance(
  version: V1,
  serviceSid: string,
  assetSid: string
): AssetVersionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(assetSid)) {
    throw new Error("Parameter 'assetSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as AssetVersionListInstance;

  instance.get = function get(sid): AssetVersionContext {
    return new AssetVersionContextImpl(version, serviceSid, assetSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, assetSid };
  instance._uri = `/Services/${serviceSid}/Assets/${assetSid}/Versions`;

  instance.page = function page(
    params?:
      | AssetVersionListInstancePageOptions
      | ((error: Error | null, items: AssetVersionPage) => any),
    callback?: (error: Error | null, items: AssetVersionPage) => any
  ): Promise<AssetVersionPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssetVersionPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AssetVersionPage) => any
  ): Promise<AssetVersionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AssetVersionPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class AssetVersionPage extends Page<
  V1,
  AssetVersionPayload,
  AssetVersionResource,
  AssetVersionInstance
> {
  /**
   * Initialize the AssetVersionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AssetVersionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AssetVersionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssetVersionResource): AssetVersionInstance {
    return new AssetVersionInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.assetSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
