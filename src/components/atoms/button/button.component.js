/**
 * NeonButton
 *
 * @param primary - if the button is primary
 * @param secondary - if the button is secondary
 * @param text - if the button is text
 * @param label - the label of the button
 * @param rounded - if the button has rounded borders
 * @param glowing - if the button is glowing
 */
class NeonButton extends HTMLElement {
  get primary() {
    return this.hasAttribute("primary");
  }

  get secondary() {
    return this.hasAttribute("secondary");
  }

  get text() {
    return this.hasAttribute("text");
  }

  get error() {
    return this.hasAttribute("error");
  }

  get label() {
    return this.getAttribute("label");
  }

  get rounded() {
    return this.hasAttribute("rounded");
  }

  get glowing() {
    return this.hasAttribute("glowing");
  }

  constructor() {
    super();
    this.innerHTML = `
        <button class="${this._generateButtonClassList()}">
            ${this.label}
        </button>
    `;
  }

  _generateButtonClassList() {
    const btnBaseClass = "btn";
    return [
      btnBaseClass,
      this._getModeClass(),
      this._getRoundedClass(),
      this._getGlowingClass(),
      this._getSeverityClass(),
    ].join(" ");
  }

  _getModeClass() {
    if (this.primary) {
      return "btn--primary";
    }

    if (this.secondary) {
      return "btn--secondary";
    }

    if (this.text) {
      return "btn--text";
    }
  }

  _getSeverityClass() {
    if (this.error) {
      return "btn--error";
    }
  }

  _getRoundedClass() {
    if (this.rounded) {
      return "btn--rounded";
    }
  }

  _getGlowingClass() {
    if (this.glowing) {
      return "btn--glow";
    }
  }
}

customElements.define("neon-button", NeonButton);
