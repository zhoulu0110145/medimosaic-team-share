export const formatShortDate = (value: string) =>
  new Date(value).toLocaleDateString("en-SG", {
    month: "short",
    day: "numeric",
  });

export const formatLongDate = (value: string) =>
  new Date(value).toLocaleDateString("en-SG", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const formatTimestamp = (value: string) =>
  new Date(value).toLocaleString("en-SG", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  });

export const joinChecklist = (items: string[]) => items.filter(Boolean).join(", ");

export const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);
