import Route from '@ember/routing/route';
import { service } from '@ember/service';
import ENV from 'frontend-public-decisions/config/environment';

export default class AuthLogoutRoute extends Route {
  @service router;
  @service session;

  async beforeModel(transition) {
    if (this.session.requireAuthentication(transition, 'login')) {
      try {
        const wasMockLoginSession = this.session.isMockLoginSession;
        await this.session.invalidate();

        const logoutUrl = wasMockLoginSession
          ? this.router.urlFor('mock-login')
          : ENV.acmidm.logoutUrl;

        // We do the transition in the `routeDidChange` event because it is the only place I've found where the browser history has been correctly updated.
        // The Route hooks run too soon, which means the previous history entry would be replaced instead.
        this.router.on('routeDidChange', () => {
          window.location.replace(logoutUrl);
        });
      } catch (error) {
        throw new Error(
          'Something went wrong while trying to remove the session on the server',
          {
            cause: error,
          },
        );
      }
    }
  }
}
