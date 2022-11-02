class Student{
  static count = 0;
  constructor(name, age, phone_number, board_marks){
    this.name = name;
    this.age = age;
    this.phone_number = phone_number;
    this.board_marks = board_marks;
    Student.countStudents();
  }
  
  //count the number of objects created----------------
  
  static countStudents(){
    return Student.count++;
  }
  checkEligible(){
    if(board_marks > 40)
      console.log('Eligible');
    else
      console.log('Not eligible');
  }

  eligibleforplacements(min_marks){
     return (min_age)=>{
         if(this.board_marks > min_marks && this.age > min_age)
           return true;
         else
         return false;  
     }
  }
  
}

var stud1 = new Student('Amit', 23, 24224234, 90);
var stud2 = new Student('Satish', 21, 21827516, 80);
var stud3 = new Student('Ankur', 26, 45346653, 53);
var stud4 = new Student('Anil', 27, 45243244, 63);
var stud5 = new Student('Alok', 19, 34535645, 97);

console.log(stud1.eligibleforplacements(60)(20));
console.log(stud2.eligibleforplacements(60)(20));
console.log(stud3.eligibleforplacements(60)(20));
console.log(stud4.eligibleforplacements(60)(20));
console.log(stud5.eligibleforplacements(60)(20));

//console.log(Student.countStudents());