
    let isDark = true;

    function toggleTheme() {
      const body = document.body;
      isDark = !isDark;

      if (isDark) {
        body.style.backgroundColor = '#0f0f0f';
        body.style.color = '#ffffff';
      } else {
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#000000';
      }
    }
  