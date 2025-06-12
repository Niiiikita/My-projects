import { errors } from '../utils/dictionary';

export function validateCityName(cityName: string): {
  isValid: boolean;
  message: string;
} {
  if (typeof cityName !== 'string') {
    return {
      isValid: false,
      message: errors.city.required,
    };
  }

  if (cityName.length === 0) {
    return {
      isValid: false,
      message: errors.city.empty,
    };
  }

  const escapeCharsPattern = /[<>&"]/;
  if (escapeCharsPattern.test(cityName)) {
    return {
      isValid: false,
      message: errors.city.escape,
    };
  }

  // if (cityName.length === 0) {
  //   return {
  //     isValid: false,
  //     message: errors.city.empty,
  //   };
  // }
  const validCharsPattern = /^[a-zA-Z\s\-!À-ž]+$/;
  if (!validCharsPattern.test(cityName)) {
    return {
      isValid: false,
      message: errors.city.invalid,
    };
  }

  return {
    isValid: true,
    message: errors.city.valid,
  };
}
