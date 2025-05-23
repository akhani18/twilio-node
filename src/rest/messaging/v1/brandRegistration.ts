/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { BrandRegistrationOtpListInstance } from "./brandRegistration/brandRegistrationOtp";
import { BrandVettingListInstance } from "./brandRegistration/brandVetting";

/**
 * DEPRECATED. Feedback on how to improve brand score
 */
export type BrandRegistrationBrandFeedback =
  | "TAX_ID"
  | "STOCK_SYMBOL"
  | "NONPROFIT"
  | "GOVERNMENT_ENTITY"
  | "OTHERS";

/**
 * When a brand is registered, TCR will attempt to verify the identity of the brand based on the supplied information.
 */
export type BrandRegistrationIdentityStatus =
  | "SELF_DECLARED"
  | "UNVERIFIED"
  | "VERIFIED"
  | "VETTED_VERIFIED";

/**
 * Brand Registration status. One of \"PENDING\", \"APPROVED\", \"FAILED\", \"IN_REVIEW\", \"DELETION_PENDING\", \"DELETION_FAILED\", \"SUSPENDED\".
 */
export type BrandRegistrationStatus =
  | "PENDING"
  | "APPROVED"
  | "FAILED"
  | "IN_REVIEW"
  | "DELETION_PENDING"
  | "DELETION_FAILED"
  | "SUSPENDED";

/**
 * Options to pass to create a BrandRegistrationInstance
 */
export interface BrandRegistrationListInstanceCreateOptions {
  /** Customer Profile Bundle Sid. */
  customerProfileBundleSid: string;
  /** A2P Messaging Profile Bundle Sid. */
  a2PProfileBundleSid: string;
  /** Type of brand being created. One of: \\\"STANDARD\\\", \\\"SOLE_PROPRIETOR\\\". SOLE_PROPRIETOR is for low volume, SOLE_PROPRIETOR use cases. STANDARD is for all other use cases. */
  brandType?: string;
  /** A boolean that specifies whether brand should be a mock or not. If true, brand will be registered as a mock brand. Defaults to false if no value is provided. */
  mock?: boolean;
  /** A flag to disable automatic secondary vetting for brands which it would otherwise be done. */
  skipAutomaticSecVet?: boolean;
}
/**
 * Options to pass to each
 */
export interface BrandRegistrationListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: BrandRegistrationInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface BrandRegistrationListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface BrandRegistrationListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface BrandRegistrationContext {
  brandRegistrationOtps: BrandRegistrationOtpListInstance;
  brandVettings: BrandVettingListInstance;

  /**
   * Fetch a BrandRegistrationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BrandRegistrationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BrandRegistrationInstance) => any
  ): Promise<BrandRegistrationInstance>;

  /**
   * Update a BrandRegistrationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BrandRegistrationInstance
   */
  update(
    callback?: (error: Error | null, item?: BrandRegistrationInstance) => any
  ): Promise<BrandRegistrationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BrandRegistrationContextSolution {
  sid: string;
}

export class BrandRegistrationContextImpl implements BrandRegistrationContext {
  protected _solution: BrandRegistrationContextSolution;
  protected _uri: string;

