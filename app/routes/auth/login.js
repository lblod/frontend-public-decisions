import Route from '@ember/routing/route';
import { service } from '@ember/service';
import ENV from 'frontend-public-decisions/config/environment';

export default class AuthLoginRoute extends Route {
  @service router;
  @service session;

  activate() {
    if (this.session.prohibitAuthentication('index')) {
      // We do the transition in the `routeDidChange` event because it is the only place I've found where the browser history has been correctly updated.
      // The Route hooks run too soon, which means the previous history entry would be replaced instead.
      this.router.on('routeDidChange', () => {
        if (isValidAcmidmConfig(ENV.acmidm)) {
          window.location.replace(buildLoginUrl(ENV.acmidm));
        } else {
          this.router.replaceWith('mock-login');
        }
      });
    }
  }
}

function isValidAcmidmConfig(acmidmConfig) {
  return Object.values(acmidmConfig).every(
    (value) =>
      typeof value === 'string' &&
      value.trim() !== '' &&
      !value.startsWith('{{'),
  );
}

function buildLoginUrl({ authUrl, clientId, authRedirectUrl, scope }) {
  let loginUrl = new URL(authUrl);
  let searchParams = loginUrl.searchParams;

  searchParams.append('response_type', 'code');
  searchParams.append('client_id', clientId);
  searchParams.append('redirect_uri', authRedirectUrl);
  searchParams.append('scope', scope);

  return loginUrl.href;
}
