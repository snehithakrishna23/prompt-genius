console.log("Dashboard V2 Loaded");

function updateDashboardStats() {

  const history =
    JSON.parse(
      localStorage.getItem("genius_history_list") || "[]"
    );

  const bookmarks =
    JSON.parse(
      localStorage.getItem("genius_bookmarks_list") || "[]"
    );

  const totalPrompts =
    document.getElementById("total-prompts-stat");

  const savedPrompts =
    document.getElementById("saved-prompts-stat");

  if (totalPrompts) {
    totalPrompts.textContent = history.length;
  }

  if (savedPrompts) {
    savedPrompts.textContent = bookmarks.length;
  }
}

document.addEventListener("DOMContentLoaded", () => {

  updateDashboardStats();

  // New Prompt
  const newPromptBtn =
    document.getElementById("quick-new-prompt");

  if (newPromptBtn) {

    newPromptBtn.addEventListener("click", () => {

      const input =
        document.getElementById("user-input");

      if (input) {
        input.value = "";
        input.focus();
      }

    });

  }
  // Saved Prompts

const savedPromptBtn =
  document.getElementById("quick-saved-prompts");

if(savedPromptBtn){

  savedPromptBtn.addEventListener("click", () => {

    const savedTab =
      document.getElementById("tab-saved");

    if(savedTab){

      savedTab.click();

    }

  });

}

});