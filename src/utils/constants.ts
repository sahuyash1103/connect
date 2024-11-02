export const HTTP_STATUS = {
  OK: 200, // Successful request
  CREATED: 201, // Resource created successfully
  ACCEPTED: 202, // Request accepted but not yet processed
  NO_CONTENT: 204, // Request succeeded, but no content to send
  PARTIAL_CONTENT: 206, // Partial content delivered (used for range requests)
  BAD_REQUEST: 400, // Client sent an invalid request
  UNAUTHORIZED: 401, // Authentication required
  FORBIDDEN: 403, // Server refuses to fulfill the request
  NOT_FOUND: 404, // Resource not found
  METHOD_NOT_ALLOWED: 405, // HTTP method not allowed for the requested resource
  CONFLICT: 409, // Request conflicts with the current state of the server
  GONE: 410, // Resource is no longer available
  LENGTH_REQUIRED: 411, // Content-Length header required
  PRECONDITION_FAILED: 412, // Precondition given in the request failed
  PAYLOAD_TOO_LARGE: 413, // Request entity too large
  URI_TOO_LONG: 414, // Request-URI too long
  UNSUPPORTED_MEDIA_TYPE: 415, // Media type not supported
  INTERNAL_SERVER_ERROR: 500, // Server encountered an error
  NOT_IMPLEMENTED: 501, // Server does not support the functionality required
  BAD_GATEWAY: 502, // Invalid response from an upstream server
  SERVICE_UNAVAILABLE: 503, // Server currently unable to handle request
  GATEWAY_TIMEOUT: 504, // Gateway timeout
  TOO_MANY_REQUESTS: 429, // Rate limiting: too many requests in a given time frame
  NETWORK_AUTHENTICATION_REQUIRED: 511, // Network authentication required
};
