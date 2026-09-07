# Design System Layout Guidelines

## Universal Rules
```
Stronger relationships mean smaller spacing.
Higher importance means larger spacing.

## Padding Standards

### Core Principles

Padding follows 4px increments across five levels:

| Level | Value | Class | Usage |
| XS | 2px | `p-0.5` | Decorative elements |
| S | 8px | `p-2` | Navigation menus |
| M | 12px | `px-3` | Form inputs |
| L | 16px | `p-4` | Information panels |
| XL | 24px | `p-6` | Important containers |

### Component Type Quick Reference

```
Buttons:    px-3 (small) / px-4 (medium) / px-8 (large)
Containers: p-4 (compact) / p-6 (comfortable)
Tags:       py-0.5 + px-2 to px-2.5
Navigation: p-2
```

### Selection Principles

1. **Follow importance:** decoration -> function -> content -> page.
2. **Follow density:** compact -> standard -> comfortable.
3. **Stay consistent:** use the same spacing for components of the same type.

## Gap and Space Standards

### Core Principles

Element spacing also follows 4px increments across seven levels:

| Level | Value | Gap class | Space class | Usage |
| XS | 2px | `gap-0.5` | `space-y-0.5` | Closely related elements, such as an input and its hint |
| S | 4px | `gap-1` | `space-y-1` | Detail information groups |
| M | 8px | `gap-2` | `space-y-2` | Functional element groups |
| L | 12px | `gap-3` | `space-y-3` | Content sections |
| XL | 16px | `gap-4` | `space-y-4` | Primary sections |
| XXL | 24px | `gap-6` | `space-y-6` | Section groups |
| XXXL | 40px | `gap-10` | `space-y-10` | Page-level groups |

### Layout Type Quick Reference

```
Horizontal gaps: gap-1 (tight) / gap-2 (standard) / gap-4 (loose) / gap-8 (page sections)
Vertical space:  space-y-4 (content) / space-y-6 (sections) / space-y-10 (page level)
Inside controls: gap-1.5 (filters) / gap-2 (button icons)
```

### Selection Principles

1. **Use Gap for horizontal spacing:** `gap-*` handles horizontal relationships between elements.
2. **Use Space for vertical spacing:** `space-y-*` handles vertical relationships between elements.
3. **Let relationships determine spacing:** more related elements should be closer together.

### Common Composition Patterns

```
Card list:       space-y-6 (between cards) + p-4 (card padding) + gap-2 (card contents)
Page layout:     gap-8 (horizontal sections) + space-y-10 (vertical sections)
				 + space-y-6 (subsections) + space-y-4 (content)
Button group:    gap-2 (related buttons) / gap-4 (independent buttons)
Information panel: p-4 (content) + space-y-3 (information groups) + gap-2 (label groups)

## Additional Principles

### Prefer Semantic Components

```
Form layouts      -> use the Form component system (see form.tsx)
Information panels -> use BlockLayout instead of a bare div
```

### Supplemental Spacing Rules

```
Do not use indentation to represent hierarchy.
Do not use margin for spacing.
Use gap, space, and padding to create layout spacing.
```

### Alignment Principle

```
Prioritize visual balance. Avoid stacking every element on one side of a page.
```

## Layout Component Usage

### Page Development Starting Point

```
1. PageContainer -> outer page container; handles background and scrolling
2. PageHeader    -> page title area; supports three variants
3. BlockLayout   -> content section container; replaces a bare div
```

### PageContainer

```
variant="full"       -> wide layout
variant="centered"   -> narrow layout
padding="default"   -> standard spacing (outer p-2)
padding="nav-layout" -> special horizontal navigation layout (pb-4 px-6)
```

### PageHeader

```
variant="title-only"         -> title only (simple pages)
variant="title-with-actions" -> title + action buttons (list pages)
variant="title-with-toolbar" -> title + toolbar (filters + actions)
PageHeaderWrapper             -> configures the header and spacing automatically
```

### BlockLayout

```
padding="default" -> 24px padding (comfortable mode)
padding="sm"      -> 16px padding (compact mode)
shadow="sm"       -> standard shadow (default)
shadow="none"     -> no shadow (for nested layouts)
Usage              -> information panels, form containers, and card content
```
# Design System Layout Guidelines

## Universal Rules
```
Stronger relationships，smaller spacing
Higher importance，larger spacing
```

## Padding（Padding）Standards

### Core principles


|------|---|------|------|
| XS | 2px | `p-0.5` | Decorative element |
| S | 8px | `p-2` | Navigation menu |
| M | 12px | `px-3` | Form input |
| L | 16px | `p-4` | Information panel |
| XL | 24px | `p-6` | Important container |

### Component type quick reference

```
Button: px-3(Small) / px-4(Medium) / px-8(Large)
Text: p-4(Text) / p-6(Text)
Text: py-0.5 + px-2~2.5
Text: p-2
```

### Text

1. **Text**：Text → Text → Content → Page
2. **Text**：Text → Standards → Text
3. **Text**：Text

## Text（Gap/Space）Standards

### Core principles

Text **4px multiple increments**Text，Text7Text：

| Text | Text | GapText | SpaceText | Usage |
|------|---|---------|-----------|------|
| XS | 2px | `gap-0.5` | `space-y-0.5` | Text(Text) |
| S | 4px | `gap-1` | `space-y-1` | Text |
| M | 8px | `gap-2` | `space-y-2` | Text |
| L | 12px | `gap-3` | `space-y-3` | Text |
| XL | 16px | `gap-4` | `space-y-4` | Text |
| XXL | 24px | `gap-6` | `space-y-6` | Text |
| XXXL | 40px | `gap-10` | `space-y-10` | Text |

###

```
Text (Gap): gap-1(Text) / gap-2(Standards) / gap-4(Text) / gap-8(Text)
Text (Space): space-y-4(Content) / space-y-6(Text) / space-y-10(Text)
Text: gap-1.5(Filter) / gap-2(ButtonText)
```

### 

1. **TextGap**：`gap-*` Text
2. **TextSpace**：`space-y-*` Text
3. **Text**：Text

### 

```
Text: space-y-6 (Text) + p-4 (Text) + gap-2 (Text)
Text: gap-8 (Text) + space-y-10 (Text) + space-y-6 (Text) + space-y-4 (Content)
Text: gap-2 (Text) / gap-4 (Text)
Information panel: p-4 (Content) + space-y-3 (Text) + gap-2 (Text)
``` 

## Text（Text）

### Text
```
Text → Text Form Text（Text form.tsx）
Information panel → Text BlockLayout，Text div
```

### Text
```
Text → Text
Text margin Text → Text gap/space/padding Text
```

### Text
```
Text，Text，Text
```

## Text

### Text
```
1. PageContainer → Text，Text
2. PageHeader → Text，Text
3. BlockLayout → Text，Text div
```

### PageContainer（Text）
```
variant="full"     → Text
variant="centered" → Text
padding="default"  → Text（p-2 Text）
padding="nav-layout" → [Text]Text（pb-4 px-6）
```

### PageHeader（Text）
```
variant="title-only"         → Text（Text）
variant="title-with-actions" → Title+Text（Text）
variant="title-with-toolbar" → Title+Text（Filter+Text）
Component：PageHeaderWrapper Text，Text
```

### BlockLayout（Text）
```
padding="default" → 24px Padding（Text）
padding="sm"      → 16px Padding（Text）
shadow="sm"       → Text（Default）
shadow="none"     → Text（Text）
Usage：Information panel、Text、Text
```