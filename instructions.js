function loadInstruction(fileName, elementId){
    fetch(fileName)
        .then(response => response.text())
        .then(html => document.getElementById(elementId).innerHTML = html);
}

const studentInstructions = [
    "reg_in_system",
    "load_files",
    "work_with_videoconference",
    "work_with_questions",
    "work_with_glossary",
    "work_with_tracking",
    "change_password",
    "roles"
];

const teacherInstructions = [
    "login_el",
    "login_int",
    "create_test",
    "create_file",
    "create_chat",
    "create_survey",
    "create_link",
    "add_users_to_course"

]

document.addEventListener("DOMContentLoaded", () => {
    const pageName = location.pathname.split("/").pop()
    if (pageName == "main_student.html"){
        studentInstructions.forEach(name => {
            loadInstruction(
                `students_instructions_templates/${name}.html`,
                name
            );
        });
    }
    else if (pageName == "main_teacher.html"){
        teacherInstructions.forEach(name => {
            loadInstruction(
                `teachers_instructions_templates/${name}.html`,
                name
            );
        });
    }
});