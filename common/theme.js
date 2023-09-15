const setTheme = theme => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
};

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    setTheme(savedTheme);
    document.getElementById('theme-select').value = savedTheme;
  }

  document.getElementById('theme-select').addEventListener('change', function() {
    setTheme(this.value);
  });
});
