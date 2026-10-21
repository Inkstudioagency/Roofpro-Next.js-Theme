import type { KeyboardEvent } from "react";

/**
 * Props that make a non-button element (one that has to contain block content, which <button>
 * can't) behave like a button: focusable, announced as a button, and activated by Enter or Space.
 */
export function pressable(onPress: () => void) {
  return {
    role: "button",
    tabIndex: 0,
    onClick: onPress,
    onKeyDown: (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      onPress();
    },
  } as const;
}
