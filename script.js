/* =====================================================
   PROFILE DROPDOWN
===================================================== */

function toggleProfileMenu() {

    document
        .getElementById("profileDropdown")
        .classList.toggle("active");

}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {

    document
        .getElementById("mobileNav")
        .classList.toggle("active");

}


/* =====================================================
   CREATE POST MODAL
===================================================== */

function openPostModal() {

    document
        .getElementById("postModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";

}


function closePostModal() {

    document
        .getElementById("postModal")
        .classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   PUBLISH POST
===================================================== */

function publishPost() {

    const text =
        document.getElementById("postText").value.trim();

    if (!text) {

        showToast("Write something before publishing");

        return;

    }

    closePostModal();

    document.getElementById("postText").value = "";

    showToast("Your post has been published");

}


/* =====================================================
   LIKE POST
===================================================== */

function likePost(button) {

    const span = button.querySelector("span");

    if (button.classList.contains("liked")) {

        button.classList.remove("liked");

        button.innerHTML = "♡ <span>Like</span>";

    } else {

        button.classList.add("liked");

        button.innerHTML = "♥ <span>Liked</span>";

        showToast("Post liked");

    }

}


/* =====================================================
   APPLY TO PROJECT
===================================================== */

function applyProject(button) {

    if (button.classList.contains("applied")) {

        showToast("You already applied");

        return;

    }

    button.classList.add("applied");

    button.textContent = "✓ Applied";

    button.style.background = "#39775a";

    showToast("Application submitted");

}


/* =====================================================
   CONNECT
===================================================== */

function connect(button) {

    if (button.classList.contains("connected")) {

        button.classList.remove("connected");

        button.textContent = "+";

        showToast("Connection removed");

    } else {

        button.classList.add("connected");

        button.textContent = "✓";

        showToast("Connection request sent");

    }

}


/* =====================================================
   FEED
===================================================== */

function changeFeed(button) {

    if (button.dataset.changed) {

        button.innerHTML = "Latest <span>⌄</span>";

        button.dataset.changed = "";

    } else {

        button.innerHTML = "Popular <span>⌄</span>";

        button.dataset.changed = "true";

    }

}


/* =====================================================
   SEARCH
===================================================== */

const search =
    document.getElementById("globalSearch");

search.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const value = search.value.trim();

        if (!value) {

            showToast("Enter something to search");

            return;

        }

        showToast(`Searching for "${value}"`);

    }

});


/* =====================================================
   TOAST
===================================================== */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById("toast");

    const text =
        document.getElementById("toastMessage");

    text.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function() {

        toast.classList.remove("show");

    }, 2500);

}


/* =====================================================
   CLOSE MODAL ON BACKGROUND
===================================================== */

document
    .getElementById("postModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePostModal();

        }

    });


/* =====================================================
   CLOSE DROPDOWN WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", function(event) {

    const dropdown =
        document.getElementById("profileDropdown");

    const profileButton =
        document.querySelector(".profile-mini");

    if (
        !dropdown.contains(event.target) &&
        !profileButton.contains(event.target)
    ) {

        dropdown.classList.remove("active");

    }

});