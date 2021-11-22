/**
 * @see https://github.com/panva/node-oidc-provider/blob/master/docs/events.md
 */
export const enum OidcProviderEvents {
  ACCESS_TOKEN_DESTROYED = 'access_token.destroyed',
  ACCESS_TOKEN_SAVED = 'access_token.saved',
  AUTHORIZATION_CODE_CONSUMED = 'authorization_code.consumed',
  AUTHORIZATION_CODE_DESTROYED = 'authorization_code.destroyed',
  AUTHORIZATION_CODE_SAVED = 'authorization_code.saved',
  AUTHORIZATION_ACCEPTED = 'authorization.accepted',
  AUTHORIZATION_ERROR = 'authorization.error',
  AUTHORIZATION_SUCCESS = 'authorization.success',
  BACKCHANNEL_ERROR = 'backchannel.error',
  BACKCHANNEL_SUCCESS = 'backchannel.success',
  JWKS_ERROR = 'jwks.error',
  CHECK_SESSION_ORIGIN_ERROR = 'check_session_origin.error',
  CHECK_SESSION_ERROR = 'check_session.error',
  CLIENT_CREDENTIALS_DESTROYED = 'client_credentials.destroyed',
  CLIENT_CREDENTIALS_SAVED = 'client_credentials.saved',
  DEVICE_CODE_CONSUMED = 'device_code.consumed',
  DEVICE_CODE_DESTROYED = 'device_code.destroyed',
  DEVICE_CODE_SAVED = 'device_code.saved',
  DISCOVERY_ERROR = 'discovery.error',
  END_SESSION_ERROR = 'end_session.error',
  END_SESSION_SUCCESS = 'end_session.success',
  GRANT_ERROR = 'grant.error',
  GRANT_REVOKED = 'grant.revoked',
  GRANT_SUCCESS = 'grant.success',
  INITIAL_ACCESS_TOKEN_DESTROYED = 'initial_access_token.destroyed',
  INITIAL_ACCESS_TOKEN_SAVED = 'initial_access_token.saved',
  INTERACTION_DESTROYED = 'interaction.destroyed',
  INTERACTION_ENDED = 'interaction.ended',
  INTERACTION_SAVED = 'interaction.saved',
  INTERACTION_STARTED = 'interaction.started',
  INTROSPECTION_ERROR = 'introspection.error',
  REPLAY_DETECTION_DESTROYED = 'replay_detection.destroyed',
  REPLAY_DETECTION_SAVED = 'replay_detection.saved',
  PUSHED_AUTHORIZATION_REQUEST_ERROR = 'pushed_authorization_request.error',
  PUSHED_AUTHORIZATION_REQUEST_SUCCESS = 'pushed_authorization_request.success',
  PUSHED_AUTHORIZATION_REQUEST_DESTROYED = 'pushed_authorization_request.destroyed',
  PUSHED_AUTHORIZATION_REQUEST_SAVED = 'pushed_authorization_request.saved',
  REFRESH_TOKEN_CONSUMED = 'refresh_token.consumed',
  REFRESH_TOKEN_DESTROYED = 'refresh_token.destroyed',
  REFRESH_TOKEN_SAVED = 'refresh_token.saved',
  REGISTRATION_ACCESS_TOKEN_DESTROYED = 'registration_access_token.destroyed',
  REGISTRATION_ACCESS_TOKEN_SAVED = 'registration_access_token.saved',
  REGISTRATION_CREATE_ERROR = 'registration_create.error',
  REGISTRATION_CREATE_SUCCESS = 'registration_create.success',
  REGISTRATION_DELETE_ERROR = 'registration_delete.error',
  REGISTRATION_DELETE_SUCCESS = 'registration_delete.success',
  REGISTRATION_READ_ERROR = 'registration_read.error',
  REGISTRATION_UPDATE_ERROR = 'registration_update.error',
  REGISTRATION_UPDATE_SUCCESS = 'registration_update.success',
  REVOCATION_ERROR = 'revocation.error',
  SERVER_ERROR = 'server_error',
  SESSION_DESTROYED = 'session.destroyed',
  SESSION_SAVED = 'session.saved',
  USERINFO_ERROR = 'userinfo.error',
}
