import React from 'react';

interface ColorItemProps {
  name: string;
  description?: string;
  colorClass: string;
  textColorClass?: string;
  hslValue?: string;
}

const ColorItem: React.FC<ColorItemProps> = ({ 
  name, 
  description, 
  colorClass, 
  hslValue 
}) => (
  <div className="flex items-center space-x-4 mb-4">
    <div 
      className={`w-12 h-12 rounded-lg border border-border ${colorClass}`}
    />
    <div className="flex-1">
      <div className="font-medium text-foreground">{name}</div>
      {description && (
        <div className="text-sm text-muted-foreground">{description}</div>
      )}
      {hslValue && (
        <div className="text-xs text-muted-foreground font-mono">{hslValue}</div>
      )}
    </div>
  </div>
);

interface ColorSectionProps {
  title: string;
  children: React.ReactNode;
}

const ColorSection: React.FC<ColorSectionProps> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-lg font-medium text-foreground mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {children}
    </div>
  </div>
);

export const ColorPalette: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-background">
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-foreground mb-2">Color palette</h1>
        <p className="text-muted-foreground">
          A reference for the colors used throughout the design system.
        </p>
      </div>

      {/* Primary Theme Colors */}
      <ColorSection title="Primary Theme Colors">
        <div>
          <ColorItem
            name="Background"
            description="Page and application background"
            colorClass="bg-background"
            hslValue="oklch(1 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Foreground"
            description="Default text and icon color"
            colorClass="bg-foreground"
            hslValue="oklch(0.145 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Primary"
            description="Primary actions and emphasis"
            colorClass="bg-primary"
            hslValue="#015eff"
          />
        </div>
        <div>
          <ColorItem
            name="Primary Foreground"
            description="Text on primary surfaces"
            colorClass="bg-primary-foreground"
            hslValue="oklch(0.985 0 0)"
          />
        </div>
      </ColorSection>

      {/* Secondary & Accent Colors */}
      <ColorSection title="Secondary & Accent Colors">
        <div>
          <ColorItem
            name="Secondary"
            description="Secondary surfaces and controls"
            colorClass="bg-secondary"
            hslValue="oklch(0.97 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Secondary Foreground"
            description="Text on secondary surfaces"
            colorClass="bg-secondary-foreground"
            hslValue="oklch(0.205 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Accent"
            description="Highlights and hover states"
            colorClass="bg-accent"
            hslValue="oklch(0.97 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Accent Foreground"
            description="Text on accent surfaces"
            colorClass="bg-accent-foreground"
            hslValue="oklch(0.205 0 0)"
          />
        </div>
      </ColorSection>

      {/* UI Component Colors */}
      <ColorSection title="UI Component Colors">
        <div>
          <ColorItem
            name="Card"
            description="Theme token"
            colorClass="bg-card border"
            hslValue="oklch(1 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Card Foreground"
            description="Theme token"
            colorClass="bg-card-foreground"
            hslValue="oklch(0.145 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Popover"
            description="Theme token"
            colorClass="bg-popover border"
            hslValue="oklch(1 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Popover Foreground"
            description="Theme token"
            colorClass="bg-popover-foreground"
            hslValue="oklch(0.145 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Muted"
            description="Theme token"
            colorClass="bg-muted"
            hslValue="oklch(0.97 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Muted Foreground"
            description="Theme token"
            colorClass="bg-muted-foreground"
            hslValue="oklch(0.556 0 0)"
          />
        </div>
      </ColorSection>

      {/* Utility & Form Colors */}
      <ColorSection title="Utility & Form Colors">
        <div>
          <ColorItem
            name="Border"
            description="Theme token"
            colorClass="bg-border"
            hslValue="oklch(0.922 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Input"
            description="Theme token"
            colorClass="bg-input"
            hslValue="oklch(0.922 0 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Ring"
            description="Theme token"
            colorClass="bg-ring"
            hslValue="oklch(0.708 0 0)"
          />
        </div>
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <div 
              className="w-12 h-12 border border-border flex items-center justify-center text-xs text-muted-foreground rounded-lg"
            >
              Radius
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground">Radius</div>
              <div className="text-xs text-muted-foreground font-mono">0.5rem</div>
            </div>
          </div>
        </div>
      </ColorSection>

      {/* Status & Feedback Colors */}
      <ColorSection title="Status & Feedback Colors">
        <div>
          <ColorItem
            name="Destructive"
            description="Border and ring color"
            colorClass="bg-destructive"
            hslValue="oklch(0.577 0.245 27.325)"
          />
        </div>
        <div>
          <ColorItem
            name="Destructive Foreground"
            description="Theme token"
            colorClass="bg-destructive-foreground"
            hslValue="oklch(1 0)"
          />
        </div>
        <div>
          <ColorItem
            name="Success"
            description="Theme token"
            colorClass="bg-success"
            hslValue="hsl(142 76% 36%)"
          />
        </div>
        <div>
          <ColorItem
            name="Success Foreground"
            description="Theme token"
            colorClass="bg-success-foreground"
            hslValue="hsl(0 0% 100%)"
          />
        </div>
        <div>
          <ColorItem
            name="Warning"
            description="Theme token"
            colorClass="bg-warning"
            hslValue="hsl(45 93% 47%)"
          />
        </div>
        <div>
          <ColorItem
            name="Warning Foreground"
            description="Theme token"
            colorClass="bg-warning-foreground"
            hslValue="hsl(0 0% 100%)"
          />
        </div>
      </ColorSection>

      {/* Chart & Visualization Colors */}
      <ColorSection title="Chart & Visualization Colors">
        <div>
          <ColorItem
            name="Chart 1"
            description="Spacing token 1"
            colorClass="bg-chart-1"
            hslValue="hsl(213 77% 78%)"
          />
        </div>
        <div>
          <ColorItem
            name="Chart 2"
            description="Spacing token 2"
            colorClass="bg-chart-2"
            hslValue="hsl(213 77% 66%)"
          />
        </div>
        <div>
          <ColorItem
            name="Chart 3"
            description="Spacing token 3"
            colorClass="bg-chart-3"
            hslValue="hsl(213 82% 54%)"
          />
        </div>
        <div>
          <ColorItem
            name="Chart 4"
            description="Spacing token 4"
            colorClass="bg-chart-4"
            hslValue="hsl(213 82% 47%)"
          />
        </div>
        <div>
          <ColorItem
            name="Chart 5"
            description="Spacing token 5"
            colorClass="bg-chart-5"
            hslValue="hsl(213 75% 40%)"
          />
        </div>
      </ColorSection>

      {/* Layout & Container Colors */}
      <ColorSection title="Layout & Container Colors">
        <div>
          <ColorItem
            name="Container"
            description="Theme token"
            colorClass="bg-container border-container-border border"
            hslValue="hsl(0 0% 98.8%)"
          />
        </div>
        <div>
          <ColorItem
            name="Container Foreground"
            description="Theme token"
            colorClass="bg-container-foreground"
            hslValue="hsl(0 0% 4%)"
          />
        </div>
        <div>
          <ColorItem
            name="Block Layout"
            description="Theme token"
            colorClass="bg-block-layout border-block-layout-border border"
            hslValue="hsl(0 0% 100%)"
          />
        </div>
        <div>
          <ColorItem
            name="Block Layout Foreground"
            description="Theme token"
            colorClass="bg-block-layout-foreground"
            hslValue="hsl(0 0% 4%)"
          />
        </div>
      </ColorSection>

      {/* Sidebar Colors */}
      <ColorSection title="Sidebar Colors">
        <div>
          <ColorItem
            name="Sidebar"
            description="Theme token"
            colorClass="bg-sidebar"
            hslValue="hsl(0 0% 96.3%)"
          />
        </div>
        <div>
          <ColorItem
            name="Sidebar Foreground"
            description="Theme token"
            colorClass="bg-sidebar-foreground"
            hslValue="hsl(0 0% 4%)"
          />
        </div>
        <div>
          <ColorItem
            name="Sidebar Primary"
            description="Theme token"
            colorClass="bg-sidebar-primary"
            hslValue="hsl(0 0% 9%)"
          />
        </div>
        <div>
          <ColorItem
            name="Sidebar Accent"
            description="Theme token"
            colorClass="bg-sidebar-accent"
            hslValue="hsl(0 0% 93.7%)"
          />
        </div>
        <div>
          <ColorItem
            name="Sidebar Selected"
            description="Theme token"
            colorClass="bg-sidebar-selected"
            hslValue="hsl(0 0% 91%)"
          />
        </div>
      </ColorSection>
    </div>
  );
};

export default ColorPalette; 