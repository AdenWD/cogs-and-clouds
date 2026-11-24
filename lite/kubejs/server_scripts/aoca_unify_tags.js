// All of Create Aeronautics - extra tags so Almost Unified can merge duplicates.
// Create: New Age registers its own copper wire without the shared c: tag,
// so Almost Unified can't see it. Tagging it lets New Age's wire merge with
// Crafts & Additions' copper wire like Electroenergetics' and Power Grid's do.
ServerEvents.tags('item', event => {
  event.add('c:wires', 'create_new_age:copper_wire')
  event.add('c:wires/copper', 'create_new_age:copper_wire')
})
