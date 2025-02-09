// syntax: objectName.methodName()

let student = {
  name: "Govind",
  class: "12th",
  div: "A",
  studentDetails: function () {
    return this.name + " " + this.class + " " + this.div + " ";
  },
};

console.log("Student " + student.studentDetails());
