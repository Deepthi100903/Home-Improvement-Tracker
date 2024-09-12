// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('projectForm');
    const projectList = document.getElementById('projects');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const projectName = document.getElementById('projectName').value;
        const projectDescription = document.getElementById('projectDescription').value;
        const projectDate = document.getElementById('projectDate').value;

        if (projectName && projectDescription && projectDate) {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${projectName}</strong><br>
                <em>${projectDate}</em><br>
                ${projectDescription}
            `;

            projectList.appendChild(li);

            // Clear the form
            form.reset();
        }
    });
});