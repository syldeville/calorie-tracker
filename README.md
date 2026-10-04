# Calorie tracker

## Sending meals to Apple Health

The ❤️ button in the header sends every meal not sent before to Apple Health, using a shortcut in the iPhone Shortcuts app. Workouts are not sent, so your watch's active calories aren't counted twice. Each meal is logged at 12:00 on its day.

A meal counts as sent the moment you tap ❤️. If you correct or delete it afterwards, fix it in the Health app by hand.

### One-time shortcut setup

In the Shortcuts app, tap **+** to create a new shortcut.

**1. Let it accept input.** Tap **No** in "Receive No input from Nowhere" and turn on **Text** only. If it asks where from, pick **Share Sheet**. It should now read something like "Receive Text from Share Sheet".

**2. Add actions.** Tap "Search Actions" at the bottom, type the name, and tap the action to add it.

| # | Search for | Shows as | Set the blue words to |
|---|---|---|---|
| 1 | `Get Dictionary from Input` | Get dictionary from **Input** | **Shortcut Input** |
| 2 | `Get Dictionary Value` | Get **Value** for **Key** in **Dictionary** | Key → `meals` |
| 3 | `Repeat with Each` | Repeat with each item in **Dictionary Value** | (already right) |

**3. Inside the repeat**, between "Repeat with each" and "End Repeat":

| # | Search for | Set it to |
|---|---|---|
| 4 | `Get Dictionary Value` | Key → `date`, Dictionary → **Repeat Item** |
| 5 | `Get Dictionary Value` | Key → `calories`, Dictionary → **Repeat Item** |
| 6 | `Log Health Sample` | Type → **Dietary Energy**, Value → the **Dictionary Value** from step 5. Tap **Show More** → Date → **Select Variable** → tap the step 4 action |

Repeat steps 5–6 for the other nutrients, changing only the key and the type:

| Key | Type | Unit |
|---|---|---|
| `protein` | Protein | g |
| `carbs` | Carbohydrates | g |
| `fat` | Total Fat | g |
| `fiber` | Fiber | g |

**4.** Name the shortcut exactly **Calorie Tracker to Health**.

The first run asks for Health access; tap Allow.

### Troubleshooting

- **Samples are dated today instead of the meal's day:** add a **Get Dates from Input** action right after step 4 and use its output as each sample's Date.
- **"Nothing new to send to Health":** every meal has already been sent.
- **A sync failed partway:** those meals are still marked as sent and won't go again on the next tap.
