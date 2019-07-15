class DateCalculator {
  constructor() {
    this._todayDate = new Date()
    this._todayDate.setMonth(this._todayDate.getMonth() - 1) // for natural calculations
    this._Locale = {
      En: ['month', 'months', 'months', 'year', 'years', 'years', 'less than']
    }

    // experience dates
    this._EndCoding = {
      from: new Date(2017, 6),
      to: this._todayDate
    }
    this._StartCoding = {
      from: new Date(2016, 0),
      to: new Date(2014, 5)
    }
  }

  renderWithLocale = lang => {
      let currentLang = this._Locale.En
      this._render(currentLang)
  }

  _render = currentLang => {
    document.getElementById(
      'total-exp-it'
    ).innerHTML = this.generateDiffWithLang(
      this._StartCoding.from,
      this._EndCoding.to,
      currentLang
    )
  }

  generateDiffWithLang = (date1, date2, locale) => {
    const diff = Math.ceil(date2.getTime() - date1.getTime())
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    let months = Math.ceil(days / 31) + 1

    let message = ''
    if (months <= 12) {
      message += this._formatMonthsWithLocale(months, locale)
    } else {
      let yearsFromMonths = Math.floor(months / 12)
      let extraMonths = months - yearsFromMonths * 12
      if (yearsFromMonths == 1) {
        if (extraMonths == 0) {
          message += yearsFromMonths + ' ' + locale[3]
        } else {
          message += yearsFromMonths + ' ' + locale[3]
          message += ', ' + this._formatMonthsWithLocale(extraMonths, locale)
        }
      } else if (yearsFromMonths > 1 && yearsFromMonths < 5) {
        if (extraMonths == 0) {
          message += yearsFromMonths + ' ' + locale[4]
        } else {
          message += yearsFromMonths + ' ' + locale[4]
          message += ', ' + this._formatMonthsWithLocale(extraMonths, locale)
        }
      } else {
        if (extraMonths == 0) {
          message += yearsFromMonths + ' ' + locale[5]
        } else {
          message += yearsFromMonths + ' ' + locale[5]
          message += ', ' + this._formatMonthsWithLocale(extraMonths, locale)
        }
      }
    }

    return '(' + message + ')'
  }

  _formatMonthsWithLocale = (months, locale) => {
    let message = ''
    if (months <= 12) {
      if (months < 1) {
        message += locale[6] + ' 1 ' + locale[0]
      } else if (months == 1) {
        message += '1 ' + locale[0]
      } else if (months > 1 && months < 5) {
        message += months + ' ' + locale[1]
      } else if (months >= 5 && months < 12) {
        message += months + ' ' + locale[2]
      } else if (months == 12) {
        message += '1 ' + locale[3]
      }
    }
    return message
  }
}

export default DateCalculator
