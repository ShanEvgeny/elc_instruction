function loadInstruction(fileName, elementId){
    fetch(fileName)
        .then(response => response.text())
        .then(html => document.getElementById(elementId).innerHTML = html);
}

const instructions = [
    "reg_in_system",
    "load_files",
    "work_with_videoconference",
    "work_with_questions",
    "work_with_glossary",
    "work_with_tracking",
    "change_password",
    "roles"
];

document.addEventListener("DOMContentLoaded", () => {
    instructions.forEach(name => {
        loadInstruction(
            `students_instructions_templates/${name}.html`,
            name
        );
    });
});
// instructions.forEach(name => {
//     loadInstruction(
//         `students_instructions_templates/${name}.html`,
//         name
//     );
// });