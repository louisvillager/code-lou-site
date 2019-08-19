# Marc Rivers

## Pathfinder Mod Tracker

My final project for the Code Louisville Front End Web Development course is the Pathfinder Mod Tracker.  It was created using HTML, CSS, and JavaScript.  Bootstrap and jQuery are additional frameworks that were implemented.  There are no special instructions for running the code.

There are two HTML pages within the project:

- Pathfinder Mod Tracker
- Personal and Contact

---

**Pathfinder Mod Tracker**

On this page, the user enters a number in each ability score field and hits the `Set Scores` button to generate the ability modifiers.  Scores of 10-11 are considered "average" and have no modifier (or a modifier score of 0).  For every two-number interval, the modifier goes up or down by 1.  For example, scores of 8-9 have a modifier of -1, while scores of 12-13 have a modifier of +1, etc.

Each checkbox simulates the effect on each ability score modifier for a given condition.  For example, "Righteous Might" adjusts the Strength and Constitution scores by +4 and the Dexterity Score by -2 (not reflected in this form).  These changes adjust the *MODIFIERS* by -2 to Str and Con, and -1 to Dex.

Only modifiers that are currently different from their normal (base) value display in the "New Mod" field.  If a New (adjusted) modifier is equal to its Base (normal) value, only the Base modifier displays.

---

**Personal and Contact**

A simple page with some brief personal info, including my phone number and email for contact purposes.