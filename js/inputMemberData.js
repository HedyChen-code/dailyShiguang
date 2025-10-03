;(() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach((form) => {
          form.addEventListener(
            'submit',
            (event) => {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }

              form.classList.add('was-validated')
            },
            false
          )
        })
      })()

      // 動態生成年份 (1950-2024)
      const yearSelect = document.getElementById('year')
      const currentYear = new Date().getFullYear()
      for (let year = currentYear; year >= 1950; year--) {
        const option = document.createElement('option')
        option.value = year
        option.textContent = year
        if (year === 1995) option.selected = true
        yearSelect.appendChild(option)
      }

      // 動態生成月份 (1-12)
      const monthSelect = document.getElementById('month')
      for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option')
        option.value = month
        option.textContent = month
        if (month === 10) option.selected = true
        monthSelect.appendChild(option)
      }

      // 動態生成日期 (1-31)
      const daySelect = document.getElementById('day')
      function updateDays() {
        const year = parseInt(yearSelect.value) || 2000
        const month = parseInt(monthSelect.value) || 1
        const daysInMonth = new Date(year, month, 0).getDate()

        const currentDay = daySelect.value
        daySelect.innerHTML = '<option value="">日期</option>'

        for (let day = 1; day <= daysInMonth; day++) {
          const option = document.createElement('option')
          option.value = day
          option.textContent = day
          if (day == currentDay || (day === 5 && !currentDay)) {
            option.selected = true
          }
          daySelect.appendChild(option)
        }
      }

      updateDays()
      yearSelect.addEventListener('change', updateDays)
      monthSelect.addEventListener('change', updateDays)