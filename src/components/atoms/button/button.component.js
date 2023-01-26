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
    return this.getAttribute("primary");
  }

  get secondary() {
    return this.getAttribute("secondary");
  }

  get text() {
    return this.getAttribute("text");
  }

  get label() {
    return this.getAttribute("label");
  }

  get rounded() {
    return this.getAttribute("rounded");
  }

  get glowing() {
    return this.getAttribute("glowing");
  }

  constructor() {
    super();
    this.innerHTML = `
    <button class="btn ${this._getButtonClass()}">${this.label}</button>`;
  }

  _getButtonClass() {
    return [
      this._getModeClass(),
      this._getRoundedClass(),
      this._getGlowingClass(),
    ].join(" ");
  }

  _getModeClass() {
    if (this.primary !== null) {
      return "btn--primary";
    }

    if (this.secondary !== null) {
      return "btn--secondary";
    }

    if (this.text !== null) {
      return "btn--text";
    }
  }

  _getRoundedClass() {
    if (this.rounded !== null) {
      return "btn--rounded";
    }
  }

  _getGlowingClass() {
    if (this.glowing !== null) {
      return "btn--glow";
    }
  }
}

customElements.define("neon-button", NeonButton);
