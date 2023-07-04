export default  function updateStudentGradeByCity(students, city, newGrades){
    return students.map((student) => {
        if (student.loscation === city) {
            const gradeobj = newGrades.find((grade) => grade.studentId === student.id);
            if (gradeobj) {
                return {...student, grade:gradeobj.grade};
            }
        }
        return student;
    });
}
 