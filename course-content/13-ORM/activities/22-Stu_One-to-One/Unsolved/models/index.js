const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  // this defines the foriegn key on the reader
  // cascade deletes on reader if it is deleted on libraycard
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
// weare exporting both the REader and LibraryCard class?
module.exports = { Reader, LibraryCard };
