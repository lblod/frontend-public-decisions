import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Bestuurseenheid extends Model {
  @attr naam;
  @attr('string-set') alternatieveNaam;

  @belongsTo('werkingsgebied', { async: false, inverse: 'bestuurseenheid' })
  werkingsgebied;

  @belongsTo('werkingsgebied', {
    async: false,
    inverse: 'bestuurseenhedenInProvincie',
  })
  provincie;

  @belongsTo('bestuurseenheid-classificatie-code', {
    async: false,
    inverse: null,
  })
  classificatie;

  @hasMany('bestuursorgaan', { async: false, inverse: 'bestuurseenheid' })
  bestuursorganen;

  get fullName() {
    return `${this.classificatie.label} ${this.naam}`.trim();
  }
}
