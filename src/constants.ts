import { ShortcutsValues, Unit } from './types'

export const SUPPORTED_SHORTCUTS: ShortcutsValues[] = [
  {
    name: '@yearly',
    value: '0 0 1 1 *',
  },
  {
    name: '@annually',
    value: '0 0 1 1 *',
  },
  {
    name: '@monthly',
    value: '0 0 1 * *',
  },
  {
    name: '@weekly',
    value: '0 0 * * 0',
  },
  {
    name: '@daily',
    value: '0 0 * * *',
  },
  {
    name: '@midnight',
    value: '0 0 * * *',
  },
  {
    name: '@hourly',
    value: '0 * * * *',
  },
]
export const UNITS: Unit[] = [
  {
    type: 'minutes',
    min: 0,
    max: 59,
    total: 60,
  },
  {
    type: 'hours',
    min: 0,
    max: 23,
    total: 24,
  },
  {
    type: 'month-days',
    min: 1,
    max: 31,
    total: 31,
  },
  {
    type: 'months',
    min: 1,
    max: 12,
    total: 12,
    alt: [
      'ЯНВ',
      'ФЕВ',
      'МАР',
      'АПР',
      'МАЙ',
      'ИЮН',
      'ИЮЛ',
      'АВГ',
      'СЕН',
      'ОКТ',
      'НОЯ',
      'ДЕК',
    ],
  },
  {
    type: 'week-days',
    min: 0,
    max: 6,
    total: 7,
    alt: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
  },
]
