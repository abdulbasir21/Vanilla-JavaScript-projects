        const timeElement = document.getElementById('time');
        const dateElement = document.getElementById('date');
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');

        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const dateString = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

            timeElement.textContent = timeString;
            dateElement.textContent = dateString;
        }

        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            const isDarkTheme = document.body.classList.contains('dark-theme');
            
            if (isDarkTheme) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            } else {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }

        // Update clock every second
        setInterval(updateClock, 1000);

        // Initial clock update
        updateClock();

        // Theme toggle event listener
        themeToggle.addEventListener('click', toggleTheme);
  