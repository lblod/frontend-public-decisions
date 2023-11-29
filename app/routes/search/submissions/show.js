import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SearchSubmissionsShowRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('submission', params.id, {
      include: ['organization.classificatie'].join(','),
    });
  }
}
