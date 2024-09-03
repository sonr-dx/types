// @generated by protoc-gen-es v2.0.0 with parameter "target=js"
// @generated from file did/v1/query.proto (package did.v1, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_did_v1_genesis } from "./genesis_pb";
import { file_did_v1_models } from "./models_pb";
import { file_google_api_annotations } from "../../google/api/annotations_pb";

/**
 * Describes the file did/v1/query.proto.
 */
export const file_did_v1_query = /*@__PURE__*/
  fileDesc("ChJkaWQvdjEvcXVlcnkucHJvdG8SBmRpZC52MSJlCgxRdWVyeVJlcXVlc3QSCwoDZGlkGAEgASgJEg4KBm9yaWdpbhgCIAEoCRIPCgdzdWJqZWN0GAMgASgJEicKC2NyZWRlbnRpYWxzGAQgAygLMhIuZGlkLnYxLkNyZWRlbnRpYWwiNQoTUXVlcnlQYXJhbXNSZXNwb25zZRIeCgZwYXJhbXMYASABKAsyDi5kaWQudjEuUGFyYW1zIicKFVF1ZXJ5QWNjb3VudHNSZXNwb25zZRIOCgZleGlzdHMYASABKAgihAEKGFF1ZXJ5Q3JlZGVudGlhbHNSZXNwb25zZRIPCgdzdWNjZXNzGAEgASgIEg8KB3N1YmplY3QYAiABKAkSDgoGb3JpZ2luGAMgASgJEicKC2NyZWRlbnRpYWxzGAQgAygLMhIuZGlkLnYxLkNyZWRlbnRpYWwSDQoFZXJyb3IYBSABKAkiOgoUUXVlcnlSZXNvbHZlUmVzcG9uc2USIgoIZG9jdW1lbnQYASABKAsyEC5kaWQudjEuRG9jdW1lbnQiOAoUUXVlcnlTZXJ2aWNlUmVzcG9uc2USIAoHc2VydmljZRgBIAEoCzIPLmRpZC52MS5TZXJ2aWNlIlIKElF1ZXJ5VG9rZW5SZXNwb25zZRIPCgdzdWNjZXNzGAEgASgIEhwKBXRva2VuGAIgASgLMg0uZGlkLnYxLlRva2VuEg0KBWVycm9yGAMgASgJMqcECgVRdWVyeRJQCgZQYXJhbXMSFC5kaWQudjEuUXVlcnlSZXF1ZXN0GhsuZGlkLnYxLlF1ZXJ5UGFyYW1zUmVzcG9uc2UiE4LT5JMCDRILL2RpZC9wYXJhbXMSXAoIQWNjb3VudHMSFC5kaWQudjEuUXVlcnlSZXF1ZXN0Gh0uZGlkLnYxLlF1ZXJ5QWNjb3VudHNSZXNwb25zZSIbgtPkkwIVEhMvZGlkL3tkaWR9L2FjY291bnRzEnYKC0NyZWRlbnRpYWxzEhQuZGlkLnYxLlF1ZXJ5UmVxdWVzdBogLmRpZC52MS5RdWVyeUNyZWRlbnRpYWxzUmVzcG9uc2UiL4LT5JMCKRInL3NlcnZpY2Uve29yaWdpbn0ve3N1YmplY3R9L2NyZWRlbnRpYWxzElEKB1Jlc29sdmUSFC5kaWQudjEuUXVlcnlSZXF1ZXN0GhwuZGlkLnYxLlF1ZXJ5UmVzb2x2ZVJlc3BvbnNlIhKC0+STAgwSCi9kaWQve2RpZH0SWAoHU2VydmljZRIULmRpZC52MS5RdWVyeVJlcXVlc3QaHC5kaWQudjEuUXVlcnlTZXJ2aWNlUmVzcG9uc2UiGYLT5JMCExIRL3NlcnZpY2Uve29yaWdpbn0SSQoFVG9rZW4SFC5kaWQudjEuUXVlcnlSZXF1ZXN0GhouZGlkLnYxLlF1ZXJ5VG9rZW5SZXNwb25zZSIOgtPkkwIIIgYvdG9rZW5CJFoiZ2l0aHViLmNvbS9vbnNvbnIvaHdheS94L2RpZC90eXBlc2IGcHJvdG8z", [file_did_v1_genesis, file_did_v1_models, file_google_api_annotations]);

/**
 * Describes the message did.v1.QueryRequest.
 * Use `create(QueryRequestSchema)` to create a new message.
 */
export const QueryRequestSchema = /*@__PURE__*/
  messageDesc(file_did_v1_query, 0);

/**
 * Describes the message did.v1.QueryParamsResponse.
 * Use `create(QueryParamsResponseSchema)` to create a new message.
 */
export const QueryParamsResponseSchema = /*@__PURE__*/
  messageDesc(file_did_v1_query, 1);

/**
 * Describes the message did.v1.QueryAccountsResponse.
 * Use `create(QueryAccountsResponseSchema)` to create a new message.
 */
export const QueryAccountsResponseSchema = /*@__PURE__*/
  messageDesc(file_did_v1_query, 2);

/**
 * Describes the message did.v1.QueryCredentialsResponse.
 * Use `create(QueryCredentialsResponseSchema)` to create a new message.
 */
export const QueryCredentialsResponseSchema = /*@__PURE__*/
  messageDesc(file_did_v1_query, 3);

/**
 * Describes the message did.v1.QueryResolveResponse.
 * Use `create(QueryResolveResponseSchema)` to create a new message.
 */
export const QueryResolveResponseSchema = /*@__PURE__*/
  messageDesc(file_did_v1_query, 4);

/**
 * Describes the message did.v1.QueryServiceResponse.
 * Use `create(QueryServiceResponseSchema)` to create a new message.
 */
export const QueryServiceResponseSchema = /*@__PURE__*/
  messageDesc(file_did_v1_query, 5);

/**
 * Describes the message did.v1.QueryTokenResponse.
 * Use `create(QueryTokenResponseSchema)` to create a new message.
 */
export const QueryTokenResponseSchema = /*@__PURE__*/
  messageDesc(file_did_v1_query, 6);

/**
 * Query provides defines the gRPC querier service.
 *
 * @generated from service did.v1.Query
 */
export const Query = /*@__PURE__*/
  serviceDesc(file_did_v1_query, 0);
