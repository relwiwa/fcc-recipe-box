export default class FormTabElement {
  constructor(legend, options, placeholder, required, requirement, type, validation) {
    if (options !== null) {
      this.options = options;
    }
    this.legend = legend;
    this.placeholder = placeholder;
    this.required = required;
    this.requirement = requirement;
    this.type = type;
    this.validation = validation;
  }
}
