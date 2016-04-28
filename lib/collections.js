Schemas = {}
Schemas.Type1 = new SimpleSchema({
    type: {
        type: String,
        defaultValue: 'Type1',
        autoform: {
            type: 'hidden',
            label: false
        }
    },
    value1: {
        type: String,
        label: 'Value 1'
    },
});
Schemas.Type2 = new SimpleSchema({
    type: {
        type: String,
        defaultValue: 'Type2',
        autoform: {
            type: 'hidden',
            label: false
        }
    },
    value2: {
        type: Number,
        label: 'Value 2'
    }
});

Things = new Meteor.Collection('things');
Things.attachSchema(Schemas.Type1, { selector: {type: 'Type1'}});
Things.attachSchema(Schemas.Type2, { selector: {type: 'Type2'}});
