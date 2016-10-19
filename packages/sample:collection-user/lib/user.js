/* global Users:true, Collections, SimpleSchema, Permission, Meteor, BasicSchema,
CreatedAt, ModifiedAt, Avatar */

Users = Meteor.users;

Collections.Users = Users;

const Schema = {};

Schema.profile = new SimpleSchema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  // avatar: {
  //   type: Avatar,
  //   optional: true,
  // }
});
Schema.email = new SimpleSchema({
  address: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  verified: {
    type: Boolean,
    optional: true,
  }
});


Schema.user = {
  services: {
    type: Object,
    blackbox: true,
    optional: true,
  },
  emails: {
    type: [Schema.email],
    optional: true,
  },
  profile: {
    type: Schema.profile,
  },
  status: {
    type: Object,
    blackbox: true,
    optional: true,
  },
  createdAt: CreatedAt,
  modifiedAt: ModifiedAt,
};

// Schema.user.permission.optional = true;

Users.attachSchema(new SimpleSchema(Schema.user));
