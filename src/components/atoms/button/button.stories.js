import "./button.component";

export default {
  title: "Atoms/Buttons",
};

export const Buttons = () => {
  return `
    <div class="flex flex-col">
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
    </div>
  `;
};
