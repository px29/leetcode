function deleteField (obj, field) {
    if (obj.hasOwnProperty(field)) {
        delete obj[field];
    }
}

module.exports = deleteField;