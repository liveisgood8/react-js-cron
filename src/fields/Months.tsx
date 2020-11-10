import React, { useMemo } from 'react'

import { MonthsProps, Unit } from '../types'
import CustomSelect from '../components/CustomSelect'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'
import { UNITS } from '../constants'

export default function Months(props: MonthsProps) {
  const {
    value,
    setValue,
    locale,
    className,
    humanizeLabels,
    disabled,
    readOnly,
    period,
  } = props
  const optionsList = locale.months || DEFAULT_LOCALE_EN.months

  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-field': true,
        'react-js-cron-months': true,
        [`${className}-field`]: !!className,
        [`${className}-months`]: !!className,
      }),
    [className]
  )

  const units = {
    ...UNITS[3],
    alt: locale.monthsAlt || UNITS[3].alt,
  } as Unit

  return (
    <div className={internalClassName}>
      {locale.prefixMonths !== '' && (
        <span>{locale.prefixMonths || DEFAULT_LOCALE_EN.prefixMonths}</span>
      )}

      <CustomSelect
        placeholder={locale.emptyMonths || DEFAULT_LOCALE_EN.emptyMonths}
        optionsList={optionsList}
        grid={false}
        value={value}
        unit={units}
        setValue={setValue}
        locale={locale}
        className={className}
        humanizeLabels={humanizeLabels}
        disabled={disabled}
        readOnly={readOnly}
        period={period}
      />
    </div>
  )
}
