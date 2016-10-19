/* global ModifiedAt:true, SimpleSchema*/

ModifiedAt = {
  type: Date,
  autoValue() {
    if (this.isUpdate || !this.value) {
      return new Date();
    }
  }
};
