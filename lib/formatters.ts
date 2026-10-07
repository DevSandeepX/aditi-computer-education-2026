export function formatDuration(days: number) {
    const months = Math.floor(days / 30);
    const remainingDays = days % 30;

    if (months > 0 && remainingDays > 0) {
        return `${months} month${months > 1 ? "s" : ""} ${remainingDays} day${remainingDays > 1 ? "s" : ""}`;
    }

    if (months > 0) {
        return `${months} month${months > 1 ? "s" : ""}`;
    }

    return `${remainingDays} day${remainingDays > 1 ? "s" : ""}`;
}