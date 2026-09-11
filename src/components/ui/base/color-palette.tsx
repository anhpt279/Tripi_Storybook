import React from 'react';

interface ColorItemProps {
  name: string;
  description?: string;
  colorClass: string;
  textColorClass?: string;
  value?: string;
}

const ColorItem: React.FC<ColorItemProps> = ({
  name,
  description,
  colorClass,
  value,
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
      {value && (
        <div className="text-xs text-muted-foreground font-mono">{value}</div>
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

      <ColorSection title="Primary Theme Colors">
        <div>
          <ColorItem
            name="Background"
            description="Page and application background"
            colorClass="bg-background"
            value="#f2f6f3"
          />
        </div>
        <div>
          <ColorItem
            name="Foreground"
            description="Default text and icon color"
            colorClass="bg-foreground"
            value="#0c1812"
          />
        </div>
        <div>
          <ColorItem
            name="Primary"
            description="Primary actions and emphasis"
            colorClass="bg-primary"
            value="#038141"
          />
        </div>
        <div>
          <ColorItem
            name="Primary Foreground"
            description="Text on primary surfaces"
            colorClass="bg-primary-foreground"
            value="#ffffff"
          />
        </div>
      </ColorSection>

      <ColorSection title="Secondary & Accent Colors">
        <div>
          <ColorItem
            name="Secondary"
            description="Secondary surfaces and controls"
            colorClass="bg-secondary"
            value="#e7f3eb"
          />
        </div>
        <div>
          <ColorItem
            name="Secondary Foreground"
            description="Text on secondary surfaces"
            colorClass="bg-secondary-foreground"
            value="#055c30"
          />
        </div>
        <div>
          <ColorItem
            name="Accent"
            description="Highlights and hover states"
            colorClass="bg-accent"
            value="#daf3e4"
          />
        </div>
        <div>
          <ColorItem
            name="Accent Foreground"
            description="Text on accent surfaces"
            colorClass="bg-accent-foreground"
            value="#026b36"
          />
        </div>
      </ColorSection>

      <ColorSection title="UI Component Colors">
        <div>
          <ColorItem
            name="Card"
            description="Theme token"
            colorClass="bg-card border"
            value="#ffffff"
          />
        </div>
        <div>
          <ColorItem
            name="Card Foreground"
            description="Theme token"
            colorClass="bg-card-foreground"
            value="#0c1812"
          />
        </div>
        <div>
          <ColorItem
            name="Popover"
            description="Theme token"
            colorClass="bg-popover border"
            value="#ffffff"
          />
        </div>
        <div>
          <ColorItem
            name="Popover Foreground"
            description="Theme token"
            colorClass="bg-popover-foreground"
            value="#0c1812"
          />
        </div>
        <div>
          <ColorItem
            name="Muted"
            description="Theme token"
            colorClass="bg-muted"
            value="#e8eee9"
          />
        </div>
        <div>
          <ColorItem
            name="Muted Foreground"
            description="Theme token"
            colorClass="bg-muted-foreground"
            value="#5c6b62"
          />
        </div>
      </ColorSection>

      <ColorSection title="Utility & Form Colors">
        <div>
          <ColorItem
            name="Border"
            description="Theme token"
            colorClass="bg-border"
            value="#d5e3da"
          />
        </div>
        <div>
          <ColorItem
            name="Input"
            description="Theme token"
            colorClass="bg-input"
            value="#cfdcd4"
          />
        </div>
        <div>
          <ColorItem
            name="Ring"
            description="Theme token"
            colorClass="bg-ring"
            value="#038141"
          />
        </div>
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 border border-border flex items-center justify-center text-xs text-muted-foreground rounded-lg">
              Radius
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground">Radius</div>
              <div className="text-xs text-muted-foreground font-mono">0.75rem</div>
            </div>
          </div>
        </div>
      </ColorSection>

      <ColorSection title="Status & Feedback Colors">
        <div>
          <ColorItem
            name="Destructive"
            description="Error and destructive actions"
            colorClass="bg-destructive"
            value="#e11d48"
          />
        </div>
        <div>
          <ColorItem
            name="Destructive Foreground"
            description="Theme token"
            colorClass="bg-destructive-foreground"
            value="#ffffff"
          />
        </div>
        <div>
          <ColorItem
            name="Success"
            description="Theme token"
            colorClass="bg-success"
            value="#059669"
          />
        </div>
        <div>
          <ColorItem
            name="Success Foreground"
            description="Theme token"
            colorClass="bg-success-foreground"
            value="#ffffff"
          />
        </div>
        <div>
          <ColorItem
            name="Warning"
            description="Theme token"
            colorClass="bg-warning"
            value="#ca8a04"
          />
        </div>
        <div>
          <ColorItem
            name="Warning Foreground"
            description="Theme token"
            colorClass="bg-warning-foreground"
            value="#ffffff"
          />
        </div>
      </ColorSection>

      <ColorSection title="Chart & Visualization Colors">
        <div>
          <ColorItem
            name="Chart 1"
            description="Chart series 1"
            colorClass="bg-chart-1"
            value="#6ecf9a"
          />
        </div>
        <div>
          <ColorItem
            name="Chart 2"
            description="Chart series 2"
            colorClass="bg-chart-2"
            value="#038141"
          />
        </div>
        <div>
          <ColorItem
            name="Chart 3"
            description="Chart series 3"
            colorClass="bg-chart-3"
            value="#055c30"
          />
        </div>
        <div>
          <ColorItem
            name="Chart 4"
            description="Chart series 4"
            colorClass="bg-chart-4"
            value="#0a7a45"
          />
        </div>
        <div>
          <ColorItem
            name="Chart 5"
            description="Chart series 5"
            colorClass="bg-chart-5"
            value="#1b4332"
          />
        </div>
      </ColorSection>

      <ColorSection title="Layout & Container Colors">
        <div>
          <ColorItem
            name="Container"
            description="Theme token"
            colorClass="bg-container border-container-border border"
            value="#f7faf8"
          />
        </div>
        <div>
          <ColorItem
            name="Container Foreground"
            description="Theme token"
            colorClass="bg-container-foreground"
            value="#0c1812"
          />
        </div>
        <div>
          <ColorItem
            name="Block Layout"
            description="Theme token"
            colorClass="bg-block-layout border-block-layout-border border"
            value="#ffffff"
          />
        </div>
        <div>
          <ColorItem
            name="Block Layout Foreground"
            description="Theme token"
            colorClass="bg-block-layout-foreground"
            value="#0c1812"
          />
        </div>
      </ColorSection>

      <ColorSection title="Sidebar Colors">
        <div>
          <ColorItem
            name="Sidebar"
            description="Theme token"
            colorClass="bg-sidebar"
            value="#eef6f1"
          />
        </div>
        <div>
          <ColorItem
            name="Sidebar Foreground"
            description="Theme token"
            colorClass="bg-sidebar-foreground"
            value="#0c1812"
          />
        </div>
        <div>
          <ColorItem
            name="Sidebar Primary"
            description="Theme token"
            colorClass="bg-sidebar-primary"
            value="#038141"
          />
        </div>
        <div>
          <ColorItem
            name="Sidebar Accent"
            description="Theme token"
            colorClass="bg-sidebar-accent"
            value="#daf3e4"
          />
        </div>
        <div>
          <ColorItem
            name="Sidebar Selected"
            description="Theme token"
            colorClass="bg-sidebar-selected"
            value="#d5ebe0"
          />
        </div>
      </ColorSection>
    </div>
  );
};

export default ColorPalette;
