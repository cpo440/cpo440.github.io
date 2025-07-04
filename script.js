<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Select all nav links that start with #
        document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth" });
                    // Optionally, update the URL hash without jumping
                    history.replaceState(null, null, this.getAttribute('href'));
                }
            });
        })
    });
</script>