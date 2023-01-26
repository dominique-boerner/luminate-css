import "./button.component";

export default {
  title: "Atoms/Buttons",
};

export const Buttons = () => {
  return `
    <div class="flex flex-col">
        <h2 class="label">Button states</h2>
        <div class="element-row">
            <span class="label">Default:</span>
            <neon-button primary label="Button"></neon-button>
            <neon-button primary rounded label="Button"></neon-button>
            <neon-button secondary label="Button"></neon-button>
            <neon-button secondary rounded label="Button"></neon-button>
            <neon-button text label="Button"></neon-button>
        </div>
        <div class="element-row">
            <span class="label">Hover:</span>
            <neon-button primary glowing label="Button"></neon-button>
            <neon-button primary glowing rounded label="Button"></neon-button>
            <neon-button secondary glowing label="Button"></neon-button>
            <neon-button secondary glowing rounded label="Button"></neon-button>
            <neon-button text glowing label="Button"></neon-button>
        </div>
        <h2 class="label">Error:</h2>
        <div class="element-row">
            <neon-button primary error label="Button"></neon-button>
            <neon-button secondary error rounded label="Button"></neon-button>
            <neon-button text error  label="Button"></neon-button>
        </div>
    </div>
  `;
};
