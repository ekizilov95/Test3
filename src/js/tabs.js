function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

  function hideTabs() {
    tabsContent.forEach((tab) => {
      tab.style.display = "none";
    });
  }

  function showTab(i = 0) {
    tabsContent[i].style.display = "flex";
  }

  hideTabs();
  showTab();

  tabsParent.addEventListener("click", (e) => {
    let target = e.target;

    if (target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((triger, i) => {
        if (triger === target) {
          hideTabs();
          showTab(i);
        }
      });
    }
  });
}

export default tabs;
