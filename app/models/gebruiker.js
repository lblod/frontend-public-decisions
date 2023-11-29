import Model, { attr, hasMany } from '@ember-data/model';

export default class Gebruiker extends Model {
  @attr uri;
  @attr voornaam;
  @attr achternaam;

  @hasMany('bestuurseenheid', { async: false, inverse: null }) bestuurseenheden;
  @hasMany('search-query', { async: true, inverse: 'user' }) searchQueries;

  get group() {
    return this.bestuurseenheden.at(0);
  }

  get fullName() {
    return `${this.voornaam} ${this.achternaam}`.trim();
  }
}
