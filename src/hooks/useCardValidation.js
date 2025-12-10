import { useState, useEffect } from "react";

export function useCardValidation(cardNumber, expiry, cvv) {
  const [errors, setErrors] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const newErrors = { cardNumber: "", expiry: "", cvv: "" };

   
    if (cardNumber && !/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

   
    if (expiry) {
      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

      if (!expiryRegex.test(expiry)) {
        newErrors.expiry = "Expiry must be MM/YY";
      } else {
        const [month, year] = expiry.split("/").map((v) => parseInt(v));
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear() % 100;

        if (year < currentYear || (year === currentYear && month < currentMonth)) {
          newErrors.expiry = "Card is expired";
        }

        if (year > currentYear + 10) {
          newErrors.expiry = "Expiry year too far in the future";
        }
      }
    }

    if (cvv && !/^\d{3}$/.test(cvv)) {
      newErrors.cvv = "CVV must be 3 digits";
    }

    setErrors(newErrors);
  }, [cardNumber, expiry, cvv]);

  return errors;
}
