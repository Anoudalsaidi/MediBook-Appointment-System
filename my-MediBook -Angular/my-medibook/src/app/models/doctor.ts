export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  fee: number;
  available: boolean;
  availableDays: string[];
}