  protected _brandRegistrationOtps?: BrandRegistrationOtpListInstance;
  protected _brandVettings?: BrandVettingListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/a2p/BrandRegistrations/${sid}`;
  }

  get brandRegistrationOtps(): BrandRegistrationOtpListInstance {
    this._brandRegistrationOtps =
      this._brandRegistrationOtps ||
      BrandRegistrationOtpListInstance(this._version, this._solution.sid);
    return this._brandRegistrationOtps;
  }

  get brandVettings(): BrandVettingListInstance {
    this._brandVettings =
      this._brandVettings ||
      BrandVettingListInstance(this._version, this._solution.sid);
    return this._brandVettings;
  }

  fetch(
    callback?: (error: Error | null, item?: BrandRegistrationInstance) => any
  ): Promise<BrandRegistrationInstance> {
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
        new BrandRegistrationInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    callback?: (error: Error | null, item?: BrandRegistrationInstance) => any
  ): Promise<BrandRegistrationInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BrandRegistrationInstance(
          operationVersion,
          payload,
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

interface BrandRegistrationPayload extends TwilioResponsePayload {
  data: BrandRegistrationResource[];
}

interface BrandRegistrationResource {
  sid: string;
  account_sid: string;
  customer_profile_bundle_sid: string;
  a2p_profile_bundle_sid: string;
  date_created: Date;
  date_updated: Date;
  brand_type: string;
  status: BrandRegistrationStatus;
  tcr_id: string;
  failure_reason: string;
  errors: Array<Record<string, object>>;
  url: string;
  brand_score: number;
  brand_feedback: Array<BrandRegistrationBrandFeedback>;
  identity_status: BrandRegistrationIdentityStatus;
  russell_3000: boolean;
  government_entity: boolean;
  tax_exempt_status: string;
  skip_automatic_sec_vet: boolean;
  mock: boolean;
  links: Record<string, string>;
}

export class BrandRegistrationInstance {
  protected _solution: BrandRegistrationContextSolution;
  protected _context?: BrandRegistrationContext;

  constructor(
    protected _version: V1,
    payload: BrandRegistrationResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.customerProfileBundleSid = payload.customer_profile_bundle_sid;
    this.a2pProfileBundleSid = payload.a2p_profile_bundle_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.brandType = payload.brand_type;
    this.status = payload.status;
    this.tcrId = payload.tcr_id;
    this.failureReason = payload.failure_reason;
    this.errors = payload.errors;
    this.url = payload.url;
    this.brandScore = deserialize.integer(payload.brand_score);
    this.brandFeedback = payload.brand_feedback;
    this.identityStatus = payload.identity_status;
    this.russell3000 = payload.russell_3000;
    this.governmentEntity = payload.government_entity;
    this.taxExemptStatus = payload.tax_exempt_status;
    this.skipAutomaticSecVet = payload.skip_automatic_sec_vet;
    this.mock = payload.mock;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string to identify Brand Registration.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Brand Registration resource.
   */
  accountSid: string;
  /**
   * A2P Messaging Profile Bundle BundleSid.
   */
  customerProfileBundleSid: string;
  /**
   * A2P Messaging Profile Bundle BundleSid.
   */
  a2pProfileBundleSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * Type of brand. One of: \"STANDARD\", \"SOLE_PROPRIETOR\". SOLE_PROPRIETOR is for the low volume, SOLE_PROPRIETOR campaign use case. There can only be one SOLE_PROPRIETOR campaign created per SOLE_PROPRIETOR brand. STANDARD is for all other campaign use cases. Multiple campaign use cases can be created per STANDARD brand.
   */
  brandType: string;
  status: BrandRegistrationStatus;
  /**
   * Campaign Registry (TCR) Brand ID. Assigned only after successful brand registration.
   */
  tcrId: string;
  /**
   * DEPRECATED. A reason why brand registration has failed. Only applicable when status is FAILED.
   */
  failureReason: string;
  /**
   * A list of errors that occurred during the brand registration process.
   */
  errors: Array<Record<string, object>>;
  /**
   * The absolute URL of the Brand Registration resource.
   */
  url: string;
  /**
   * The secondary vetting score if it was done. Otherwise, it will be the brand score if it\'s returned from TCR. It may be null if no score is available.
   */
  brandScore: number;
  /**
   * DEPRECATED. Feedback on how to improve brand score
   */
  brandFeedback: Array<BrandRegistrationBrandFeedback>;
  identityStatus: BrandRegistrationIdentityStatus;
  /**
   * Publicly traded company identified in the Russell 3000 Index
   */
  russell3000: boolean;
  /**
   * Identified as a government entity
   */
  governmentEntity: boolean;
  /**
   * Nonprofit organization tax-exempt status per section 501 of the U.S. tax code.
   */
  taxExemptStatus: string;
  /**
   * A flag to disable automatic secondary vetting for brands which it would otherwise be done.
   */
  skipAutomaticSecVet: boolean;
  /**
   * A boolean that specifies whether brand should be a mock or not. If true, brand will be registered as a mock brand. Defaults to false if no value is provided.
   */
  mock: boolean;
  links: Record<string, string>;

  private get _proxy(): BrandRegistrationContext {
    this._context =
      this._context ||
      new BrandRegistrationContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a BrandRegistrationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BrandRegistrationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BrandRegistrationInstance) => any
  ): Promise<BrandRegistrationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a BrandRegistrationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BrandRegistrationInstance
   */
  update(
    callback?: (error: Error | null, item?: BrandRegistrationInstance) => any
  ): Promise<BrandRegistrationInstance> {
    return this._proxy.update(callback);
  }

  /**
   * Access the brandRegistrationOtps.
   */
  brandRegistrationOtps(): BrandRegistrationOtpListInstance {
    return this._proxy.brandRegistrationOtps;
  }

  /**
   * Access the brandVettings.
   */
  brandVettings(): BrandVettingListInstance {
    return this._proxy.brandVettings;
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
      customerProfileBundleSid: this.customerProfileBundleSid,
      a2pProfileBundleSid: this.a2pProfileBundleSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      brandType: this.brandType,
      status: this.status,
      tcrId: this.tcrId,
      failureReason: this.failureReason,
      errors: this.errors,
      url: this.url,
      brandScore: this.brandScore,
      brandFeedback: this.brandFeedback,
      identityStatus: this.identityStatus,
      russell3000: this.russell3000,
      governmentEntity: this.governmentEntity,
      taxExemptStatus: this.taxExemptStatus,
      skipAutomaticSecVet: this.skipAutomaticSecVet,
      mock: this.mock,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BrandRegistrationSolution {}

export interface BrandRegistrationListInstance {
  _version: V1;
  _solution: BrandRegistrationSolution;
  _uri: string;

  (sid: string): BrandRegistrationContext;
  get(sid: string): BrandRegistrationContext;

  /**
   * Create a BrandRegistrationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BrandRegistrationInstance
   */
  create(
    params: BrandRegistrationListInstanceCreateOptions,
    callback?: (error: Error | null, item?: BrandRegistrationInstance) => any
  ): Promise<BrandRegistrationInstance>;

  /**
   * Streams BrandRegistrationInstance records from the API.
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
   * @param { BrandRegistrationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: BrandRegistrationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: BrandRegistrationListInstanceEachOptions,
    callback?: (
      item: BrandRegistrationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of BrandRegistrationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BrandRegistrationPage) => any
  ): Promise<BrandRegistrationPage>;
  /**
   * Lists BrandRegistrationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BrandRegistrationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BrandRegistrationInstance[]) => any
  ): Promise<BrandRegistrationInstance[]>;
  list(
    params: BrandRegistrationListInstanceOptions,
    callback?: (error: Error | null, items: BrandRegistrationInstance[]) => any
  ): Promise<BrandRegistrationInstance[]>;
  /**
   * Retrieve a single page of BrandRegistrationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BrandRegistrationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BrandRegistrationPage) => any
  ): Promise<BrandRegistrationPage>;
  page(
    params: BrandRegistrationListInstancePageOptions,
    callback?: (error: Error | null, items: BrandRegistrationPage) => any
  ): Promise<BrandRegistrationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BrandRegistrationListInstance(
  version: V1
): BrandRegistrationListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as BrandRegistrationListInstance;

  instance.get = function get(sid): BrandRegistrationContext {
    return new BrandRegistrationContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/a2p/BrandRegistrations`;

