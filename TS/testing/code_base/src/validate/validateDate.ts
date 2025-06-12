import { errors } from '../utils/dictionary';

// export function validateDate(dateString: string): {
//   isValid: boolean;
//   message: string;
// } {
//   if (!dateString || typeof dateString !== 'string') {
//     return {
//       isValid: false,
//       message: errors.date.required,
//     };
//   }

//   // const invalidCharsPattern = /[a-zA-Z<>@!#$%^&*()_+={}[\]:;"'|\\?/~`]/;
//   const invalidCharsPattern = /[^0-9.]/;
//   if (invalidCharsPattern.test(dateString)) {
//     return {
//       isValid: false,
//       message: errors.date.invalidCharacters,
//     };
//   }

//   const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;

//   if (!datePattern.test(dateString)) {
//     return {
//       isValid: false,
//       message: errors.date.pattern,
//     };
//   }

//   const [day, month, year] = dateString.split('.').map(Number);

//   const inputDate = new Date(year, month - 1, day);

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   if (inputDate.getDate() !== day || inputDate.getMonth() !== month - 1 || inputDate.getFullYear() !== year) {
//     return {
//       isValid: false,
//       message: errors.date.invalid,
//     };
//   }

//   if (inputDate < today) {
//     return {
//       isValid: false,
//       message: errors.date.past,
//     };
//   }

//   return {
//     isValid: true,
//     message: errors.date.valid,
//   };
// }



export function validateDate(dateString: string): {
  isValid: boolean;
  message: string;
} {
  // 1. Проверяем, что входная строка существует и является строкой
  if (!dateString || typeof dateString !== 'string') {
    return {
      isValid: false,
      message: errors.date.required,
    };
  }

  // 2. Проверяем недопустимые символы
  const invalidCharsPattern = /[^0-9.]/;
  if (invalidCharsPattern.test(dateString)) {
    return {
      isValid: false,
      message: errors.date.invalidCharacters,
    };
  }

  // 3. Проверяем формат ДД.ММ.ГГГГ
  const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!datePattern.test(dateString)) {
    return {
      isValid: false,
      message: errors.date.pattern,
    };
  }

  // 4. Парсим дату
  const [day, month, year] = dateString.split('.').map(Number);
  const inputDate = new Date(year, month - 1, day);

  // 5. Проверяем, что дата реальна (например, не 30 февраля)
  if (
    inputDate.getDate() !== day ||
    inputDate.getMonth() !== month - 1 ||
    inputDate.getFullYear() !== year
  ) {
    return {
      isValid: false,
      message: errors.date.invalid,
    };
  }

  // 6. Проверяем, не раньше ли сегодняшней даты
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const restoredDate = new Date(year, month - 1, day);
  restoredDate.setHours(0, 0, 0, 0);

  if (restoredDate < today) {
    return {
      isValid: false,
      message: errors.date.past,
    };
  }

  // 7. Всё ок
  return {
    isValid: true,
    message: errors.date.valid,
  };
}