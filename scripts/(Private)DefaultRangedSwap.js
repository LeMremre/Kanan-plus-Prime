// Swaps the default skill used when using ranged weapons. (Blade3575)

// Reference:
// 12 52 00 00 75 05 B8 09 52 00
// // // // // CC CC B8 09 52 00 00 C3
// Note: Uncomment the line with the skill replacement you wish to use to toggle.

var pattern = scan('B8 09 52 00 00 C3');
// patch(pattern.add(1), [0x09, 0x52]); // Ranged Attack (ID: 21001)
// patch(pattern.add(1), [0x0A, 0x52]); // Magnum Shot (ID: 21002)
// patch(pattern.add(1), [0x0E, 0x52]); // Support Shot (ID: 21006)
patch(pattern.add(1), [0x0C, 0x52]); // Arrow Revolver (ID: 21004)
// patch(pattern.add(1), [0x0F, 0x52]); // Mirage Missle (ID: 21007)
// patch(pattern.add(1), [0xF6, 0x59]); // Final Shot (ID: 23030)
// patch(pattern.add(1), [0xFA, 0xA7]); // Elven Magic Missle (ID: 43002) 
// patch(pattern.add(1), [0xFB, 0x55]); // Crash Shot (ID: 22011)
// patch(pattern.add(1), [0x14, 0x52]); // Spider Shot (ID: 21012)
// patch(pattern.add(1), [0x16, 0x52]); // Urgent Shot (ID: 21014) Buggy