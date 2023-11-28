import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ContactFormComponent extends Component {
  @tracked subject = null;

  subjectOptions = [
    {
      label: 'Een functionaliteit, bug of probleem',
      subject: 'Functionaliteit, bug of probleem',
    },
    {
      label: 'Een inhoudelijke vraag',
      subject: 'Inhoudelijke vraag',
    },
  ];

  get canSend() {
    return Boolean(this.subject);
  }

  get mailto() {
    if (this.canSend) {
      return `mailto:LoketLokaalBestuur@vlaanderen.be?subject=${this.subject} - Publieke besluitendatabank`;
    } else {
      return '';
    }
  }
}
