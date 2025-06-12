import { validateCityName } from '../validate/validateCity';
import * as dictionary from '../utils/dictionary';

describe('validateCityName', () => {
  test('возвращает ошибку, если город не указан или не является строкой', () => {
    expect(validateCityName(null as any)).toEqual({
        isValid: false,
        message: dictionary.errors.city.required,
    });

    expect(validateCityName(undefined as any)).toEqual({
        isValid: false,
        message: dictionary.errors.city.required,
    });

    // А пустую строку проверяем отдельно
    expect(validateCityName('')).toEqual({
        isValid: false,
        message: dictionary.errors.city.empty,
    });
  });

  test('выдаёт ошибку, если есть экранированные символы (<, >, &, ")', () => {
    expect(validateCityName('New<York')).toEqual({
      isValid: false,
      message: dictionary.errors.city.escape,
    });

    expect(validateCityName('New>York')).toEqual({
      isValid: false,
      message: dictionary.errors.city.escape,
    });

    expect(validateCityName('New&York')).toEqual({
      isValid: false,
      message: dictionary.errors.city.escape,
    });

    expect(validateCityName('New"York')).toEqual({
      isValid: false,
      message: dictionary.errors.city.escape,
    });
  });

  test('не пропускает пустую строку', () => {
    expect(validateCityName('')).toEqual({
      isValid: false,
      message: dictionary.errors.city.empty,
    });
  });

  test('пропускает название с дефисами и восклицательными знаками', () => {
    expect(validateCityName('Saint-Louis-du-Ha! Ha!')).toEqual({
      isValid: true,
      message: dictionary.errors.city.valid,
    });

    expect(validateCityName('New-York!')).toEqual({
      isValid: true,
      message: dictionary.errors.city.valid,
    });
  });

  test('пропускает названия с нестандартными символами (например, Ağrı)', () => {
    expect(validateCityName('Ağrı')).toEqual({
      isValid: true,
      message: dictionary.errors.city.valid,
    });

    expect(validateCityName('São Paulo')).toEqual({
      isValid: true,
      message: dictionary.errors.city.valid,
    });

    expect(validateCityName('München')).toEqual({
      isValid: true,
      message: dictionary.errors.city.valid,
    });
  });

  test('пропускает название из одной буквы', () => {
    expect(validateCityName('A')).toEqual({
      isValid: true,
      message: dictionary.errors.city.valid,
    });

    expect(validateCityName('Z')).toEqual({
      isValid: true,
      message: dictionary.errors.city.valid,
    });
  });

  test('отклоняет другие недопустимые символы', () => {
    expect(validateCityName('London@')).toEqual({
      isValid: false,
      message: dictionary.errors.city.invalid,
    });

    expect(validateCityName('New#York')).toEqual({
      isValid: false,
      message: dictionary.errors.city.invalid,
    });

    expect(validateCityName('Москва1')).toEqual({
      isValid: false,
      message: dictionary.errors.city.invalid,
    });
  });
});