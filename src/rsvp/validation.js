export const RSVP_NAME_MAX_LENGTH = 100;
export const RSVP_PHONE_MAX_LENGTH = 30;

const PHONE_CHARACTERS = /^[0-9+().\-\s]*$/;

/**
 * Validates and normalizes the RSVP payload without changing its Firestore schema.
 * Phone numbers are optional; when supplied, common Vietnamese local and +84
 * presentations are accepted (including spaces, dots, hyphens, and parentheses).
 */
export function validateRsvp({ name, phone, join }) {
  const normalizedName = typeof name === "string" ? name.trim() : "";
  const normalizedPhone = typeof phone === "string" ? phone.trim() : "";
  const errors = {};

  if (!normalizedName) {
    errors.name = "Vui lòng nhập họ tên của bạn.";
  } else if (normalizedName.length > RSVP_NAME_MAX_LENGTH) {
    errors.name = `Họ tên không được vượt quá ${RSVP_NAME_MAX_LENGTH} ký tự.`;
  }

  if (normalizedPhone) {
    const phoneDigits = normalizedPhone.replace(/\D/g, "");
    const hasOnlySupportedCharacters = PHONE_CHARACTERS.test(normalizedPhone);
    const plusCharacters = normalizedPhone.match(/\+/g) || [];
    const hasSingleLeadingPlus = plusCharacters.length === 0 || (plusCharacters.length === 1 && /^\+/.test(normalizedPhone));

    if (
      normalizedPhone.length > RSVP_PHONE_MAX_LENGTH ||
      !hasOnlySupportedCharacters ||
      !hasSingleLeadingPlus ||
      phoneDigits.length < 7 ||
      phoneDigits.length > 15
    ) {
      errors.phone =
        "Vui lòng nhập số điện thoại hợp lệ (ví dụ: 090 123 4567 hoặc +84 90 123 4567).";
    }
  }

  if (typeof join !== "boolean") {
    errors.join = "Vui lòng chọn trạng thái tham dự.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    value: {
      name: normalizedName,
      phone: normalizedPhone,
      join,
    },
  };
}
