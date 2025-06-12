import { validateDate } from './validateDate';
import * as dictionary from '../utils/dictionary';

describe('validateDate', () => {
  let today: Date;

  // Выполняется перед каждым тестом
  beforeEach(() => {
    today = new Date();
    today.setHours(0, 0, 0, 0); // обнуляем время для корректного сравнения
  });

  test('пропускает корректную будущую дату в формате ДД.ММ.ГГГГ', () => {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 1);
    const futureDateString = `${futureDate.getDate().toString().padStart(2, '0')}.${(
      futureDate.getMonth() + 1
    )
    .toString()
    .padStart(2, '0')}.${futureDate.getFullYear()}`;

    const result = validateDate(futureDateString);
    expect(result.isValid).toBe(true);
    expect(result.message).toBe(dictionary.errors.date.valid);
  });

  test('возвращает ошибку, если дата не указана или не является строкой', () => {
    expect(validateDate('' as any)).toEqual({
      isValid: false,
      message: dictionary.errors.date.required,
    });

    expect(validateDate(null as any)).toEqual({
      isValid: false,
      message: dictionary.errors.date.required,
    });

    expect(validateDate(undefined as any)).toEqual({
      isValid: false,
      message: dictionary.errors.date.required,
    });
  });

  test('не пропускает дату с буквами или спецсимволами', () => {
    expect(validateDate('1a.05.2025')).toEqual({
      isValid: false,
      message: dictionary.errors.date.invalidCharacters,
    });

    expect(validateDate('15/05/2025')).toEqual({
      isValid: false,
      message: dictionary.errors.date.invalidCharacters,
    });

    expect(validateDate('15.мм.2025')).toEqual({
      isValid: false,
      message: dictionary.errors.date.invalidCharacters,
    });

    expect(validateDate('15.05.2o25')).toEqual({
      isValid: false,
      message: dictionary.errors.date.invalidCharacters,
    });
  });

  test('проверяет строгое соответствие формату ДД.ММ.ГГГГ', () => {
    expect(validateDate('15052025')).toEqual({
      isValid: false,
      message: dictionary.errors.date.pattern,
    });

    expect(validateDate('2025.05.15')).toEqual({
      isValid: false,
      message: dictionary.errors.date.pattern,
    });

    expect(validateDate('1.05.2025')).toEqual({
      isValid: false,
      message: dictionary.errors.date.pattern,
    });

    expect(validateDate('15.5.2025')).toEqual({
      isValid: false,
      message: dictionary.errors.date.pattern,
    });

    expect(validateDate('15.05.25')).toEqual({
      isValid: false,
      message: dictionary.errors.date.pattern,
    });
  });

  test('отклоняет невалидные даты, например 30 февраля', () => {
    expect(validateDate('30.02.2025')).toEqual({
      isValid: false,
      message: dictionary.errors.date.invalid,
    });

    expect(validateDate('31.04.2025')).toEqual({
      isValid: false,
      message: dictionary.errors.date.invalid,
    });
  });

  test('выдаёт ошибку, если дата раньше сегодняшней', () => {
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - 1);
    const pastDateString = `${pastDate.getDate().toString().padStart(2, '0')}.${(
      pastDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}.${pastDate.getFullYear()}`;

    const result = validateDate(pastDateString);
    expect(result.isValid).toBe(false);
    expect(result.message).toBe(dictionary.errors.date.past);
  });
});