  instance.create = function create(
    params: BrandRegistrationListInstanceCreateOptions,
    callback?: (error: Error | null, items: BrandRegistrationInstance) => any
  ): Promise<BrandRegistrationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["customerProfileBundleSid"] === null ||
      params["customerProfileBundleSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['customerProfileBundleSid']\" missing."
      );
    }

    if (
      params["a2PProfileBundleSid"] === null ||
      params["a2PProfileBundleSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['a2PProfileBundleSid']\" missing."
      );
    }

    let data: any = {};

    data["CustomerProfileBundleSid"] = params["customerProfileBundleSid"];

    data["A2PProfileBundleSid"] = params["a2PProfileBundleSid"];
    if (params["brandType"] !== undefined)
      data["BrandType"] = params["brandType"];
    if (params["mock"] !== undefined)
      data["Mock"] = serialize.bool(params["mock"]);
    if (params["skipAutomaticSecVet"] !== undefined)
      data["SkipAutomaticSecVet"] = serialize.bool(
        params["skipAutomaticSecVet"]
      );

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new BrandRegistrationInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | BrandRegistrationListInstancePageOptions
      | ((error: Error | null, items: BrandRegistrationPage) => any),
    callback?: (error: Error | null, items: BrandRegistrationPage) => any
  ): Promise<BrandRegistrationPage> {
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
        new BrandRegistrationPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: BrandRegistrationPage) => any
  ): Promise<BrandRegistrationPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new BrandRegistrationPage(
          instance._version,
          payload,
          instance._solution
        )
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

export class BrandRegistrationPage extends Page<
  V1,
  BrandRegistrationPayload,
  BrandRegistrationResource,
  BrandRegistrationInstance
> {
  /**
   * Initialize the BrandRegistrationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: BrandRegistrationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BrandRegistrationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BrandRegistrationResource): BrandRegistrationInstance {
    return new BrandRegistrationInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
