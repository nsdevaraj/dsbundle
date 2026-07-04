import * as React from 'react';

/**
 * Persona — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Persona.stories.tsx).
 */
export interface PersonaProps {
  name: string;
  secondaryText?: string;
  tertiaryText?: string;
  quaternaryText?: string;
  presence?: "available" | "away" | "busy" | "do-not-disturb" | "offline" | "out-of-office" | "unknown";
  presenceTitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  size?: "small" | "medium" | "large" | "extra-small" | "extra-large" | "huge";
  textAlignment?: "center" | "start";
  /** Position of the text block relative to the avatar — "after" (default) | "below" | "before" */
  textPosition?: "before" | "after" | "below";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}

export declare const Persona: React.ComponentType<PersonaProps>;
