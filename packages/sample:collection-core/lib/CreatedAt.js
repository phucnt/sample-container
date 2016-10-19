/* global CreatedAt:true, SimpleSchema*/

CreatedAt = {
  type: Date,
  autoValue() {
    if (this.value) {
      return this.value;
    } else if (this.isInsert) {
      return new Date();
    } else if (this.isUpdate) {
      return {$setOnInsert: new Date()};
    } else {
      this.unset();
    }
  },
};
