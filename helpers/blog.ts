export function getMonth(month: string) {
  const months: { [key: string]: number } = {
    ژانویه: 0,
    فوریه: 1,
    مارس: 2,
    آوریل: 3,
    مه: 4,
    ژوئن: 5,
    ژوئیه: 6,
    اوت: 7,
    سپتامبر: 8,
    اکتبر: 9,
    نوامبر: 10,
    دسامبر: 11,
  };
  return months[month] ?? 0;
}
