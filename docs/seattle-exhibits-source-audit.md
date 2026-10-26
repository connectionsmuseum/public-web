# Seattle content and exhibit source audit

Reviewed 2026-10-25. This is a guide to what our draft covers and what deserves another pass, not a fixed inventory of everything visitors will see. The large switches stay in place; smaller displays move, and volunteers keep adding working functions. Confirm current display and operating status with the museum before making specific promises.

## Sources read

- THG's [Seattle overview](https://www.telcomhistory.org/ConnectionsSeattle.html), [electronic switching](https://www.telcomhistory.org/seattleElectronic.html), and [outside plant](https://www.telcomhistory.org/seattleOutside.html) pages.
- The museum wiki's [Seattle inventory and history](https://wiki.connections.museum/w/CMS:Connections_Museum), [Panel switch](https://wiki.connections.museum/w/CMS:Panel_Switch), [outside plant display](https://wiki.connections.museum/w/CMS:Outside_Plant_Display), [power board](https://wiki.connections.museum/w/CMS:Power_Board), and [ringing and tone plant](https://wiki.connections.museum/w/CMS:803C_Ringing_and_Tone_Plant) pages. The inventory has an edit history; use it as a starting point and recheck display status with volunteers.

## Represented in this branch

- `/seattle.html` keeps visit logistics and now links to the detailed exhibit and library routes. Its old `#exhibits` and `#library` anchors remain useful for incoming links.
- `/seattle/exhibits.html` covers the working Panel and No. 1 Crossbar, step-by-step and Crossbar PBX equipment, 3ESS, building terminals, open wire, and splices. It now also explains the power board and the ringing and tone plant: these working support systems and the people who rebuilt them deserve to stand beside the switch stories.
- `/seattle/library.html` holds the reference library's purpose, research contact, and contribution guidance. The Seattle library is described as cataloged on THG's overview page; confirm any access procedure before adding hours or a public catalog link.
- The exhibit introduction now names the Telephone Pioneers' work moving and reconnecting the switch frames. Copy also explains that smaller displays and functions change, so it does not read like a permanent catalog.

## Strong next stories

1. **How the Panel survived and works.** The [wiki account](https://wiki.connections.museum/w/CMS:Panel_Switch) traces Seattle's 1923 dial-service change, the heavy move from Parkway, and years of rewiring and restoration at the museum. A dedicated route under `src/pages/seattle/exhibits/` could pair a plain-language call path with that labor history and a current photo.
2. **Follow a call across both floors.** The [museum inventory](https://wiki.connections.museum/w/CMS:Connections_Museum) distinguishes third-floor mechanical and early communications equipment from second-floor PBXs, electronic switches, phones, and outside plant. A flexible visitor guide could connect the systems without promising every small display will be in the same spot next Sunday.
3. **The network outside the building.** The [outside plant display](https://wiki.connections.museum/w/CMS:Outside_Plant_Display) includes a manhole training simulation, high-pair-count and undersea cables, conduits, splice cases, and field tools. Those are a concrete way to show the physical skill behind a phone call.
4. **More than switches.** The inventory lists teletypes, long-lines microwave equipment, retro computers, mobile and payphone collections, key systems, and more. Pick a few objects with known stories and good photographs rather than publishing a brittle list of everything on the floor.
5. **Images and demonstrations.** The repo has a Panel photo but lacks current images for the 3ESS, PBXs, outside plant, power board, and tone plant. Photograph what visitors can actually see now, credit the photographer, and describe what can be demonstrated.

## Claims to check before adding more copy

- THG's electronic page says the 3ESS could serve up to 4,500 lines and describes the 5ESS and electronic key systems; it also marks its 1ESS as **not on display**. Do not present those other systems as running Seattle exhibits solely on the strength of an older online page.
- The older electronic page and newer museum sources differ on the Parkway Panel's replacement year. The [Panel wiki page](https://wiki.connections.museum/w/CMS:Panel_Switch) says 1974. Keep the replacement date out of visitor copy until the equipment team confirms it.
- The older site's mechanical switching, telephone, telegraph/teletype, and other-equipment subpages were unavailable to the web reader. An automatic browser safety review also rejected access to those pages, so this audit does not claim to have read them. Their category names are known from the overview; individual exhibit descriptions need another source or text supplied by the museum.
