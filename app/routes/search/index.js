import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SearchIndexRoute extends Route {
  @service router;

  beforeModel(/* transition */) {
    this.router.transitionTo('search.submissions');
  }
}
