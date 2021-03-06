'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    db.createTable('music', {
        id: { type: 'int', autoIncrement: true, primaryKey: true },
        name: 'string',
        title: 'string',
        artist: 'string',
        active: { type: 'boolean', defaultValue: true },
        developer: { type: 'boolean', defaultValue: false },
        url_easy: 'string',
        url_basic: 'string',
        url_hard: 'string',
        url_demon: 'string',
        url_artwork: 'string',
        url_music: 'string',
        url_music_preview: 'string',
        created_at: 'datetime',
        updated_at: 'datetime'
    });
    return null;
};

exports.down = function (db) {
    db.dropTable('music');
    return null;
};

exports._meta = {
    "version": 1
};
