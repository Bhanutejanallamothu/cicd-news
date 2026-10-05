
import { toast } from "sonner";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || "";

export interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  city: string;
}

export const fetchWeather = async (city: string = "Vijayawada"): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_OPENWEATHER_API_BASE_URL || "https://api.openweathermap.org/data/2.5"}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    
    const data = await response.json();
    
    return {
      temp: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      city: data.name
    };
  } catch (error) {
    console.error("Weather fetch error:", error);
    toast("Could not fetch weather data");
    return null;
  }
};
