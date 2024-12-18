export const sportTranslations = {
    running: "Бег",
    cycling: "Велосипед",
    swimming: "Плавание",
    gym: "Тренажерный зал",
  };
  
  export const intensityTranslations = {
    low: "Низкая",
    medium: "Средняя",
    high: "Высокая",
  };
  
  export function translateWorkoutData(workout) {
    return {
      ...workout,
      sport: sportTranslations[workout.sport] || workout.sport,
      intensity: intensityTranslations[workout.intensity] || workout.intensity,
    };
  }
  
  export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};
