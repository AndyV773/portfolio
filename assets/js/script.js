const copyIcon = document.getElementsByClassName("copy-icon");

// updates the copyright section to the most recent year
document.getElementById("year").textContent = new Date().getFullYear();

if (copyIcon.length > 0) {

    for (let icon of copyIcon) {
        icon.addEventListener("click", (event) => {
            const icon = event.target; // the clicked icon
            const wrapper = icon.closest(".code-block"); // find the parent container
            const msg = wrapper.querySelector(".copy-msg");  // scoped message
            const code = wrapper.querySelector("code");      // scoped code block

            // Copy code
            // navigator.clipboard.writeText(code.innerText.trim());
            if (navigator.clipboard) {
                navigator.clipboard.writeText(code.innerText.trim()).catch(err => {
                console.error("Clipboard copy failed", err);
                });
            }

            msg.classList.add('show');

            icon.classList.remove('fa-copy');
            icon.classList.add('fa-check');
            icon.style.pointerEvents = "none";

            setTimeout(() => {
                msg.classList.remove('show');
            }, 1000); // 1 second

            setTimeout(() => {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-copy');
                icon.style.pointerEvents = "auto";
            }, 3000); // 3 seconds
        })
    }
}
