/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../../../V1";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../base/utility";

export interface StepContextContext {
  /**
   * Fetch a StepContextInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed StepContextInstance
   */
  fetch(
    callback?: (error: Error | null, item?: StepContextInstance) => any
  ): Promise<StepContextInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface StepContextContextSolution {
  flowSid: string;
  engagementSid: string;
  stepSid: string;
}

export class StepContextContextImpl implements StepContextContext {
  protected _solution: StepContextContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    flowSid: string,
    engagementSid: string,
    stepSid: string
  ) {
    if (!isValidPathParam(flowSid)) {
      throw new Error("Parameter 'flowSid' is not valid.");
    }

    if (!isValidPathParam(engagementSid)) {
      throw new Error("Parameter 'engagementSid' is not valid.");
    }

    if (!isValidPathParam(stepSid)) {
      throw new Error("Parameter 'stepSid' is not valid.");
    }

    this._solution = { flowSid, engagementSid, stepSid };
    this._uri = `/Flows/${flowSid}/Engagements/${engagementSid}/Steps/${stepSid}/Context`;
  }

  fetch(
    callback?: (error: Error | null, item?: StepContextInstance) => any
  ): Promise<StepContextInstance> {
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
        new StepContextInstance(
          operationVersion,
          payload,
          instance._solution.flowSid,
          instance._solution.engagementSid,
          instance._solution.stepSid
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

interface StepContextPayload extends StepContextResource {}

interface StepContextResource {
  account_sid: string;
  context: Record<string, object>;
  engagement_sid: string;
  flow_sid: string;
  step_sid: string;
  url: string;
}

export class StepContextInstance {
  protected _solution: StepContextContextSolution;
  protected _context?: StepContextContext;

  constructor(
    protected _version: V1,
    payload: StepContextResource,
    flowSid: string,
    engagementSid: string,
    stepSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.context = payload.context;
    this.engagementSid = payload.engagement_sid;
    this.flowSid = payload.flow_sid;
    this.stepSid = payload.step_sid;
    this.url = payload.url;

    this._solution = { flowSid, engagementSid, stepSid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the StepContext resource.
   */
  accountSid: string;
  /**
   * The current state of the Flow\'s Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution.
   */
  context: Record<string, object>;
  /**
   * The SID of the Engagement.
   */
  engagementSid: string;
  /**
   * The SID of the Flow.
   */
  flowSid: string;
  /**
   * The SID of the Step the context is associated with.
   */
  stepSid: string;
  /**
   * The absolute URL of the resource.
   */
  url: string;

  private get _proxy(): StepContextContext {
    this._context =
      this._context ||
      new StepContextContextImpl(
        this._version,
        this._solution.flowSid,
        this._solution.engagementSid,
        this._solution.stepSid
      );
    return this._context;
  }

  /**
   * Fetch a StepContextInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed StepContextInstance
   */
  fetch(
    callback?: (error: Error | null, item?: StepContextInstance) => any
  ): Promise<StepContextInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      context: this.context,
      engagementSid: this.engagementSid,
      flowSid: this.flowSid,
      stepSid: this.stepSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface StepContextSolution {
  flowSid: string;
  engagementSid: string;
  stepSid: string;
}

export interface StepContextListInstance {
  _version: V1;
  _solution: StepContextSolution;
  _uri: string;

  (): StepContextContext;
  get(): StepContextContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function StepContextListInstance(
  version: V1,
  flowSid: string,
  engagementSid: string,
  stepSid: string
): StepContextListInstance {
  if (!isValidPathParam(flowSid)) {
    throw new Error("Parameter 'flowSid' is not valid.");
  }

  if (!isValidPathParam(engagementSid)) {
    throw new Error("Parameter 'engagementSid' is not valid.");
  }

  if (!isValidPathParam(stepSid)) {
    throw new Error("Parameter 'stepSid' is not valid.");
  }

  const instance = (() => instance.get()) as StepContextListInstance;

  instance.get = function get(): StepContextContext {
    return new StepContextContextImpl(version, flowSid, engagementSid, stepSid);
  };

  instance._version = version;
  instance._solution = { flowSid, engagementSid, stepSid };
  instance._uri = ``;

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
