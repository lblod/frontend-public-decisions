import Route from '@ember/routing/route';
import { service } from '@ember/service';
import config from 'frontend-public-decisions/config/environment';

export default class IndexRoute extends Route {
  @service router;
  @service session;

  beforeModel(transition) {
    const authenticationDisabled = ['false', 'False', 'FALSE', false].includes(
      config.authEnabled,
    );
    if (!authenticationDisabled) {
      this.session.requireAuthentication(transition, 'login');
    }

    this.router.transitionTo('search.submissions');
    super.beforeModel(...arguments);
  }
}
