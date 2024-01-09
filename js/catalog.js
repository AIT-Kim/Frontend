
document.addEventListener('DOMContentLoaded', function() {
    fetch('lessons.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('lessons-container');
            data.lessons.forEach(lesson => {
                const lessonDiv = document.createElement('div');
                lessonDiv.className = 'lesson';
                lessonDiv.innerHTML = `
                    <h2 class="lesson-title">${lesson.title}</h2>
                    <p>${lesson.description}</p>
                    <a href="${lesson.lmsLink}" target="_blank" class="lms-link">LMS link</a>
                `;

                lesson.examples.forEach(example => {
                    const exampleDiv = document.createElement('div');
                    exampleDiv.className = 'example';
                    exampleDiv.innerHTML = `
                        <a href="${example.url}" target="_blank">${example.name}</a>
                        <div class="example-description">${example.description}</div>
                    `;
                    lessonDiv.appendChild(exampleDiv);
                });

                container.appendChild(lessonDiv);
            });
        });
});
