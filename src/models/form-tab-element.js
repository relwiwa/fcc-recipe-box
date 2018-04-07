export default class FormTabElement {
  constructor(label, options, placeholder, required, requirement, type, validation) {
    if (options !== null) {
      this.options = options;
    }
    this.label = label;
    this.placeholder = placeholder;
    this.required = required;
    this.requirement = requirement;
    this.type = type;
    this.validation = validation;
  }
}
